import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [question, setQuestion] = useState("What does casa mean?")
  const [answer, setAnswer] = useState("House!")
  const [count, setCount] = useState(0)
  const leftArrow = "<--";
  const rightArrow = "-->";

  const questions = ["What does casa mean?", "How do you say dog in Spanish?", "What is hermano?", 
                      "How do you say uncle", "What is agua?", "Where is Times Square", "How do you say aunt?",
                      "How do you say grandma?", "What is United States in spanish?", "How do you say island?"];

  const answers = ["House!", "Perro!", "Brother!", "Tio!", "Water!", "Nueva York!", "Tia!", "Abuela!", "Ustados Unidos",
                     "Isla!"];

  const [display, setDisplay] = useState(0);  
  const [displayQA, setQA] = useState(question)

  const updateQuestionRight = () =>{
    let nextCount = Math.floor(Math.random() * 10);;
    setCount(nextCount);
    setQuestion(questions[nextCount]);
    setAnswer(answers[nextCount]);
    setDisplay(0);
    setQA(questions[nextCount]);
  }

  const updateQuestionLeft = () =>{
    let prevCount = Math.floor(Math.random() * 10);;
    setCount(prevCount);
    setQuestion(questions[prevCount]);
    setAnswer(answers[prevCount]);
    setDisplay(0);
    setQA(questions[prevCount]);
  }

  const changeDisplay = () => {
    let nextDisplay = (display + 1) % 2;
    setDisplay(nextDisplay);
    setQA(nextDisplay === 0 ? questions[count] : answers[count]);
  }

  return (
    <>
      <h1>Let's Learn Spanish!</h1>
      <h2>Can you get these flashcard answers correct?</h2>
      <h4>Number of Cards: 10</h4>
      <div onClick={changeDisplay}>
        <Cards qa={displayQA}/>
      </div>
      <br/>
      <div className="buttons">
        <button className='upgrade' onClick={updateQuestionLeft}>{leftArrow}</button>
        <button className='upgrade' onClick={updateQuestionRight}>{rightArrow}</button>
      </div>
    </>
  )
}

export default App
