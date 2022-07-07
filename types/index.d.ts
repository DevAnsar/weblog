export interface UserInterface{
    id : number;
    name : string;
    image : string;
}

export interface BlogCategoryInterface{
    id: number;
    title : string;
    slug : string;
}

export interface BlogInterface{
    id : number;
    title : string;
    slug : string;
    body : string;
    commentCount : string;
    viewCount : string;
    likeCount : string;
    image : string;
    date : string;
    writer : UserInterface;
    category : BlogCategoryInterface
}