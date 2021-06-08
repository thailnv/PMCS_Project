import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from '../../actions/testActions';
import MaterialTable from "material-table";
import { questionActions } from '../../actions/questionActions';
import Popup from '../popup';
import EditQuesForm from '../../common/editQuesForm';
import { openFilter } from '../../helper';
function TableQuestions() {

  const [questions, setQuestions] = useState();
  const [question, setQuestion] = useState();
  const dispatch = useDispatch();
 
  const Questions = useSelector(state=>state.question.questions)
  const QuestionsStatus = useSelector(state=>state.question.status)

  const [isEdit, setIsEdit] = useState(false);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
      dispatch(questionActions.getAllQuestion())
      if(Questions) 
      {setIsLoading(false);
       setQuestions(Questions);}
  },[QuestionsStatus,questions,dispatch])
  
  let data;
  if(questions)
   {  
       data = questions.map((question,index)=>{
            return{
                index:`Question ${index}`,
                part: `part ${question.part}`,
                action:(
                    <button class="viewtest_btn" id={index} onClick={editQues}>view <i id={index}class="far fa-eye" style={{marginLeft:"5px"}}></i></button>
                )
            }
        })
    }
    function editQues(ele){
        setQuestion(questions[ele.target.id])
        setIsEdit(true);
        openFilter();
    }
  const Title = (<h2 style={{color:"#5ec198"}}> Questions </h2>)

  return (
      <div class="table_container">
        <div id="filter"></div>
          <MaterialTable
          title = {Title}
          data = {data}
          isLoading ={isLoading}
          columns = {[
              {title:"Index",field:"index",cellStyle: rowData => ({ color:"#333",fontFamily:"'Poppins', sans-serif" }),headerStyle:{zIndex:"1"}},
              {title:"PartNumber",field:"part",cellStyle: rowData => ({ color:"#00949e",fontFamily:"'Poppins', sans-serif",fontWeight:"400" }),headerStyle:{zIndex:"1"}},
              {title:"Action",field:"action",headerStyle:{zIndex:"1"}},
            ]}
            options={{
                headerStyle: {
                  color: '#000',
                  fontWeight:"bold",
                  fontFamily:"'Poppins', sans-serif"
                },
                
              }}
            />
            {
                question && <EditQuesForm Question = {question} SetForm={setQuestion}/>}
      </div>
  )
}

export default TableQuestions