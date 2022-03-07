import React from 'react'

const Navbar = () => {
  return (
<>
<div className="navbar">
    <div className="patient-title"><h2>Patient Directory</h2></div>
    <div className="search">

        <input type="text" placeholder='search' className='search' />
        </div>

        <div className="filter">Filter</div>
    
    </div>
</>
  )
}

export default Navbar