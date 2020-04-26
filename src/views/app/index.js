import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);
const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './home')
);
const DiscoveryPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './discovery')
);
const StagePage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './stage')
);
const BarPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './bar')
);
const FieraPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './fiera')
);
const LotteryPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './lottery')
);
const ChatApp = React.lazy(() => import('./applications/chat'));


class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/home`}
              />
              <Route
                path={`${match.url}/home`}
                render={props => <HomePage {...props} />}
              />
              <Route
                path={`${match.url}/discovery`}
                render={props => <DiscoveryPage {...props} />}
              />
              <Route
                path={`${match.url}/camp`}
                render={props => <ChatApp {...props} />}
              />
              <Route
                path={`${match.url}/lottery`}
                render={props => <LotteryPage {...props} />}
              />
              <Route
                path={`${match.url}/stage`}
                render={props => <StagePage {...props} />}
              />         
              <Route
                path={`${match.url}/bar`}
                render={props => <BarPage {...props} />}
              />
              <Route
                path={`${match.url}/fiera`}
                render={props => <FieraPage {...props} />}
              />             
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
