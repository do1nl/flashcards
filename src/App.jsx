import React, { useEffect, useState } from 'react'
import AddFlashcard from './componenets/AddFlashcard';
import Flashcard from "./componenets/Flashcard"
import Sidebar from './componenets/Sidebar';

const otherFlashcards = {
  cs: [
    {
      question: "What is the Control Unit (CU)",
      answer: "The control unit decodes the instruction and controls the flow of data"
    },
    {
      question: "What is the internet",
      answer: "A system of interconnected computer network"
    },
    {
      question: "What is cache",
      answer: "Component that stores frequently accessed files and instructions"
    },
    {
      question: "What does the DHCP protocol do",
      answer: "The Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses to devices on a network"
    }
  ],
  maths: [
    {
      question: "Name the equation x^2 + y^2 = r^2",
      answer: "Circle Equation"
    },
    {
      question: "What is the formula for Variance",
      answer: "Var(X) = E(X^2) - [E(X)]^2"
    },
    {
      question: "What is the num of r^3 in terms of n",
      answer: "(n^2)/4 * n^2 * (n+1)^2"
    },
    {
      question: "What is the sum of r^2 in terms of n",
      answer: "n/6 * (n+1) * (2n+1)"
    }
  ],
  geography: [
    {
      question: "What is the capital city of Burkina Faso",
      answer: "Ouagadoudou"
    },
    {
      question: "What is the largest mountain range in South America",
      answer: "Andes"
    },
    {
      question: "What is the largest country by land area in Africa",
      answer: "Algeria"
    },
    {
      question: "In which Canadian Province is Vancouver in",
      answer: "British Columbia"
    },
    {
      question: "Which european country has the largest population",
      answer: "Russia"
    },
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