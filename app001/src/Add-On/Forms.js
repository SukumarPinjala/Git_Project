import {useState} from 'react'

export const Form1 = () => {
    const [data, setData] = useState("Hello")
    
    return (
        <div>
                <h1> Welcome to the Page </h1>
                <label> Username </label> <input type="text" />
                <label> Password </label> <input type="password" />
                <h2> This is End of the Page </h2>
                <h2> {data} World </h2>
                <button onClick={()=>setData("Superb")}> Submit </button>
        </div>
    )
}
