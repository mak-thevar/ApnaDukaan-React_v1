import React, { useEffect, useState } from 'react'
import { Product } from '../../models/Product';
import { productService } from '../../services/ProductService';
import { randomUUID } from 'crypto';

export default function ProductList() {

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    const [priceRange, setPriceRange] = useState<any>(0);


    const [categories, setCategories] = useState<object[]>([]); // Example type adjustment



    // const [categories,setCategories] = useState<object[]>([]);

    useEffect(() => {
        productService.fetchProducts().then(products => { setProducts(products); setFilteredProducts(products); 
          
        
        });

        productService.fetchCategories().then(catg => setCategories(catg));

    }, [])

    useEffect(() => {
        // Effect for filtering products based on selected categories
        const filter = () => {
            
                const filtered = products.filter((product) =>
                   (selectedCategory.length>0? selectedCategory.includes(product.category) : true) && (priceRange>0? product.price>=priceRange : true )
                );
                setFilteredProducts(filtered);
            // } else {
            //     // If no categories are selected, show all products
            //     setFilteredProducts(products);
            // }
        };

        filter();
    }, [selectedCategory, products,priceRange]); // Re-run the filter when selectedCategory or products change

    const handleCategoryChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            // Add to selected categories
            setSelectedCategory((prevCategories) => [...prevCategories, value]);
        } else {
            // Remove from selected categories
            setSelectedCategory((prevCategories) =>
                prevCategories.filter((category) => category !== value)
            );
        }
    };

    const handlePriceChange = (e:any) =>{
        const {value } = e.target;
        setPriceRange(value);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <h5>Filter Products</h5>
                    <label htmlFor="customRange1" className="form-label">Price Range - <span>{priceRange}</span></label>
                    <input type="range" min={0} max={500} className="form-range" onChange={handlePriceChange} id="customRange1" value={priceRange} />
                    <hr />
                    <h6>Categories</h6>

                    {categories.map((item, index) => (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={item.toString()} // Adjust according to your data structure
                                onChange={handleCategoryChange}
                                name="category"
                            />
                            <label className="form-check-label">
                                {item.toString()} {/* Adjust according to your data structure */}
                            </label>
                        </div>
                    ))}


                </div>

                <div className="col-md-9">
                    <div className="row">
                        {
                            filteredProducts.map(item => <div className="col-md-4 mb-4" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top rounded img-thumbnail" alt="Product" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title.substring(0, 25)}</h5>
                                        <p className="card-text">{item.description.substring(0, 25)}</p>
                                        <a href="#" className="btn btn-primary">View Product</a>
                                    </div>
                                </div>
                            </div>)
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
