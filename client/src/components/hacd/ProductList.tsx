import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const ProductList = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center font-bold text-5xl">Product List</h1>

            <div className="flex flex-col mt-10 items-center">
                <Card className="flex-row w-[90%] bg-[#fafafa] my-7">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/aeaess-282x398.png')}
                            alt="image"
                            className="w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-10">
                            <Typography variant="h3" className="uppercase text-main">AEAESS # 25049</Typography>
                            <Typography variant="h3" color="black" className="ml-auto">1BTC</Typography>
                        </div>
                        
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            A beautiful six color only diamond with I Red Edge color and only Three Letters Name. So far only 50 six color HACD had been mined. 
                        </Typography>
                        
                    </CardBody>
                </Card>

                <Card className="flex-row w-[90%] bg-[#fafafa] my-7">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/aeyaay-292x360.png')}
                            alt="image"
                            className="w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-10">
                            <Typography variant="h3" className="uppercase text-main">AEYAAY # 51444</Typography>
                            <Typography variant="h3" color="black" className="ml-auto">1BTC</Typography>
                        </div>
                        
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            A beautiful six color diamond with Three Letters Name ONLY . So far only 50 six color HACD had been mined.
                        </Typography>
                        
                    </CardBody>
                </Card>

                <Card className="flex-row w-[90%] bg-[#fafafa] my-7">
                    <CardHeader shadow={false} floated={false} className="shrink-0 m-0 rounded-r-none">
                        <img
                            src={require('../../assets/images/xxmxmz-285x397.png')}
                            alt="image"
                            className="w-64 object-cover"
                        />
                    </CardHeader>
                    <CardBody className="p-10 bg-gray flex flex-col justify-center">
                        <div className="flex flex-row justify-between mb-10">
                            <Typography variant="h3" className="uppercase text-main">XXMXMZ # 44711</Typography>
                            <Typography variant="h3" color="black" className="ml-auto">1BTC</Typography>
                        </div>
                        
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            A beautiful six color only diamond with N Yellow Cyan Edge color and only Three Letters Name. So far only 50 six color HACD had been mined.
                        </Typography>
                        
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProductList;