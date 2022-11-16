import { useHistory } from "react-router-dom";
import "./EventCard.css"
function EventCard({ event }) {
  console.log(event);
  const history = useHistory();

  function selectEvent(title) {
    console.log(title);
    history.push(`/events/${title}`);
  }

  return (
    <div onClick={() => selectEvent(event.title)} className="row">
        <div className="card">
          <h1 className="event-title"> {event.title} </h1>
        </div>
        <div className="card">
          <p className="event-start-date-time">
            Start: {event.start_date_time}
          </p>
      </div>
        <div className="card">
          <p className="event-end-date-time"> End: {event.end_date_time} </p>
        </div>
        <div className="card">
          <p className="event-location"> Location: {event.location} </p>
        </div>
        <div className="card">
          <p className="event-category"> Category: {event.category} </p>
        </div>
        <div className="card">
          <p className="event-description">
            Description: {event.description}
          </p>
        </div>
    </div>
  );
}

export default EventCard;
