import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function RNav() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div className="topnav" id="myTopnav">
        <Link to="/" >Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favourite" className='favourite' >
          Favourite
          <i style={{ color: 'white', fontSize: '15px', }} className='material-icons'>favorite</i>
        </Link>
        <Link to="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </>
  )
}

export default RNav
