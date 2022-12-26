import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../src/styles/app.scss"

const quizQuestion = [
  {
    question : "Which one of the following river flows between Vindhyan and Satpura ranges?",
    options : [
      {answer : "Narmada", isCorrect : true},
      {answer : "Mahanandi", isCorrect : false},
      {answer : "Son", isCorrect : false},
      {answer : "Netravati", isCorrect : false}
    ]
  },
  {
    question : "Who among the following wrote Sanskrit grammar?",
    options : [
      {answer : "Kalidas", isCorrect : false},
      {answer : "Charak", isCorrect : false},
      {answer : "Panini", isCorrect : true},
      {answer : "Aryabhatt", isCorrect : false}
    ]
  },
  {
    question : "The Central Rice Research Station is situated in?",
    options : [
      {answer : "Chennai", isCorrect : false},
      {answer : "Cuttak", isCorrect : true},
      {answer : "Bangalore", isCorrect : false},
      {answer : "Quilon", isCorrect : false}
    ]
  },
  {
    question : "The metal whose salts are sensitive to light is?",
    options : [
      {answer : "Zinc", isCorrect : false},
      {answer : "Silver", isCorrect : true},
      {answer : "Copper", isCorrect : false},
      {answer : "Aluminium", isCorrect : false}
    ]
  },
  {
    question : "The country that has the highest in Barley Production?",
    options : [
      {answer : "China", isCorrect : true},
      {answer : "India", isCorrect : false},
      {answer : "Russia", isCorrect : false},
      {answer : "France", isCorrect : false}
    ]
  },
]
const App = () => {
  const [showScore, setShowScore] = useState(false);
  const [scoreSuccess, setScoreSuccess] = useState(0);
  const [scoreDanger, setScoreDanger] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer=(isCorrect)=>{
    if(isCorrect){
      setScoreSuccess(scoreSuccess+20);
    }else{
      setScoreDanger(scoreDanger+20);
    }

    const nextQues = currentQuestion+1;
    if(nextQues<quizQuestion.length){
      setCurrentQuestion(nextQues);
    }else{
      setShowScore(true);
    }
  }

  return (
    <div className='mainContainer'>
      <div className='quizContainer'>
        <div className="progressCotainer">
          <ProgressBar className='myprogress' variant="success" now={scoreSuccess} />
            <div className="percentage">
              <p>{scoreSuccess}</p>
            </div>
          <ProgressBar className='myprogress' variant="danger" now={scoreDanger} />
        </div>
        {showScore ? <div className='quizend'>Thankyou for playing Your total score is {scoreSuccess}</div> :
        
        <div className="questionContainer">
          <span className='qcnt'>Question {currentQuestion+1}/{quizQuestion.length}</span>
          <h2>{quizQuestion[currentQuestion].question}</h2>
          <div className="optionContainer">
          {
            quizQuestion[currentQuestion].options.map(qes=>(
              <button onClick={()=>handleAnswer(qes.isCorrect)} className='option'>{qes.answer}</button>
            ))
          }
          </div>
        </div>}
      </div>
    </div>
  )
}

export default App

