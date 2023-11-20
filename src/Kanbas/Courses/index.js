import React from "react";
import { useParams, Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { LiaBarsSolid } from 'react-icons/lia';
import './index.css'


function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, coursesPath, id, screen] = pathname.split("/");
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (

    <div>
      {/* <div>
      <h1>Courses {course.name} / {screen}</h1>
      </div> */}
      <div className="crumbbar d-lg-block d-none" style={{ color: "red" }}>
        <nav className="breadcrumb-bar" aria-label="breadcrumb">
          <div className="breadcrumb">
            <div className="breadcrumb-item" style={{ fontSize: "1.5em" }}>
              <LiaBarsSolid style={{ marginLeft: "10px", marginRight: "10px", verticalAlign: "middle" }} />
              <Link to={`/${courseId}/Home`}>{course.name}</Link>
            </div>
            <div className="breadcrumb-item active" aria-current="page" style={{ fontSize: "1.5em" }}>
              {screen}
            </div>
            
          </div>
        </nav>
      </div>

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;