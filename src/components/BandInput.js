// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    console.log("submitting")
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  handleOnChange = event => {
    this.setState({name: event.target.value})
  }
  render() {
    return(
      <div>
        <form onSubmit = {this.handleOnSubmit}>
          <input type="text" placeholder="Band Name" onChange = {this.handleOnChange} name= "name" value = {this.state.name}>
          </input>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
