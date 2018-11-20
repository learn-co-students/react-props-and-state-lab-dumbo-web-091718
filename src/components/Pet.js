import React from 'react'

class Pet extends React.Component {

  adoption = (petObj) => {
    if (this.props.petObj.isAdopted === false) {
      return (
      <button className="ui primary button" onClick={()=> this.props.onAdoptPet(this.props.petObj)}>Adopt pet</button>
      )
    } else {
      return (
        <button className="ui disabled button">Already adopted</button>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.petObj.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petObj.age}</p>
            <p>Weight: {this.props.petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoption()}
        </div>
      </div>
    )
  }
}

export default Pet
