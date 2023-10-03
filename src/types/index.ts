export interface UserData {
    user: IUserData
    posts: {
        items: IPostCardData[]
    };
}

export interface IAccountInfoProps {
    data: IUserData
}

interface IUserData {
    username: string;
    full_name: string;
    biography: string;
    is_private?: boolean;
    profile_pic_url: string;
    posts_count: number;
    follower_count: number;
    follow_count: number;
}

export interface IPostCardData {
    code: string;
    display_url: string;
    like_count: number;
    comment_count: number;
}

export interface IPostCardProps {
    imageUrl: string;
    likes: number;
    comments: number;
}