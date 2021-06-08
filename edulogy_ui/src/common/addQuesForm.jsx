import Input from './input'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imgService } from '../services/uploadServices';




function AddQuesForm(props) {

  const [inputs, setInputs] = useState({
    content: "",
    part: 1,
    answers:[
        {content:"", isTrue:false},
        {content:"", isTrue:false},
        {content:"", isTrue:false},
        {content:"", isTrue:false}
    ],
  });
   
  const {part,content} = inputs;
  const answerA = inputs.answers[0].content;
  const answerB = inputs.answers[1].content;
  const answerC = inputs.answers[2].content;
  const answerD = inputs.answers[3].content;

  const [fileurls,setFileurls] = useState({url:'Choose img',script:'Chooes file script'})

  const {url,script} = fileurls;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();


  function validate() {
    let err = {};
    if (!content && inputs.part !== '1')
      err.content = "please enter content of question !";
    if (!answerA && !answerB &&!answerC)
      err.answer = "Vui lòng nhập câu trả lời !"
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
    if(name === 'url')
       {
        value.replace('C:\\fakepath\\', '')
         let url;
         imgService.uploadImage(files[0])
         .then((res)=>{
           if(res.data)
            setFileurls(fileUrls=>({...fileUrls,url:res.data.url}))
         })
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
      setErrors(error);
      return;
    }
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
              value={answerA}
              handleChange={handleInputChange}
              error = {errors.answer}
              placeholder="answer A"
              />
              <Input 
              id ="1"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerB}
              handleChange={handleInputChange}
              error = {errors.answer}
              placeholder = "answer B"
              />
              <Input
              id ="2"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerC}
              handleChange={handleInputChange}
              placeholder = "answer C"
              />
              {inputs.part != 2 &&
              <Input 
              id ="3"
              classname="text_input"
              type="text" 
              name = "answer"
              value={answerD}
              handleChange={handleInputChange}
              placeholder = "answer D"
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