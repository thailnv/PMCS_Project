import Input from './input'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadService } from '../services/uploadServices';




function AddQuesForm(props) {

  const [inputs, setInputs] = useState({
    content: "",
    part: "",
    answers:[
        {content:"", isTrue:false},
        {content:"", isTrue:false},
        {content:"", isTrue:false},
        {content:"", isTrue:false}
    ],
    url:'',
    script:'',
  });
   
  const {part,content} = inputs;
  const answerA = inputs.answers[0];
  const answerB = inputs.answers[1];
  const answerC = inputs.answers[2];
  const answerD = inputs.answers[3];

  const [fileurls,setFileUrls] = useState({url:'Choose img',script:'Chooes file script'})

  const {url,script} = fileurls;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();


  function validate() {
    let err = {};
    if(!part)
      err.part = "please choose part number !";
    if(!answerA.isTrue&&!answerB.isTrue&&!answerC.isTrue&&!answerD.isTrue)
      err.istrue = "please choose is true answer !"
    if (!content && inputs.part !== '1')
      err.content = "please enter content of question !";
    if(part == 2)
      {if (!answerA.content || !answerB.content||!answerC.content)
        err.answer = "please enter answer !"
    }
    else{if (!answerA.content || !answerB.content||!answerC.content || !answerD.content)
      err.answer = "please enter answer !"}
    return err;
  }

  function handleSelectChange(e){
    const{value} = e.target;
    const array = inputs.answers.map((answer,index)=>{
      if(index == value)return {
          ...answer,isTrue:true}
      else return {
        ...answer,isTrue:false}
    })
    setInputs(inputs=>({...inputs,answers:array}))
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
        if(files[0].type === 'audio/mpeg'){
          setFileUrls(fileUrls=>({...fileUrls,[name]:value}))
          setInputs(inputs=>({...inputs,[name]:files[0]}))
      }
      else alert('please choose file .mp3');
      }
    }
 }

  function handleInputChange(e) {
    const { name, value, id } = e.target;
    if(name !== "answer")
        setInputs(inputs => ({ ...inputs, [name]: value }));
    else
        {
            let array = inputs.answers;
            array[id] = {...array[id],content:value}
            setInputs(inputs => ({ ...inputs, answers: array }));
        }
        console.log(inputs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let error = validate();
    if (Object.keys(error).length) {
      if(error.part)
        alert(error.part);
      if(error.istrue)
        alert(error.istrue);
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
          scriptData = `http://drive.google.com/open?id=${res.id}`;
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
  }

  return (
      <div class = "addques_container">
          <h2 style={{marginTop:"20px",color:"#5ec198"}}>Add Question</h2>
          <form onSubmit={handleSubmit} action="" class = "editques_frm">
              {inputs.part != 1 &&
              <Input
              classname="text_input content"
              type="text" 
              name = "content"
              value={content}
              placeholder = "content"
              handleChange={handleInputChange}
              error = {errors.content}
              />}
              <div style={{display:"flex",width:"100%",justifyContent:"space-around"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <label style={{fontWeight:"bold"}} for="selectTrueQues">TrueQuestion</label>
                  <select onChange = {handleSelectChange} name ="selectTrueQues"  style={{width:"100%",height:"3vh",color:"blue",marginRight:"30px"}}>
                    <option value="0">Answer A</option>
                    <option value="1">Answer B</option>
                    <option value="2">Answer C</option>
                    {inputs.part != 2 &&<option value="3">Answer D</option>}
                  </select>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <label style={{fontWeight:"bold"}} for="">Part number</label>
                  <select onChange = {handleInputChange} name ="part"  style={{width:"100%",height:"3vh",color:"blue"}}  id="">
                      <option value= {1} >part 1</option>
                      <option value= {2} >part 2</option>
                      <option value= {3} >part 3</option>
                      <option value= {4} >part 4</option>
                      <option value= {5} >part 5</option>
                  </select>
                </div>
              </div>
                <label class="choosefile_btn">
                  {url} <input type="file" name="url" style={{display: "none",}} onChange = {handleFileChange} />
                </label>
               {inputs.part != 5 && <label class="choosefile_btn">
                  {script} <input type="file" name = "script" style={{display: "none",}} onChange = {handleFileChange} />
                </label>}
              <Input
              id ="0"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerA.content}
              handleChange={handleInputChange}
              error = {errors.answer}
              placeholder="answer A"
              />
              <Input 
              id ="1"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerB.content}
              handleChange={handleInputChange}
              error = {errors.answer}
              placeholder = "answer B"
              />
              <Input
              id ="2"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerC.content}
              handleChange={handleInputChange}
              placeholder = "answer C"
              error = {errors.answer}
              />
              {inputs.part != 2 &&
              <Input 
              id ="3"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerD.content}
              handleChange={handleInputChange}
              placeholder = "answer D"
              error = {errors.answer}
              />}
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"30px"}}>
                <button onClick={handleSubmit} id="saveupdate_btn">Save</button>
                <button id="cancelupdate_btn">Cancel</button>
              </div>
          </form>
      </div>
  )
    
}

export default AddQuesForm