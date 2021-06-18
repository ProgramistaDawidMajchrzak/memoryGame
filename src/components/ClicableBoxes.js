import React from 'react';
import Box from './Box';

const ClicableBoxes = (props) => {
    return (
        <>
            <div className='flex-row'>
                {props.boxes.map((box, i) => <Box
                    secret={box.secret}
                    click={props.click}
                    key={box.id}
                    id={box.id}
                    isOpen={box.opened}
                    i={i}
                />)}
            </div>
        </>
    )
}

export default ClicableBoxes;