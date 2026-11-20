import React, { useEffect, useState } from 'react'
import AddFlashcard from './componenets/AddFlashcard';
import Flashcard from "./componenets/Flashcard"
import Sidebar from './componenets/Sidebar';

const otherFlashcards = {
  cs: [
    {
      question: "What is the Control Unit (CU)",
      answer: "The control unit decodes the instruction and controls the flow of data"
    }
  ],
  maths: [
    {
      question: "Name the equation x^2 + y^2 = r^2",
      answer: "Circle Equation"
    }
  ],
  geography: [
    {
      question: "What is the capital city of Burkina Faso",
      answer: "Ouagadoudou"
    }
  ]
}

const App = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [flashcards, setFlashcards] = useState(function() {
    return JSON.parse(localStorage.getItem("flashcards")) || []
  });

  const [mode, setMode] = useState("Custom");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar mode={mode} setMode={setMode} className="w-1/6"/>
      <div className="flex flex-1 flex-col items-center bg-zinc-800 min-h-screen">
        
        {mode === "Custom" &&
          (
            <div className="absolute flex justify-center pt-10">
              <button 
                className="font-bold bg-zinc-200 rounded-full py-3 px-6 text-sm hover:scale-110 duration-200 shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]"
                onClick={() => setIsAdding(!isAdding)}>
                {isAdding ? "Cancel" : "Add Flashcard"}
              </button>
            </div>
          )
        }


        <div className="flex flex-1 items-center justify-center w-full min-w-0 px-4 md:w-3/8 md:px-0">
          {isAdding ? 
            (
              <AddFlashcard setFlashcards={setFlashcards} setIsAdding={setIsAdding}/>
            ): 
            ( 
              <Flashcard flashcards={mode === "Custom" ? flashcards : 
                mode === "CS" ? otherFlashcards.cs :
                mode === "Maths" ? otherFlashcards.maths :
                mode === "Geography" ? otherFlashcards.geography : []
              }/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App