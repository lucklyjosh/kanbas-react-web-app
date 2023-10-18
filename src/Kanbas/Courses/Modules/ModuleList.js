import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="list-group mt-5 col-12">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="list-group mt-3 col-12" style={{ width: '900px' }}>
            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">
              {module.name}
              <span className="icon-right">
              </span>
            </a>
            <div className="collapse show">
              {module.description.split('\n').map((desc, descIndex) => (
                <a href="#" key={descIndex} className="list-group-item list-group-item-action with-border">
                  <div className="content-text">{desc}</div>
                  <span className="icon-right">
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ModuleList;
