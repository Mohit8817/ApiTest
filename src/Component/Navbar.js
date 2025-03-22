// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [mainCategories, setMainCategories] = useState([]);
    const [childCategories, setChildCategories] = useState([]);

    useEffect(() => {
        const fetchMainCategories = async () => {
            try {
                const response = await fetch('https://ecomm.dotvik.com/v2kart/service/categories/mainCategories');
                // const response = await axios.post('http://192.168.56.1:5500/api/user/get_triplink');
                const data = await response.json();
                console.log(data.data);
                setMainCategories(data.data);
            } catch (error) {
                console.error('Error fetching main categories:', error);
            }
        };


        // const fetchChildCategories = async (cat) => {
        //     try {
        //         const response = await fetch('https://ecomm.dotvik.com/v2kart/service/categories/men/tree');
        //         const data = await response.json();
        //         console.log(data.data.subCategory);
        //         (data.data.categoryName===cat)?

        //             setChildCategories(data.data.subCategory || []):setChildCategories([]) // Initialize with an empty array if data.children is undefined
        //     } catch (error) {
        //         console.error('Error fetching child categories:', error);
        //     }
        // };

        fetchMainCategories();
        // fetchChildCategories();
    }, []); // Empty dependency array ensures the effect runs once on component mount

    const fetchChildCategories = async (cat) => {
        try {
            const response = await fetch(`https://ecomm.dotvik.com/v2kart/service/categories/${cat}/tree`);
            const data = await response.json();
            console.log(data.data);
            setChildCategories(data.data.subCategory);
            console.log(childCategories)
            console.log("kkkkk")
        } catch (error) {
            console.error('Error fetching child categories:', error);
        }
    };

    return (
        <>
            <div className="container-fluid px-4 " style={{ "background-color": "#e3f2fd" }}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">

                        <nav>
                        </nav>                        <nav className="navbar navbar-expand-lg navbar-light fw-bold">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    {mainCategories.map((category) => (
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" onClick={() => fetchChildCategories(category.urlKey)} key={category.id} href={category.url} id={category.id} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {category.categoryName}
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                {childCategories.map((subcategory) => (
                                                    <a className="dropdown-item m-3" key={subcategory.id} href={subcategory.url}>
                                                        {subcategory.categoryName}
                                                    </a>
                                                ))}

                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </nav>


                    </div>
                    <div className="col-lg-2"></div>

                </div>
            </div>
        </>
    );
};

export default Navbar;
