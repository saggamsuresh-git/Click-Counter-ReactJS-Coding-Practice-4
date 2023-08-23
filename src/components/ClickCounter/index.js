// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {clicks: 0}

  onClickMe = () => {
    console.log('Hi')
    this.setState(prevState => ({clicks: prevState.clicks + 1}))
  }

  render() {
    const {clicks} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="clickCount">{clicks}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" type="submit" onClick={this.onClickMe}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
