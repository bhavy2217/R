import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import RNav from '../components/RNav';

function RecipeDetails() {
    const [detail, setdetail] = useState({})
    const param = useParams();

    useEffect(() => {
        getRecipeDetails();
    }, [])

    const getRecipeDetails = async () => {
        const response = await axios.get(`https://dummyjson.com/recipes/${param.id}`)
        console.log(response.data, 'response');
        setdetail(response.data)
    }

    return (
        <>
            <div>
                <RNav />
                <div style={{paddingTop:'60px'}}>

                    <div style={{}}>
                        <Link to="/recipes" style={{ marginLeft: "10px" }}>
                            <button type="button" className="btn btn-outline-primary">Previous</button>
                        </Link>
                    </div>

                    <img src={detail.image} alt="" style={{ width: '400px', aspectRatio: '3/2' }} />
                    <h3>{detail.name}</h3>
                    <span>Cuisine : {detail.cuisine}</span><br />
                    {/* <span>Tags : #{detail.tags[0]} #{detail.tags[1]}</span><br /> */}
                    <span>Rating : {detail.rating}/5</span><br />
                    <span>MealTypes : {detail.mealType}</span>
                    <p>{detail.instructions}</p>
                </div>
            </div>
        </>
    )
}

export default RecipeDetails
