import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Button, ListGroup, Form, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  return (
    <div className="container mt-5">
      <ListGroup>
        <ListGroup.Item>
          <InputGroup className="mb-3">
            <Form.Control
              value={module.name}
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
              placeholder="Module Name"
            />
            <Button variant="primary" onClick={handleAddModule}>
              Add
            </Button>
            <Button variant="secondary" onClick={handleUpdateModule}>
              Update
            </Button>
          </InputGroup>
          <Form.Control
            as="textarea"
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            placeholder="Module Description"
          />
        </ListGroup.Item>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <ListGroup.Item key={index} action className="mb-2">
              <div className="d-flex justify-content-between">
                <div>{module.name}</div>
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <p>{module.description}</p>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default ModuleList;
