import React from 'react';
import sample4x4 from '../images/box4x4.png'
import sample5x5 from '../images/box5x5.png'
import sample6x6 from '../images/box6x6.png'

const StartPanel = (props, i) => {
    return (
        <>
            <div className='start-panel'>
                <h1 className='main-title'>Gra memory</h1>
                <div className='player-box first-player'>
                    <input type="text" placeholder='Wpisz nazwę gracza' onChange={props.changeFirstName} />
                </div>
                <div className='player-box second-player'>
                    <input type="text" placeholder='Wpisz nazwę gracza' onChange={props.changeSecondName} />
                </div>

                <div className='game-choose-panel'>

                    <div className='game-choose-options' onClick={props.chooseGame} ><img id={props.gameTypes[0].id} src={sample4x4} alt="404" /></div>
                    <div className='game-choose-options' onClick={props.chooseGame} ><img id={props.gameTypes[1].id} src={sample5x5} alt="404" /></div>
                    <div className='game-choose-options' onClick={props.chooseGame} ><img id={props.gameTypes[2].id} src={sample6x6} alt="404" /></div>

                </div>

                <button onClick={props.gameStart} className='start-game-button'>Graj</button>

            </div>


        </>
    )
}

export default StartPanel;