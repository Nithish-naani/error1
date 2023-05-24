// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  clickBtn = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    const text = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.clickBtn}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
