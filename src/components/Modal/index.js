import React from 'react'
import './index.less'

export default function ({ visible, onCancel }) {
  const onClick = (e) => {
    onCancel()
  }
  return (
    <div className={visible ? 'm-modal-wrap in' : 'm-modal-wrap'}>
      <div className="content">
        <span className="close" onClick={onClick}>
          &times;
        </span>
        lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...lorem...
      </div>
    </div>
  )
}
