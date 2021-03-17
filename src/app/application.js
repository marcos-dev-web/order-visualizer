import "./style.css";

import React, { Component } from "react";


class Trat {
  
}

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
      blocks: [],
      lengthArray: 10,
      widthBlock: 25,
    };
  }

  tratInput = (event) => {
    const value = event.target.value.toLowerCase();
    let string = value;

    if (value.match(/[a-z]/g) != null) {
      string = value.replace(/[a-z]/g, "");
    }
    if (string.length >= 2) {
      string = string.slice(0, 2);
    }

    this.setState({
      valueInput: string,
    });

    if (string !== value) {
      event.target.value = string;
    }
  };

  verifyKeyPressed = (event) => {
    const keyPressed = event.key;

    const acceptKeys = [
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Shift",
      "Ctrl",
      "Home",
      "End",
    ];

    const find = acceptKeys.find((key) => keyPressed === key);

    if (find != null || (find === null && event.CtrlKey)) {
      this.tratInput(event);
    } else {
      event.preventDefault();
    }
  };

  generateArray = () => {
    let length = this.state.lengthArray;
    if (this.state.valueInput.length > 0) {
      let n = Number.parseInt(this.state.valueInput);
      if (n >= 25 && n < 40) {
        this.setState({
          widthBlock: 15,
        });
      } else if (n >= 40 && n < 70) {
        this.setState({
          widthBlock: 10,
        });
      } else if (n >= 70) {
        this.setState({
          widthBlock: 2,
        });
      } else {
        this.setState({
          widthBlock: 25,
        });
      }
      if (n >= 2) {
        length = n;
      } else {
        alert("the number need higher than 2 or equal");
        return;
      }
    }
    let arr = [];
    for (let i = 0; i < length; i++) {
      console.log(this.state.widthBlock)
      arr.push({
        h: randomMinMax(100, 500),
        bg: "rgba(0, 17, 255, 0.404)",
      });
    }

    this.setState({
      blocks: arr,
    });
  };

  orderArray = () => {
    let arr = this.state.blocks;
    let length = arr.length;
    let j = 0;

    while (j < (length - 1) * 2) {
      for (let i = 0; i < length - 1; i++) {
        let hOld = arr[i].h;
        let hNow = arr[i + 1].h;
        if (higherNumber(hOld, hNow)) {
          arr[i].h = hNow;
          arr[i + 1].h = hOld;
          this.setState({
            blocks: arr,
          });
        }
      }
      j++;
    }
  };

  componentDidMount() {
    this.generateArray();
  }

  render() {
    return (
      <main className="main">
        <input
          className="input_length"
          type="text"
          placeholder="length array"
          maxLength="8"
          minLength="1"
          required
          onKeyDown={this.verifyKeyPressed}
          onKeyUp={this.verifyKeyPressed}
          onDrop={this.verifyKeyPressed}
        />
        <p>
          Length Array: (
          {this.state.valueInput != ""
            ? this.state.valueInput
            : this.state.lengthArray}
          )
        </p>
        <div className="buttons">
          <button className="button" onClick={this.generateArray}>
            Regenerate
          </button>
          <button className="button" onClick={this.orderArray}>
            Order
          </button>
        </div>
        <section className="container">
          {this.state.blocks.map((block, index) => {
            const style = {
              width: `${this.state.widthBlock}px`,
              height: `${block.h}px`,
              backgroundColor: block.bg,
            };
            return (
              <div key={index} className="block" style={style}>
                {this.state.widthBlock >= 25 ? <p>{block.h}</p> : null}
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

function randomMinMax(min, max) {
  return Math.floor(min + Math.random() * (max - min) - 1);
}

function higherNumber(a, b) {
  return a > b;
}
