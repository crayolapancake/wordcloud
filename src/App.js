import React, { Component } from 'react';
// import El from './el';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

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
      clickedWordID: null,
    };
    // this.calcCircleCoords = this.calcCircleCoords.bind(this);
    this.plotCircle = this.plotCircle.bind(this);
  }


  componentWillMount() {
    console.log("willMount");
    this.plotCircle(10);
  }

  plotCircle = (limit) => {
    //  limit is the number of elements inside the words array
    console.log("plotCircle");
    for(var ii = 0; ii < limit;  ii++){
    var ratio = ((ii+1) / limit);
    var pts = this.calcCircleCoords(ratio, 200, 200, 200);

  	// console.log(pts.x+" "+pts.y+" "+ii);

    // put these vars as style on words to make a circle?
    var innerText = "@ "+ii;
  // el.style.top = ~~pts.y+"px";
  // el.style.left = ~~pts.x+"px";
  // el.style.position = "absolute";
  // container.appendChild(el);
    }
  }

   calcCircleCoords(ratio, midX, midY, radius) {
    console.log("calcCircleCoords");
    var xOff =  Math.sin(2*Math.PI*ratio);
    var yOff =  Math.cos(2*Math.PI*ratio);
    var x = midX + (radius * xOff);
    var y = midY + (radius * yOff);

    return { x:x, y:y };
}




  toggle = (index) => {
    if (this.state.clickedWordID === index) {
      this.setState({clickedWordID : null})
    } else {
      this.setState({clickedWordID : index})
    }
  };

  changeClickedColor = (index) => {
    if (this.state.clickedWordID === index) {
      return "deepskyblue";
    }
    return "";
  };

  changeFontSize = (index) => {
    if (this.state.clickedWordID === index) {
      return "34px";
    } else if (this.state.clickedWordID === null) {
       return "24px";
     } else {
       return "18px";
     }
  };

  changeElementHeight = (index) => {
    if (this.state.clickedWordID === index) {
      return "50px";
    } else if (this.state.clickedWordID === null) {
      return "40px";
    } else {
      return "20px";
    }
  };

  // (x, y)
  rotateElements = (index) => {
    console.log(index);
    if (index === 0) {
      return 'rotate(90deg) translate(50px, -170px)'
    } if (index === 1) {
      return 'rotate(300deg) translate(65px, 255px)'
    } if (index === 2) {
      return 'rotate(320deg) translate(170px, 290px)'
    } if (index === 3) {
      return 'rotate(0deg) translate(350px,200px)'
    } if (index === 4) {
      return 'rotate(30deg) translate(430px, 90px)'
    }  if (index === 5) {
      return 'rotate(65deg) translate(450px, -70px)'
    }  if (index === 6) {
      return 'rotate(90deg) translate(400px, -170px)'
    }  if (index === 7) {
      return 'rotate(300deg) translate(-280px, 260px)'
    }  if (index === 8) {
      return 'rotate(320deg) translate(-200px, 250px)'
    } if (index === 9) {
      return 'rotate(0deg) translate(-20px, 200px)'
    } if (index === 10) {
      return 'rotate(30deg) translate(70px, 90px)'
    } if (index === 11) {
      return 'rotate(65deg) translate(100px, -50px)'
    }
  }



  render() {
    return (
      <div className="container">
        {this.state.words.map( (word, index) => {
          return <ul
            key={word.emotion + 1}
            style={{
              background: this.changeClickedColor(index),
              fontSize: this.changeFontSize(index),
              height: this.changeElementHeight(index),
              transform: this.rotateElements(index),
              }}
            onClick={() => {this.toggle(index)}}
          >BEER
            {/* {word.emotion} */}
          </ul>
        })}
      </div>
    )
  }
}

export default App;
