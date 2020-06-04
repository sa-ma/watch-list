import  {useState,useEffect} from 'react';

const FetchMovies = (url) => {
    const [loading, setLoading] = useState();
    const [items, setItems] = useState({});
    const [error, setError] = useState('');

    useEffect(() =>{
        const fetchItems = async () => {
            setLoading(true);
            try{
                const response = await fetch(url);
                const results = await response.json();
                setItems(results);
                setLoading(false);
            }catch(error){
                setLoading(false);
                setError("Error Fetching Data");
            }
        }
        fetchItems();        
    }, [url]);

    return {loading,items,error} ;
}

export default FetchMovies;
