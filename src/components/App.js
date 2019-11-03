import React from 'react';
import Header from './Header.jsx';
import Movies from './Movies.jsx';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'React Movie Cards'
    }
  }
  render(){
     return (
    <div>
        <Header title={this.state.title}/>
        <div className="mt-5"> 
        <Movies />
        </div>
    </div>
  );
  }
 }

export default App;
