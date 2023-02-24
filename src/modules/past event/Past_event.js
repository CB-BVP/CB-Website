import { EventCard } from "./Event_card.js";
import "../../css/past events/Past_event.css";

export const Past_event = () => {
  return (
    <>
      <div className="event_h event_bg">
        <div className="text-transparent">a</div>
        <div className="event_title font">Past Events</div>
        <div className="event_card_section">
          <EventCard
            event_name="Coding and College"
            event_content="It was an orientation event for the first year students, where we had invited mentors from Coding Blocks"
            event_date="27th Dec 2022"
            event_icon="fa-solid fa-terminal fa-3x"
          />
          <EventCard
            event_name="Roadmap to Web Development"
            event_content="Offline event where students were given strategic plans to start their web development journey"
            event_date="19th Oct 2022"
            event_icon="fa-solid fa-comment fa-3x"
          />
          <EventCard
            event_name="Roadmap to DSA"
            event_content='Organised by the Mentors of Coding Blocks to improve Coding Skills'
            event_date="17th May 2022"
            event_icon="fa-regular fa-object-group fa-3x"
          />
          <EventCard
            event_name="CODING COMPETITION 3.0"
            event_content="Offline coding event where students were given questions of DSA to improve their skills."
            event_date="23rd March 2022"
            event_icon="fa-solid fa-terminal fa-3x"
          />
          <div className="text-transparent">b</div>
        </div>
      </div>
    </>
  );
};
