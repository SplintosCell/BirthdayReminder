import { useState } from "react";
import data from './data'; // Assuming this correctly imports your data
import List from './List'

const App = () => {
 const [people, setPeople] = useState(data); // This line is correct

 return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3> 
        <List people={people} /> 
        <button type= "button" className='btn btn-block' onClick={() => setPeople([])}>Clear All</button>
      </section>    
    </main>
 );
};

export default App;
