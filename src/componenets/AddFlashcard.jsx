import React, { useReducer, useState } from 'react'

const AddFlashcard = ({setFlashcards, setIsAdding}) => {
    const [state, setState] = useState({
        question: "",
        answer: ""
    })

    function handleChange(e) {
        setState(function(prev) {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function sumbitHandler() {
        // add to array of qusetions
        setFlashcards(function(prev) {
            const updated = [...prev, state]

            localStorage.setItem("flashcards", JSON.stringify(updated))

            return updated
        })
        

        setIsAdding(false);
    }

    return (
    <div className="flex flex-col items-center w-92 bg-zinc-200 py-10 rounded-2xl">
        <h1 className="font-bold text-2xl text-left">Add a Flashcard</h1>
        <label className="w-3/4 mt-10 text-left font-semibold">Enter a question</label>
        <input name="question" onChange={handleChange} className="w-3/4 bg-zinc-300 mt-2 px-4 py-2 text-sm rounded-full focus:outline-blue-500" placeholder="Example Question"></input>

        <label className="w-3/4 mt-10 text-left font-semibold">Enter the Answer</label>
        <input name="answer" onChange={handleChange} className="w-3/4 bg-zinc-300 mt-2 px-4 py-2 text-sm rounded-full focus:outline-blue-500" placeholder="Example Question"></input>

        <button onClick={sumbitHandler} className="mt-10 py-2 px-5 bg-blue-500 rounded-full cursor-pointer hover:scale-110 duration-200">Sumbit</button>
    </div>
    )
}

export default AddFlashcard