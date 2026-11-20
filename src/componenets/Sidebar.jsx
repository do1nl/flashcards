import React from 'react'

function SidebarButton({name, mode, setMode}) {
  return (
    <button
      className={`${mode === name ? "bg-blue-500" : "bg-white"} rounded-full w-3/4 py-4 text-lg font-bold cursor-pointer transition-colors duration-200`}
      onClick={() => setMode(name)}
    >
      {name}
    </button>
  )
}

const Sidebar = ({mode, setMode}) => {
  return (
    <div className="flex flex-col bg-zinc-900 w-full md:w-65 min-h-0 md:min-h-screen items-center justify-center gap-5 p-8">
      <SidebarButton name={"Custom"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"CS"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"Maths"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"Geography"} mode={mode} setMode={setMode}/>
    </div>
  )
}

export default Sidebar