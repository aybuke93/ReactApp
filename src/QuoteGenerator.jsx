import { useState } from 'react'
import './App.css'

export default function QuoteGenerator() {
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
  ];
  const colors = ["LightPink","LightBlue", "LightGreen"  ];
  const [currentQuote, setCurrentQuote] = useState("")
  const [currentColor, setCurrentColor] = useState("")

  function handleGenerateQuote() {
    setCurrentQuote ( quotes[Math.floor(Math.random() * quotes.length)] );
    setCurrentColor ( colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div className='Quote-wrapper' style={{ backgroundColor: currentColor }}>
      <h1>Random Quote Generator</h1>
      <div className='Quote-box'>{currentQuote}</div>
      <p> </p>
      <button className='btn' onClick={handleGenerateQuote}>Create Quote</button>
    </div>
  )
}

