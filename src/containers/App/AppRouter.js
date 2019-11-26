import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard')),
  },
  // {
  //   path: 'appointment',
  //   component: asyncComponent(() => import('../Reports/Appointment')),
  // },
  // {
  //   path: 'appointment/today',
  //   component: asyncComponent(() => import('../Reports/TodayAppointment')),
  // },
  // {
  //   path: 'appointment/tomorrow',
  //   component: asyncComponent(() => import('../Reports/TomorrowAppointment')),
  // },
  // {
  //   path: 'appointment/week',
  //   component: asyncComponent(() => import('../Reports/WeekAppointment')),
  // },

  // {
  //   path: 'appointment/monthly',
  //   component: asyncComponent(() => import('../Reports/MonthlyAppointment')),
  // },

  // {
  //   path: 'prescription/:id',
  //   component: asyncComponent(() => import('../Reports/Prescription')),
  // }



];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
