import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const ProductList = () => {
    return (
        <div className="container mx-auto my-3 sm:my-10">
            <h1 className="text-center text-main font-bold sm:text-5xl text-3xl">Premium HACD</h1>

            <div className="flex flex-col mt-4 sm:mt-10 items-center">
                <Card className="sm:flex-row flex-col w-[90%] bg-[#fafafa] sm:my-7 my-2">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/aeaess-282x398.png')}
                            alt="image"
                            className="w-[100%] sm:w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-4 sm:p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-1 sm:mb-10">
                            <Typography className="uppercase text-main font-bold text-sm sm:text-4xl">AEAESS # 25049</Typography>
                        </div>
                        
                        <Typography className="mb-0 sm:mb-2 text-main text-sm sm:text-4xl">
                            A beautiful six color only diamond with I Red Edge color and only Three Letters Name. So far only 50 six color HACD had been mined. 
                        </Typography>
                        
                    </CardBody>
                </Card>

                <Card className="sm:flex-row flex-col w-[90%] bg-[#fafafa] sm:my-7 my-2">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/aeyaay-292x360.png')}
                            alt="image"
                            className="w-[100%] sm:w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-4 sm:p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-1 sm:mb-10">
                            <Typography className="uppercase text-main font-bold text-sm sm:text-4xl">AEYAAY # 51444</Typography>
                        </div>
                        
                        <Typography className="text-main mb-0 sm:mb-2 text-sm sm:text-4xl">
                        A beautiful six color diamond with Three Letters Name ONLY . So far only 50 six color HACD had been mined.
                        </Typography>
                        
                    </CardBody>
                </Card>

                <Card className="sm:flex-row flex-col w-[90%] bg-[#fafafa] sm:my-7 my-2">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/xxmxmz-285x397.png')}
                            alt="image"
                            className="w-[100%] sm:w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-4 sm:p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-1 sm:mb-10">
                            <Typography className="uppercase text-main text-sm font-bold sm:text-4xl">XXMXMZ # 44711</Typography>
                        </div>
                        
                        <Typography className="text-main mb-0 sm:mb-2 text-sm sm:text-4xl">
                        A beautiful six color only diamond with N Yellow Cyan Edge color and only Three Letters Name. So far only 50 six color HACD had been mined.
                        </Typography>
                        
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default ProductList;