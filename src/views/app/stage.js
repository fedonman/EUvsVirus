import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Jumbotron, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

export default class StagePage extends Component {
    render() {
        return (
          <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="stagebanner">
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
                        Main stage
                      </h1>
                      <p className="lead ">
                        You're in the center of the campo, as squares are actually called in Venice. Enjoy the music streamed live, dance and meet new people! Enjoy the party! 
                      </p>
                      {/* <p className="lead ">
                        <IntlMessages id="barpage.h2-lead" />
                      </p>
                      <hr className="my-4" />
                      <p>
                        <IntlMessages id="barpage.h2-sublead" />
                      </p>
                      <p className="lead mb-0">
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
