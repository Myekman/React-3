import React, {useState} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                
            </button>
        </div>
    )
}

export default UseEffectCounter