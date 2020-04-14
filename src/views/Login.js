import React from 'react'

export default (props) => {
  const goHome = () => {
    props.history.push('/home')
  }
  return (
    <div className="container mx-auto py-2">
      <button onClick={goHome} className="px-2 py-1 text-primary border border-primary rounded focus:outline-none">
        Login
      </button>
    </div>
  )
}
