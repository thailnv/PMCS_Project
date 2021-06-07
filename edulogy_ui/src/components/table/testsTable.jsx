import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testActions } from '../../actions/testActions';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
function TableTests() {

  const [tests, setTests] = useState()

  const dispatch = useDispatch();
 
  const Tests = useSelector(state=>state.test.tests)
  const TestsStatus = useSelector(state=>state.test.status)
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
      dispatch(testActions.getAllTest())
      if(Tests)
       setIsLoading(false);
       {setTests(Tests);}
  },[TestsStatus,tests])
  
  let data;
  if(tests)
   {  
       data = tests.map(test=>{
            return{
                name:test.name,
                level:test.level,
                time:test.time,
                type:test.type,
                action:(
                    <button id="viewtest_btn">view <i class="far fa-eye" style={{marginLeft:"5px"}}></i></button>
                )
            }
        })
    }

  const Title = (<h2 style={{color:"#00949e"}}> Tests </h2>)
  
  return (
      <div class="table_container">
          <MaterialTable
          title = {Title}
          data = {data}
          isLoading ={isLoading}
          columns = {[
              {title:"Name",field:"name",cellStyle: rowData => ({ color:"#333",fontFamily:"'Poppins', sans-serif" })},
              {title:"Level",field:"level",cellStyle: rowData => ({ color:"orange",fontFamily:"'Poppins', sans-serif" })},
              {title:"Time",field:"time",cellStyle: rowData => ({ color:"#56a4fb",fontFamily:"'Poppins', sans-serif" })},
              {title:"Type",field:"type",cellStyle: rowData => ({ color:"#333",fontFamily:"'Poppins', sans-serif" })},
              {title: "", field:"action",cellStyle: rowData => ({ color:"#333",fontFamily:"'Poppins', sans-serif" })}
            ]}
            options={{
                headerStyle: {
                  color: '#000',
                  fontWeight:"bold",
                  fontFamily:"'Poppins', sans-serif"
                },
                
              }}
            />
      </div>
  )
}

export default TableTests