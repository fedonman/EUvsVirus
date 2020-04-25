import React, { Component, Fragment } from "react";
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
              <Colxx xl="6" lg="12" className="mb-4">
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
                        <IntlMessages id="jumbotron.lead-detail" />
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
              <Colxx xl="6" lg="12" className="mb-4">
                <Calendar />
              </Colxx>
            </Row>
            <Row>
              <Colxx lg="12" xxl="6">
                <Row>
                  <Colxx md="12" lg="6" className="mb-4">
                    <GradientCardContainer category="discover"/>
                  </Colxx>
                  <Colxx md="12" lg="6" className="mb-4">
                    <GradientCardContainer category="stage"/>
                  </Colxx>
                </Row>
                <Row>
                  <Colxx md="12" lg="6" className="mb-4">
                    <GradientCardContainer category="bar"/>
                  </Colxx>
                  <Colxx md="12" lg="6" className="mb-4">
                    <GradientCardContainer category="fiera"/>
                  </Colxx>
                </Row>
              </Colxx>
              <Colxx lg="12" xxl="6" className="mb-4">
                <GradientCardContainer className="full" category="lottery" />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
