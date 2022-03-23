
import { useStateValue } from "../components/StateProvider";
import useGoogle from "../components/useGoogle";
import "./SearchPage.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { SearchOutlined, DescriptionOutlined, ImageOutlined, LocalOfferOutlined, RoomOutlined, MoreVertOutlined } from "@material-ui/icons";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import logo from "../google_logo.png";

const SearchPage = () => {
    
    const [{term}] = useStateValue();

    //const data = response;
    const {data} = useGoogle(term);

    console.log(data);

    return (
        <div className="searchPage">
            <div className="search_header">
                <Link to="">
                    <img className="header_logo"
                     src={logo}
                     alt="google-logo" />   
                </Link>
                <div className="header_body">
                  <Search hideButtons/>

                  <div className="options">
                      <div className="options_left">
                         <div className="option_choice">
                             <SearchOutlined />
                             <Link to="">All</Link>
                         </div>
                         <div className="option_choice">
                             <DescriptionOutlined />
                             <Link to="">News</Link>
                         </div>
                         <div className="option_choice">
                             <ImageOutlined/>
                             <Link to="">Images</Link>
                         </div>
                         <div className="option_choice">
                             <LocalOfferOutlined />
                             <Link to="">Shopping</Link>
                         </div>
                         <div className="option_choice">
                             <RoomOutlined />
                             <Link to="">Maps</Link>
                         </div>
                         <div className="option_choice">
                             <MoreVertOutlined />
                             <Link to="">More</Link>
                         </div>
                      </div>

                      <div className="options_right">
                        <div className="option_choice">
                            <Link to="">Tools</Link>
                        </div>
                      </div>
                  </div>

                </div>

                <div className="header_customs">
                    <SettingsOutlinedIcon titleAccess='Settings'/>
                    <AppsIcon titleAccess='Google apps'/>
                    <Avatar titleAccess='Google account'/>
                </div>
            </div>

            {true && (
                <div className="search_body">
                   <p className="results_count">
                     About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                   </p>

                   {
                       data?.items.map(item => (
                           <div className="search_result">

                               <div className="search_result_link">
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        {item.displayLink} <MoreVertOutlined />
                                    </a>
                               </div>

                               <div className="search_result_title">
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <h2>{item.title}</h2>
                                    </a>
                               </div>

                               <p className="search_result_snippet">
                                    {item.snippet}
                               </p>
                           </div>
                           
                       ))
                   }
                </div>
            )}
        </div>
    )
}

export default SearchPage;
