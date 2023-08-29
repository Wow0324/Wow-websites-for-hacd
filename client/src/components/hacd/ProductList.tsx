import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const ProductList = () => {

    const diamonds = [
        {
            name: "ZKKZZZ",
            image: require('../../assets/images/Z.png')
        },
        {
            name: "TIIITI",
            image: require('../../assets/images/I.png')
        },
        {
            name: "VUUUVU",
            image: require('../../assets/images/W.png')
        }
    ];

    return (
        <div className="container mx-auto my-3 sm:my-10">
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl">HACD 9 Shapes Set</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 sm:gap-10 sm:my-20 mx-5">
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

export default ProductList;