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

  onChangeType = petType => {
    this.setState({ filters: { ...this.state.filters, type: petType}});
  }

  onFindPetsClick = () => {
    let url
    let base_url = `/api/pets`
    let pet = this.state.filters.type
    if (pet !== 'all') {
      url = base_url + `?type=${pet}`
    } else {
      url = base_url
    }
    fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(petsArr => {
      this.setState({pets: petsArr})
    })
  }

  onAdoptPet = petId => {
    console.log(petId)
    let adoptedArr = [...this.state.pets].map(petObj => {
      if (petObj.id === petId) {
         petObj.isAdopted = true;
         return petObj;
      } else {
        return petObj
      }
    })
    this.setState({pets: adoptedArr})
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
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//
export default App
