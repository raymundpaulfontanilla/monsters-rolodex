// CODE FOR RENDERING SIMPLE HELLO WORLD

// import React from "react";

// import "./App.css";

// function App() {
//   return <h1>Hello World</h1>;
// }

// export default App;

// CODE FOR RENDERING HELLO WORLD WITH BACKROUND COLOR YELLOW USING 'App.css'

// import React from "react";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

// CODE FOR RENDERING HELLO WORLD USING 'PROPERTIES(PROPS)'

// import React from "react";

// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       props: "World",
//     };
//   }

//   render() {
//     return <h1>{`Hello ${this.state.props}`}</h1>;
//   }
// }

// export default App;

// CODE FOR RENDERING 3 NAMES STATIC USING 'MAP ARRAY METHOD'

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       players: [
//         {
//           name: "Raymund",
//         },
//         {
//           name: "Paul",
//         },
//         {
//           name: "Fontanilla",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.players.map((player) => (
//           <h1>{player.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

//ERROR -> index.js:1 Warning: Each child in a list should have a unique "key" prop.

//TO FIX THAT PUT AN ID OF EACH PLAYE AND GET IT BY USING key={players.id} LIKE THIS

// import React from "react";

// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       players: [
//         {
//           id: 1,
//           name: "Raymund",
//         },
//         {
//           id: 2,
//           name: "Paul",
//         },
//         {
//           id: 3,
//           name: "Fontanilla",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.players.map((player) => (
//           <h1 key={player.id}>{player.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FETCHING USERS DYNAMIC USING API IN 'https://jsonplaceholder.typicode.com/users' WITH 'componentDidMount() method'

// import React from "react";

// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.monsters.map((monster) => (
//           <h1 key={monster.id}>{monster.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR RENDERING CARDLIST COMPONENT USING 'PROPS AND CHILDREN'

// PROPS -> THE PARAMETER THAT WE GET FROM OUR FUNCTIONAL COMPONENT.

// CHILDREN -> ARE ACTUALLY WHAT YOU PASS IN BETWEEN THE BRACKETS OF OUR COMPONENT

// LIKE THIS <CardList><h1>Raymund</h1></CardList>

// import React from "react";

// import "./App.css";

// import { CardList } from "./components/card-list/card-list.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <CardList name="Raymund">
//           <h1>Raymund</h1>
//         </CardList>
//         <div>
//           {this.state.monsters.map((monster) => (
//             <h1 key={monster.id}>{monster.name}</h1>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR RENDERING RANDOM ROBOTS WITH A STYLE OF CARD CONTAINER USING CARD COMPONENT

// import React from "react";

// import { CardList } from "./components/card-list/card-list.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div>
//         <CardList monsters={this.state.monsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR RENDERING SEARCHBOX

// import React from "react";

// import { CardList } from "./components/card-list/card-list.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="search"
//           placeholder="search monsters"
//           onChange={(e) => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={this.state.monsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FILTERING ROBOTS USING SEARCHFIELD

// import React from "react";

// import { CardList } from "./components/card-list/card-list.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div>
//         <input
//           type="search"
//           placeholder="search monsters"
//           onChange={(e) => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FILTERING ROBOTS USING SEARCHBOX COMPONENT

// import React from "react";

// import { CardList } from "./components/card-list/card-list.component.jsx";
// import { SearchBox } from "./components/search-box/search-box.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div>
//         <SearchBox
//           placeholder="search monsters"
//           handleChange={(e) => this.setState({ searchField: e.target.value })}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FILTERING ROBOTS USING SEARCHBOX COMPONENT WITH CLASS AND BIND METHOD

// import React from "react";

// import "./App.css";

// import { CardList } from "./components/card-list/card-list.component.jsx";
// import { SearchBox } from "./components/search-box/search-box.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   handleChange(e) {
//     this.setState({ searchField: e.target.value });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <SearchBox
//           type="search"
//           placeholder="search monsters"
//           handleChange={this.handleChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

//ERROR

// Cannot read properties of undefined (reading 'setState') at handleChange

// to fix that used bind method in your constructor method like this

// this.handleChange = this.handleChange.bind(this)

// import React from "react";

// import "./App.css";

// import { CardList } from "./components/card-list/card-list.component.jsx";
// import { SearchBox } from "./components/search-box/search-box.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   handleChange(e) {
//     this.setState({ searchField: e.target.value });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <SearchBox
//           placeholder="search monsters"
//           handleChange={this.handleChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FILTERING ROBOTS USING SEARCHBOX COMPONENT USING ARROW FUNCTION AND WITHOUT BIND METHOD

// import React from "react";

// import "./App.css";

// import { CardList } from "./components/card-list/card-list.component.jsx";
// import { SearchBox } from "./components/search-box/search-box.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
//       <div className="App">
//         <SearchBox
//           placeholder="search monsters"
//           handleChange={this.handleChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// CODE FOR FILTERING ROBOTS USING SEARCHBOX COMPONENT USING ARROW FUNCTION, WITHOUT BIND METHOD AND WITH LOADING

// import React from "react";

// import "./App.css";

// import { CardList } from "./components/card-list/card-list.component.jsx";
// import { SearchBox } from "./components/search-box/search-box.component.jsx";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ monsters: users }));
//   }

//   handleChange = (e) => {
//     this.setState({ searchField: e.target.value });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     if (monsters.length === 0) {
//       return (
//         <h2
//           style={{
//             color: "#0ccac4",
//             fontFamily: "Bigelow Rules",
//             fontSize: "50px",
//             margin: "0",
//           }}
//         >
//           Loading.....
//         </h2>
//       );
//     } else {
//       return (
//         <div className="App">
//           <title>Monsters Rolodex</title>
//           <h1>Monsters Rolodex</h1>
//           <SearchBox
//             placeholder="search monsters"
//             handleChange={this.handleChange}
//           />
//           <CardList monsters={filteredMonsters} />
//         </div>
//       );
//     }
//   }
// }

// export default App;

// FINAL CODE DESIGN(REFACTOR)

import React from "react";

import "./App.css";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (event) => this.setState({ searchField: event.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !monsters.length ? (
      <h2
        style={{
          color: "#0ccac4",
          fontFamily: "Bigelow Rules",
          fontSize: "50px",
          margin: "0",
        }}
      >
        Loading.....
      </h2>
    ) : (
      <div className="App">
        <title>Monsters Rolodex</title>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
