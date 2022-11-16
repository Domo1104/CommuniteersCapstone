import EventCard from "./EventCard";
import { useContext } from "react";
import { eventContext } from "../App";
import "./EventListing.css";

function EventListing({ eventListing, search, handleSearch }) {
  return (
    <div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="enter keywords..."
          value={search}
          onChange={handleSearch}
        />
        <button className="search-btn">🔍</button>
      </div>
      <div className="event-listing">
        {eventListing.map((event) => {
          return (
            <div>
              <EventCard event={event} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventListing;
