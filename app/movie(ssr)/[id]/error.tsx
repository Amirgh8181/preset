"use client"
const SingleMovieError = ({reset}:{reset:()=>void}) => {
  return (
    <div>
      <h1>SingleMovieError</h1>
      <button onClick={()=>reset()} className="bg-green-400 px-6 py-3 rounded-lg my-4 text-white">reload</button>
    </div>
  )
}

export default SingleMovieError