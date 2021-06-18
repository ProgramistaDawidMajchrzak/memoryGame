import React from 'react';

const PlayerTwo = (props) => {
    return (
        <>
            <div className='player-box second-player'>
                <h3>{props.name}</h3>
                <div className='result-box'>
                    <h3>Wynik:</h3>
                    <h3>{props.score}</h3>
                </div>
            </div>
        </>
    )
}

export default PlayerTwo;