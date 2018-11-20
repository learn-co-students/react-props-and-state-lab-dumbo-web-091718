import React from 'react'

class Filters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pet: "all"
    }
  }

  filterOnChangeType = (event) => {
    console.log(event.target.value)
    this.setState({
      pet: event.target.value
    }, this.props.onChangeType(event.target.value))
  }

  handleClick = () => {
    this.props.onFindPetsClick(this.state.pet)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.filterOnChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
