import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    b: true
  }

  flip = () => {
    const bool = this.state.b
    this.setState({
      b: !bool
    })
  }

  render() {
    return (
      <Card onClick = {() => {this.flip()}}>
        <div>
          <div className="image">
            <img src= {this.state.b ? this.props.data.sprites.front : this.props.data.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.data.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.data.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
