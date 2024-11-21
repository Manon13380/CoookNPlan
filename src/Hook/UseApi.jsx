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
            setData(response.data);
            console.log(response.data)
        })
        .catch((err) => {
            setIsLoaded(false); 
            setError(err); 
            console.log(error)
            
        });

    
};

return { data, isLoaded, error, fetchData }; 
}