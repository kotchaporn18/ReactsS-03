import Hello from "./assets/Hello";
import Contact from "./assets/Contact";
import Counter from "./assets/Counter";

function App() {
  console.log('App componant');
  const helloData = [
    {name: "Anirach", message: "Good morning"},
    {name: "Hulk", message: "Good afternoon"},
    {name: "thor", message: "Good evening"}
  ]
  return (
    <div>
      <Counter/>
      {helloData.map((data,index)=>(
        <Hello key ={index} name = {data.name} message={data.message}/>
      ))}
      <Contact email="Anirach@gmai.com"phone = '12345678' />
      </div>
  );
}
export default App
