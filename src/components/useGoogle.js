import API_KEY from "./Keys";
import {useState, useEffect} from "react";

const ID = "8a0c5c79f8ecb58a5";

const useGoogle = (term) => {
    const [data,setData] = useState(null);

    useEffect(() => {

        const results = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ID}&q=${term}`
            )
            .then(response => response.json())
            .then(res => {
                setData(res)
            })
        }

        results();

    }, [term] )

    return {data};
}

export default useGoogle; 