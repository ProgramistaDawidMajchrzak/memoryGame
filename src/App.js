import React, { Component } from 'react';
import './App.css';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import GamePanel from './components/GamePanel';
import StartPanel from './components/StartPanel';



class App extends Component {
  state = {
    gameStart: false,
    gameTypes: [{ id: 1 }, { id: 2 }, { id: 3 }],
    gameChosenType: 0,
    randomSecrets: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'],
    firstPlayerName: '',
    secondPlayerName: '',
    firstPlayerScore: 0,
    secondPlayerScore: 0,
    clicked: 0,
    boxes: [
      { id: 1, secret: '', opened: true, visibly: true },
      { id: 2, secret: '', opened: true, visibly: true },
      { id: 3, secret: '', opened: true, visibly: true },
      { id: 4, secret: '', opened: true, visibly: true },
      { id: 5, secret: '', opened: true, visibly: true },
      { id: 6, secret: '', opened: true, visibly: true },
      { id: 7, secret: '', opened: true, visibly: true },
      { id: 8, secret: '', opened: true, visibly: true },
      { id: 9, secret: '', opened: true, visibly: true },
      { id: 10, secret: '', opened: true, visibly: true },
      { id: 11, secret: '', opened: true, visibly: true },
      { id: 12, secret: '', opened: true, visibly: true },
      { id: 13, secret: '', opened: true, visibly: true },
      { id: 14, secret: '', opened: true, visibly: true },
      { id: 15, secret: '', opened: true, visibly: true },
      { id: 16, secret: '', opened: true, visibly: true },
    ],
    firstSecret: '',
    secondSecret: '',
    firstId: 0,
    secondId: 0,
  }

  handleGiveFirstPlayerName = e => {
    this.setState({
      firstPlayerName: e.target.value
    })
  }

  handleGiveSecondPlayerName = e => {
    this.setState({
      secondPlayerName: e.target.value
    })
  }

  handleChoosenGame = (e) => {
    this.setState({
      gameChosenType: e.target.id
    })
  }

  handleStartGame = () => {



    this.setState({
      gameStart: true
    })

  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {

    let randomsArray = [...this.state.randomSecrets];

    function shuffle() {
      let currentIndex = randomsArray.length, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [randomsArray[currentIndex], randomsArray[randomIndex]] = [
          randomsArray[randomIndex], randomsArray[currentIndex]];
      }
    }
    shuffle(randomsArray)

    let boxesArray = [...this.state.boxes];

    for (let i = 0; i <= boxesArray.length; i++) {
      boxesArray.forEach(element => element.secret = randomsArray[i++])
    }

    this.setState({
      boxes: boxesArray
    })

  }

  handleBoxClick = i => {
    const { boxes, clicked } = this.state;
    let newBoxes = [...boxes];
    newBoxes[i].opened = false;
    if (clicked % 2 !== 0 && clicked > 0) {
      this.setState({
        secondSecret: newBoxes[i].secret,
        secondId: newBoxes[i].id,
        clicked: clicked + 1,
        boxes: newBoxes
      })
      setTimeout(this.handleGivePoints, 300)
    } else {
      this.setState({
        firstSecret: newBoxes[i].secret,
        firstId: newBoxes[i].id,
        clicked: clicked + 1,
        boxes: newBoxes
      })
    }
  }

  handleGivePoints = () => {
    const { firstPlayerScore, secondPlayerScore, clicked, firstSecret, secondSecret } = this.state;
    if (firstSecret === secondSecret) {
      if (clicked % 2 === 0 && clicked % 4 !== 0)
        this.setState({
          firstPlayerScore: firstPlayerScore + 1
        })
      else if (clicked % 4 === 0) {
        this.setState({
          secondPlayerScore: secondPlayerScore + 1
        })
      }
      this.handleClearCorrectBoxes()
    } else {
      this.handleCloseBoxes();
    }
  }

  handleClearCorrectBoxes = () => {
    const { boxes, firstId, secondId } = this.state;
    let newBoxes = [...boxes];
    newBoxes[firstId - 1].visibly = false;
    newBoxes[secondId - 1].visibly = false;
    this.setState({
      boxes: newBoxes
    })
  }

  handleCloseBoxes = () => {
    const { boxes, firstId, secondId } = this.state;
    let newBoxes = [...boxes];
    newBoxes[firstId - 1].opened = true;
    newBoxes[secondId - 1].opened = true;
    this.setState({
      boxes: newBoxes
    })
  }

  render() {
    const { firstPlayerScore, secondPlayerScore, boxes, gameStart, firstPlayerName, secondPlayerName, gameTypes } = this.state;
    return (
      <>
        {!gameStart && <StartPanel changeFirstName={this.handleGiveFirstPlayerName} changeSecondName={this.handleGiveSecondPlayerName} gameTypes={gameTypes} chooseGame={this.handleChoosenGame} gameStart={this.handleStartGame} />}

        {gameStart && <h1 className='main-title'>Gra memory</h1>}
        {gameStart && <PlayerOne score={firstPlayerScore} name={firstPlayerName} />}
        {gameStart && <PlayerTwo score={secondPlayerScore} name={secondPlayerName} />}
        {gameStart && <GamePanel
          click={this.handleBoxClick}
          boxes={boxes}
        />}
      </>
    )
  }
}

export default App;
