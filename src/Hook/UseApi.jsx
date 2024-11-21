import axios from "axios";
import { useState } from "react";



export default function useApi () {
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = (url) => {
       axios.get(url) 
        .then((response) => {
            setIsLoaded(true);
            setData(response.data)
        })
        .catch((err) => {
            setIsLoaded(false); 
            setError(err); 
            
        });

    
};

return { data, isLoaded, error, fetchData }; 
}