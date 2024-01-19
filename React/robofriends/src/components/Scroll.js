import React from "react"

export const Scroll = ({ children }) => {
  return (
    <div
      style={{
        marginTop: "40px",
        overflow: "scroll",
        borderTop: "1px solid black",
        height: "30em",
        scrollbarWidth: "thin",
        padding:"20px"
      }}
    >
      {children}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0;
          }
        `}
      </style>
    </div>
  )
}
