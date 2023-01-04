import './index.css'

const AppointmentItem = props => {
  const {userDetails} = props
  const {id, name, date, isStarred, newDate} = userDetails
  const buttonStarred = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-items-container">
      <div className="heading-starred-container">
        <p className="heading">{name}</p>
        <button className="button-starred">
          <img src={buttonStarred} />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
