import React from "react";
/* import {Link} from 'react-router-dom' */
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
/* import Button from "react-bootstrap/Button"; */
import { useTranslation } from 'react-i18next';



const Agents = ({ agents }) => {
  const { t } = useTranslation();
  const agentlist = agents.map((agent) => {
    return (
      <div className="agent" key={agent.id}>
        {}
        <Card style={{ width: "22rem", height: "42rem" }}>
          <Card.Img variant="top" style={{ height: "22rem" }} src={agent.src} />
          <Card.Body>
            <Card.Title>{agent.title}</Card.Title>
            <Card.Text>{agent.name}</Card.Text>
            <Card.Text style={{ height: "7rem" }}>
              {agent.word}
            </Card.Text>
            <Link to={"/contact-us/"}>
               <button type="view" className="btn-small"> 
                  {t("View_Button")}
               </button>
            </Link>
            {/* <div className="buttonfriend">
              <Button variant="primary">VIEW</Button>
            </div> */}
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
