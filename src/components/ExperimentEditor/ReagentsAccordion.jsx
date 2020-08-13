import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/* Samples */
import sampleReagents from "../../samples/sampleReagents";

/* FontAwesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ReagentsAccordion = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 columna">
          <h3>Reagents</h3>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 columna">
          <Accordion>
            {/* <Card bg="dark" className="reagent-card">
              <Card.Header className="d-flex justify-content-between reagent-card-header">
                Abrime papu
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <FontAwesomeIcon icon={faCaretDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="reagent-card-body">
                  Hello! I'm the body
                </Card.Body>
              </Accordion.Collapse>
            </Card> */}
            {props.data.map((reagent, index) => {
              return (
                <Card bg="dark" className="reagent-card" key={index}>
                  {/* Header-------------------------------- */}
                  <Card.Header className="d-flex justify-content-between reagent-card-header">
                    {index + 1} - {reagent.name}
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={index + 1}
                    >
                      <FontAwesomeIcon icon={faCaretDown} />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index + 1}>
                    {/* Body-------------------------------- */}
                    <Card.Body className="reagent-card-body">
                      <ul>
                        <li>
                          <strong>#: </strong>
                          {index + 1}
                        </li>
                        <li>
                          <strong>Name: </strong>
                          {reagent.name}
                        </li>
                        <li>
                          <strong>Description:</strong>
                          {reagent.description}
                        </li>
                        <li>
                          <strong>Source:</strong>
                          {reagent.source}
                        </li>
                        <li>
                          <strong>Ammount:</strong>
                          {reagent.ammount} {reagent.unit}
                        </li>
                        <li>
                          <strong>Purity:</strong>
                          {reagent.purity}%
                        </li>
                        <li><strong>Mol. Weight:</strong>{reagent.mw}g/mol</li>
                        <li><strong>Moles:</strong>{reagent.moles}</li>
                        <li><strong>Molar relation:</strong>{reagent.molrel}</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
            {/* <Card bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card> */}
          </Accordion>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ReagentsAccordion;
