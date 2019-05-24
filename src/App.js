// Libraries
import React from 'react';

// Components
import LoanList from './components/LoanList';
import LoanDetail from './components/LoanDetail';
import loanData from './data/index.js';

// Other
import './App.css';

class App extends React.Component {

  clickItem = (loan) => {

  }

  // THIS IS THE LOAN LIST COMPONENT
  /* <LoanList loans={loans}/> */
  // IMPORTANT

  render () {
    const loans = loanData.loans
    return (
      <LoanDetail />
    );
  }
}

export default App;
