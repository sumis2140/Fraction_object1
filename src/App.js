// import React from 'react';
// import Login from './Login/login'
// import GlobalStyle from './globalStyles';
// import Home from './pages/HomePage/Home';
// import Products from './pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop';
// import { Navbar } from './components';

// function App() {
//   return (
    
//     <Router>
//       <GlobalStyle />
//       <ScrollToTop />
//       <Navbar />
//       <Login/>
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/products' component={Products} />
//         <Route path='/sign-up' component={SignUp} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
// import { Component } from 'react';
import fire from './Login/firebase';
import Login from "./Login/login"
import Logout from './Login/logout';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Logout /> ) : ( <Login /> ) }
      </div>
    );
  }
}


export default App;
