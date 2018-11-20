import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    let arrayOfPets = this.props.pets.map(pet => {return (
      <Pet key={pet.id} pet={pet} isAdopted={this.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
    )})
    return (<div className="ui cards">
      {arrayOfPets}
    </div>)
  }
}

export default PetBrowser
