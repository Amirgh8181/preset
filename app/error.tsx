"use client"
const Error = ({reset}:{reset:()=>void}) => {
  return (
    <div>
      <h1>error</h1>
      <button onClick={()=>reset()} className="bg-blue-400 px-6 py-3 rounded-lg my-4 text-white">reload</button>
    </div>
  )
}

export default Error