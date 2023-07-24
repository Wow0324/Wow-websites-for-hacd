import React, { useState } from "react";
import { Button, Input, Spinner } from "@material-tailwind/react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuoteFee = () => {
    const [txhash, setTxHash] = useState<string>('')
    const [fee, setFee] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false)
    const handleResetFee = async () => {
        setLoading(true)
        if (txhash == "" || fee == "" || password == "") {
            setLoading(false)
            toast.error("Required Input values...");
        }
        else {
            try {
                const response = await axios.get(`https://hacpool.com/api/diamond/quotefee?txhash=${txhash}&fee=${fee}&password=${password}`)
                const result = response.data
                if (result.status == "ok") {
                    console.log("insert fee success")
                    toast.success("Insert fee success")
                    setLoading(false)
                }
                else {
                    console.log(result.err)
                    toast.error(result.err)
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error fetching diamond data:', error)
                toast.error("Error fetching data")
                setLoading(false)
            }
        }
    }
    return (
        <div className="container px-[10px] sm:px-[5px] pt-2 sm:pt-10">
            <div className="mx-auto mt-5 sm:mt-10 bg-gradient-to-r from-[#bb71ff] to-[#924dea] text-white rounded">
                <h1 className="text-[14px] text-lg p-2 sm:p-4">Fee competition:</h1>
                <p className="p-2 sm:p-4 text-[12px]">
                    Reset and increase the fee of the transaction to be confirmed in the transaction pool to advance the queuing position of the transaction and get the confirmation earlier. It can also be used for the commission price to be confirmed after diamond excavation.
                </p>
                <div className="p-2 sm:p-4">
                    <div className="mb-3 sm:mb-8 flex flex-col gap-6">
                        <Input color="white" size="lg" label="TxHash" value={txhash} onChange={(event) => setTxHash(event.target.value)} />
                        <Input color="white" size="lg" label="Reset fee" value={fee} onChange={(event) => setFee(event.target.value)} />
                        <Input color="white" size="lg" label="Private key or password of tx main address" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <Button onClick={handleResetFee} variant="outlined" className="flex flex-row items-center" disabled={isLoading} color="white">
                            Confirm Reset Fee{isLoading && <Spinner className="h-4 w-4 ml-2" />}
                        </Button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteFee;