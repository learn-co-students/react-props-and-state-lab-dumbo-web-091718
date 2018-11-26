import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (selType) => {
    this.setState({
      filters: {
        ...this.state.filters,  
        type: selType
      }
    })
  }

  onFindPetsClick = () => {
    let petsURL = '/api/pets'
    if(this.state.filters.type !== 'all'){
      petsURL = petsURL + '?type=' + this.state.filters.type
    }
    
    // console.log(petsURL)
    fetch(petsURL)
    .then(res => res.json())
    .then(pets => this.setState({
      pets: pets
    }))
  }

  onChangeAdopt = (pet) => {
    console.log(pet.id)
    console.log(pet.dataset.type)
    let pets = this.state.pets.map((foundPet) => {
      return foundPet.id === pet.id ? {...foundPet, isAdopted: true } : foundPet
    })
    // console.log(selectedPet)
    this.setState({ pets })
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onChangeAdopt={this.onChangeAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
