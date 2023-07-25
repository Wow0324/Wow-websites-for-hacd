import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeHeight, setIframeHeight] = useState<number>(0);

    const updateIframeHeight = () => {
        const iframe = document.getElementById('my-iframe') as HTMLIFrameElement;
        if (iframe) {
            setIframeHeight(iframe.contentWindow?.document.body.scrollHeight || 0);
        }

        const iframeDocument = iframeRef.current?.contentDocument;
        const styleElement = iframeDocument?.createElement('style');
        if (styleElement != undefined) {
            styleElement.innerHTML = `
            body, table {
                color: white !important;
            }   
        `;
            iframeDocument?.head.appendChild(styleElement);
        }
    };

    useEffect(() => {
        updateIframeHeight();
    }, []);

    return (
        <div className='bg-back-main'>

            <div className='mx-auto flex flex-row items-center p-7 gap-5 sm:p-20 sm:gap-10'>
                <div className='flex-1 text-center text-white font-bold'>
                    <h1 className='text-2xl sm:text-4xl italic'> HAC Public Mining Pool</h1>
                    <h1 className='text-2xl sm:text-4xl sm:mb-6 mb-3 italic'> 0% Fee For HAC Miner</h1>
                    <p className='text-xl sm:text-2xl italic'>WOWPOOL made for everyone free to mine $HAC. wowpool hosted on high speed server.</p>
                    <p className='text-xl sm:text-2xl italic'>wowpool has 99.99% uptime and live stats reporting.</p>

                </div>

            </div>

            <div className='flex flex-col items-center py-10 sm:py-5 px-5'>
                <div className='container mx-auto text-white text-center'>
                    <h1 className='font-bold text-2xl sm:text-4xl mb-4'>Setting up Poolworker</h1>
                    <p>Please Download Latest $HAC Pool Mining Software&nbsp;&nbsp;<a href="https://hacash.org/get_started" className="underline underline-offset-2" target="_blank">Here</a>.</p>
                    <p>Change the IP address in poolworker.config.ini file to&nbsp; 108.181.156.247:3339</p>
                    <p>Enter your reward address and CPU Core # in supervene Then Save It !</p>
                    <span>Run poolworker and Happy Mining $HAC !!!</span>
                    <p>View mining status enter 108.181.156.247:3340 in your browser or click <a href="http://108.181.156.247:3340/" className="underline underline-offset-2" target="_blank">here</a>.</p>
                    <br />
                    <Link to="https://miningpoolstats.stream/hacash" className='flex flex-row font-bold text-2xl underline items-center justify-center' target="_blank">
                        Mining Pool Stats
                        <div className="w-6 h-6 bg-gradient-to-b from-[#d799fc] to-[#aa26ff] rounded-full ml-2 shadow-inner border-[#aa26ff]"></div>
                    </Link><br />
                </div>
            </div>

            <div className='container mx-auto flex flex-col items-center p-5'>
                <h1 className="text-center text-white font-bold text-2xl mb-5 sm:text-4xl sm:mb-10">WoW Pool Table</h1>
                <iframe
                    ref={iframeRef}
                    id="my-iframe"
                    src="https://hacpool.com/pool/table"
                    title="HAC pool table"
                    className="w-full h-full"
                    style={{ height: `${iframeHeight}px` }}
                    onLoad={updateIframeHeight}
                />
            </div>

            <div className='container mx-auto text-center py-10 sm:py-5'>
                <h1 className='text-2xl mt-2 sm:mt-5 sm:text-4xl sm:mt-10 text-white'> Follow us!</h1>
                <div className='flex flex-row justify-center mt-5 gap-5 sm:mt-2'>
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