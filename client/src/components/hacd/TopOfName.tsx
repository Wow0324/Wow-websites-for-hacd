import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";

const TopOfName = () => {
    return (
        <div className="container mx-auto my-7 sm:my-20">
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl">Top PoW Diamond</h1>

            <div className="flex flex-row justify-center gap-4 m-5 sm:gap-10 sm:mt-10">
                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/ethman-696x608.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            ETH-MAN
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            ETHMAN #27073
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/yzzzzy-696x611.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            Y To Z Order
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            YZZZZY #31816
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-2 w-40 sm:mt-6 sm:w-96">
                    <CardBody className="text-center p-3 sm:p-6">
                        <img src={require('../../assets/images/iiaaia-696x604.png')} alt="" />
                        <Typography color="blue-gray" className="mb-2 text-main font-bold text-sm sm:text-4xl">
                            I & A with # 222
                        </Typography>
                        <Typography className="text-third text-sm sm:text-4xl">
                            IIAAIA #30222
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default TopOfName;