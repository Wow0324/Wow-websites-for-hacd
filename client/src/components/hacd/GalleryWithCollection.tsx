import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const GalleryWithCollection = () => {
    return (
        <div className="container mx-auto my-4 sm:my-4">
            <h1 className="text-center text-white font-bold text-3xl sm:text-5xl">HACD Set Collection</h1>
            <div className="flex flex-row justify-center gap-5 m-5 sm:gap-20 sm:mt-20">
                <Card className="w-[16rem] sm:w-[36rem] overflow-hidden hover:scale-110">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/4sets.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10 bg-black">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                        16 Letters and Colors Set
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[16rem] sm:w-[36em] overflow-hidden hover:scale-110">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/16-colors-set.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10 bg-black">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                        16 Letters and Colors Set
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            <div className="flex flex-row justify-center gap-5 m-5 sm:gap-20 sm:mt-20">
                <Card className="w-[16rem] sm:w-[36rem] overflow-hidden hover:scale-110">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/teardrop.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10 bg-black">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                        16 Letters and Colors Set
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="w-[16rem] sm:w-[36em] overflow-hidden hover:scale-110">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/circle.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-4 sm:py-10 bg-black">
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                        16 Letters and Colors Set
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default GalleryWithCollection;