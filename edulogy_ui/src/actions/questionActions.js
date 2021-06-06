import { constants as c } from "../constants";
import { questionService } from "../services/questionService";

function getAllQuestion(){
    return (dispatch)=>{
    questionService.getAllQuestion().then((res) => {
        if (res.doc) dispatch(success(res.doc));
        else dispatch(failure(res.message));
      });
    };
    function success(questions) {
      return { type: c.GET_QUESTIONS_SUCCESS, questions };
    }
    function failure(message) {
      return { type: c.GET_QUESTIONS_FAILURE, message };
    }
}

export const questionActions = {
    getAllQuestion,
}