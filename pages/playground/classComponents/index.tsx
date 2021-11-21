import { Component } from "react";
import Counter from "../../../components/counter";

class Hello extends Component {
  static defaultProps = {
    name: '이름없음',
  }

  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        { isSpecial && <b>*</b> }
        안녕하세요 {name}
        <Counter />
      </div>
    )
  }
}

export default Hello;
