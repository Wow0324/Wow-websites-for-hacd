import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Diamond from '../../components/bidding/Diamond';
import BiddingTable from '../../components/bidding/BiddingTable';
import QuoteFee from '../../components/bidding/QuoteFee';

export interface diamondProps {
    "address": string;
    "approx_fee_offer": string;
    "average_burn_price": string;
    "miner_address": string;
    "name": string;
    "number": string;
    "block_height": string;
}

const Bidding = () => {
    const [period, setPeriod] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [diamondData, setDiamondData] = useState<diamondProps>({
        "address": "*",
        "approx_fee_offer": "-",
        "average_burn_price": " ",
        "miner_address": "*",
        "name": "-",
        "number": "-",
        "block_height": "-"
    });

    const [bidsData, setBidsData] = useState([]);

    useEffect(() => {
        fetchNumber();
        const interval = setInterval(fetchNumber, 10000); // Fetch data every 1 minute
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    useEffect(() => {
        fetchDiamondData();
    }, [number]);
    const fetchNumber = async () => {
        try {
            const response = await axios.get('https://hacpool.com/api/diamond/createtxs');
            const result = response.data;
            setPeriod(result.period);
            setNumber(result.number);
            setBidsData(result.datas);
        } catch (error) {
            console.error('Error fetching number:', error);
        }
    };
    const fetchDiamondData = async () => {
        if (number) {
            try {
                const response = await axios.get(`https://hacpool.com/api/diamond/hacd?number=${number - 1}`);
                setDiamondData(response.data);
            } catch (error) {
                console.error('Error fetching diamond data:', error);
            }
        }
    };
    return (
        <div>

            <div className='flex flex-col items-center bg-black py-10 sm:py-20'>
                <Diamond data={diamondData} />

                <BiddingTable data={bidsData} number={number} period={period} />

                <QuoteFee />
            </div>

        </div>
    )
}

export default Bidding;