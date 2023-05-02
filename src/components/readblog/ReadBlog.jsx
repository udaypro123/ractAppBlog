import React from 'react'
import {useNavigate} from 'react-router-dom'
import './readblog.css'
import { useSelector } from 'react-redux'

const ReadBlog = () => {

  const {userdata}=useSelector((state)=>state.itemslice)
    const data=userdata[userdata.length-1]
    console.log(data)
  const navigate=useNavigate()
  const gotohome=()=>{
    navigate('/')
  }

  
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col headpart">
            <div className='btndiv'>
              <button type="button" className="btn btn-primary" onClick={gotohome}>Go to home</button>
            </div>
            <div className='h2part'>
              <h2>Read the Blog</h2>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col imgdiv">
            <img src={data.urlToImage} className="img-fluid" alt="..." />
          </div>
        </div>


        <div className="row" >
          <div className="col" id='descpart' >

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mt-3 p-2">Title :-  {data.title}</h5>
                <h6 className="card-subtitle mt-2 text-body-secondary p-2">Date :- {data.publishedAt.slice(0,10)}</h6>
                <h6 className="card-subtitle mt-2 text-body-secondary p-2">time :- {data.publishedAt.slice(12,data.publishedAt.length-1)}</h6>
                <p className="card-text mt-2 p-2">Description : - {data.description}</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default ReadBlog;
