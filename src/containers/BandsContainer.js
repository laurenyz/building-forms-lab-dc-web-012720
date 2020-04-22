import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        Welcome to the Add-a-Band Page!
        <BandInput addBand = {this.props.addBand}/>
        <h2>Bands:</h2>
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => (
  { addBand: band => dispatch({ type: "ADD_BAND", band }) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
