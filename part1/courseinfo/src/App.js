const App = () => {
    const Header = (header) => {
        return (
            <h1> {header.course} </h1>
        )
    }
    const Content = (content) => {

        return (
            <>
{/*                <p>
                    {content.content1.part} {content.content1.exercise}
                </p>
                <p>
                    {content.content2.part} {content.content2.exercise}
                </p>
                <p>
                    {content.content3.part} {content.content3.exercise}
                </p>*/}

                <Part
                    part1 = {{part: content.content1.part, exercise: content.content1.exercise}}
                    part2 = {{part: content.content2.part, exercise: content.content2.exercise}}
                    part3 = {{part: content.content3.part, exercise: content.content3.exercise}}
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
          <p> Number of exercises {total.total} </p>
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

    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

  return (
      <div>
        <Header course={course} />

          <Content
              content1 = {{part: part1, exercise: exercises1}}
              content2 = {{part: part2, exercise: exercises2}}
              content3 = {{part: part3, exercise: exercises3}}
          />

          <Total total = {exercises1 + exercises2 + exercises3}/>


        {/*<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>*/}
      </div>
  )
}

export default App