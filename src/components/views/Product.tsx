import axios from 'axios'
import React from 'react'
import {Post} from '../../models/Post'
import { PostService } from '../../services/PostService';



export default function Product() {


    const [posts, setPosts] = React.useState<Post[]>([]);

   React.useEffect(()=>{

  

   },[])

  return (

    <div className="col-md-4 mb-4">
    <div className="card">
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Product"/>
        <div className="card-body">
            <h5 className="card-title">Product 1</h5>
            <p className="card-text">This is a short description of product 1.</p>
            <a href="#" className="btn btn-primary">View Product</a>
        </div>
    </div>
</div>

    
  )
}
