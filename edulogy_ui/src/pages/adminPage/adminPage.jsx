import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { constants as c } from "../../constants";
import { appActions } from "../../actions/appActions";
import LoadingPage from "../loadingPage";
import TestSection from "./child/testSection";
import ReportView from "./child/reportView";

function AdminPage() {

  const dispatch = useDispatch();
  const status = useSelector(state => state.application.status);
  const info = useSelector(state => state.application.adminInfo);

  const [currentSection, setCurrentSection] = useState("test");
  const sections = {
    "test": <TestSection tests={info ? info.tests : []} />
  }

  useEffect(() => {
    if (status === c.LOADING) {
      dispatch(appActions.getAdminInfo());
    }
  }, [status, dispatch])
  return (
    <div className="admin-page">
      {
        status === c.LOADING ? <LoadingPage />
          :
          <React.Fragment>
            <ReportView
              tests={info.tests.length}
              questions={info.questions}
              users={info.users}
            />
            {sections[currentSection]}
          </React.Fragment>
      }
    </div>
  )
}

export { AdminPage }