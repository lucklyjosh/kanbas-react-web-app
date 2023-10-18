import React from 'react';
import courses from '../Database/courses.json';
import { Link } from "react-router-dom";
import './index.css';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <div class="ml-5">
                <h2>Published Courses ({courses.length})</h2>
            </div>

            <div className="main-content p-4">
                <div className="row">
                    {courses.map(course => (
                        <div key={course._id} className="col-4">
                            <div className="card h-100 card-spacing">
                                <div className="card-image">
                                    <BsThreeDotsVertical className="card-icon" style={{ color: 'white' }} />

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.number}</p>
                                    <p className="card-text">
                                        {course.startDate} - {course.endDate}
                                    </p>
                                    <Link
                                        key={course._id}
                                        to={`/Kanbas/Courses/${course._id}`}
                                        className="btn btn-primary"
                                    >
                                        View Course
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
