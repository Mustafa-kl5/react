import React, { PureComponent } from 'react'

 class Purecom extends PureComponent {
  render() {
    return (
      <div>Pure component
          {this.props.name}
      </div>
    )
  }
}

export default Purecom