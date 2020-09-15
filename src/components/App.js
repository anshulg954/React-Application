import React, { Component } from 'react';
import {SignIn, Slack} from  './';
import {Switch, Route} from 'react-router-dom';
import { render } from '@testing-library/react';



const PrivateRoute = ()={
  const {component: Component, isLoggedIn, ...others}=props
  return(
    <Route  {...others} 
    
    render={(newProps) =>{
      if(isLoggedIn){
        return <Component {...newProps}/>;
      }
    }

    }
    />
  )
}
function Home(){
  return(
    <div>
      Home
    </div>
  )
}
function Some(){
  return(
    <div>
      Some
    </div>
  )
}
class App extends Component {
  render(){
  return (
    <div>
        <Switch>
          <Route exact path="/login" component={SignIn}/>
          
          <Route exact path="/sognup" component={Home}/>
          
          <PrivateRoute exact path="/slack" component={Slack}/>
        </Switch>
    </div>
  );
}
}
export default App;
