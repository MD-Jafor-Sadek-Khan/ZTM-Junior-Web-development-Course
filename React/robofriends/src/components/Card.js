import React from "react"
import "tachyons"

export const Card = ({ id, email, name }) => {
  return (
    <div className="tc bg-light-green dib shadow-5 grow ma2 pa3 bw2 br3">
      <img src={`https://robohash.org/${id}?size=200x200`} alt={`${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
