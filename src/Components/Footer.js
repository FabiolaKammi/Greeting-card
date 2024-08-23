import React from 'react';


const Footer = () => {
  const date = new Date();
  const year=date.getFullYear();
  return (
    <div className="footer-section">
    {/*<div className='reflection'>
        Greeting card
      </div>*/}
      
      
      
      <ul className='media'>
        
      <li>©</li>
        <li>Copyright</li>
        <li>{year}</li>
      </ul>

      
    </div>

  )
}

export default Footer;

