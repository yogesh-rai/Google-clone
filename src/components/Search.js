import React, {useState} from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {actionType} from "./reducer";

function Search({hideButtons = false}) {

    const[{}, dispatch] = useStateValue();

    const[input, setInput] = useState("");

    const navigate = useNavigate();
    
    const search = (e) => {

        e.preventDefault();

        if(input.trim().length > 0)
        {
            dispatch({
                type: actionType.set_search_term,
                term: input
            });
            
            navigate('/search');
        }
        else{
            alert("Please enter a valid search term!");
        }
    }

    return(
        <form>
            <div className="search_input">
                <SearchIcon className="search_icon" />
                <input value={input} placeholder="Search Google or type a URL" onChange={e => {setInput(e.target.value)}} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search_buttons"> 
                <Button type="submit" variant="outlined" onClick={search} >Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : 
            (
                <div className="search_buttons_hidden"> 
                 <Button type="submit" variant="outlined" onClick={search} >Google Search</Button>
                 <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
          
        </form>

    )
}

export default Search;