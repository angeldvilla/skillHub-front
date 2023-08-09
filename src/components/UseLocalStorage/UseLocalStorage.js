import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [textValue, setTextValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = value => {
        try {
            setTextValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))

        } catch (error) {
            console.log("Error con useLocalStorage", error);
        }
    }
    return [textValue, setValue]
} 

