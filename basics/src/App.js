import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Greeting from "./Greeting";


function App() {
  let name ='Kayuu';
  let age = 24;
  return (
    <div>
  <h1>
   Hello Kayuu
<Header />
<Home name = {name} />
<Home age = {age} />

<About />
<Contact />
<Greeting name = {'kayuu'}/>
<Greeting name = {'Paras'}/>
<Greeting name = {'Deepanshu'}/>

  </h1>
  </div>
  );
}


export default App;
