import React from 'react';

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
        <Total courseParts={courseParts}/>
      </>
    )
  }
  
  const Part = (props) =>{
    return (
    <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  
  const Total =({courseParts, ...props})=>{
    return(
      <h4>total of {courseParts.reduce((acc,curr)=> acc + curr.exercises, 0)} exercises</h4>
    )
  }

  export default Course