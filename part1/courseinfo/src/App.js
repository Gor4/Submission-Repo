const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = (header) => {
        return (
            <h1> {header.course.name} </h1>
        )
    }
    const Content = (content) => {

        return (
            <>
                <Part
                    part1 = {{part: content.parts.parts[0].name, exercise: content.parts.parts[0].exercises}}
                    part2 = {{part: content.parts.parts[1].name, exercise: content.parts.parts[1].exercises}}
                    part3 = {{part: content.parts.parts[2].name, exercise: content.parts.parts[2].exercises}}
                />
{/*
                {Object.keys(content).map(key => (
                    <p key={key}>
                        {console.log('key:' ,key.toString())}
                        {content[key].part} {content[key].exercise}
                    </p>
                ))}
*/}
            </>
        )
    }

    const Total = (total) => {
        return (
          <p> Number of exercises {total.parts.parts[0].exercises +
              total.parts.parts[1].exercises +
              total.parts.parts[2].exercises}
          </p>
        )
    }

    const Part = (part) => {
        return (
            <div>
                <p>{part.part1.part} {part.part1.exercise}</p>
                <p>{part.part2.part} {part.part2.exercise}</p>
                <p>{part.part3.part} {part.part3.exercise}</p>
            </div>
        )
    }

  return (
      <div>
        <Header course = {course} />
          <Content parts = {course} />
          <Total parts = {course}/>
      </div>
  )
}

export default App