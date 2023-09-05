import React, {useState, useEffect} from 'react'
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import css from "../css/Content.module.css";
import Loader from "./Loader";


function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        setIsLoaded(true);
        setFetchedPosts(savedPosts);
    }, 2000)
}, []);

const handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) => {
        return post.name.toLowerCase().includes(name);
    })
    setFetchedPosts(filteredPosts)
}



  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>my photos</h1>
            <form>
                <label htmlFor="searhinput">search</label>
                <input
                type="search"
                id="searchinput"
                onChange={(e)=>{handleChange(e)}}
                />
                <h4>Posts Found: {fetchedPosts.length}</h4>
            </form>
        </div>

        <div className={css.SearchResults}>
                {
                    isLoaded ?
                    <PostItem savedPosts={fetchedPosts} />
                    : <Loader />

                }  
    
        </div>

    </div>
  )
}

export default ContentHooks