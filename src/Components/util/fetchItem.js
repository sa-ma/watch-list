const fetchItems = async (url) => {
    setLoading(true);
    try{
        const response = await fetch(url);
        const {results} = await response.json();
        setItems(results);
        setLoading(false);
    }catch(error){
        setLoading(false);
        setError("Error Fetching Data");
    }
}

export default fetchItems;