import React, {useEffect, useState} from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CommentIcon from '@material-ui/icons/Comment';
import {getPosts} from '../../utils/api/db'
import './News.css'

const NewsItem = ({post}) => {
    return (
        <div className="mainNewsItem">
            <div className="mainNewsItemVotes">
                <ArrowUpwardIcon />
                <strong>{Math.floor(Math.random() * 100)}</strong>
                <ArrowDownwardIcon />
            </div>
            <a href={`${post.website}`}>
                <div className="mainNewsItemBody">
                    <span>r/{post.owner}</span>
                    <h5>{post.title}</h5>
                    <p>{post.description}</p>
                    <small>{post.website}</small>
                </div>
            </a>
            <div className="mainNewsItemComment">
                <CommentIcon />
                <strong>{Math.floor(Math.random() * 10)}</strong>
            </div>
        </div>
    )
}

const News = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await getPosts(1)
            
            try {
                if(res.data.status.status === "success") {
                    setPosts(res.data.posts)
                }
            } catch (e) {

            }
            
        }
        getData()
    },[])

    return (
        <div className="mainNews">
            <div className="mainNewsContent">
                <h3>Fique por dentro das ultimas notícias da economia no Brasil:</h3>
                <div className="mainNewsContentItems">
                    {posts.map((post,index) => {
                        return <NewsItem key={index} post={post}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default News;
