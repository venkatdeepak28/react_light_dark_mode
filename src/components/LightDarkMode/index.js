import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  trueFalse = () => {
    const {isLightMode} = this.state
    if (isLightMode === true) {
      this.setState(prevState => ({isLightMode: false}))
    } else {
      this.setState(prevState => ({isLightMode: true}))
    }
  }

  render() {
    const {isLightMode} = this.state
    let authButton
    if (isLightMode === true) {
      authButton = (
        <div className="light-bg-container">
          <h1 className="-lightmain-heading">Click to Change Mode</h1>
          <button className="dark-mode" type="submit" onClick={this.trueFalse}>
            Dark Mode
          </button>
        </div>
      )
    } else {
      authButton = (
        <div className="bg-container">
          <h1 className="main-heading">Click to Change Mode</h1>
          <button className="light-mode" type="submit" onClick={this.trueFalse}>
            Light Mode
          </button>
        </div>
      )
    }

    return <div className="main-container">{authButton}</div>
  }
}

export default LightDarkMode
