import { useState, useEffect, createContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import EventListing from "./components/EventListing";
import Info from "./components/Infos";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar'
import Search from "./components/Search";
import SelectEvent from "./components/SelectEvent";
import Volunteers from "./components/Volunteers"

export const eventContext = createContext()

function App() {
  const [eventListing, setEventListing] = useState([]);
  const [volunteerLogIn, setVolunteerLogIn] = useState(null)
  const [search, setSearch] = useState("")
  const [volunteerUpdate, setVolunteerUpdate] = useState(false)

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEventListing(events);
      });
      const userStorage = sessionStorage.user_data ? JSON.parse(sessionStorage.user_data) : null
      setVolunteerLogIn(userStorage)
  }, []);

  useEffect(()=>{
       if( sessionStorage.user_data ) {
        const userInfo = JSON.parse(sessionStorage.user_data)
        fetch(`/volunteers/${userInfo.id}`)
        .then((res)=> res.json())
        .then((data)=> setVolunteerLogIn(data))
      }
  }, [volunteerUpdate])

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      sessionStorage.removeItem("user_data")
      setVolunteerLogIn(null)
    });
  }

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  const searchEvents = eventListing.filter((events) => {
    return events.title.toLowerCase().includes(search.toLowerCase()) || events.category.toLowerCase().includes(search.toLowerCase()) || events.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
      <div className="App">
        <eventContext.Provider value={[eventListing, volunteerLogIn, setVolunteerUpdate, volunteerUpdate]}>
        <NavBar volunteerLogIn={volunteerLogIn} handleLogout = {handleLogout} />
        <Switch>
          <Route exact path="/">
         <Home searchEvents={searchEvents} handleSearch={handleSearch} search={search}/>
          </Route>
          <Route path="/events/:title">
            <SelectEvent eventListing={eventListing}/>
          </Route>
          <Route path="/events">
            <EventListing eventListing={searchEvents} handleSearch={handleSearch} search={search}/>
          </Route>
          <Route path="/volunteer">
            <Volunteers />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/aboutus">
            <Info />
          </Route>
          <Route path="/login">
            {volunteerLogIn !== null? <Redirect to="/"/> : <LogIn setVolunteerLogIn = {setVolunteerLogIn} />}
          </Route>
          <Route path="/signup">
          {volunteerLogIn !== null ? <Redirect to="/" /> : <SignUp setVolunteerLogIn = {setVolunteerLogIn} />}
          </Route>
        </Switch>
        </eventContext.Provider>
      </div>
  );
}

export default App;
