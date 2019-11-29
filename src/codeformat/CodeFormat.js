import React, {useState} from 'react';
import { Hightlight } from './Highlight';

export function Highlighted() {

    const [example, setExample] = useState('');

    return (
        <>
            <div>

                <textarea 
                    type="text"
                    onChange={e => setExample(e.target.value)}
                    value={example}
                />

                <Hightlight
                    example={example}
                />
            </div>
        </>
    )
}

