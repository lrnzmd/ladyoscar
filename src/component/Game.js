import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export class Blog extends Component {
    state ={
        posts: []
    }
    async componentDidMount(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        this.setState({
            posts:response.data
        })
    }
    render() {
        return (
            <div>
                <h1>Sono un blog</h1>
                {this.state.posts.map( post =>{
                    return (
                        <h2 id="titleContainer" key={post.userId}>  
                           <Link to={`/blog/${post.id}`}>
                               {post.title}
                           </Link>  
                            <hr/>
                        </h2>
                    )
                } )}
            </div>
        )
    }
}

export default Blog
