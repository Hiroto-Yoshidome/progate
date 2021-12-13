import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ichiro Yamada" };
  }
  handleClick(name) {
    this.setState({ name: name });
  }

  render() {
    return (
      <div>
        <h1>こんにちは、{this.state.name}さん！</h1>

        <button
          onClick={() => {
            this.handleClick("Ichiro Yamada");
          }}
        >
          山田一郎
        </button>
        <button
          onClick={() => {
            this.handleClick("Hanako Tanaka");
          }}
        >
          田中花子
        </button>
      </div>
    );
  }
}

export default Name;
