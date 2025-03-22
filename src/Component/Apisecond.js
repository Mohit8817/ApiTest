import React, { useState, useEffect } from 'react';


const Apisecond = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => {
                if (data.categories) {
                    setCategories(data.categories);
                }
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    // console.log(categories)



    return (
        <div>

            <br /><br /><br /><br />
            <h3 className='text-center fw-bold'>Second API data - 17/2/2023</h3>
            <br /><br /><br />


            {/* Normal data show ###################################### */}


            <div>
                {categories.map(category => (
                    <ul key={category.idCategory} className="list-group">

                        <li className="fw-bold list-group-item"> {category.idCategory}  </li>
                        <li className="fw-bold list-group-item text-primary"> {category.strCategory}  </li>
                        <li className="fw-bold list-group-item"><img src={category.strCategoryThumb} alt={category.strCategory} style={{ width: '100px' }} />  </li>
                        <li className="fw-bold list-group-item"> {category.strCategoryDescription}  </li>
                    </ul>
                ))}
            </div>


            <br /><br /><br /><br />



            {/* table data show  ##############################################*/}
            <table className="table">
                <thead>
                    <tr>
                    <th>SNO.</th>
                        <th>Category</th>
                        <th>Thumbnail</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.idCategory}>
                            <td className='fw-bold text-center'>{category.idCategory}</td>
                            <td className="fw-bold">{category.strCategory}</td>
                            <td><img src={category.strCategoryThumb} alt={category.strCategory} style={{ width: '100px' }} /></td>
                            <td>{category.strCategoryDescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br /><br /><br />

            {/* card data show  ###############################################  */}


            <div className="container  ">
                <div className='text-center m-5'>

                    <strong className='fw-bold fs-1'>API DATA SHOW IN CARDS</strong>
                </div>


                <div className="row">
                    {categories.map(category => (
                        <div className="col-md-4" key={category.idCategory}>
                            <div className="card" style={{ overflow: "hidden" }}>
                                <div className="card-body text-center">
                                    <img src={category.strCategoryThumb} className="shadow m-auto card-img-top w-75" alt={category.strCategory} />
                                    <h3 className="card-title fw-bold text-danger">{category.strCategory}</h3>
                                    <p className="card-text">{category.strCategoryDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>






        </div>

    )
}

export default Apisecond
