'use client'
import React from 'react';

function CodeSnippet({children}) {
    const [
        isSnippetShown,
        setIsSnippetShown,
    ] = React.useState(false);

    if(isSnippetShown) {
        return children;
    } else {
        return (<div className="reveal">
            <button
                onClick={() =>
                    setIsSnippetShown(true)
                }
            >
                Reveal Content
            </button>
        </div>)
    }
}

export default CodeSnippet;
