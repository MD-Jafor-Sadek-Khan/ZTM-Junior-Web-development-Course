import React from "react"
import { Card } from "./Card"


export const CardsList = ({ users }) => {
  const cardsArray = users.map((user) => {
    return (
      <Card key={user.id} id={user.id} email={user.email} name={user.name} />
    )
  })
  return (
    <div>
        { cardsArray }
    </div>
  )
}
