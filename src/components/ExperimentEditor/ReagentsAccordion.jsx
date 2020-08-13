import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/* Samples */
import sampleReagents from "../../samples/sampleReagents";

/* FontAwesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ReagentsAcordion = (props) => {
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
          <Accordion >
            <Card bg="dark" className="reagent-card">
              <Card.Header className="d-flex justify-content-between reagent-card-header">
                Abrime papu
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <FontAwesomeIcon icon={faCaretDown} />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="reagent-card-body">Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card bg="dark">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ReagentsAcordion;
