import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

import Nav from '../../common/nav';
import Footer from '../../common/footer';
import Banner from '../../common/banner';
import Popup from '../../components/popup';
import ListSkill from './child/listSkills';
import MenuSidebar from "../../common/menuSidebar";
import HomeSection from "./child/homeSection";
import LoadingPage from "../loadingPage";
import { constants as c } from "../../constants";
import { appActions } from "../../actions/appActions";
import TableTests from '../../components/table/testsTable';
import TableQuestions from '../../components/table/questionsTable';
import AddQuesForm from '../../components/form/addQuesForm';
import DashboardControl from '../../components/DashboardControl';
import AddTestForm from '../../components/form/addTestForm';

function HomePage() {
  const dashboardType = useSelector(state=>state.dashboard.dashboardType)
  let currentDashboard = {
    dashboard_test:[
      <AddTestForm/>,
      <TableTests />,
    ],
    dashboard_question:[
      <AddQuesForm/>,
      <TableQuestions/>
    ]
  }

  let className = 'dashboard';

  if (dashboardType)
    className += ' flex';

  return (
    <React.Fragment>
     <div className={className}>
      {currentDashboard[dashboardType]}
      <DashboardControl/>
    </div>
    </React.Fragment >
  )
}

export { HomePage }