import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import AddTestForm from '../../common/addTestForm';
import TableTests from '../../components/table/testsTable'
import AddQuesForm from '../../common/addQuesForm'
import TableQuestions from '../../components/table/questionsTable';
import DashboardControl from '../../components/DashboardControl'
import CardInfor from '../../common/infoCard';
import { constants } from '../../constants';
import { testActions } from '../../actions/testActions';
import { questionActions } from '../../actions/questionActions';

function AdminPage() {
  const cardTestLogo = <i class="far fa-sticky-note"></i>
  const cardQuestionLogo = <i class="fas fa-puzzle-piece"></i>
  const cardUserLogo = <i class="fas fa-users"></i>

  const [ numberOfTests, setNumberoFTests] = useState();
  const [ numberOfQuestions, setNumberOfQuestions] = useState();
  const [ numberOfUsers, setNumberOfUsers] = useState();

  const tests = useSelector(state=>state.test.tests)
  const testStatus = useSelector(state=>state.test.status)

  const questions = useSelector(state=>state.question.questions)
  const questionStatus = useSelector(state=>state.question.status)


  let IsLoading = true;
  const dispatch = useDispatch();

  useEffect(()=>{
    if(testStatus === constants.LOADING)
      dispatch(testActions.getAllTest());
    else if( questionStatus === constants.LOADING )
      dispatch(questionActions.getAllQuestion());
    else{
      setNumberoFTests(tests.length);
      setNumberOfQuestions(questions.length);
    }
  },[tests,testStatus, dispatch])

  const dashboardType = useSelector(state=>state.dashboard.dashboardType)

  let currentDashboard = {
    dashboard_test:[
      <AddTestForm/>,
      <TableTests/>,
    ],
    dashboard_question:[
      <AddQuesForm/>,
      <TableQuestions/>
    ]
  }

  const Loading = <img style={{width:"100px"}} src="https://i.ibb.co/Wfkppwd/loading-Card.gif" alt="" />
  if(numberOfTests && numberOfQuestions && IsLoading)
    IsLoading = false;

  let className = 'dashboard';

  if (dashboardType)
    className += ' flex';

  return (
    <React.Fragment>
     <div className={className}>
      <CardInfor Infor = {!IsLoading? numberOfTests:Loading} Logo = {cardTestLogo} Title = "Tests" Color = "orange"/>
      <CardInfor Infor = {!IsLoading?numberOfQuestions:Loading} Logo = {cardQuestionLogo} Title = "Questions" Color = "green"/>
      <CardInfor Infor = {Loading} Logo = {cardUserLogo} Title = "Users" Color = "blue"/>
      {currentDashboard[dashboardType]}
      <DashboardControl/>
    </div>
    </React.Fragment >
  )
}

export { AdminPage }