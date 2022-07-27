export interface UserInterface{
    id : number;
    name : string;
    image? : string;
}

export interface CategoryInterface{
    id: number;
    title : string;
    slug : string;
}

export interface TagInterface{
    id: number;
    title : string;
}
export interface PostInterface{
    id : number;
    image : string;
    image_url : string;
    title : string;
    slug : string;
    excerpt : string;
    content : string;
    date_formatted : string;
    user : UserInterface;
    category : CategoryInterface;
    tags :TagInterface[];
    
    commentCount? : string;
    viewCount? : string;
    likeCount?: string;
}