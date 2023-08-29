import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button, Input, Spinner
} from "@material-tailwind/react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateDiamondImageTagSVG } from '../../scripts/diamondsvgimg.js';
import { decideDiamondTypes, DiamondTypeMaps } from '../../scripts/diamondtypes.js';

import { toPng } from 'html-to-image';

interface DiamondItem {
    name : string;
    block_height : string;
    visual_gene : string;
    life_gene : string;
    number : string;
    fee_offer : string;
}
const Diamonds = () => {

    const [isLoading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [diamondData, setDiamond] = useState<DiamondItem>({
        name: '',
        block_height: '',
        visual_gene: '',
        life_gene: '',
        number: '',
        fee_offer:''
    })

    const [diamondSvg, setDiamondSvg] = useState('');
    const [diamondTypes, setDiamondTypes] = useState<string[]>([]);

    //shape
    const [diamondShape, setdiamondShape] = useState('')
    //color ratio
    const [diamondColorRatio, setDiamondColorRatio] = useState('');
    // const [diamondPoint, setDiamondPoint] = useState(0)
    const [diamondStar, setDiamondStar] = useState(0)
    
    //minimal Colors
    const [diamondSumColors, setDiamondSumColors] = useState('')
    const [diamondSpecialLetter, setDiamondSpecialLetter] = useState('')

    const [mobileWidth, setMobileWidth] = useState<number>(400);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1280){
                setMobileWidth(400);
            }
            else if(window.innerWidth >= 960){
                setMobileWidth(340);
            }
            else if(window.innerWidth >= 760){
                setMobileWidth(240);
            }
            else
                setMobileWidth(90);
          };

          // Initial mobile width value
            //setMobileWidth(400);
      
          // Add event listener to update the mobile width on window resize
          window.addEventListener('resize', handleResize);

        // var vgene = DiamondLifeGeneConvertVisualGene('c56633c85faa3200d188c5dd66262bcc6044bba16243a8df5e7152fb8dc69405', 'WBKXZN')
        if(diamondData.visual_gene !== ''){
            var diamondSvg = CreateDiamondImageTagSVG(diamondData.visual_gene, mobileWidth)
            setDiamondSvg(diamondSvg);
    
            const {types, shape, stars, colorRatio, sumOfColors, specialLetters} = 
                decideDiamondTypes(diamondData.visual_gene, diamondData.name, diamondData.number)
            
            const responsiveString = getResponsiveString(types);
            setDiamondTypes(responsiveString)

            setdiamondShape(shape)
            setDiamondColorRatio(`${colorRatio}%`)
            // setDiamondPoint(point)

            setDiamondSumColors(sumOfColors)
            setDiamondSpecialLetter(specialLetters)

            setDiamondStar(stars)
        }
        
    }, [diamondData, mobileWidth]);

    type DiamondType = keyof typeof DiamondTypeMaps;

    const getResponsiveString =  function(types: DiamondType[] | undefined): string[] {
        const responsiveStrings: string[] = [];
        if(types !==  undefined){
            for (const type of types) {
                const responsiveString = DiamondTypeMaps[type];
                if (responsiveString !== undefined) {
                  responsiveStrings.push(responsiveString);
                }
            }
        }
        return responsiveStrings;
    }

    const searchDiamond = async () => {
        setLoading(true)
        if (name === "") {
            setLoading(false)
            toast.error("Required diamond name.");
        }
        else {
            try {
                const response = await axios.get(`https://hacpool.com/api/diamond/scan?name=${name}`)
                const result = response.data
                if (result.fail) {
                    //name format error or not exist
                    toast.error(result.fail)
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    //set diamond data
                    setDiamond({
                        name: result.name,
                        block_height: result.block_height,
                        visual_gene: result.visual_gene,
                        life_gene: result.life_gene,
                        number: result.number,
                        fee_offer : result.approx_fee_offer
                    });
                }
            } catch (error) {
                console.error('Error fetching diamond data:', error)
                toast.error("Error fetching data")
                setLoading(false)
            }
        }
    }

    const handleDownloadCertificate = (filename: string) => {
       
        const table: HTMLElement | null = document.getElementById('certificate-element');
        // const table1: HTMLElement | null = document.getElementById('certificate-element1');
        if(table != null){
            toPng(table, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `${filename}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-diamond bg-cover py-10 sm:py-20">
          <div className='container sm:mx-auto rounded-lg p-4 sm:p-10 text-center bg-gradient-to-r from-[#1d1e30] to-[#11131f]'>
                
                <div className={`flex flex-row justify-center ${isLoading ? 'visible' : 'invisible'}`}>
                    <Spinner className="h-8 w-8 ml-2" color="blue"/>
                </div>
                <div className='flex flex-row justify-center pb-10 pt-5 items-center'>
                    <div className='sm:w-96 w-60'>
                        <Input color="white" size="lg" label="Diamond Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    
                    <Button onClick={searchDiamond} className="flex flex-row items-center mx-1 bg-[#4e327c]" disabled={isLoading} size="md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 19.9 19.7">
                            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/>
                        </svg>
                    </Button>
                </div>
          
                <ToastContainer />

                {
                    diamondData.name !== '' ? (

                        <div className='flex flex-col mx-1 sm:mx-20 md:mx-1 lg:mx-20 overflow-x-auto'>


                            <div className='bg-report bg-contain bg-no-repeat sm:w-[1080px] sm:h-[682px] w-[100%] h-[63vw]' id='certificate-element'>
                                <div className='flex flex-row sm:h-[150px] h-[70px]'>
                                </div>
                                <div className='flex flex-row'>
                                    {/* <div className='flex flex-row justify-center'> */}
                                    <div className='w-[120px] sm:w-[500px] flex flex-row justify-center items-center'>

                                        <div className='flex flex-col overflow-y-auto'>

                                            <div className='block sm:mt-[30px] mt-[5px]' dangerouslySetInnerHTML={{ __html: diamondSvg }}/>
                                            
                                        </div>

                                    </div>
                                        <div className='flex-2 sm:flex-1 flex flex-col sm:my-12 my-1 justify-between font-bold sm:gap-3 text-[7px] sm:text-[15px]'>
                                            <div className='flex flex-row text-left lg:ml-10 md:ml-5 ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Number</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondData.number}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Born Block Height</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondData.block_height}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Fee Offer</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis w-[150px]'>{diamondData.fee_offer}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Visual Gene</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondData.visual_gene}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Shape of HACD</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondShape}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Color of HACD</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondData.name[0]}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Color Grades</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondColorRatio}</p>
                                            </div>
                                            
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Sum of Color</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondSumColors}</p>
                                            </div>
                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Special letter</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                <p className='font-dosis'>{diamondSpecialLetter}</p>
                                            </div>

                                            <div className='flex flex-row text-left lg:ml-10 ml-5 md:ml-5'>
                                                <p className='sm:w-[150px] w-[80px]'>Final Score</p>
                                                <p className='sm:px-4 px-1'>:</p>
                                                {[...Array(diamondStar)].map((_, index) => (
                                                    <img className='sm:w-[24px] sm:h-[24px] w-[12px] h-[12px]' key={`star-${index}`} src={require('../../assets/images/star-icon.png')} alt="Star" />
                                                ))}
                                            </div>
                                            
                                        </div>
                                        
                                </div>

                                <div className='flex flex-row mt-2 sm:mt-0'>
                                    <div className='w-[93px] sm:w-[500px] flex flex-row justify-center'>
                                        <h2 className='text-[#0f29ad] lg:text-3xl md:text-xl text-[8px] font-bold'>HACD Name :</h2>
                                        <h2 className='text-[#0f29ad] lg:text-3xl md:text-xl text-[8px] font-bold'>{diamondData.name}</h2>
                                    </div>
                                    <div className='flex-1 flex flex-col justify-between gap-2 sm:gap-3 text-[7px] sm:text-[16px]'>
                                        <div className='flex-1 flex flex-row sm:gap-10 gap-10 text-left lg:ml-10 ml-5 md:ml-5'>
                                            <h2 className='text-black sm:w-[150px] w-[80px]'>hacpool.com</h2>
                                            <p className='sm:px-4 px-1'></p>    
                                            <h2 className='text-black'>Display Purpose Only</h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <div className='my-10'>
                                <Button onClick={() => handleDownloadCertificate(`${diamondData.name}-${diamondData.number}`)} className="items-center mx-1" variant='outlined' color="white" size="lg">
                                    Download Certificate
                                </Button>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }

                        <div>
                            <p className='text-white'>Be advised to use desktop to download eReport !</p>
                        </div>                
            </div>

        </div>
    )
}

export default Diamonds;