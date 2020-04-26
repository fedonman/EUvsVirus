import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

export default class StagePage extends Component {
    render() {
        return (
          <Fragment>
            <Row>
              <Colxx xxs="12">
                <p>Under Construction</p>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
