import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const {pets} = this.props
    const petsList = pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} /> ) 
    return <div className="ui cards">{petsList}</div>
  }
}

export default PetBrowser
