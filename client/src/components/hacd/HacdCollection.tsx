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
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl">Pure HACD Collection</h1>

            <div className="flex flex-row justify-center gap-4 m-5 sm:gap-10 sm:mt-10">
                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6 flex flex-col items-center">
                        <img src={require('../../assets/images/etnaza.png')} alt="" />
                        <Typography className="text-third text-sm sm:text-4xl mt-2 sm:mt-5">
                            ETNAZA #59769
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6 flex flex-col items-center">
                        <img src={require('../../assets/images/vzzyeb.png')} alt="" />
                        <Typography className="text-third text-sm sm:text-4xl mt-2 sm:mt-5">
                            VZZYEB #69629
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6 flex flex-col items-center">
                        <img src={require('../../assets/images/aavzti.png')} alt="" />
                        <Typography className="text-third text-sm sm:text-4xl mt-2 sm:mt-5">
                            AAVZTI #72328
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default HacdCollection;