import React, { useRef, useEffect, useCallback } from "react"
import MultiStepForm from "./MultiStepForm"
import Button from "@material-ui/core/Button"

import "../../styles/modal.css"
import arrow from "../../images/modal_arrow.svg"

export default function Modal({ isModalVisible, setIsModalVisible }) {
  const modalRef = useRef()

  //Colocar essa função no wrapper do modal
  // const closeModal = e => {
  //   if (modalRef.current === e.target) {
  //     setIsModalVisible(false)
  //   }
  // }

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && isModalVisible) {
        setIsModalVisible(false)
      }
    },
    [setIsModalVisible, isModalVisible]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      {isModalVisible ? (
        <div
          className="modal-wrapper pb-5"
          style={{
            transform: isModalVisible
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            opacity: isModalVisible ? "1" : "0",
          }}
        >
          <MultiStepForm setIsModalVisible={setIsModalVisible} ref={modalRef} />
          <div className="d-flex justify-content-end pe-5">
            <Button
              className="close-button"
              onClick={() => setIsModalVisible(prev => !prev)}
            >
              <img className="arrow" src={arrow} />
            </Button>
          </div>
        </div>
      ) : null}
    </>
  )
}

// export default Modal

// export default function Modal(props) {
//   const { className, modalRef } = props

//   return (
//     <div ref={modalRef} className={`${className} modal`}>
//       <div>
//         <MultiStepForm />
//       </div>
//       <div className="d-flex justify-content-end pe-5">
//         <img className="arrow" src={arrow}  />

//       </div>
//     </div>
//   )
// }
