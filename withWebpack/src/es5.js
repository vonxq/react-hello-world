import { createClass } from 'react'
import { render } from 'react-dom'
const Hello = createClass({
  getInitialState: function() {
    return { count: [] };
  },
  getDefaultProps() {
    return {
      name: 'default'
    }
  },
  onClick: function() {
    let { count } =this.state
    count++
    this.setState({count})
  },
  render: function() {
    const { name } = this.props
    const { count } = this.state
    return (
      <button onClick={this.onClick}>{name},您点击了{count}次</button>
    )
  }
})

render(<Hello name="Anne"/>, document.getElementById("app"))
