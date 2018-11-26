import React from 'react'

class Pet extends React.Component {

  handleClick = (e) => {
    return this.props.onAdoptPet(e)
  }


  render() {
    let button;

    if(this.props.isAdopted === false){
      button = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    } else {
      button = <button className="ui disabled button">Already adopted</button>
    }

    return (
      <div className="card" id={this.props.id} data-type={this.props.type}>
        <div className="content">
          <a className="header">
            {this.props.gender === 'female' ? '♀' : '♂'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date" id="type">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
