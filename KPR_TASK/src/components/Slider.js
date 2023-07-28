import React from 'react';

const Slider = () => {
  return (
    <div className="container" style={{width:'100%'}}>
      <div className="carousel slide" id="myCarousel" data-ride="carousel" >
        {/* dots */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="1st item" style={{ width: "100%", height: "80vh" }} />
            <div className="carousel-caption">
              <h3>Alice in the Wonderland</h3>
              <p><i>Lewis Carroll</i></p>
            </div>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="2nd item" style={{ width: "100%", height: "80vh" }} />
            <div className="carousel-caption">
              <h3>The Stranger</h3>
              <p><i>Alber_Camus</i></p>
            </div>
          </div>

          <div className="item">
            <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="3rd item" style={{ width: "100%", height: "80vh" }} />
            <div className="carousel-caption">
              <h3>All's Well that Ends well</h3>
              <p><i>William Shakespeare</i></p>
            </div>
          </div>
        </div>

        {/* left and right buttons */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;
