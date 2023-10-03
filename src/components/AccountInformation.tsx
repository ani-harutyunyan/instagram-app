import React from 'react';
import {type IAccountInfoProps } from '../types/index';

const AccountInfo: React.FC<IAccountInfoProps> = ({
        data
}) => {
    return (
        <div className="flex mx-auto items-center px-10 my-8">
            <div className='min-w-max'>
                <img
                    className="w-36 h-36 rounded-full"
                    src={data.profile_pic_url}
                    alt={`${data.username}'s profile`}
                />
            </div>
            <div className="flex flex-col justify-between ml-8 gap-3">
                <h1 className="text-2xl font-normal">{data.username}</h1>
                <div className="flex gap-5 text-sm font-semibold">
                    <span>{data.posts_count} posts</span>
                    <span>{data.follower_count} followers</span>
                    <span>{data.follow_count} following</span>
                </div>
                <span className='text-sm font-semibold'>{data.full_name}</span>
                <span className='text-sm font-normal whitespace-pre-wrap'>{data.biography}</span>
            </div>
        </div>
    );
};

export default AccountInfo;
