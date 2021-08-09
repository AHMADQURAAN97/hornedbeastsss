import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json'

class Main extends React.Component {
render () {
return (

<<<<<<< HEAD
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
=======
    
    <div>
    <HornedBeast tittle='Horne1' imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description='great horney1' />
    <HornedBeast tittle='Horne2' imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description='great horney2' />
    <HornedBeast tittle='Horne3' imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description='great horney3' />
    </div>
>>>>>>> d3da87aff8910c89fbd7af1793b56c98ae289c4f
)
}
}
export default Main;