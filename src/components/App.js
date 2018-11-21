import React from 'react'


import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
  // console.log(fetch)
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  componentDidMount(){
    this.fetchPets()
  }

  fetchPets = () => {
    let baseUrl = ``;
    if(this.state.filters.type === 'all'){
      baseUrl = '/api/pets';
    } else { 
      baseUrl = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => this.setState({
        pets: res
      }))
  }

  handleChangeType = (e) => {
    this.setState({
      filters: {
        [e.target.name]: e.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    console.log(id)
    const updatedPets = this.state.pets.map(pet => {
      if(pet.id === id ){
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({
      pets: updatedPets
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets} />
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
