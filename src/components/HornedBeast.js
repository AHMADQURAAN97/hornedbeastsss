import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {


     constructor(props){
      super(props);
      this.state = {
        favorite: 0
      }
     }

    increaseNumOfFav = () => {

        this.setState ({

            favorite:this.state.favorite+1
        })



    }


    horne = ()=> {

      this.props.horne(this.props.title);
    };


    render() {
    return (
    <>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" onClick={this.horne}  src={this.props.imgUrl} alt="hornedBeast" title="hornedBeast" />
  <Card.Body onClick={this.horne} >
    <Card.Title>{this.props.title}</Card.Title>
   
    <Button variant="primary" onClick={this.increaseNumOfFav} >❤ Favorite {this.state.favorite}</Button>
    <Card.Text>
    {this.props.description}
    </Card.Text>

  </Card.Body>
</Card>





    {/* <h2>{this.props.title} </h2>

     <img onClick={this.increaseNumOfFav} src={this.props.imgUrl} alt="hornedBeast" title="hornedBeast" />
 
     <p> ❤ Favorite {this.state.favorite}</p>

     <p>{this.props.description}</p>
      */}
 


    </>

        )
    }
    }


export default HornedBeast;