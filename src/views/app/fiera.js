import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Jumbotron, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

export default class FieraPage extends Component {
    render() {
        return (
          <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="fierabanner">
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
                        Fiera
                      </h1>
                      <p className="lead ">
                        Ciao! Welcome to the artisan shop window. We are all small businesses, living in challenging times preserving ancient and beautiful traditions. Visit our stands and take look to our accomplishments! Contact us for a quote or for more information about what we do. Our aim is to open again to the public as soon as possible, but till that will happen we ask you please to leave us a contribution: you will receive a special voucher for your next purchase art in our shops! A goodwill as a wish to meet you in Venice!
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
