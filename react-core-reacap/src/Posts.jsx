import { useEffect, useState } from "react"
import Post from "./Post";
import './Posts.css'

function Posts() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
  return (
    
    <div>
        <h3>Posts: {posts.length}</h3>
        {
          posts.map((post,index) => <Post post={post}/>)
        }
    </div>
  )
}

export default Posts