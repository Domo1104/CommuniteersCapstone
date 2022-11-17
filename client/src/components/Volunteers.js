import { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { eventContext } from "../App";
import SignUp from "./SignUp";
import EventTask from "./EventTask";
import "./Volunteers.css";

function Volunteers() {
  const [eventListing, volunteerLogIn, setVolunteerUpdate, volunteerUpdate] =
    useContext(eventContext);
  const [volunteerSignupEvents, setVolunteerSignupEvents] = useState([]);
  const [eventSelected, setEventSelected] = useState("");
  const [updateTask, setUpdateTask] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(`/signups/${volunteerLogIn.id}`)
      .then((res) => res.json())
      .then((volunteerEvents) => {
        setVolunteerSignupEvents(volunteerEvents);
      });
  }, [volunteerLogIn, eventListing]);

  function handleSignupDelete(id) {
    setVolunteerUpdate(true);
    fetch(`/signups/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setVolunteerUpdate(false));
  }

  function editTask(id) {
    setVolunteerUpdate(true);
    fetch(`/signups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: updateTask }),
    }).then(() => setVolunteerUpdate(false));
  }

  return (
    <div>
      <h1 className="header"> Welcome, {volunteerLogIn.first_name} {volunteerLogIn.last_name}, here are your past and present events </h1>
      <div className="all-volunteer-events">
        {volunteerSignupEvents.map((mappedEvents) => {
          console.log(mappedEvents);
          return (
            <div className="row">
              <h2> {mappedEvents.event.title} </h2>
              <h3>Task: {mappedEvents.task} </h3>
              <div>Location: {mappedEvents.event.location}</div>
              <div>Start time: {mappedEvents.event.start_date_time}</div>
              <div>End time: {mappedEvents.event.end_date_time}</div>
              <div>Category: {mappedEvents.event.category}</div>
              <div className="delete-edit-btn">
                {eventSelected !== mappedEvents.id && (
                  <button
                    className="btn-edit"
                    onClick={() => {
                      setCategory(mappedEvents.event.category);
                      setEventSelected(mappedEvents.id);
                    }}
                  >
                    Edit Task
                  </button>
                )}
                {eventSelected === mappedEvents.id && (
                <div>
                  <EventTask
                    category={category}
                    selectedTask={updateTask}
                    setSelectedTask={setUpdateTask}
                  />
                  <button
                    className="btn-submit"
                    onClick={() => {
                      setEventSelected("");
                      setUpdateTask("");
                      editTask(mappedEvents.id);
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}
                <button
                  className="btn-delete"
                  onClick={() => handleSignupDelete(mappedEvents.id)}
                >
                  Delete Event
                </button>
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Volunteers;
