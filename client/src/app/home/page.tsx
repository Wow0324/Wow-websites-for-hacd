import React from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='bg-back-main'>

            <div className='mx-auto flex flex-row items-center p-20 gap-10'>
                <div className='flex-1 text-center text-white font-bold'>
                    <h1 className='text-4xl italic'> HAC Public Mining Pool</h1>
                    <h1 className='text-4xl mb-6 italic'> 0% Fee For HAC Miner</h1>
                    <p className='text-2xl italic'>WOWPOOL made for everyone free to mine $HAC. wowpool hosted on high speed server.</p>
                    <p className='text-2xl italic'>wowpool has 99.99% uptime and live stats reporting.</p>

                </div>

            </div>

            <div className='flex flex-col items-center py-10'>
                <div className='container mx-auto text-white'>
                    <h1 className='font-bold text-4xl mb-4'>Setting up Poolworker</h1>
                    <p>Please Download Latest $HAC Pool Mining Software&nbsp;&nbsp;<a href="https://hacash.org/get_started" className="underline underline-offset-2" target="_blank">Here</a>.</p>
                    <p>Change the IP address in poolworker.config.ini file to&nbsp; 104.217.254.247:3339</p>
                    <p>Enter your reward address and CPU Core # in supervene Then Save It !</p>
                    <span>Run poolworker and Happy Mining $HAC !!!</span>
                    <p>View mining status enter 104.217.254.247:3340 in your browser or click <a href="http://104.217.254.247:3340/" className="underline underline-offset-2" target="_blank">here</a>.</p>
                    <br />
                    <Link to="https://miningpoolstats.stream/hacash" className='font-bold text-2xl italic underline' target="_blank">MiningPoolStats</Link><br /><br />
                    <Link to="https://hacashpool.com/start-mining/" className='font-bold text-xl italic underline' target="_blank">Pool Rewards Explained</Link>
                    <p className='mt-2'>The mining pool rewards both block producers and non-block producers in the pool ensuring that everyone contributing mining power is rewarded. Specifically, in addition to any transaction processing fees for a mined block of the mining pool, the block producers receive 50% of the reward separately, and the remaining 50% of the block reward is divided among the other pool miners based on their mining power contribution for the time period.</p>
                    <p>For example, let’s say we have 5 Pool Workers (abbreviated “PW”). Each PW contributes equal amounts of mining power to the pool (20% each). PW-1 then successfully discovers the next block. PW-1 will receive 50% of the block reward. PWs-2, 3, 4 and 5 will then equally split the remaining 50% of the block reward since they were contributing equal mining power. Of course, in the real world, different PWs will contribute different amounts of mining power. Each PW is rewarded based on the power that is being contributed to the pool.</p>
                </div>
            </div>

            <div className='container mx-auto flex flex-col items-center py-5'>
                <h1 className="text-center text-white font-bold text-4xl mb-10">HAC pool table</h1>
                <iframe
                    src="http://104.217.254.247:3340"
                    title="HAC pool table"
                    className="w-full h-full"
                />
            </div>

            <div className='container mx-auto text-center py-10'>
                <h1 className='text-4xl mt-10 text-white'> Follow us!</h1>
                <div className='flex flex-row justify-center mt-5 gap-5'>
                    <a href="https://twitter.com/HacashWorld?s=20" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-16 h-16 bg-white text-main rounded-full p-3" />
                    </a>

                    <a href="https://t.me/hacashhacd" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className="w-16 h-16 text-white rounded-full" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home;