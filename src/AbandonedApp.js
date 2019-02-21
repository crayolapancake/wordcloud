import React, { Component } from 'react';
// import El from './el';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.elRef = React.createRef()

    this.state = {
      words: [
        {id: 1, emotion: "happy"},
        {id: 2, emotion: "sad"},
        {id: 3, emotion: "optimistic"},
        {id: 4, emotion: "fearful"},
        {id: 5, emotion: "depressed"},
        {id: 6, emotion: "worried"},
        {id: 7, emotion: "stressed"},
        {id: 8, emotion: "anxious"},
        {id: 9, emotion: "confident"},
        {id: 10, emotion: "valued"},
        {id: 11, emotion: "frustrated"},
        {id: 12, emotion: "peckish"}
      ],
      bgColor: 'aliceblue',
      justClickedEmotion: 'banana',
    };
    this.handleClickedFeeling = this.handleClickedFeeling.bind(this);
    this.changeBackgroundColorState = this.changeBackgroundColorState.bind(this);
  };

  changeBackgroundColorState(word){
    console.log("word passed from handleClick:", word);
    console.log("should be word you just clicked:", this.state.justClickedEmotion);

    if(word === this.state.justClickedEmotion){
      this.setState({ bgColor: 'mediumspringgreen'}, console.log("word is equal to justClickedEmotion"));
    } else {
      this.setState({ bgColor: 'tomato'}, console.log("not equal"));
    }
  }

  // STATE IS NOT SETTING DESPITE CALLBACK :( :(
  handleClickedFeeling = (word) => {
    this.setState({ justClickedEmotion: word }, this.changeBackgroundColorState(word))
  }

  render() {
    return (
      <div className="emotions">
        Just Clicked: {this.state.justClickedEmotion}
        <div className="containerdiv">
          {this.state.words.map( (word, index) => {
          return <ul
            key={word.id}
            onClick={() => this.handleClickedFeeling(word.emotion)}
            style={{border: '1px solid darkorchid', background: this.state.bgColor}}
            >
            {word.emotion}
          </ul>
          })}
        </div>
      </div>
    );
  }
}

export default App;
