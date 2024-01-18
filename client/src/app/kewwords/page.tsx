import React, { useState, useEffect ,useRef,useCallback} from 'react';
import {
    Button, Input, Spinner
} from "@material-tailwind/react";
import axios, { CancelTokenSource } from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateDiamondImageTagSVG } from '../../scripts/diamondsvgimg.js';
import { Link } from 'react-router-dom';

interface DiamondItem {
    name : string;
    block_height : string;
    visual_gene : string;
    life_gene : string;
    number : string;
}
const DiamondsByKeywords = () => {

    const [isLoading, setLoading] = useState<boolean>(false)
    const [cancelTokenSource, setCancelTokenSource] = useState<CancelTokenSource | null>(null);
    const [number, setNumber] = useState<number>(1);
    const [keywords, setKeywords] = useState<string>('')
    const [diamonds, setDiamonds] = useState<DiamondItem[]>([]);

    useEffect(() => {
        fetchNumber();
    }, []);

    const fetchNumber = async () => {
        try {
            const response = await axios.get('https://hacpool.com/api/diamond/createtxs');
            const result = response.data;
            setNumber(result.number);
        } catch (error) {
            console.error('Error fetching number:', error);
        }
    };

    const addDiamond = (newDiamond: DiamondItem) => {
        setDiamonds((prevDiamonds) => [...prevDiamonds, newDiamond]);
    };

    const clearDiamonds = () => {
        setDiamonds([]);
    };

    const  searchDiamondsByKeywords =   async()=>{
        
        setLoading(!isLoading); // Set loading state to true

        //stop
        if(isLoading){
            if (cancelTokenSource) {
                cancelTokenSource.cancel('Request canceled by user');
            }
        }
        else{//start

            if (keywords === "") {
                setLoading(false);
                toast.error("Required keywords.");
              } else {
                clearDiamonds();
                const source = axios.CancelToken.source();
                setCancelTokenSource(source);
                for (let i = 1; i < number; i += 50) {
                    try {
                        const response = await axios.get(`https://hacpool.com/api/diamond/list?number=${i}`, {
                            cancelToken: source.token
                        })
                        const result = response.data;
                        const diamonds = result.list;
                        for (let i = 0; i < diamonds.length; i++) {
                            const result1 = diamonds[i];
                            addDiamond({
                            name: result1.name,
                            block_height: result1.block_height,
                            visual_gene: result1.visual_gene,
                            life_gene: result1.life_gene,
                            number: result1.number,
                            });
                        }
                    
                    } catch (error) {
                        if (axios.isCancel(error)) {
                            console.log('Request canceled:', error.message)
                        } else {
                            toast.error("Error fetching data");
                            console.error('Error fetching diamond data:', error)
                        }
                        setLoading(false); // Reset loading state to false
                        return; // Stop the execution if an error occurs
                    }
                }
                
                setLoading(false);
              }
        } 
      }

    return (
        <div className='flex flex-col min-h-screen items-center bg-gradient-to-tr from-[#020038] to-[#40057d] py-10 sm:py-20'>
            <div className='container'>
                <div className='mx-auto rounded-lg p-4 sm:p-10 bg-gradient-to-r from-[#1d1e30] to-[#11131f] text-white text-center'>
                        
                    <div className={`flex flex-row justify-center ${isLoading ? 'visible' : 'invisible'}`}>
                        <Spinner className="h-8 w-8 ml-2" color="blue"/>
                    </div>
                    <div className='flex flex-row justify-center pb-10 pt-5 items-center'>
                        <div className='w-96'>
                            <Input color="white" size="lg" label="Keyword" value={keywords} onChange={(event) => setKeywords(event.target.value)} />
                        </div>
                        
                        <Button onClick={searchDiamondsByKeywords} className="flex items-center mx-1 bg-[#4e327c]" size="md">
                            {
                                isLoading ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 19.9 19.7">
                                        <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/>
                                    </svg>
                                )
                            }
                        </Button>
                    </div>
            
                    <ToastContainer />
                    {
                        diamonds.length > 0 ? (
                            <div>
                                <div className="grid grid-cols-2 sm:grid-cols-8 gap-1 my-3 sm:gap-2 sm:my-5 mx-2 justify-center">
                                    {diamonds.map((item, index) => {
                                        const keys= keywords.toUpperCase()
                                        if(item.name.includes(keys)){
                                            return (
                                                <div key={`diamonds-${index}`} className='flex flex-col mb-1 relative transition hover:scale-110'>
                                                    
                                                    <Link 
                                                        to={`https://explorer.hacash.diamonds/diamond/${item.name}`} 
                                                        className='text-white hover:font-bold mx-2 py-2 bg-[#a855f7] hover:bg-[#e879f9] rounded-md flex flex-col items-center'
                                                        target="_blank">
                                                        <div dangerouslySetInnerHTML={{ __html: CreateDiamondImageTagSVG(item.visual_gene, 50) }} className='mb-1'/>
                                                        {item.name}
                                                    </Link>
                                                    <p className='text-white text-[9px] absolute top-[6px] left-[15px]'>#{item.number}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            
                        ) : (
                            <div>
                                <p>Enter HACD Keyword</p>
                            </div>
                        )
                    }
                    
                </div>

            </div>
        </div>
        
    )
}

export default DiamondsByKeywords;