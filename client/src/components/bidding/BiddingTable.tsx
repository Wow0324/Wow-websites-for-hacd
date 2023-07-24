import React from "react";
import shortenString from "../../utils/ShortString";

const TABLE_HEAD = ["#", "Diamond Name", "Tx Hash", "Fee Offer", "Fee Address", "Status"];

interface BidsProps {
    period: number;
    number: number;
    data: Array<any>;
}

const BiddingTable: React.FC<BidsProps> = ({ period, number, data }) => {

    const handleCopyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value)
            .then(() => {
                console.log('Copied to clipboard:', value);
                // You can show a success message or perform any other action here
            })
            .catch((error) => {
                console.error('Failed to copy to clipboard:', error);
                // You can show an error message or perform any other action here
            });
    };

    return (
        <div className="px-[10px] sm:px-[5px] sm:container">
            <div className="sm:mt-10 mt-4 bg-gradient-to-r from-[#bb71ff] to-[#924dea] mx-auto text-white rounded">
                <h1 className="text-[12px] sm:text-[14px] p-2 sm:p-4">
                    The ranking table of diamond fees waiting for confirm period {period}, number {number} :
                </h1>
                <div className="p-2 sm:p-4">

                    <table className="table-auto text-center border border-white w-full">
                        <thead className="bg-[#a0cdcd22]">
                            <tr className="text-[10px] sm:text-sm">
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="p-2 text-center">{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="break-all">
                            {data.map((item, index) => {
                                const txhash = shortenString(item[1], 30, 20);
                                return (
                                    <tr key={index}>
                                        <td className="text-[10px] sm:text-[12px] sm:p-4 p-1">{item[0]}</td>
                                        <td className="text-[12px] sm:text-[14px] sm:p-4 p-1">{item[3]}</td>
                                        <td className="text-[10px] sm:text-[12px] sm:p-2 p-1">
                                            <div className="flex flex-row items-center">
                                                <div className="flex-1">
                                                    <a target="_blank" title={`${item[1]}`} href={`https://explorer.hacash.diamonds/tx/${item[1]}`}>
                                                        {txhash}
                                                    </a>
                                                </div>
                                                <div className="px-1 sm:px-2">
                                                    <button className="sm:text-[12px] text-[10px] underline" onClick={() => handleCopyToClipboard(item[1])}>Copy</button>
                                                </div>
                                            </div>


                                        </td>
                                        <td className="text-[10px] sm:text-[12px] sm:p-2 p-1">{item[5]}</td>
                                        <td className="text-[10px] sm:text-[12px] sm:p-2 p-1">
                                            <a target="_blank" title={`${item[2]}`} href={`https://explorer.hacash.diamonds/address/${item[2]}`}>
                                                {item[2]}
                                            </a>
                                        </td>
                                        <td className="text-[10px] sm:text-[12px] sm:p-4 p-2">
                                            {item[6] == 0 ? "ok" : ""}
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default BiddingTable;