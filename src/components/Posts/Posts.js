import React,{useEffect} from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getposts} from "../../actions/postAction";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getposts())
  },[])

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Posts;
