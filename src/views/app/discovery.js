import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

export default class DiscoveryPage extends Component {
    render() {
        return (
          <Fragment>
            <iframe class="discovery-map" title="map" src="https://www.google.com/maps/d/embed?mid=19m-x7TRcXlQK2tF90D2oGZhA57nVczNI" width="100%" height="100%"></iframe>
            <Row className="app-row">
              <Colxx xxs="12" className="chat-app">
                
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
