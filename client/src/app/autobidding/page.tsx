import React from 'react';

const AutoBidding = () => {

    return (
        <div className='flex flex-col text-center min-h-screen bg-gradient-to-tr from-[#020038] to-[#40057d]'>
            <div className='mx-auto flex flex-col items-center p-7 gap-5 sm:p-20 sm:gap-10'>
                <div className='flex-1 text-center text-white font-bold'>
                    <h1 className='text-2xl sm:text-4xl italic text-[#def7f4]'>Never Miss Your Favor Name Of $HACD Diamond</h1>
                    <br />
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>Warning: Although your private key / password will NOT be stored,</p>
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>Highly recommend to use separate reward and fee address for mining.</p>
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>Autobid app will be automatically bidding on block height 3/8 up to your Max bid fee set.</p>
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>HACD Keyword has to be hacash 16 letters combination you can add as many as you like</p>
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>HACD name search your favors name you want to win when you mine it.</p>
                    <br />
                    <br />
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>Unzip the.zip compressed package file to any directory.</p>
                    <br />
                    <br />
                    <p className='text-xl sm:text-2xl text-[#addcf0]'>You can double-click to run.exe to install and enter all the information.</p>

                </div>

                <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-white'>
                    <a href="https://hacpool.com/download/autobid" className="rounded py-4 px-8 text-white font-bold bg-[#1012f3]" download="autobid.zip">Windows Autobid.zip</a>
                    <a href="https://hacpool.com/download/keywords" className="rounded py-4 px-8 text-white font-bold bg-[#1012f3]" download="keywords.txt">Keyword recommend</a>
                </div>

                {/* <div className='flex flex-col sm:flex-row sm:justify-center gap-10 sm:gap-20 mt-5 sm:pt-10 items-center'>
                    <img src={require('../../assets/images/autobidding1.jpg')} alt="" className='w-[90%] sm:w-[100%]'/>
                    <img src={require('../../assets/images/autobidding2.jpg')} alt="" className='w-[90%] sm:w-[100%]'/>
                </div> */}
            </div>
        </div>
    )
}

export default AutoBidding;