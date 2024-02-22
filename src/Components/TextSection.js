import React from 'react';

export default function TextSection( { title, subtext, image, altText, alignment = "left" }) {
    // No image is provided, display only text
    if (image == null) {
        return (
            <div id="text-section-text" style={{maxWidth: '50vw'}}>
                <h1>{title}</h1>
                <p>{subtext}</p>
            </div>
        )
    }

    // Left alignment aligns text to the left hand side, otherwise text is aligned to the right of the image
    const flexDirection = (alignment === "left") ? "row" : "row-reverse";
    return (
        <div id="text-section" style={{width: '100%', maxWidth: '50vw', display: "flex", flexDirection: flexDirection, alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <div id="text-section-text" style={{padding: '0 4em'}}>
            <h1>{title}</h1>
            <p>{subtext}</p>
        </div>
        <div id="text-section-image">
            <img src={image}  alt={altText}/>
        </div>
        </div>
    );
}