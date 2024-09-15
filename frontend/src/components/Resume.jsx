import image from "../assets/resume.jpg"
import Sidebar from "./Sidebar"
import { Box } from "@mui/material"

const Resume = () => {
  return (
    <>
      <Box display={'flex'} sx={{ bgcolor: 'lightgray' }}>
        <Sidebar />
        <div className="resume-container" style={{ backgroundColor: 'lightgray' }}>
          <div className="resume">
            <h1 className="resume-heading">
              Build Your Resume With Our Specialized AI(Image)
            </h1>
            <a href="basic-details">
              <button className="resumeButton">Create Resume</button>
            </a>
          </div>

          <div className="resume-img" style={{ marginTop: '1px' }}>
            <img src={image} alt="" className="resumeimg" />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Resume;
