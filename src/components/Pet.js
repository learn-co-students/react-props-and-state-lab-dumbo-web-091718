import React from 'react'

class Pet extends React.Component {

  findId = petObj => {
    this.props.onAdoptPet(petObj.id)
  }

  render() {
    let sex
    if (this.props.pet.gender === 'male') {
      sex = '♂'
    } else {
      sex = '♀'
    }

    let adoptBtn
    if (this.props.pet.isAdopted === false) {
      adoptBtn = <button onClick={()=>this.findId(this.props.pet)} className="ui primary button">Adopt pet</button>
    } else {
      adoptBtn = <button className="ui disabled button">Already adopted</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {sex}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptBtn}
        </div>
      </div>
    )
  }
}
//
export default Pet
