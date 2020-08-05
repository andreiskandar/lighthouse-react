import React, { useState } from 'react';
import './App.css';

function App() {

  // Temporary initial data
  const initialData = {
    hits: [
      { objectID: 1, title: "Google", url: "http://google.ca" },
    ]
  };

  // Keep track of "data" as State. Initialize with some initial Data
  const [data, setData] = useState(initialData);
  // Note the Javascript Destructuring.  Same result as this:
  // const myState = useState(initialData);
  // const data = myState[0];     // state item
  // const setData = myState[1]; // updating function (setter)

  // Keep track of " query" 
  const [query, setQuery] = useState("react");

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  return (
    <div className="App">
      <h3>My Search Page</h3>

      <h4>{query}</h4>
      <input type="text" value={query}
        onChange={event => setQuery(event.target.value)} />

      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
