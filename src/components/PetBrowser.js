import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.pets)
    let arrayOfPets = this.props.pets.map(petObj => {

       return <Pet
         key={petObj.id}
         pet={petObj}
         onAdoptPet={this.props.onAdoptPet}
         />
    })
    return <div className="ui cards">{arrayOfPets}</div>
  }
}

export default PetBrowser
//
