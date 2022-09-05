import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
const [limit, setLimit] = useState(7)
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(limit)


    useEffect(() => {
        setTimeout(() => {
            setLimit(3)
        }, 2000)

    }, [])
    return (
        <div>
            <div className='post__list'>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Failed to load posts...</h1>}
                {posts && posts.map(post =>
                    <PostItem post={post}
                              key={post.id}
                    />
                )}
            </div>
        </div>
    );
};

export default PostContainer;