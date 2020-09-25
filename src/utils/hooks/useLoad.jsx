import React, { useRef, useState, useEffect } from "react";

/*
 * @param {boolean} loading the parameter for loading
 */

const useLoadHandler = () => {
    const rawLoadRef = useRef([]).current;
    const [loading, setLoading] = useState(true);
    const [loadNumber, setLoadNumber] = useState(0);
    const [percentage, setPercentage] = React.useState(0);
    const [noNull, setNoNull] = useState([]);

    const handlerLoad = () => {
        setLoadNumber(loadNumber + 1);
    };

    const loadRef = ref => {
        rawLoadRef.push(ref);
    };
    useEffect(() => {
        setNoNull([...new Set(rawLoadRef)].filter(e => e != null));
    }, [rawLoadRef]);

    useEffect(() => {
        if (!!noNull.length && loadNumber === noNull.length) {
            setLoading(false);
        }
    }, [loadNumber, noNull.length]);
    useEffect(() => {
        if (noNull.length > 0) {
            const n = noNull.length;
            const count = ((loadNumber / n) * 100) | 0;
            setPercentage(count);
            console.log(count + "%");
        }
    }, [loadNumber, noNull.length]);

    return { loading, handlerLoad, loadRef, percentage };
};

export default useLoadHandler;
