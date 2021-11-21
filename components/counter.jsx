import { Component } from "react";

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'Api-Version': '1.29',
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.setState({ count: 999 });

    fetch('https://dev-api.trost.co.kr/selfcare/', { method: 'GET', headers })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => this.setState({count: this.state.count + 1})}
        >+1</button>
        <button
          onClick={() => this.setState({count: this.state.count - 1})}
        >-1</button>
      </div>
    )
  }
}

export default Counter;
