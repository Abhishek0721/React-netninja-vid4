import { useState } from "react";

const Home = () => {
  // let name = 'abhi';
  const [name, setName] = useState('Abhi');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'abhishek';
    setName('Abhishek');
    setAge(25);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;