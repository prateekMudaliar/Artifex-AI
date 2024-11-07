import React, { useRef, useState } from 'react';
import image from "../assets/image.svg";
import axios from 'axios';
const HeroSection = () => {
    const [imageUrl, setImageUrl] = useState("/");
    const inputRef = useRef(null);

    const imgGenerator = async () => {
        const promptValue = inputRef.current.value.trim();
        if (promptValue === "") {
            return 0; // Do nothing if the input is empty
        }
     
        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "dall-e-3",
                    prompt: promptValue,
                    n: 1,
                    size: "512x512",
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                setImageUrl(data.data[0].url);
            } else {
                console.error("No image data received from the API.");
            }
        } catch (error) {
            console.error("Error generating image:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white flex justify-center font-bold mb-8">Welcome to ArtifexAI</h1>
                <img src={imageUrl === "/" ? image : imageUrl} alt="Generated" style={{ width: '430px', height: '430px' }} className='mx-8 mb-8' />
                
                <div className='w-full flex items-center max-w-md'>
                    <input
                        type='text'
                        ref={inputRef}
                        className='w-full p-2 border border-gray-300 rounded-md text-xl'
                        placeholder="Generate..."
                    />
                    <button
                        className="m-1 p-2 bg-yellow-700 text-xl text-white rounded-md hover:bg-yellow-900 hover:scale-110 transition ease-in-out"
                        onClick={imgGenerator}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeroSection;