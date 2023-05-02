import React, { useEffect,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './home.css'
import { getnewdata } from '../reduux/newsSlice'
import { Link, useParams } from 'react-router-dom'
import { addnewitem } from '../reduux/blogitemSlice'


const Home = () => {

  const {id}=useParams()

  const dispatch = useDispatch()

  const { newsdata, status,error } = useSelector(state => state.newsapi)
  const newsdatas = newsdata.articles

  useEffect(() => {
    dispatch(getnewdata())
  }, [])

  const handleclick = (ele) => {
    dispatch(addnewitem(ele))
  }

  if(error===true){
    return (
      <>
        <h4> This api is working beacuse of server error... </h4>
      </>
    )
  }

  if (status === false) {
    return <>
      <h2>loading...</h2>
    </>
  }

  if(status===false){
    return (
      <>
      <div className='headingh2'>
        <h2> Loading... </h2>
      </div>
      </>
    )
  }

  return (
    <>
    
      <div className="container">
        <div className="row" >
          <div className="col" id='btncol'>
            <h4>Top Blogs and top Headlines</h4>
            <Link to='craeteblog'><button type="button" className="btn btn-primary mt-3">
              new Post
            </button></Link>
          </div>
        </div>
        <div className="row mt-5 rowmain" >
          {
            newsdatas && newsdatas.map((ele,index) => {
              return (<Fragment key={index}>

                <div  className="col-6 col-md-4"  id='newitem'>

                  <div className="card">
                    <img src={ ele.urlToImage } className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className='linkdiv' onClick={ () => { handleclick(ele) } } >
                        <Link to={ `/${id}` }><h5 className="card-title headfive">{ ele.title }</h5></Link>
                      </div>
                      <h6 className="card-subtitle text-body-secondary mt-2">Date :- { ele.publishedAt.slice(0, 10) }</h6>

                      <h6 className="card-subtitle text-body-secondary  mt-1">time :- { ele.publishedAt.slice(12, ele.publishedAt.length - 1) }</h6>
                      {/* <p className="card-text mt-2" style={ { fontSize: ".9rem" } }>{ ele.description.length <= 200 ? ele.description : ele.description.slice(0, 150) }</p> */}
                      <p className="card-text mt-2" style={ { fontSize: ".9rem" } }>{ ele.description }</p>
                     

                    </div>


                  </div>

                </div>
              </Fragment>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;
