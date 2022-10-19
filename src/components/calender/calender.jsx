import * as React from 'react'
import { useState } from 'react'
import dayjs from 'dayjs'


export default function Calendar() {

  //Obtener datos de formulario

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fechaini: e.target.dateini.value,
      fechafin: e.target.datefin.value,

    }

    // const res =  axios.post('/api/products', {
    //     name: e.target.name.value,
    //     comment: e.target.comment.value
    // })
    console.log({ formData })
  }

  return (

    <div className="row">
      <div className="col-xxl-5 col-xl-6 col-lg-6">
        <div className="section-title-wrapper mb-15">

        </div>

      </div>

      <div className="col-xxl-7 col-xl-6 col-lg-6">
        <div className="contact-form">
          <form action="input" id="contact-form" method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                <label>Fecha Inicio</label>
                <input name="dateini" type="date" placeholder="Fecha inicio" />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                <label>Fecha Fin</label>
                <input name="datefin" type="date" placeholder="Fecha fin" />
              </div>

              <div className="col-xxl-12 col-xl-12 mb-20">
                <button type="submit" className="theme-btn border-btn">Disponibilidad</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>



  )
}
