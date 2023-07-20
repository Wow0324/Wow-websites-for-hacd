import React from 'react';
import HacdCollection from '../../components/hacd/HacdCollection';
import TopOfName from '../../components/hacd/TopOfName';
import ProductList from '../../components/hacd/ProductList';
import GalleryWithCollection from '../../components/hacd/GalleryWithCollection';
import SpecialNameOfDiamond from '../../components/hacd/SpecialNameOfDiamond';

const Hacd = () => {

    return (
        <div className='bg-white'>
            <div className="py-20 bg-[url('./images/background3.jpg')]">
                <HacdCollection />
            </div>

            <div className='py-20 bg-back-main1'>
                <TopOfName/>
            </div>

            <div className='py-20'>
                <ProductList/>
            </div>

            <div className='py-20 bg-back-main2'>
                <GalleryWithCollection/>
            </div>

            <div className='py-20'>
                <SpecialNameOfDiamond/>
            </div>
        </div>
    )
}

export default Hacd;