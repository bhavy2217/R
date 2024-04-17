import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import RNav from '../components/RNav'
import { addFav } from '../Redux/Action/ItemAction'
import { useDispatch, useSelector } from 'react-redux'

function Recipes() {
    const [data, setdata] = useState([]);
    const [showAlert, setShowAlert] = useState(false);


    const dispatch = useDispatch();
    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        const response = await axios.get('https://dummyjson.com/recipes');
        // console.log(response.data.recipes);
        setdata(response.data.recipes)
        // setproduct(response.data.products);
    };

    const items = useSelector((state) => state.ItemReducer.items);
    console.log(items, 'items');

    const handleAddToFav = (data) => {
        console.log(data, 'data');
        dispatch(addFav([...items, data]));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };


    return (
        <>
            {/* <Navbar /> */}
            {/* <div className="topnav">
                <Link className="active Link" to="/">Home</Link>
                <Link className="Link" to="/recipes">Recipes</Link>
                <div style={{ float: 'right' }}>
                    <Link className="Link" to="/Favorite">
                        Favourite
                        <i style={{ color: 'white', fontSize: '15px' }} className="material-icons">favorite</i>
                    </Link>
                </div>
            </div> */}
        <RNav/>
            <div id='container-Recipes' style={{}}>
          {data.map((e) => (
            <div key={e.id}>
              <div className='card' style={{ width: '270px', height: '300px', position: 'relative', display: 'inline-block', marginBlock: '10px', padding: '10px' }}>
                <Link to={`/recipes/${e.id}`}>
                  <img src={e.image} className='card-image' alt="" style={{ aspectRatio: '3/2', width: '100%' }} />
                </Link>
                <h4>{e.name}</h4>
                <span>Cuisine : {e.cuisine}</span><br />
                <span>{e.tags[0]}</span>
                <span style={{ position: 'absolute', right: '10px', bottom: '5px' }}>
                  <button onClick={() => handleAddToFav(e)} type="button" className="btn btn-outline-danger" style={{ border: '0px', backgroundColor: 'white' }}>
                    <i className='icon-Recipes material-icons'>favorite</i>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>


{/* <div className='container' style={{}}>
                {data.map((e) => (
                    <div key={e.id}>
                        <div className='card' style={{ width: '270px', height: '300px', position: 'relative', display: 'inline-block', marginBlock: '10px', padding: '10px' }}>
                            <Link to={`/recipes/${e.id}`}><img src={e.image} className='card-image' alt="" style={{ aspectRatio: '3/2', width: '100%' }} /></Link>
                            <h4>{e.name}</h4>
                            <span>Cuisine : {e.cuisine}</span><br />
                            <span>{e.tags[0]}</span>
                            <span style={{ position: 'absolute', right: '10px', bottom: '5px' }}>
                                <button onClick={() => handleAddToFav(e)} style={{ border: '0px', backgroundColor: 'white' }}>
                                    <i className='icon-Recipes material-icons'>favorite</i>
                                </button>
                            </span>
                        </div>
                    </div>
                ))}
            </div> */}


            {showAlert && (
                <div className="alert alert-success alert-dismissible fade show" style={{position: "fixed", width: "100%",zIndex:'2',  top: "0px", height:'40px',padding:'5px', paddingLeft:'20px', paddingRight:'20px'}} role="alert">
                    Item Added to <strong>Favourite</strong>
                </div>
            )}

        </>
    )
}

export default Recipes