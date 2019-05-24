// Libraries
import React from 'react'

const LoanItem = ({ customer, id, balance, interest_rate, start_date, status }) => (
  <React.Fragment>
    <div className="item">
      <div className="col">
        <div className="item__top">{customer}</div>
        <div className="item__bottom">{id}</div>
      </div>
      <div className="col">
        <div className="item__top">${balance}</div>
        <div className="item__bottom">{interest_rate * 100}%</div>
      </div>
      <div className="col">
        <div className="item__top">{start_date}</div>
      </div>
      <div className="col">
        {status === 'on-time' && (
          <div className="in__time__tag">A tiempo</div>
        )}
        {status === 'behind-1' && (
          <div className="delayed__1__tag">Retraso 1-30</div>
        )}
        {status === 'behind-2' && (
          <div className="delayed__2__tag">Retraso 31-60</div>
        )}
        {status === 'default' && (
          <div className="default__tag">Default</div>
        )}
      </div>
    </div>
  </React.Fragment>
)

export default LoanItem
