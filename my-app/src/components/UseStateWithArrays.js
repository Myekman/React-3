import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNum] = useState([1,2,3]);
    const addNums = () => {
        // thanks to the spreadoperator the array is not replaced by the new value
        setNum([...nums, nums.length + 1])
    }
    const removeNums = () => {
        setNum(
            nums.filter((item, last) => {
                return last !== nums.length -1;
            })
        )
    }
    return (
        <div>
            <button onClick={addNums}>
                Add nums
            </button>

            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>

            <button onClick = {removeNums}>
                remove nums
            </button>
        </div>
    )
}

export default UseStateWithArrays