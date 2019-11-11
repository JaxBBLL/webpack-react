import React, { Component } from 'react'
import Hello from './Hello'
import './App.less'

export default class App extends Component {
  state = {
    list: ['Jack', 'Peter']
  }

  render() {
    return (
      <section className="app">
        <Hello />
        <div className="content">
          <img src={require('./pic.jpg')} height="60" />
          <ul>
            {this.state.list.map(item => (
              <li key={item}> {item}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}
