import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";

const HacdCollection = () => {
    return (
        <div className="container mx-auto my-7 sm:my-20">
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl">HACD Collection</h1>

            <div className="flex flex-row justify-center gap-4 m-5 sm:gap-10 sm:mt-10">
                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/11-631x531.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            15 color Diamond
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            VWUIEX #52919
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/capture-696x590.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            Perfect Pure A Color
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            XWUTXM #23240
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/yzzzzy-696x611.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            Perfect Pure Z Color
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            ZUXVAE #51147
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default HacdCollection;