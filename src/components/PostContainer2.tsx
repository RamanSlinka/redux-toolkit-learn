import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {

    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(20)

    return (
        <div>
            <div className='post__list'>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Failed to load posts...</h1>}
                {/*{posts && posts.map(post =>*/}
                {/*    <PostItem post={post}*/}
                {/*              key={post.id}*/}
                {/*              remove={handleRemove}*/}
                {/*              update={handleUpdate}*/}
                {/*    />*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default PostContainer2;