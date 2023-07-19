import React from 'react';

const Meme = () => {
    return (
        <form className="form">
            <div className="form--row">
                <input type="text" className="form--row_input"/>
                <input type="text" className="form--row_input"/>
            </div>

            <button className="form--button">
                Get a new meme image  🖼
            </button>
        </form>
    )
}

export default Meme