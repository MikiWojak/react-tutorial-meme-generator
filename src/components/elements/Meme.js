import React, { useState } from 'react'
import memesData from '../../memesData.js'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const { data: { memes } } = allMemeImages
        const index = Math.floor(Math.random() * memes.length)
        const { url } = memes[index];

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
                <img src={meme.randomImage} alt="Meme" className="meme--image"/>
            </div>
        </main>
    )
}

export default Meme
