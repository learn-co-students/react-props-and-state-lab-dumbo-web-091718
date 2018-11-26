import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  handleAdopt = (e) => {
    return this.props.onChangeAdopt(e.target.parentElement.parentElement)
  }

  render() {
    console.log(this.props.pets)
    let arrayOfPets = this.props.pets.map((pet) => 
      <Pet 
        key={pet.id}
        id={pet.id}
        name={pet.name}
        gender={pet.gender}
        type={pet.type}
        age={pet.age}
        weight={pet.weight}
        isAdopted={pet.isAdopted}
        onAdoptPet={this.handleAdopt}
      />
    )
    
    return <div className="ui cards">{arrayOfPets}</div>
  }
}

export default PetBrowser
