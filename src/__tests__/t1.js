import { Component } from 'react';


const htmlBase = <h1>Hello, World</h1>;

class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return 'I have a '+this.name;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name); //passando parametro para o construtor da class Car
    this.model = mod;
  }

  show() {
    return this.present() + ', it is a '+this.model;
  }
}

const model = new Model('ford', 'Mustang');
const html = <a href="#">{model.show()}</a>

export class Header extends Component {
  render() {
    return (
      <div>
        {htmlBase}
      </div>
    );
  }
}

export class Hello extends Component {

  calc() {
    return 6 * 2;
  }

  render() {
    return (
      <>
        <h1>this calc is: {this.calc()}<br/>it's works</h1>
        <hr/>
        {html}
      </>
    );
  }
}

let nome = "marcos"; // works in any locale
function a() {

  if (1 / 2 > 0) {
    var res = 1/2;
    //the var variable works inside all function ont only inside if
    let res2 = 'res2';
    //the let variable only works here, inside of statment if
    console.log(nome);
  }
  console.log(`var res: ${res}`);
  // console.log(`let res2: ${res2}`); // - error
}
a()

export class Button extends Component {

  clicked = function() {
    const h1 = document.createElement('h1');
    h1.innerHTML = this;
    document.body.appendChild(h1)
    alert(this)
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.clicked}>Click here</button>
    );
  }
}
