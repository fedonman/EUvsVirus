import React from "react";
import { Card, CardBody } from "reactstrap";

const GradientCard = ({ className, children }) => {
  return (
    <Card className={`dashboard-sq-banner justify-content-end ${className}`}>
      <CardBody className="justify-content-end d-flex flex-column">
        {children}
      </CardBody>
    </Card>
  );
};
export default GradientCard;
