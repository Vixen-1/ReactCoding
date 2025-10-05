import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, autoFetch=true){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() =>{
        setLoading(true);
        try{
            setError(null);
            const response = await fetchFunction();
            setData(response);
        }catch(e){
            console.error(e);
            setError(e);
        }finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(()=>{
        if(autoFetch) fetchData();
    },[])

    return {data, error, loading, refetch: fetchData,  reset}
}