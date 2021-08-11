/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {

  
constructor(props){
  super(props);

this.state={
  dataForm:hornsData
}
}



submitDataForm =(event) => {

    event.preventDefault();
if (Number(event.target.value) === 100){
    this.setState({
 
        dataForm:hornsData
    });

}
else if (Number(event.target.value) === 1 ){
    this.setState({
 
        dataForm:hornsData.filter(i => {
            return i.horns === 1;
        })
    });

     
}
 else if (Number(event.target.value) === 2 ){
    this.setState({
 
        dataForm:hornsData.filter(i => {
            return i.horns === 2;
        })
    });

 }
 else if (Number(event.target.value) === 3 ){
    this.setState({
 
        dataForm:hornsData.filter(i => {
            return i.horns === 3;
        })
    });

}
};





render () {
return (

<div>


<Form onSubmit={this.submitDataForm}>
<Form.Label>Filter By Names of Horns</Form.Label>
<Form.Select aria-label="Default select example" name='numpersHorns' onChange={this.submitDataForm}  >
    <option value="100">All</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    
</Form.Select>


<Button variant="primary" type="submit">
    Submit
</Button>
</Form>

{this.state.dataForm.map((item) => {


return (

    <HornedBeast key={Math.random()} title={item.title} imgUrl={item.image_url} 
    description={item.description} horns={item.horns} keyword={item.keyword} gitTitle={this.props.gitTitle} showModal={this.props.showModal} />

)}

)}




</div>

)
}
}



     /* return (
    

    key={index}
    title={item.title}
     imgUrl={item.image_url}
     description={item.description} 
    showModal={this.props.showModal} />
    
     )
     })} */

export default Main;