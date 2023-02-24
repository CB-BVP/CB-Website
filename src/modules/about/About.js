import "../../css/about/About.css";
import { ReactComponent as Img } from "../../assets/svg/about-us.svg";

export const About = () => {
  return (
    <>
      <div className="h-fit" id="about">
        <div className="about_outer">
          <div className="about_svg_outer">
            <div className="about_svg_inner">
              <Img />
            </div>
          </div>
          <div className="about_content_outer">
            <div className="about_content_outer_box about_content_outer">
              <div className="about_content_inner" style={{fontFamily: "'Roboto', serif"}}>
              Campus Blocks BVP is a technical society which was started in 2019, in association with <strong>Coding Blocks</strong>, with an aim to help students to hone their coding skills through guidance and events like hackathons.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
