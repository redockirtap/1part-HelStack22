const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}! You're {props.age} old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/redockirtap'>Patrick Coder</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter Parker';

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Patrick" age="147"/>
      <Hello name="bruh" age="488"/>
      <Hello name={name} age={100/3}/>
      <Footer />
    </>
  )
}

export default App;
