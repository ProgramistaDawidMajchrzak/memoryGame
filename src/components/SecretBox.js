import React from 'react';

const SecretBox = (props) => {
    return (
        <>
            <div
                id={props.id}
                className={props.isVisible ? 'secret-box' : 'box-disapear'}
            >
                {props.isVisible && props.secret}
            </div>
        </>
    )
}

export default SecretBox;