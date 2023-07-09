import {useState} from 'react'

const Title = (prop) => {
    return (
        <h1>
            {prop.title}
        </h1>
    )
}

const Statistics = (object) => {
    return (
        <table>
            <StatisticLine text={object.statistics.names[1]} value={object.statistics.values[1]}/>
            <StatisticLine text={object.statistics.names[2]} value={object.statistics.values[2]}/>
            <StatisticLine text={object.statistics.names[3]} value={object.statistics.values[3]}/>
            <StatisticLine text={object.statistics.names[4]} value={object.statistics.values[4]}/>
            <StatisticLine text={object.statistics.names[5]} value={object.statistics.values[5]}/>
            <StatisticLine text={object.statistics.names[6]} value={object.statistics.values[6]}/>
        </table>
    )
}

const StatisticLine = (feedback) => {
    return (
            <tr>
                <td style={{width: 50}}> {feedback.text} </td>
                <td style={{width: 50}}> {feedback.value} </td>
            </tr>
    )
}


const Button = (button) => {
    return (
        <button onClick={() => button.action(button.value + 1)}> {button.text}</button>
    )
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const sum = good + neutral + bad
    const avg = (good + (bad * -1)) / (sum)
    const positive = (good / sum) * 100 + " %"


    return (
        <div>
            <Title title={"give feedback"}/>

            <Button text={"good"} value={good} action={setGood}/>
            <Button text={"neutral"} value={neutral} action={setNeutral}/>
            <Button text={"bad"} value={bad} action={setBad}/>

            <Title title={"statistics"}/>

            <Statistics
                statistics={
                    {
                        names: ["statistics", "good", "neutral", "bad", "all", "average", "positive"],
                        values: ["", good, neutral, bad, sum, avg, positive]
                    }
                }
            />


        </div>
    )
}

export default App