import { createContext , useState , useEffect, useMemo } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

const DataContext = createContext()


export const DataProvider = ({ children }) =>{

    const baseURL = useMemo(() => "http://localhost:8000" ,[])

    const [allPosts , setAllPosts] = useState([]);
    const [posts , setPosts] = useState([]);
    const [stories , setStories] = useState([]);
    const [errMsg , setErrMsg] = useState(null);
    const [storyImage , setStoryImage] = useState(null);

    const [searchInput , setSearchInput] = useState('');

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const response = await axios.get(`${baseURL}/posts`)
                if(response){

                    setAllPosts(response.data)

                    const filteredData =  (response.data).filter((obj) => obj.my_post === false)

                    
                    setPosts((response.data).filter((obj) => obj.my_post === false));
                }
            }
            catch(err){
                setErrMsg(err.message);
            }
        }

        const fetchStories = async() =>{
            try{
                const response = await axios.get(`${baseURL}/stories`)
                if(response){ 
                    setStories(response.data);
                }
            }
            catch(err){
                setErrMsg(err.message);
            }
        }

        fetchPosts();
        fetchStories();

    },[])

    return (
        <DataContext.Provider value={{
            baseURL ,posts , setPosts , errMsg , setErrMsg , 
            searchInput , setSearchInput , stories , setStories , allPosts , setAllPosts, storyImage , setStoryImage
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext;