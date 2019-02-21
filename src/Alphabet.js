import React, { Component } from 'react';
// import El from './el';
import './App.css';

const A = 65


class Alphabet extends Component {
  constructor(props) {
    super(props);
    // this.elRef = React.createRef()

    this.state = {
      bgColor: 'aliceblue',
      justClickedLetter: null,
      justClickedEmotion: null,

      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeBackgroundColorState = this.changeBackgroundColorState.bind(this);

  }
;
  handleClick = (letter) => {
    console.log("should be letter you just clicked", letter);
    this.setState({ justClickedLetter: letter}, this.renderStuff(letter));
  }

  changeBackgroundColorState(letter){
    console.log("letter passed from handleClick", letter);

    console.log("letterState, should be letter you just clicked", this.state.justClickedLetter);

    if(letter === this.state.justClickedLetter) {
      this.setState({ bgColor: 'pink'})
    } else {
      this.setState({ bgColor: 'white'})
    }
  }

  render() {

    return (
      <div className="container">

        <div className="alphabet">
          Just Clicked: {this.state.justClickedLetter}
          <ul>
            {this.state.letters.map(letter =>
            <ul
              key={letter}
              onClick={() => this.handleClick(letter)}
              style={{border: '1px solid darkorchid', background: this.state.bgColor}}>
              {letter}
            </ul>
            )}
          </ul>
        </div>
    </div>
    );
  }
}

export default Alphabet;
