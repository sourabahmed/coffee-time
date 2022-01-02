import React from 'react';

const Testimonial = ({review}) => {
  const { img, name, description, designation } = review;
    return (
        <div className="data-container ">
            
            <div className="card bg-light mx-auto shadow rounded p-2 rounded-1 " style={{width: "18rem", backgroundColor:"#dfe6e9"}}>
            <img src={img} className="card-img-top" width={100} alt="..."/>
            <div className="card-body">
                <h5 className="card-title fw-bold text-success">{description}</h5> <hr />
                <p className="card-text fw-bold text-danger">{name}</p> 
                <p className="card-text">{designation}</p>
            </div>
        </div>
        
        </div> 
    );
};

export default Testimonial;
{/* <CardGroup>
  <Card style={{ backgroundColor: '#dfe6e9', padding: '20px' }}>
  <Card.Img className='img' width={100}  variant="top" src="https://i.ibb.co/zhRQH8q/Jahad-Master.jpg" />
    <Card.Body>
      <Card.Text>
         “Great balanced taste. Nice lingering aftertaste (not acrid nor bitter). Nicely texturised milk of good temperature that can be drank instantly. The kind of coffee that makes you want to gulp it all down after the first sip.” 
    </Card.Text>
        <Card.Title className='fw-bold'>John Deo</Card.Title>
        <Card.Title>Founder</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> */}