import React from "react";

const HacdCollection = () => {

    const diamonds = [
        {
            name: "ZKKZZZ",
            image: require('../../assets/images/XWUTXM.png')
        },
        {
            name: "TIIITI",
            image: require('../../assets/images/AXTZZS.png')
        },
        {
            name: "VUUUVU",
            image: require('../../assets/images/NXZVAK.png')
        },
        {
            name: "TNNNNNB",
            image: require('../../assets/images/ATMBSU.png')
        },
        {
            name: "NUUUUM",
            image: require('../../assets/images/ZUXVAE.png')
        },
        {
            name: "KKKKNZ",
            image: require('../../assets/images/TWIINI.png')
        },
        {
            name: "XHSSSS",
            image: require('../../assets/images/ETNAZA.png')
        },
        {
            name: "MMMMHT",
            image: require('../../assets/images/AATEAE.png')
        },
        {
            name: "MMMMHT",
            image: require('../../assets/images/AAVZTI.png')
        }
    ];

    return (
        <div className="container mx-auto my-7 sm:my-18">
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl mb-5">Pure HACD Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:gap-10 sm:my-10 mx-5">
                {diamonds.map((item, index) => (
                    <img
                        key={index}
                        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-light/50 hover:scale-110"
                        src={item.image}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HacdCollection;