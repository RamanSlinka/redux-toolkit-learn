import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(20)
    const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost,] = postAPI.useCreatePostMutation()

    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect(() => {
        setTimeout(() => {
            setLimit(3)
        }, 20000)

    }, [])


    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post : IPost) => {
        deletePost(post)
    }
    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className='post__list'>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Failed to load posts...</h1>}
                {posts && posts.map(post =>
                    <PostItem
                        remove={handleRemove}
                        update={handleUpdate}
                        post={post}
                        key={post.id}
                    />
                )}
            </div>
        </div>
    );
};

export default PostContainer;