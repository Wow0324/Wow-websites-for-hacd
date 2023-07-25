import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const GalleryWithCollection = () => {
    return (
        <div className="container mx-auto my-4 sm:my-10">
            <h1 className="text-center text-main font-bold text-3xl sm:text-5xl">HACD Set Collection</h1>
            <div className="flex flex-row justify-center gap-5 m-5 sm:gap-20 sm:mt-20">
                <Card className="w-[16rem] sm:w-[36rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/4sets.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            HACD Diamond Super Set
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[16rem] sm:w-[36em] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/16-colors-set.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            Hacash 16 Colors and Letters
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default GalleryWithCollection;