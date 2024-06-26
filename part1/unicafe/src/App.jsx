import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => {
  const{text, value} = props
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
)}
const Statistics = (props) =>{
    const{good, neutral, bad} = props

    if(!good&&!neutral&&!bad){
      return(
        <div>
          <p>No feedback given</p>
        </div>
      )
    }

    const average = ((good*1+bad*-1)/(good+bad+neutral))
    const positive = (100*good/(good+bad+neutral)) + ' %'
    
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value = {good}/>
          <StatisticLine text="neutral" value = {neutral}/>
          <StatisticLine text="bad" value = {bad}/>
          <StatisticLine text="average" value = {average}/>
          <StatisticLine text="positive" value = {positive} />
        </tbody>
      </table>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=> setGood(good+1)} text="good" />
      <Button handleClick={()=> setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=> setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App