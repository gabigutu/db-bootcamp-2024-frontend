import { useEffect, useState } from 'react';
import { PostDTO } from './PostDTO';

const URL_BASE = 'http://localhost:3004';
const URL_ENDPOINTS = {
    posts: '/posts',
    comments: '/comments',
    profile: '/profile',
};

function Posts() {

    const [ posts, setPosts ] = useState<PostDTO[]>([]);

    const fetchPosts = async () => {
        const response = await fetch(URL_BASE + URL_ENDPOINTS['posts']);
        const posts : PostDTO[] = await response.json();
        return posts;
    }

    const fetchPostUpdate = async(id: number, post: PostDTO) => {
        const response = await fetch(URL_BASE + URL_ENDPOINTS['posts'] + '/' + id, {
            method: 'PUT',
            body: JSON.stringify(post)
        });
        const responsePost : PostDTO = await response.json();
        return responsePost;
    }

    const showInput = (index: number) => {
        posts[index].inputHidden = false;
        setPosts([...posts]);
    }

    const changedName = (postId: number, newName: string) => {
        console.log(`Changing name of post ${postId} to ${newName}`);
        const post : PostDTO | undefined = posts?.find((post: PostDTO) => {
            return post.id == postId
        });
        if (!post) return;
        post.title = newName;
        const request = async () => {
            const responsePost = await fetchPostUpdate(postId, post);
            console.log(responsePost.title, newName);
            if (responsePost.title === newName) {
                // nothing
            } else {
                post.title = 'ala vechi'; // add oldName parameter
            }
            post.inputHidden = true;
            setPosts([...posts]);
        }
        request();
    }

    useEffect(() => {
        const request = async () => {
            const posts : PostDTO[] = await fetchPosts();
            posts.map((post) => {
                post.inputHidden = true;
            });
            setPosts(posts);
        }
        request();
    }, []); // component did mount

    return (
        <>
            <h2>Posts</h2>
            {posts.map((post, index) => {
                return (
                    <article>
                        <h3 onDoubleClick={(e) => { showInput(index); }} style={ {display: post.inputHidden ? 'block' : 'none'}  } >{post.title}</h3>
                        <input 
                            type="text"
                            onBlur={(e) => { changedName(post.id, e.target.value) } }
                            defaultValue={post.title}
                            style={ {display: post.inputHidden ? 'none' : 'inline'}  }
                            />
                        <p>{post.views} views</p>
                    </article>
                );
            })}
        </>
    )
}

export default Posts;
