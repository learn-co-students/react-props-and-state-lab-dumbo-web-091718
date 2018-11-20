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

  onChangeType = (petType) => {
    this.setState({
      filters: {
        type: petType
      }
    })
  }


  onFindPetsClick = (query = "pets") => {
    this.state.filters.type === 'dog' ? query = "pets?type=" + this.state.filters.type : null;
    this.state.filters.type === 'cat' ? query = "pets?type=" + this.state.filters.type : null;
    this.state.filters.type === 'micropig' ? query = "pets?type=" + this.state.filters.type : null;
    fetch(`/api/${query}`)
      .then(res => res.json())
      .then(json => {
        query === "pets" ? (
          this.setState({pets: json})
        ) : (
        this.setState({
          pets: json.filter(pet => pet.type === this.state.filters.type)
        }))
      });
  }



  onAdoptPet = (petId) => {
    let findPet = [...this.state.pets].find(pet => pet.id === petId);
    let newPets = [...this.state.pets].filter(pet => pet.id !== petId)
    findPet.isAdopted = true;
    this.setState({
      pets: [findPet, ...newPets]
    })
    console.log([findPet, ...newPets]);
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
