import React from 'react'

function Slider() {
    const carousel = document.querySelector('.carousel-item');
   
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://slicelife.imgix.net/16634/photos/original/banner-pizza-min_(1).jpg?auto=compress&auto=format" style={{height:'33rem', objectFit:'cover'}} className="d-block w-100" alt="Wild Landscape"/>
    </div>
    <div className="carousel-item  ">
      <img src="https://www.restaurantpizzeriarimini.com/menutouch/img/carousel-2.jpg" className="d-block w-100" style={{height:'33rem', objectFit:'cover'}}  alt="Camera"/>
    </div>
    <div className="carousel-item">
      <img  src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" style={{height:'33rem', objectFit:'cover'}} className="d-block w-100" alt="Exotic Fruits"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
