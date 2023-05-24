import React from 'react'
import loading from './loading.gif'
const Spinner =()=> {
    return (
      <div className='text-center my-10'>
        <img className='my-3' src={loading}  style={{width:'45px'}}alt=" "></img>
      </div>
    )
  
}

export default Spinner
