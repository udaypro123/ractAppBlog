import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import './createblog.css'
import { useNavigate } from 'react-router'
import { addcreatedata } from '../reduux/blogitemSlice'


const CreateBlog = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [createitem, setcreateitem] = useState([])
  const [text, settext] = useState("")
  const [desc, setdesc] = useState("")

  const handleclick = () => {
    if (text === "" && desc === "") {
      alert("please enter data ....")
    } else {
      dispatch(addcreatedata({
        ...createitem,
        text: text,
        desc: desc,
        id: Date.now()
      }))
      setdesc(" ")
      settext(" ")

    }

    navigate('/')
  }


  return (
    <>
      <div className="container">

        <div className="mt-3 form-check ">

          <label className="form-check-label" >React Blog app</label>
        </div>

        <div className="mt-3">

          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='title' value={ text } onChange={ (e) => {
            settext(e.target.value)
          } } />

        </div>
        <div className="mt-3">
          <textarea placeholder='subject' value={ desc } onChange={ (e) => {
            setdesc(e.target.value)
          } }>

          </textarea>
        </div>

        <button className="btn btn-primary" onClick={ handleclick }>add post</button>


      </div>
    </>
  )
}

export default CreateBlog;
