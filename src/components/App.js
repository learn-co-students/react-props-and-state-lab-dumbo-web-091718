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

  onFindPetsClick = () => {
    let BASE_URL = '/api/pets'

    if (this.state.filters.type !== 'all') {
      BASE_URL += '?type='+ this.state.filters.type
    }
    fetch(BASE_URL)
    .then(res => res.json())
    .then(json => this.setState({
      pets: json
    }))
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: [e.target.value]
      }
    })
  }

  onAdoptPet = (petObj) => {

    let updateArr = [...this.state.pets]

    updateArr.forEach(p => {
      // map also works but we don't need to return an array
      if (p === petObj) {
        p.isAdopted = true
      }
    })
    // console.log(updateArr)

    this.setState({
      pets: updateArr
    })
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
