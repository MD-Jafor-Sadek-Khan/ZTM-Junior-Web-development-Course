import React from "react"

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
    }
  }

  componentDidCatch(){
    this.setState({error:true})
  }
  render() {
    return this.state.error ? (
      <h1>Opps! We Have an Error</h1>
    ) : (
      <>{this.props.children}</>
    )
  }
}
