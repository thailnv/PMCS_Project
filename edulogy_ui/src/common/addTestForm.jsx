import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../common/input';
import { constants } from '../constants';
import { uploadService } from '../services/uploadServices';


function AddTestForm() {

  const [inputs, setInputs] = useState({
    name: "",
    level: "",
    time:"",
    type:"",
    url:"",
    script:"",
  });
   
  const {name,level,time, type} = inputs;

  const [fileUrls, setFileUrls] = useState({url:'Choose file img',script:"Choose file script"})

  const{url,script} = fileUrls;

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
    setInputs(inputs=>({...inputs,[name]:value}));
  }

  function handleFileChange(e){
     const {name,value, files} = e.target;
     value.replace('C:\\fakepath\\', '')
     if(files[0])
     {
       if(name === 'url')
        { 
          if(files[0].type === 'image/jpeg'){
            setFileUrls(fileUrls=>({...fileUrls,[name]:value}))
            setInputs(inputs=>({...inputs,[name]:files[0]}))
        }
        else alert('please choose file .jpg/.jpeg');
        }
      else{
        if(files[0].type === 'text/plain'){
          setFileUrls(fileUrls=>({...fileUrls,[name]:value}))
          setInputs(inputs=>({...inputs,[name]:files[0]}))
      }
      else alert('please choose file .txt');
      }
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      if(error.level)
      alert(error.level)
      setErrors(error);
      return;
    }
    let urlData;
    let scriptData;
    uploadService.uploadImage(inputs.url)
    .then((res)=>{
      if(res.data)
            urlData = res.data.url;
      uploadService.GetAcesstoken(inputs.script)
      .then((res)=>{
        if(res)
          scriptData = `http://drive.google.com/open?id= ${res.id}`;
        const data = {...inputs,'url':urlData,'script':scriptData};
        console.log(data);
        //Submit(data);
      })
    })

  }
  
  function Submit(data){
    let requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    //fetch()
  }
  return (
      <div class = "addtest_container">
          <h2 style={{paddingTop:"30px",color:"#5ec198"}}>Add Test</h2>
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
                <label class="choosefile_btn" style={{overflow:"hidden"}}>
                {url} <input type="file" name = "url"  style={{display: "none",}} onChange ={handleFileChange} />
                </label>
                <label class="choosefile_btn" style={{overflow:"hidden"}}>
                {script} <input type="file" name = "script" style={{display: "none",}} onChange ={handleFileChange} />
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