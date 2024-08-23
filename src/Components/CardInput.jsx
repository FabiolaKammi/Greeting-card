import React from 'react';
import { useState } from 'react';

const CardInput = () => {
    const [greeting, setGreting]=("");
   const  [name, setName]= useState("");
    const [date, setDate] = useState("");
    const [sign, setSign] = useState("");
    const [isSubmit, setSubmit]= useState(false);
    


const handleDateChange= (e)=>{e.preventDefault();setDate(e.target.value); };
const handleNameChange= (e)=>{e.preventDefault();setName(e.target.value); };
const handleGreetingChange= (e)=>{e.preventDefault();setGreting(e.target.value); };
const handleSignChange= (e)=>{setSign(e.target.value);};




const handleSubmit = (e)=>{
    e.preventDefault()
    setSubmit(true)
   
}


  return (
    <>
    <div className='input-container'>
        <h2>Please Enter the following information</h2>
      <form className='input-form' onSubmit={handleSubmit}>
    
        <input  onChange={handleNameChange} type='text' placeholder='Enter a recipient'  name='name'/>
        <input onChange={handleDateChange} type='text' placeholder='Enter a date'  name='date'/>
        <input onChange={handleGreetingChange} type='text' placeholder='Enter a greeting e.g Good Morning'  name='date'/>
        
        <input onChange={handleSignChange} type='text' placeholder='Enter a signature sentence'  name='sign' />
    
        <button  onClick={handleSubmit}>Create your Card</button>
      </form>
    </div>
    <div className='card-wrapper'>
        {isSubmit ? (
            <div className='card-div'>
            <div className='card-container'>
            <h3>{greeting}</h3>
            <p>
            Dear ,{name}
Thinking of you and hoping you’re doing well. Take care!
I Just wanted to send some warm wishes your way. Hope you have a wonderful day!
Sending you a smile and a hug. Have a fantastic day {name}!
            </p>
            <span>{sign}</span>
            <h6>{date}</h6>
          </div>
          <div className='card-container'>
            <h3>{greeting}</h3>
            <p>
            Dear {name},<br /> <br /> Thinking of you and hoping you’re doing well. Take care!”
            </p>
            <span>{sign}</span>
            <h6>{date}</h6>
          </div>

          <div className='card-container'>
            <h3>{greeting}</h3>
            <p>{name},
            <br /> 
            I Just wanted to send some warm wishes your way. Hope you have a wonderful day!
            </p>
            <span>{sign}</span>
            <h6>{date}</h6>
          </div>
          <div className='card-container'>
            <h3>{greeting}</h3>
            <p>
            Sending you a smile and a hug. Have a fantastic day {name}!
            </p>
            <span>{sign}</span>
            <h6>{date}</h6>
          </div>
          </div>
        ) :null}
    </div>
    </>
  )
}

export default CardInput;

