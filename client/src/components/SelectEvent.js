import { useEffect, useState, useContext } from "react";
import { eventContext } from "../App";
import { useParams, useHistory } from "react-router-dom";
import EventCard from "./EventCard";
import EventTask from "./EventTask";
import "./SelectEvent.css";

export default function SelectEvent() {
  const [eventListing, volunteerLogIn, setVolunteerUpdate] =
    useContext(eventContext);
  const { title } = useParams();
  const [currentEvent, setCurrentEvent] = useState({});
  const [selectedTask, setSelectedTask] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [joinedEvent, setJoinedEvent] = useState(false);

  const history = useHistory();
  useEffect(() => {
    const selectedEvent = eventListing.filter((event) => {
      return event.title.toLowerCase() === title.toLowerCase();
    });
    if (selectedEvent.length > 0) {
      setCategory(selectedEvent[0].category);
      setCurrentEvent(selectedEvent[0]);
      const signedUp = volunteerLogIn.events.filter(
        (event) => event.id === selectedEvent[0].id
      );
      signedUp.length > 0 ? setJoinedEvent(true) : setJoinedEvent(false);
    }
  }, [eventListing, title]);

  function joinEvent() {
    setVolunteerUpdate(true);
    if (selectedTask.length === 0) setErrorMessage("Please pick a task");
    else {
      let obj = {
        volunteer_id: volunteerLogIn.id,
        event_id: currentEvent.id,
        task: selectedTask,
      };
      //signup to volunteer
      fetch("/signups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then(() => {
        history.push("/volunteer");
        setVolunteerUpdate(false);
      });
      setErrorMessage("");
    }
  }

  return (
    <div className="join-event-card">
      <h3>Join this event?</h3>
      {<EventCard event={currentEvent} />}
      {errorMessage.length > 0 && <p>{errorMessage}</p>}
      {/* create a component that takes in a category and returns a dropdown menu of tasks based on the category */}
      {!joinedEvent ? (
        <div>
          Role:
          <EventTask
            category={category}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
          <br />
          <br />
          <button className="btn-join" onClick={joinEvent}>
            Join Event
          </button>
        </div>
      ) : (
        <div className="dual-join-alert"> Already joined the event!</div>
      )}
    </div>
  );
}
