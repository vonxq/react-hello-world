import React from 'react'
import { render } from 'react-dom'
class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }
  onClick = () => {
    let { count } =this.state
    count++
    this.setState({count})
  }
  render () {
    const { count } = this.state
    const { name } = this.props
    return (
      <button onClick={this.onClick}>{name},您点击了{count}次</button>
    )
  }
}

render(<Hello name="Anne"/>, document.getElementById("app"))
