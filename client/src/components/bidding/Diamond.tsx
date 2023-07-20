import React from 'react';
import { diamondProps } from '../../app/bidding/page';
import shortenString from '../../utils/ShortString';

interface DiamondProps {
    data : diamondProps;
}
const Diamond: React.FC<DiamondProps> = ({ data }) => {
    const address = shortenString(data.address, 5, 4);
    const miner_address = shortenString(data.miner_address, 5, 4);
    return (
        <div className='container py-[30px]'>
            <div className='md:w-[70%] lg:w-[60%] mx-auto sm:w-[100%] rounded-lg p-4 bg-gradient-to-r from-[#2e83ef] to-[#3e53ff] text-white'>
                <h1 className='font-bungee text-5xl mb-4'>HACD {data.number}</h1>
                <a title='View on Explorer' href={`https://explorer.hacash.diamonds/diamond/${data.name}`} target='_blank' className='font-megrim text-7xl hover:underline font-bold mb-5'>
                    {data.name}
                </a>
                <div className='flex flex-row my-2'>
                    <div className='pr-7'>
                        <p>Winning bid</p>
                        <p className='font-dosis'>ㄜ{data.approx_fee_offer}</p>
                    </div>
                    <div>
                        <p>Held by</p>
                        <a title="View on Explorer" href={`https://explorer.hacash.diamonds/address/${data.address}`} target="_blank" id="diatbelong" className='font-dosis hover:underline'>
                            {address}
                        </a>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <p className='pr-4'>
                        ◈ Born at block height 
                        <a className="pl-1 hover:underline" title="View on Explorer" href={`https://explorer.hacash.diamonds/block/${data.block_height}`} target="_blank" id="diathei">
                            {data.block_height}
                        </a>
                    </p>

                    <p>
                        ❤ Winning miner 
                        <a className="pl-1 hover:underline" title="View on Explorer" href={`https://explorer.hacash.diamonds/address/${data.miner_address}`} target="_blank" id="diatminer">
                            {miner_address}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Diamond;