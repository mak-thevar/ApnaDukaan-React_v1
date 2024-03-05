import axios from "axios";
import { Post } from "../models/Post";

export class PostService{

    async fetchPosts(): Promise<Post[]>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }

}