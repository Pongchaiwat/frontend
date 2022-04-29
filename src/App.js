import React from 'react';
import axios from 'axios';

// function App() {

//   componentDidMount() {
//     axios.get(`http://localhost:5000/`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }
//   return (
//     <div>
//       <h1>Hello Frontend++</h1>
//     </div>
//   );
// }

export default class App extends React.Component {
  state = {
    test: []
  }

  componentDidMount() {
    axios.get(`/api/test`)
      .then(res => {
        const test = res.data;
        this.setState({ test });
        //console.log(test);
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.test
            .map(test =>
              <li key={test.id}>{test.des}</li>
            )
        }
      </ul>
    )
  }
}

//export default App;
