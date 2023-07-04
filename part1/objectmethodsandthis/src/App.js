/*const App = () => {
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {    console.log(a + b)  },
  }

/!*  arto.doAddition(1, 4)        // 5 is printed

  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)   // 25 is printed*!/

  arto.greet()       // "hello, my name is Arto Hellas" gets printed

  const referenceToGreet = arto
  referenceToGreet.greet() // prints "hello, my name is undefined"

/!*  arto.growOlder = function() {
    this.age += 1
  }

  console.log(arto.age)   // 35 is printed
  arto.growOlder()
  console.log(arto.age)   // 36 is printed*!/

}*/

/*const Hello = ({name, age}) => {
    const bornYear = () =>  new Date().getFullYear() - age
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}*/

/*const App = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}*/

/*import {useState} from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)
    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter - 1)
    }

    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }

    /!*    setTimeout(
            () => setCounter(counter + 1),
            1000
        )*!/


    const Display = ({ counter }) => <div>{counter}</div>

    const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

    console.log('rendering...', counter)
    return (
        <div>
            <Display counter={counter}/>
            <Button handleClick={increaseByOne}
                    text={'plus'}/>
            <Button handleClick={setToZero}
                    text={'zero'}/>
            <Button handleClick={decreaseByOne}
                    text={'minus'}/>
        </div>
    )
}*/

import {useState} from "react";

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}


export default App