import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("Hey I will run on every render");
  });

  
  useEffect(() => {
    alert("Hey Welcome to the page. This is the first render");
  }, []);

 
  useEffect(() => {
    alert("Hey I am running because color was changed");
  }, [color, count]); 

  
  return (
    <div>
      I am Navbar of {color} color
    </div>
  )
}

export default Navbar
