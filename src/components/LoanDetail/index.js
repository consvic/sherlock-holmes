// Libraries
import React from 'react'

import LoanDetailRow from '../LoanDetailRow'

const LoanDetail = ({ name, email, interest_rate, start_date, loan_amount, payments}) => (
  <React.Fragment>
    <div className="loan__detail">
      <h4 className="header">Detalle del préstamo</h4>
      <div className="detail__cards">
        <div className="card">
          <div className="item__top">Devora</div>
          <div className="item__bottom">correo@g.com</div>
          <div className="card__row">
            <div className="in__time__tag">650</div>
            <div className="header__col detail__subtext">Score crediticio</div>
          </div>
        </div>
        <div className="card">
          <div className="item__top">$920,000.00</div>
          <div className="header__col">monto</div>
          <div className="card__row separated">
            <div className="header__col">Tasa de interés</div>
            <div className="item__bottom no__margin">18.5%</div>
          </div>
        </div>
      </div>

      <div className="card__big">
        <div className="item__top">Pagos</div>
        <div className="table__header">
          <div className="header__col">Fecha</div>
          <div className="header__col">Monto</div>
          <div className="header__col">Principal</div>
        </div>
        <div className="detail__payments">
          <LoanDetailRow />
          <LoanDetailRow />
          <LoanDetailRow />
          <LoanDetailRow />

        </div>
      </div>
    </div>
  </React.Fragment>
)

export default LoanDetail
