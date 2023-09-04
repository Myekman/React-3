import React, { Component } from 'react'

// class ClassCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       return { count: prevState.count + 1 }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           Hello, I'm a stateful class component!
//         </h1>
//         <h2>You clicked {this.state.count} times</h2>
//         <button onClick={this.handleClick}>
//             Increment Counter
//         </button>
//       </div>
//     );
//   }
// }

export class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    document.title = this.state.count;
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState(
            prevState => ({
                count: prevState.count + 1
            })
        )}>
          Increment Count ({this.state.count})
        </button>
      </div>
    )
  }
}

export default ClassCounter