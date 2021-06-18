import React from 'react';

const Box = (props) => {
    return (
        <>
            <div
                id={props.id}
                onClick={() => props.click(props.i)}
                className={props.isOpen ? 'box' : 'box-disapear'}
            >
            </div>
        </>
    )
}

export default Box;