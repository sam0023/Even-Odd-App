// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, random: 0}

  random = () => {
    let {random} = this.state

    const randomNumber = Math.floor(Math.random() * 100)
    random = randomNumber + random
    if (random % 2 === 0) {
      this.setState({isEven: true, random})
    } else {
      this.setState({isEven: false, random})
    }
  }

  render() {
    const {isEven, random} = this.state
    const x = (
      <div className="bg">
        <h1>count {random}</h1>
        <p>Count is {isEven ? 'even' : 'odd'}</p>
        <div>
          <button onClick={this.random} type="button" className="btn">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
    return x
  }
}

export default EvenOddApp
