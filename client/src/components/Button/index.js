import React, {Component} from "react";

class Boton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let img = "";

    switch (this.props.eleccion) {
        case "piedra":
            break;
        case "tijera":
            break;
        case "papel":
            break;
        default:
            break;
    }

    return (
        <div>RETURN</div>
    );
  }
}

export default Boton;