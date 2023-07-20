import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const GalleryWithCollection = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-main font-bold text-5xl">Gallery With Set Collection</h1>
            <div className="flex flex-row justify-center gap-20 mt-20">
                <Card className="max-w-[32rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/3set-1076x606.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-10">
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            HACD Diamond Super Set
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="max-w-[32rem] overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img src={require('../../assets/images/triple-843x440.png')} alt="" />
                    </CardHeader>
                    <CardBody className="text-center py-10">
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            Pure Symmetry Set
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default GalleryWithCollection;