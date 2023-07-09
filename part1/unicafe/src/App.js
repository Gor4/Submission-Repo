import {useState} from 'react'

const Title = (prop) => {
    return (
        <h1>
            {prop.title}
        </h1>
    )
}

const Button = (button) => {
    return (
        <button onClick={() => button.action(button.value + 1)}> {button.text}</button>
    )
}

const FeedbackSum = (feedback) => {
    return (
        <div>
            {feedback.text} {feedback.value}
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Title title={"give feedback"}/>

            <Button text={"good"} value={good} action={setGood}/>
            <Button text={"neutral"} value={neutral} action={setNeutral}/>
            <Button text={"bad"} value={bad} action={setBad}/>

            <Title title={"statistics"}/>

            <FeedbackSum text={"good"} value={good}/>
            <FeedbackSum text={"neutral"} value={neutral}/>
            <FeedbackSum text={"bad"} value={bad}/>
        </div>
    )
}

export default App