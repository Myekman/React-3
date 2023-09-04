import React, {useState} from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
        console.log(name);
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({
                    // an object passed to the setter function overwrites the old onemptied, so always
                    // spead old values before setting new ones
                    ...name,
                    firstName: e.target.value
                })}
            />
            <input
             // pass a function with previous state to the setter function
            // if new state depends on previous state

                type="text"
                value={name.lastName}
                onChange={e => setName({
                    ...name,
                    lastName: e.target.value
                })}
            />
            <input type="submit" />
            <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default UseStateWithObjects