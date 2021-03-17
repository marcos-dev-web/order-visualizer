
import './style.css';

import React, { Component } from "react";

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
      blocks: [],
      lengthArray: 10,
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
      if (n >= 2) {
        length = n;
      } else if (n > 50) {
        alert('the number need less than or equal to 20');
        return;
      } else {
        alert('the number need higher than 2 or equal');
        return;
      }
    }
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({
        w: 25,
        h: randomMinMax(100, 500)
      });
    }

    this.setState({
      blocks: arr,
    })
  }

  orderArray = () => {
    let arr = this.state.blocks;
    let length = arr.length;
    let i = 0;
    while (i < (length - 1) * 2) {
      for (let i = 0; i < length-1; i++) {
        let hOld = arr[i].h
        let hNow = arr[i+1].h

        if (higherNumber(hOld, hNow)) {
          arr[i].h = hNow;
          arr[i+1].h = hOld;
          this.setState({
            blocks: arr,
          })
        }
      }
      i++;
    }
  }

  componentDidMount() {
    this.generateArray();
  }

  render() {
    return (
      <main className="main">
        <input
          type="text"
          placeholder="length array"
          maxLength="8"
          minLength="1"
          required
          onKeyDown={this.verifyKeyPressed}
          onKeyUp={this.verifyKeyPressed}
          onDrop={this.verifyKeyPressed}
        />
        <p>{this.state.valueInput}</p>
        <div className="buttons">
          <button className="button" onClick={this.generateArray}>Regenerate</button>
          <button className="button" onClick={this.orderArray}>Order</button>
        </div>
        <section className="container">
          {
            this.state.blocks.map((block, index) => {
              const style = {
                width: `${block.w}px`,
                height: `${block.h}px`,
              };
              return <div key={index} className="block" style={style}><p>{block.h}</p></div>
            })
          }
        </section>
      </main>
    );
  }
}

function randomMinMax(min, max) {
  return Math.floor(min + (Math.random() * (max - min)) - 1);
}

function higherNumber(a, b) {
  return a > b;
}