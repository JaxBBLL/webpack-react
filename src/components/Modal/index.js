import React from 'react'
import './index.css'

export default function (props) {
  const { visible, onCancel } = props
  const modalRef = React.createRef()
  React.useEffect(() => {
    const ele = modalRef.current
    if (visible) {
      ele.offsetHeight && ele.classList.add('fade')
    } else {
      ele.offsetHeight && ele.classList.remove('fade')
    }
  }, [visible])
  return (
    <div ref={modalRef} className={visible ? 'm-modal-wrap in' : 'm-modal-wrap'}>
      <div className="content">
        <span className="close" onClick={onCancel}>
          &times;
        </span>
        {props.children}
      </div>
    </div>
  )
}
