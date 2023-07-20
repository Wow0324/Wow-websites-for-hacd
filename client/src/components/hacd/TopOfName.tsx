import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";

const TopOfName = () => {
    return (
        <div className="container mx-auto my-20">
            <h1 className="text-center text-main font-bold text-5xl">Top Of The Name</h1>

            <div className="flex flex-row justify-center gap-10 mt-10">
                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/ethman-696x608.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            ETH-MEN
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            ETHMAN #27073
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/yzzzzy-696x611.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            Shocking YZ Order
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            YZZZZY #31816
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/iiaaia-696x604.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            III.AAA Lucky 222
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            IIAAIA #30222
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default TopOfName;