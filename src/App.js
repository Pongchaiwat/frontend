import React from 'react';
import axios from 'axios';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';

export default class App extends React.Component {
  state = {
    test: []
  }

  componentDidMount() {
    axios.get(`/api/company`)
      .then(res => {
        const company = res.data;
        this.setState({ company });
        //console.log(test);
      })
  }

  render() {
    return (
      <div>
        <CustomerInfo />
        <h1>Test</h1>
        <ul>
          {
            this.state.test
              .map(test =>
                <li key={test.id}>{test.des}</li>
              )
          }
        </ul>
      </div>
    );
  }
}

//export default App;
