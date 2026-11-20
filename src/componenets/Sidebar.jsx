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
    <div className="hidden md:flex flex-col bg-zinc-900 min-h-screen w-65 left-0 items-center justify-center gap-5">
      <SidebarButton name={"Custom"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"CS"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"Maths"} mode={mode} setMode={setMode}/>
      <SidebarButton name={"Geography"} mode={mode} setMode={setMode}/>
    </div>
  )
}

export default Sidebar