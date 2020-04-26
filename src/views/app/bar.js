import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Jumbotron, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

export default class BarPage extends Component {
    render() {
        return (
          <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="barbanner">
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
                        <IntlMessages id="barpage.h1" />
                      </h1>
                      <p className="lead ">
                        <IntlMessages id="barpage.lead" />
                      </p>
                      <p className="lead ">
                        <IntlMessages id="barpage.h2-lead" />
                      </p>
                      <hr className="my-4" />
                      <p className="lead">
                        <IntlMessages id="barpage.h2-sublead" />
                      </p>
                      {/* <p className="lead mb-0">
                        <Button color="primary" size="lg">
                          <IntlMessages id="homepage.discover-button" />
                        </Button>
                      </p> */}
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
