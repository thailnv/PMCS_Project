import { useDispatch } from "react-redux"
import {dashboardActions} from "../actions/dashboardActions"
import { constants } from "../constants";
import { toogleDashboardControl } from "../helper"
function DashboardControl(){

    const dispatch = useDispatch();
    function moveToDashboardTest(){
        dispatch(dashboardActions.changeDashboard(constants.DASHBOARD_TEST))
    }
    function moveToDashboardQuestion(){
        dispatch(dashboardActions.changeDashboard(constants.DASHBOARD_QUESTION))
    }
    return(
        <div class="sidebar_container">
            <div id="sidebar">
                <div onClick={moveToDashboardTest}>Tests</div>
                <div onClick={moveToDashboardQuestion}>Questions</div>
                <div>Discussion</div>
            </div>
            <button onClick = {toogleDashboardControl} id="control_btn"><i class="fas fa-cog"></i></button>
        </div>
    )
}

export default DashboardControl