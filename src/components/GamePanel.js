import React from 'react';
import ClicableBoxes from './ClicableBoxes';
import SecretBoxes from './SecretBoxes';

const GamePanel = (props) => {
    return (
        <>
            <div className='game-box'>
                <div className='game-panel'>
                    <div className='visible-panel'>
                        <ClicableBoxes click={props.click} boxes={props.boxes} />
                    </div>
                    <div className='unvisible-panel'>
                        <SecretBoxes boxes={props.boxes} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamePanel;