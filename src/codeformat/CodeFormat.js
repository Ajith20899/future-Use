import React, {useState} from 'react';
import { Hightlight } from './Hightlight';

export default function Highlighted() {

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

