import React, { useState } from 'react'
import './FirstModule.css'

export default function FirstModule() {


    const [imgae,setImage]=useState('/images/red.png');

  return (
   <>
       <div className='container main-container'>
          <div className='row'>
              <div className='col-lg-3 col-md-12 info-box'>
                  <h1>the unlimate <span>sneak</span> shoe paradise</h1>
                  <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam  </p>
                  <div className='main-btn'>
                    <button className='btn btn-b'>buy now</button>
                  </div>
                  <div className='colors mt-4 '>
                     <h6 className='mb-3'>colours</h6>
                    <div className='d-flex' style={{cursor:'pointer'}}>
                    <div onClick={()=>{setImage('/images/red.png')}} style={{backgroundColor:"red"}} className='color-box'></div>
                     <div onClick={()=>{setImage('/images/black.png')}} style={{backgroundColor:"black"}} className='mx-3 color-box'></div>
                     <div onClick={()=>{setImage('/images/orage.png')}} style={{backgroundColor:"orange"}}  className='color-box'></div>
                    </div>
                  </div>
              </div> 
    
              <div className='col-lg-6 col-md-7 img-box mt-5'>
                <img src={imgae}/>
              </div>

              <div className='col-lg-2 col-md-6 imgs-box text-center mt-5'>
                      <div className='col-12 single-img mb-2'>
                             <img src='/images/red.png'
                             onClick={()=>{setImage('/images/red.png')}}/>
                      </div>
                      <div className='col-12 single-img mb-2'>
                             <img src='/images/black.png'
                             onClick={()=>{setImage('/images/black.png')}} />
                      </div>
                      <div className='col-12 single-img'>
                             <img src='/images/orage.png'
                             onClick={()=>{setImage('/images/orage.png')}} />
                      </div>
              </div>
                  </div>
              </div>
         
    
   </>
  )
}
