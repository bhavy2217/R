import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RNav from '../components/RNav'
import { Link } from 'react-router-dom';
import { emptyFav, removeFav } from '../Redux/Action/ItemAction';


function Favorite() {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.ItemReducer.items);
  console.log(items);

  const handleRemoveFav = (id) => {
    const filterData = items.filter((item) => item.id !== id)
    console.log(filterData);
    dispatch(removeFav(filterData))
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const handleEmptyFav = () => {
    dispatch(emptyFav([]))
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <>
      <RNav />

      <div style={{paddingTop:'60px'}}>

        <div style={{}}>
          <Link to="/recipes" style={{ marginLeft: "10px" }}>
            <button type="button" className="btn btn-outline-primary">Previous</button>
          </Link>
          <button onClick={handleEmptyFav} type="button" style={{ marginRight: '10px', float:'right' }} className="btn btn-outline-danger">
            Empty
          </button>
        </div>

        <div id='container-Fav' style={{}}>
          {items.map((i) => (
            <div key={i.id}>
              <div className='card' style={{ width: '270px', height: '300px', position: 'relative', display: 'inline-block', marginBlock: '10px', padding: '10px' }}>
                <Link to={`/recipes/${i.id}`}>
                  <img src={i.image} className='card-image' alt="" style={{ aspectRatio: '3/2', width: '100%' }} />
                </Link>
                <h4>{i.name}</h4>
                <span>Cuisine : {i.cuisine}</span><br />
                {/* <span>{i.tags[0]}</span> */}
                <span style={{ position: 'absolute', right: '10px', bottom: '5px' }}>
                  <button onClick={() => handleRemoveFav(i.id)} type="button" className="btn btn-outline-danger" style={{ border: '0px', backgroundColor: 'white' }}>
                    <i className='icon-Favourite material-icons'>favorite</i>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAlert && (
        <div className="alert alert-danger alert-dismissible fade show" style={{ position: "fixed", width: "100%", top: "0px", height: '40px',zIndex:'2', padding: '5px', paddingLeft: '20px', paddingRight: '20px' }} role="alert">
          Item Removed From <strong>Favourite</strong>
        </div>
      )}
    </>
  )
}

export default Favorite
