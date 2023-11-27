import "../../css/upcoming events/Upcoming_events.css";
import { Frame_top } from "../../shared/Frame_top";
import { Frame_bottom } from "../../shared/Frame_bottom";
import comingSoon from '../../assets/images/comingSoon.jpg'

export const Upcoming_event = () => {
  return (
    <>
      <div className="h-fit" id="events">
        <div className="text-transparent">h</div>
        <div className="upcoming_event_top_outer">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_top_middle_outer">
            <div className="upcoming_event_top_middle_content upcoming_events_font">
              UPCOMING EVENT
            </div>
            <div className="upcoming_event_top_middle_content_design"></div>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="upcoming_event_middle_outer">
          <div className="upcoming_event_middle_left">
            <div className="upcoming_event_middle_left_heading_outer">
              <div className="upcoming_event_middle_left_heading upcoming_events_font">
                Stay Tuned
              </div>
              <div className="upcoming_event_middle_left_heading_design"></div>
            </div>
            <div className="upcoming_event_middle_left_content_outer">
              <div className="upcoming_event_middle_left_content content_font">
                Many great events are lined up for you so stay tuned ;)
              </div>
            </div>
          </div>
          <div className="upcoming_event_middle_right_outer">
            <div className="upcoming_event_middle_right_photo_outer">
              <div className="upcoming_event_frame_top">
                <Frame_top />
              </div>
              <div>
                <img
                  className="upcoming_event_middle_right_photo upcoming_event_photo object-contain"
                  src={comingSoon}
                  alt="event..."
                ></img>
              </div>
              <div className="upcoming_event_frame_bottom">
                <Frame_bottom />
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming_event_middle_bottom_outer">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_bottom_button">
            <div href="/"><button>Coming Soon</button></div>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        {/* <div className="upcoming_event_middle_outer">
          <div className="upcoming_event_middle_left">
            <div className="upcoming_event_middle_left_heading_outer">
              <div className="upcoming_event_middle_left_heading upcoming_events_font">
                Geek Out
              </div>
              <div className="upcoming_event_middle_left_heading_design"></div>
            </div>
            <div className="upcoming_event_middle_left_content_outer">
              <div className="upcoming_event_middle_left_content content_font">Round 1: <br /> Coding Jiggle: Arrange the jiggled lines of code
                <br />
                <br />
                Round 2: <br />Reverse Coding: Input and output of the code will be given, the task is to write the approriate code</div>
            </div>
          </div>
          <div className="upcoming_event_middle_right_outer">
            <div className="upcoming_event_middle_right_photo_outer">
              <div className="upcoming_event_frame_top">
                <Frame_top />
              </div>
              <div>
                <img
                  className="upcoming_event_middle_right_photo upcoming_event_photo object-contain"
                  src={comingSoon}
                  alt="event..."
                ></img>
              </div>
              <div className="upcoming_event_frame_bottom">
                <Frame_bottom />
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming_event_middle_bottom_outer">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_bottom_button">
            <a href="https://unstop.com/hackathons/geek-out-bvest23-bharati-vidyapeeths-college-of-engineering-bvcoe-new-delhi-632554" target="_blank"><button>Register Now</button></a>
          </div>
          <div className="upcoming_event_corner"></div>
        </div> */}
        <div className="text-transparent">b</div>
      </div>
    </>
  );
};
