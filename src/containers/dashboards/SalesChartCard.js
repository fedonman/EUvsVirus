import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import IntlMessages from "../../helpers/IntlMessages";
import {LineChart} from "../../components/charts"

import { lineChartData } from "../../data/charts";

const SalesChartCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="lottery.donations" />
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesChartCard;
