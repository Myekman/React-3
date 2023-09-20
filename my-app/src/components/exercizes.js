import { useState } from "react";

function Exercizes(props) {

    const [emotion, setEmotion] = useState("Happy");
    let emotions = [
        "sad",
        "Arg",
        "Irriterad",
        "lycklig"
    ]

    const handleEmotion = () => {
       setEmotion(emotions[2])

    }

    return (
        <section>
            {/* -------------------------------props */}
            <p>Copyright {props.year}</p>

            <ul>
                {props.dishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.title}
                    </li>
                ))}
            </ul>

            {/* -------------------------------use state */}     
            <h1>Current emotion is {emotion}</h1>
            <button onClick = {handleEmotion}>
                sad
            </button>
        </section>

    )
}

export default Exercizes