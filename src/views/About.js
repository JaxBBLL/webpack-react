import React from 'react'

export default function Home() {
  return (
    <div>
      <h1 className="text-xl my-2">About</h1>
      <img className="w-64" src={require('@/pic.jpg')} />
    </div>
  )
}
