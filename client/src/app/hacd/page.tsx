import React from 'react';
import HacdCollection from '../../components/hacd/HacdCollection';
import ProductList from '../../components/hacd/ProductList';
import GalleryWithCollection from '../../components/hacd/GalleryWithCollection';
import { Link } from 'react-router-dom';

const Hacd = () => {

    // bg-[url('./images/background3.jpg')]
    return (
        <div className='bg-black'>
            <div className="py-7 sm:py-20">
                <HacdCollection />
            </div>

            <div className='py-7 sm:py-20'>
                <GalleryWithCollection/>
            </div>

            <div className='py-7 sm:py-20'>
                <ProductList/>
            </div>

            <div className='py-7 sm:py-10 bg-[#924dea]'>
                <div className='text-white sm:text-xl text-sm'>
                    <div className='columns-1 sm:columns-2 sm:gap-x-0 flex flex-col sm:flex-row sm:justify-center items-center'>
                        <p className='sm:text-right text-center'>If you are interested, contact admin</p>
                        <Link to="https://t.me/hacashhacd" className='font-bold underline' target="_blank">
                        @https://t.me/hacashhacd
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hacd;