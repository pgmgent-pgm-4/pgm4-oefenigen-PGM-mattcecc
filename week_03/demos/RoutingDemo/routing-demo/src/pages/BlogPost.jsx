import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function BlogPost() {
    const { postId } = useParams()
    const [post, setPosts] = useState([]);

    useEffect(() => {
      fetch(`https://dummyjson.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

  return (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
  )
  
}
