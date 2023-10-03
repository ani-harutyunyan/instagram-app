import React, { useState } from 'react';
import { IPostCardProps } from '../types';

const PostCard: React.FC<IPostCardProps> = ({
    imageUrl,
    likes,
    comments
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative max-w-md my-4 bg-white shadow-md rounded-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageUrl} alt="Post" className="w-80 h-80 object-cover" />
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                    <div className="text-center">
                        <div className="mb-2">
                            <span className="text-white">{likes} likes</span>
                        </div>
                        <div>
                            <span className="text-white">{comments} comments</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostCard;
