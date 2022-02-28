import React, { useState } from 'react';
import quotes from '../quotes.json'

const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = 
  [
    "#845EC2", 
    "#2C73D2", 
    "#0081CF", 
    "#0089BA", 
    "#008E9B", 
    "#008F7A", 
    "#B39CD0", 
    "#00C9A7", 
    "#D65DB1", 
    "#FF6F91",
    "#FF9671", 
    "#FFC75F",
    "#4D8076",
    "#4E8397",
    "#FF8066",
    "#4B4453",
    "#C34A36",
    "#00C9A7",
    "#008DCD",
    "#936C00",
    "#00D2FC",
    "#008B81"
  ]


const Quotes = () => {
    
    const [quote,setQuote] =useState(quotes[getRandom()]);

    

    const changeQuote = () =>{
        const random =getRandom();
        setQuote(quotes[random]);
    };

    const color = colors[Math.floor(Math.random() *23)];

    document.body.style = `background: ${color}`;
    
    console.log(changeQuote)
    return (
        
        <div className= "card" style={{color:color}} >
        <ul>
            <li><i className="fas fa-quote-left"></i>
            {quote.quote}
            </li>
            <br />
            <li><cite>{quote.author}</cite></li>
        </ul>
        <button onClick ={changeQuote}><i className="fa-solid fa-angle-right" style={{color}}></i></button>
    </div>
    );
};

export default Quotes;