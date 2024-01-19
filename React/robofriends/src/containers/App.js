import React from "react"
import { CardsList } from "../components/CardsList"
import { SearchBox } from "../components/SearchBox"
import { Scroll } from "../components/Scroll"
import "./App.css"

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }))
  }

  searchBoxOnChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    const searchArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? (
      <h1 className="tc mt7">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchBoxOnChange={this.searchBoxOnChange} />
        <Scroll>
          <CardsList users={searchArray} />
        </Scroll>
      </div>
    )
  }
}
