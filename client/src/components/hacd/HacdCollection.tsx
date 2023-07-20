import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";

const HacdCollection = () => {
    return (
        <div className="container mx-auto my-20">
            <h1 className="text-center text-main font-bold text-5xl">HACD Collection</h1>

            <div className="flex flex-row justify-center gap-10 mt-10">
                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/11-631x531.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            15 color Diamond
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            VWUIEX #52919
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/capture-696x590.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            Perfect Pure A Color
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            XWUTXM #23240
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="mt-6 w-96">
                    <CardBody className="text-center">
                        <img src={require('../../assets/images/yzzzzy-696x611.png')} alt="" />
                        <Typography variant="h3" color="blue-gray" className="mb-2 text-main font-bold">
                            Perfect Pure Z Color
                        </Typography>
                        <Typography variant="h3" className="text-third">
                            ZUXVAE #51147
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default HacdCollection;