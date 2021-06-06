import { appServices } from "../services/appServices";
import { constants as c } from "../constants";


function changeDashboard(type) {
  return { type };
}


export const dashboardActions = {
  changeDashboard,

};
