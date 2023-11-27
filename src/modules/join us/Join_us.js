import { Frame_top } from "../../shared/Frame_top";
import { Frame_bottom } from "../../shared/Frame_bottom";
import weAreHiring from '../../assets/images/weAreHiring.jpeg'; 

export const Join_us = () => {
  return (
    <>
      <div id="contact us">
        <div className="upcoming_event_top_outer mt-[100px]">
          <div className="upcoming_event_corner"></div>
          <div className="upcoming_event_top_middle_outer">
            <div className="upcoming_event_top_middle_content upcoming_events_font">
              Want to Join us?
            </div>
            <div className="upcoming_event_top_middle_content_design"></div>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="upcoming_event_middle_outer">
          <div className="upcoming_event_middle_left">
            <div className="upcoming_event_middle_left_content_outer">
              <div className="upcoming_event_middle_left_content content_font">
                Hello BVPians!!
                <br/>
                Campus Blocks BVCOE is back again with some great opportunities. ✨ ✨✨
                <br/>
                We are all set for expanding our team !
                <br/>
                Here are the teams for which you can apply<br/>
                1. Tech<br/>
                2. Design<br/>
                3. Documentation<br/>
                4. Operations<br/>
                You can apply and get a chance to work, gain knowledge and exposure as a part of our Team!✨
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
                  className="upcoming_event_middle_right_photo upcoming_event_photo"
                  src={weAreHiring}
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
            <a href="https://forms.gle/Ts91BZkuXRmVtPYr5" target="_blank"><button>Register Now</button></a>
          </div>
          <div className="upcoming_event_corner"></div>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly items-center mt-10 flex-wrap">
          <div className="ml-40">
            <div className="text-4xl font-bold mr-48">Get in Touch</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10 mr-40 text-slate-500">
            <div>
              <strong className="text-2xl text-black">Socials</strong>
              <div className="mt-2">
                <a
                  href="https://instagram.com/campusblocksbvp?utm_medium=copy_link"
                  target="__blank"
                  className="mr-3"
                >
                  <i class="fa-brands fa-instagram fa-xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/CampusBlocksBvp/"
                  target="__blank"
                  className="m-3"
                >
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/campus-blocks-bvp/"
                  target="__blank"
                  className="m-3"
                >
                  <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <strong className="text-2xl text-black">Contact Us</strong>
              <br />
              <a href="mailto:campusblocksbvp@gmail.com">campusblocksbvp@gmail.com</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 mb-1 text-xs">Copyright&#169;2023 to Campus Blocks. All rights Reserved</p>
      </div>
    </>
  );
};
