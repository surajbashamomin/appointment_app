import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import {format} from 'date-fns'

import './index.css'
import {list} from 'postcss'

class Appointments extends Component {
  state = {title: '', date: '', listAppointments: []}

  onSubmitForm = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointments = {
      id: v4(),
      title,
      date,
      newDate: new Date(),
      isStarred: false,
    }
    this.setState(prevState => ({
      listAppointments: [...prevState.listAppointments, newAppointments],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {listAppointments} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="app-inner-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="main-heading">Add Appointments</h1>
              <label htmlFor="title" className="title">
                Title
              </label>
              <br />
              <input
                type="text"
                className="text-input"
                id="title"
                placeholder="Title"
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="date" className="title">
                Date
              </label>
              <br />
              <input
                type="date"
                className="text-input"
                placeholder="dd/mm/yyyy"
                onChange={this.onChangeDate}
              />
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="appointment-starred-container">
            <p className="appointment">Appointments</p>
            <button className="button-starred">starred</button>
          </div>
          <ul className="list-container">
            {listAppointments.map(eachAppointment => (
              <AppointmentItem
                userDetails={eachAppointment}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
