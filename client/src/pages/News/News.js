import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CommentIcon from '@material-ui/icons/Comment';
import {getNewsComments,getPosts,newNewsComment} from '../../utils/api/db'
import './News.css'

const NewsItemComment = ({comment}) => {
    return (
        <div className="mainNewsItemCommentsItem">
            <strong>{comment.author_name}</strong>
            <small>{comment.author_email}</small>
            <span>{comment.content}</span>
        </div>
    )
}

const NewsItem = ({post,user}) => {
    const [commentsDiv,setCommentsDiv] = useState(false)
    const [comments,setComments] = useState([])
    const newCommentRef = useRef(null)

    useEffect(() => {
        const getData = async () => {
            const res = await getNewsComments(post.website)
            try {
                if(res.data.status.status === "success"){
                    setComments(res.data.comments)
                }
            } catch (e) {

            }
        }
        getData()
        // eslint-disable-next-line
    },[])

    const handleNewComment = async () => {
        const res = await newNewsComment(user,post.website,newCommentRef.current.value,localStorage.getItem("authToken"))

        try {
            if(res.data.status.status === "success"){
                setComments([...comments,res.data.comment])
                newCommentRef.current.value = ""
            }
        } catch (e) {

        }
    }

    return (
        <div className={`mainNewsItem ${commentsDiv?"active":null}`}>
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
                <CommentIcon onClick={() => {setCommentsDiv(!commentsDiv)}}/>
                <strong>{comments.length}</strong>
            </div>
            <div className={`mainNewsItemCommentsDiv ${commentsDiv?"active":null}`}>
                <span>Comentários:</span>
                <div className="mainNewsItemComments">
                    {comments.map((item) => {
                        return <NewsItemComment comment={item}/>
                    })}
                </div>
                <div className="mainNewsItemNewComment">
                    <span>Novo comentário</span>
                    <div className="mainNewsItemNewCommentBox">
                        <strong>{user.name}</strong>
                        <small>{user.email}</small>
                        <textarea ref={newCommentRef} placeholder="Escreva belas palavras aqui..." type="text"/>
                        <button onClick={handleNewComment}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const News = () => {
    const [posts,setPosts] = useState([])
    const user = useSelector(state => state.user)

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
                        return <NewsItem key={index} user={user} post={post}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default News;
