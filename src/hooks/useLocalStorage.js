import { useState, useEffect } from "react";


function useLocalStorage(key, defaultValue=null) {
    const initItem = localStorage.getItem(key) || defaultValue;
    const [item, setItem] = useState(initItem);

    useEffect(function setKey() {
        if (item === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, item)
        }

    }, [key, item]);

    return [item, setItem];
}


export default useLocalStorage;
