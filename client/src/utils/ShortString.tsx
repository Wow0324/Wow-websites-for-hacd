const shortenString = (str: string, startLength: number, endLength: number): string => {
    if (str.length <= startLength + endLength) {
        return str;
    }

    const start = str.slice(0, startLength);
    const end = str.slice(-endLength);

    return `${start}...${end}`;
};

export default shortenString;