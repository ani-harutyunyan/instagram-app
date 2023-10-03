import React from 'react';
import PostCard from './PostCard';
import UserProfileNoPosts from './UserProfileNoPosts';
import type { IPostCardData } from '../types';


const Posts: React.FC<{posts: IPostCardData[]}> = ({ posts }) => {
    
    return (
        <div className="flex flex-wrap justify-between p-10 gap-4">
            {posts.length ? posts.map((post) => (
                <PostCard
                    key={post.code}
                    imageUrl={post.display_url}
                    likes={post.like_count}
                    comments={post.comment_count}
                />
            )) : <UserProfileNoPosts />
            }
        </div>
    );
};

export default Posts;