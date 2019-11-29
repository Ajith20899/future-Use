import React from 'react';
import Highlight from 'react-highlight.js';

export function Hightlight({example}) {

    return (
        <>
            <div>
                <Highlight language={'javascript'}>
                    {example}
                </Highlight>
            </div>
        </>
    )
}

