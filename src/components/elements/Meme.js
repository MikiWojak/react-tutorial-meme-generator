import React, { useState } from 'react'
import memesData from '../../memesData.js'

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemeImages] = useState(memesData)

    function getMemeImage() {
        const { data: { memes } } = allMemeImages
        const index = Math.floor(Math.random() * memes.length)
        const { url } = memes[index];

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
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
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme
