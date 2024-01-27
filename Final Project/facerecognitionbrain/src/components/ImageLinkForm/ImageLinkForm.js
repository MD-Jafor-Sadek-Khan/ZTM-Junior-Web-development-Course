import React from "react"
import "tachyons"
import "./ImageLinkForm.css"

export const ImageLinkForm = ({
  handleImageSubmitCount,
  inputOnChangeHandler
}) => {
  return (
    <div className="center flex-column">
      <p className="b pb2 pt2">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="center pa4 br3 shadow-5 form ">
          <input
            id="img-link-form"
            onChange={inputOnChangeHandler}
            className="f5 pa2 w-70 center"
            type="text"
          />
          <button
            onClick={()=>handleImageSubmitCount()}
            className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}
