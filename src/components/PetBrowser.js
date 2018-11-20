import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    // debugger
    let petsArr = this.props.pets.map(petObj => {
      return (
        <Pet
        key={petObj.id}
        petObj={petObj} onAdoptPet={this.props.onAdoptPet}/>
      )
    })
    return <div className="ui cards">{petsArr}</div>
  }
}

export default PetBrowser
