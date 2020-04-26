import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, CardBody, CardTitle } from "reactstrap";

import IntlMessages from "../../helpers/IntlMessages";
import data from "../../data/logs";

const Logs = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
            <IntlMessages id="lottery.latest-donations" />
          </CardTitle>
          <div className="dashboard-logs">
            <PerfectScrollbar
              options={{ suppressScrollX: true, wheelPropagation: false }}
            >
              <table className="table table-sm table-borderless">
                <tbody>
                  {data.map((log, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <span
                            className={`log-indicator align-middle ${
                              log.color
                            }`}
                          />
                        </td>
                        <td>
                          <span className="font-weight-medium">
                            {log.label}€
                          </span>
                        </td>
                        <td className="text-right">
                          <span className="text-muted">{log.time}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </PerfectScrollbar>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default Logs;
