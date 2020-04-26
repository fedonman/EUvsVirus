import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Jumbotron, Button } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import LastStepEnd from "../../containers/wizard/LastStepEnd";
import SalesChartCard from '../../containers/dashboards/SalesChartCard';
import Logs from '../../containers/dashboards/Logs';



export default class LotteryPage extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <Card className="justify-content-end">
                  <CardBody className="justify-content-end">
                    <Jumbotron >
                      <h1 className="display-4">
                        <IntlMessages id="lottery.h1" />
                      </h1>
                      <p className="lead ">
                        <IntlMessages id="lottery.lead" />
                      </p>
                    </Jumbotron>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <LastStepEnd />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" lg="6" className="mb-4">
                <SalesChartCard />
              </Colxx>
              <Colxx xxs="12" lg="6" className="mb-4">
                <Logs />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
