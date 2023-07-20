import React, { useState } from 'react'
import memesData from '../../memesData.js'

const Meme = () => {
    const [memeImage, setMemeImage] = useState('')

    function getMemeImage() {
        const { data: { memes } } = memesData
        const index = Math.floor(Math.random() * memes.length)
        const { url } = memes[index];

        setMemeImage(url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />

                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>

            <div className="meme">
                <img src={memeImage} alt="Get meme" className="meme--image"/>
            </div>
        </main>
    )
}

export default Meme
