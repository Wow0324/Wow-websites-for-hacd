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
        <div className='container py-[10px] sm:py-[30px] px-[10px] sm:px-[5px]'>
            <div className='mx-auto rounded-lg p-4 bg-gradient-to-r from-[#2e83ef] to-[#3e53ff] text-white text-center'>
                <h1 className='font-bungee sm:text-5xl text-3xl mb-4 text-center'>HACD {data.number}</h1>
                <a title='View on Explorer' href={`https://explorer.hacash.diamonds/diamond/${data.name}`} target='_blank' 
                    className='font-sans sm:text-7xl text-4xl hover:underline font-bold mb-5'>
                    {data.name}
                </a>
                <div className='flex flex-row my-2 justify-center gap-3 sm:gap-6 text-[12px] sm:text-[16px]'>
                    <div className='flex-1 text-right'>
                        <p>Higher bid</p>
                        <p className='font-dosis'>ㄜ{data.approx_fee_offer}</p>
                    </div>
                    <div className='flex-1 text-left'>
                        <p>Belong address</p>
                        <a title="View on Explorer" href={`https://explorer.hacash.diamonds/address/${data.address}`} target="_blank" id="diatbelong" className='font-dosis hover:underline'>
                            {address}
                        </a>
                    </div>
                </div>

                <div className='flex flex-row justify-center gap-3 sm:gap-6 text-[12px] sm:text-[16px]'>
                    <div className='flex-1 text-right'>
                        <p>◈ Born at block height </p>
                        <a className="pl-1 hover:underline" title="View on Explorer" href={`https://explorer.hacash.diamonds/block/${data.block_height}`} target="_blank" id="diathei">
                            {data.block_height}
                        </a>
                    </div>

                    <div className='flex-1 text-left'>
                        <p>❤ Miner address </p>
                        <a className="hover:underline" title="View on Explorer" href={`https://explorer.hacash.diamonds/address/${data.miner_address}`} target="_blank" id="diatminer">
                            {miner_address}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diamond;