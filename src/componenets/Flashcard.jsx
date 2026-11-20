import React, { useEffect, useReducer, useState } from 'react'

const Flashcard = ({flashcards}) => {
    const [flashcardState, setFlashcardState] = useState({
        number: 0,
        covered: true
    })

    useEffect(function() {
        setFlashcardState({
            number: 0,
            covered: true   
        })
    }, [flashcards])

    const flashcard = flashcards[flashcardState.number]

    function flashcardClicked() {
        setFlashcardState(function(prev) {
            return (
                {
                    ...prev,
                    covered: !prev.covered
                }
            )
        })
    }

    function handleNavigation({type}) {
        let num = 0
        if (type === "next") {
            num = 1
        }
        else {
            num = -1
        }

        if (!flashcards[flashcardState.number+num]) return

        setFlashcardState(function(prev) {
            return (
                {
                    covered: true,
                    number: prev.number+num
                }
            )
        })
    }

  return (
    <div className="w-full">
        {flashcards.length > 0 && flashcard ? (
            <div className="w-full">
                <div className="flex items-center justify-center">
                    <button onClick={() => flashcardClicked()} className="rounded-3xl w-full bg-zinc-200 h-80 cursor-pointer">
                        {flashcardState.covered ? (
                            <h1 className="text-center font-semibold text-2xl w-5/6 mx-auto">{flashcard.question}</h1>
                        ): 
                        (
                            <h1 className="text-center font-semibold text-2xl w-5/6 mx-auto">{flashcard.answer}</h1>
                        )}
                        
                    </button>
                </div>

                <div className="flex flex-row justify-center gap-5 mt-2 bg-zinc-200 rounded-full w-7/8 mx-auto py-2">
                    <button onClick={() => handleNavigation({type: "prev"})} className="bg-blue-500 px-5 py-2 rounded-lg">Prev</button>
                    <button onClick={() => handleNavigation({type: "next"})} className="bg-blue-500 px-5 py-2 rounded-lg">Next</button>
                </div>
            </div>
        ):
        (
            <h1 className="text-zinc-500 font-semibold text-center">Add flashcards to get started</h1>
        )}
    </div>
  )
}

export default Flashcard