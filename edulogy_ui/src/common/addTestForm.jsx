import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../common/input';




function AddTestForm() {

  const [inputs, setInputs] = useState({
    name: "",
    level: "",
    time:"",
    type:"",
    img:""
  });
   
  const {name,level,time, type} = inputs;

  const [fileUrls, setFileUrls] = useState({ImgUrl:"Choose file img",ScriptUrl:"Choose file script"})

  const {ImgUrl, ScriptUrl } = fileUrls;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();


  function validate() {
    let err = {};
    if (!name)
      err.name = "please enter name !";
    if (!time)
      err.time = "please enter time!"
    if (!level)
      err.level = "please select level !"
    if (!type)
      err.type = "please enter type !"
    return err;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }
 
  function handleFileChange(e){
    const {name,value} = e.target;
    setFileUrls(fileUrls=>({...fileUrls,[name]:value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }
  }
  
  return (
      <div class = "addtest_container">
          <h2 style={{paddingTop:"30px"}}>Add Test</h2>
          <form onSubmit={handleSubmit} class = "editques_frm">
              <Input
              type="text" 
              name = "name"
              value={name}
              placeholder = "name"
              error = {errors.name}
              handleChange={handleInputChange}
              classname = "text_input"
              />
              <div>
              <label style={{fontWeight:"bold"}} for="">Select level of Test</label>
              <select onChange = {handleInputChange} name ="level"  style={{width:"20%",height:"3vh",color:"blue"}}  id="">
                  <option value="250-500">250-500</option>
                  <option value="500-750">500-750</option>
                  <option value="750-990">750-990</option>
              </select>
              </div>
                <label class="choosefile_btn">
                  {ImgUrl} <input type="file" name = "ImgUrl"  style={{display: "none",}} onChange ={handleFileChange} />
                </label>
                <label class="choosefile_btn">
                  {ScriptUrl} <input type="file" name = "ScriptUrl" style={{display: "none",}} onChange ={handleFileChange} />
                </label>
              <Input
              class="text_input"
              type="text" 
              name = "time"
              error = {errors.time}
              value={time}
              handleChange={handleInputChange}
              classname = "text_input"
              placeholder = "time"
              />
              <Input 
              class="text_input"
              type="text" 
              name = "type"
              error = {errors.type}
              value={type}
              classname ="text_input"
              handleChange={handleInputChange}
              placeholder = "type"
              />
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"30px"}}>
                <button onClick={handleSubmit} id="saveupdate_btn">Save</button>
                <button id="cancelupdate_btn">Cancel</button>
              </div>
          </form>
      </div>
  )
    
}

export default AddTestForm