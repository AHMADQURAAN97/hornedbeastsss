import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json'
import './Main.css';

class Main extends React.Component {
render () {
return (


<div>

{hornsData.map((item,index)=>{

return (

<HornedBeast
key={index}
title={item.title}
imgUrl={item.image_url}
description={item.description} />

)
})}
</div>

)
}
}
export default Main;