import React, { useState } from 'react'

import Modal from '@/components/Modal'

export default function Home() {
  let [visible, setVisible] = useState(false)

  return (
    <>
      <div>
        <h1 className="text-xl my-2">Home</h1>
        <img className="w-64" src={require('@/pic.jpg')} />
        <button
          className="px-4 py-2 bg-primary text-white border focus:outline-none"
          type="button"
          onClick={() => (visible = setVisible(true))}
        >
          visible
        </button>
      </div>
      <Modal visible={visible} onCancel={() => (visible = setVisible(false))} />
    </>
  )
}
