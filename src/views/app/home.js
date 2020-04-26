import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Row, Card, CardBody, Jumbotron, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";

import Calendar from "../../containers/dashboards/Calendar";
import GradientCardContainer from '../../containers/dashboards/GradientCardContainer';

import { Colxx, Separator } from "../../components/common/CustomBootstrap";

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="homebanner">
                  <CardBody>
                    
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="justify-content-end">
                  <CardBody className="justify-content-end">
                    <Jumbotron >
                      <h1 className="display-4">
                        <IntlMessages id="homepage.h1" />
                      </h1>
                      <p className="lead ">
                        <IntlMessages id="homepage.lead" />
                      </p>
                      <hr className="my-4" />
                      <p>
                        <IntlMessages id="homepage.sublead" />
                      </p>
                      <p className="lead mb-0">
                        <Button color="primary" size="lg">
                          <IntlMessages id="homepage.discover-button" />
                        </Button>
                      </p>
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
            <Row>
              <Colxx xl="6" lg="12" className="mb-4">
                <Card className="justify-content-end">
                  <CardBody className="justify-content-end">
                  <Jumbotron >
                      <h1 className="display-4">
                        <IntlMessages id="homepage.h2" />
                      </h1>
                      <p className="lead ">
                        <IntlMessages id="homepage.h2-lead" />
                      </p>
                      <hr className="my-4" />
                      <p>
                        <IntlMessages id="homepage.h2-sublead" />
                      </p>
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Colxx>
              <Colxx xl="6" lg="12" className="mb-4">
                <Calendar />
              </Colxx>
            </Row>
            <Row>
              <Colxx lg="12" xxl="6">
                <Row>
                  <Colxx md="12" lg="6" className="mb-4">
                    <NavLink to="/app/discovery">
                      <GradientCardContainer category="discover"/>
                    </NavLink>   
                  </Colxx>
                  <Colxx md="12" lg="6" className="mb-4">
                    <NavLink to="/app/stage">
                      <GradientCardContainer category="stage"/>
                    </NavLink>  
                  </Colxx>
                </Row>
                <Row>
                  <Colxx md="12" lg="6" className="mb-4">
                    <NavLink to="/app/bar">
                      <GradientCardContainer category="bar"/>
                    </NavLink>
                  </Colxx>
                  <Colxx md="12" lg="6" className="mb-4">
                    <NavLink to="/app/fiera">
                      <GradientCardContainer category="fiera"/>
                    </NavLink>
                  </Colxx>
                </Row>
              </Colxx>
              <Colxx lg="12" xxl="6" className="mb-4">
                <NavLink to="/app/lottery">
                  <GradientCardContainer className="full" category="lottery" />
                </NavLink>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
