import React from 'react';
import ReactDOM from 'react-dom';


const Course = ({course}) =>{

  return (
    <div>
    <Header courseName={course.name}/>
    <Content courseParts={course.parts}/>
    </div>
  )
}

const Header =(props)=>{
  return(
    <h1>{props.courseName}</h1>
  )
}

const Content =({courseParts, ...props})=>{
  return(
    <>
      {courseParts.map((part)=> <Part key={part.id} part={part}/> )}
    </>
  )
}

const Part = (props) =>{
  return (
  <p>{props.part.name} {props.part.exercises}</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))


