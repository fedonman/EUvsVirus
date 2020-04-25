import React from "react";

import IntlMessages from "../../helpers/IntlMessages";
import GradientCard from "../../components/cards/GradientCard";

const GradientCardContainer = ({ className, category, color}) => {
  return (
    <GradientCard className={className}>
      {/* <span className="badge badge-pill badge-theme-3 align-self-start mb-3">
        <IntlMessages id="dashboards.gogo" />
      </span> */}
      <p className="lead text-white">
        <IntlMessages id={`homepage.${category}-card-title`} />
      </p>
      <p className="text-white">
        <IntlMessages id={`homepage.${category}-card-body`} />
      </p>
    </GradientCard>
  );
};
export default GradientCardContainer;
