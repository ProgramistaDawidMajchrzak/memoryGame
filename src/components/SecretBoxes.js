import React from 'react';
import SecretBox from './SecretBox';

const SecretBoxes = (props) => {
    return (
        <>
            <div className='flex-row'>
                {props.boxes.map(box => <SecretBox
                    secret={box.secret}
                    click={props.click}
                    key={box.id}
                    id={box.id}
                    isVisible={box.visibly}
                />)}
            </div>
        </>
    )
}

export default SecretBoxes;