import React, {Fragment} from 'react'
import './styles/bootstrap.min.css'
import './styles/style.css'
import Header from './components/Header'
import List from './components/List';
function App() {
    return(
      <Fragment>
        <Header/>
        <List/>
      </Fragment>
  );
}

export default App;
