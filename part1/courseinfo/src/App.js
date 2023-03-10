const Header = (props) =>{
  return <h1>{props.course}</h1>
}
const Content = (props) =>{
  return (
    <>
      <Part name={props.name1} exercises={props.exercises1}/>
      <Part name={props.name2} exercises={props.exercises2}/>
      <Part name={props.name3} exercises={props.exercises3}/>
    </>
  )
}
const Part = (props) =>{
  return <p>{props.name} {props.exercises}</p>
}
const Total = (props) =>{
  return <p>Number of exercises {props.totalExercises}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content name1={part1} exercises1={exercises1} name2={part2} exercises2={exercises2} name3={part3} exercises3={exercises3}/>
      <Total totalExercises={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App