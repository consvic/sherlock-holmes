// Libraries
import React from 'react'

import LoanItem from '../LoanItem'

const LoanList = ({ loans }) => {

  console.log(loans)
  return (
    <React.Fragment>
      <div className="loan__list">
        <h4 className="header">Listado de préstamos</h4>
        <div className="list__header">
          <div className="header__col">Cliente</div>
          <div className="header__col align__right">Préstamo</div>
          <div className="header__col">Fecha</div>
          <div className="header__col align__right">Estados</div>
        </div>
        <div className="list__cols">
          {loans.map((loan, index) => {
            if (loan.status !== 'completed' && loan.status !== 'cancelled') {
              return <LoanItem
              key={index}
              customer={loan.customer.name}
              balance={loan.balance}
              status={loan.status}
              interest_rate={loan.interest_rate}
              start_date={loan.start_date}
              id={loan.id}/>
            }
            return null
          })}
        </div>
      </div>
    </React.Fragment>
  )
}


export default LoanList
