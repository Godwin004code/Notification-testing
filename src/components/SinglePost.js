import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
    const params = useParams()
    
    console.log(params);
    const [posts, setPosts] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/posts'

    const fetchPosts = () => {
        fetch(url, {
            method: 'GET'
        }).then((response) => response.json())
        .then((result) => {
          console.log(result);
            setPosts(result)
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

   
  return (
    <div>
        <h2>{params.id}</h2>
        {
        posts.filter((post) => post.id === Number(params.id)).map((item) => {
            const {id, title, body} = item
            return (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            )
        })
        }</div>
  )
}

export default SinglePost