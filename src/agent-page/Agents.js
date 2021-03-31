import React from "react";
import AgentPage from "./AgentPage";
/* import {Link} from 'react-router-dom' */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Agents = ({ agents }) => {
  const agentlist = agents.map((agent) => {
    return (
      <div className="agent" key={agent.id}>
        {}
            <Card style={{ width: "22rem", height: "40rem"  }}>
              <Card.Img variant="top" style={{ height: "22rem" }} src={agent.src} />
              <Card.Body>
                <Card.Title>{agent.title}</Card.Title>
                <Card.Text>{agent.name}</Card.Text>
                <Card.Text>
                  {agent.word}
                </Card.Text>
                <Button variant="primary">VIEW</Button>
              </Card.Body>
            </Card>
      </div>
    );
  });
  console.log(agentlist);
  return (
    <div className="agent-list">
      <div className="row">
        <div className="col m4">{agentlist[0]}</div>
        <div className="col m4">{agentlist[1]}</div>
        <div className="col m4">{agentlist[2]}</div>
        <div className="col m4">{agentlist[3]}</div>
        <div className="col m4">{agentlist[4]}</div>
        <div className="col m4">{agentlist[5]}</div>
      </div>
    </div>
  );
};
export default Agents;
