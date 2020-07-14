import React, { Component } from 'react'
import axios from 'axios'

export class PostDetail extends Component {
    state = {
        title:'',
        testo:''
    }
    async componentDidMount(){
        const indexPost = this.props.match.params.id;
        console.log(this.props.match)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${indexPost}`)
       
        this.setState({
            title:res.data.title,
            testo:res.data.body
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <span>Sono il singolo item numero {this.props.match.params.id}</span>
                <p>{this.state.testo}</p>
            </div>
        )
    }
}

export default PostDetail
