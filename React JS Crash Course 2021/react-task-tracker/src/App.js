import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Header />
    </div>
  );
}

// example of a class component. Classes are not as common as functional components but can still be used.
// before, only classes would work with hooks
// this also requires React to be imported from 'react'

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class.</h1>;
//   }
// }

export default App;
