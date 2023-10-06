import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  
  const questions = ["What does casa mean?", "How do you say dog in Spanish?", "What is hermano?", 
                      "How do you say uncle", "What is agua?", "Where is Times Square", "How do you say aunt?",
                      "How do you say grandma?", "What is United States in spanish?", "How do you say island?"];

  const answers = ["House", "Perro", "Brother", "Tio", "Water", "Nueva York", "Tia", "Abuela", "Ustados Unidos",
                     "Isla"];
  
  const [start, setStart] = useState(Math.floor(Math.random() * 10))
  const [question, setQuestion] = useState(questions[start])
  const [answer, setAnswer] = useState(answers[start])
  const [count, setCount] = useState(start)
  const leftArrow = "<--";
  const rightArrow = "-->";
  
  const [answered, setAnswered] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [correctCount, setCorrect] = useState(0)
  const [longest, setLongest] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [display, setDisplay] = useState(0);  
  const [displayQA, setQA] = useState(question)

  const updateQuestionRight = () =>{
    let nextCount = count+1;
    if(nextCount>9)
      nextCount = 0;
    setCount(nextCount);
    setQuestion(questions[nextCount]);
    setAnswer(answers[nextCount]);
    setDisplay(0);
    setQA(questions[nextCount]);
    setCurrentAnswer('')
    setFlipped(false)
    setAnswered(false)
    const object = document.getElementById('answer')
    object.style.borderColor = 'initial'
    object.style.backgroundColor = 'white'
  }

  const updateQuestionLeft = () =>{
    let prevCount = count-1;
    if(prevCount<0)
      prevCount = 9;
    setCount(prevCount);
    setQuestion(questions[prevCount]);
    setAnswer(answers[prevCount]);
    setDisplay(0);
    setQA(questions[prevCount]);
    setCurrentAnswer('')
    setFlipped(false)
    setAnswered(false)
    const object = document.getElementById('answer')
    object.style.borderColor = 'initial'
    object.style.backgroundColor = 'white'
  }

  const changeDisplay = () => {
    let nextDisplay = (display + 1) % 2;
    setDisplay(nextDisplay);
    setQA(nextDisplay === 0 ? questions[count] : answers[count]);
    setFlipped(true)
  }

  const handleChange = (e) => {
    if (flipped || answered) return
    const object = document.getElementById('answer')
    if(currentAnswer.toLowerCase()==answer.toLowerCase() && flipped==false && answered==false){
      object.style.borderColor = 'blue'
      object.style.backgroundColor = 'green'
      setCorrect(correctCount+1)
      if(longest<correctCount+1) setLongest(correctCount+1)
      setAnswered(true)
    }else if(currentAnswer.toLowerCase()!=answer.toLowerCase && flipped==false && answered==false){
      object.style.borderColor = 'red'
      object.style.backgroundColor = 'red'
      setCorrect(0)
      setAnswered(true)
    }
  }

  return (
    <>
      <h1>Let's Learn Spanish!</h1>
      <h2>Can you get these flashcard answers correct?</h2>
      <h4>Number of Cards: 10 | Correct Streak: {correctCount} | Longest Streak: {longest}</h4>
      <div onClick={changeDisplay}>
        <Cards qa={displayQA}/>
      </div>
      <br/>
      <div className="buttons">
        <button className='upgrade' onClick={updateQuestionLeft}>{leftArrow}</button>
        <button className='upgrade' onClick={updateQuestionRight}>{rightArrow}</button>
      </div>
      <br/>
      <label for="answer">Answer:</label>
      <input 
        type="text" 
        id="answer" 
        name="Name"
        value={currentAnswer}
        placeholder=""
        onChange={(e) => {setCurrentAnswer(e.target.value)}}
        className="textbox">
      </input>
      <button onClick={handleChange}>Check Answer</button>
    </>
  )
}

export default App
