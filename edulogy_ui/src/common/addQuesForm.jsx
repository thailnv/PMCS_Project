import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from '../../constants';



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

  const [fileurls,setFileurls] = useState({Imgurl:'Choose img',Scripturl:'Chooes file script'})

  const {Imgurl,Scripturl} = fileurls;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();


  function validate() {
    let err = {};
    if (!content)
      err.content = "vui long nhap noi dung cau hoi !";
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
    const {name, value} = e.target;
    setFileurls(fileurls=>({...fileurls,[name]:value}))
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
          <h2>Add Question Form</h2>
          <form action="" class = "editques_frm">
              <input
              class="text_input content"
              type="text" 
              name = "content"
              value={content}
              onChange={handleInputChange}
              />
              <div>
              <label style={{fontWeight:"bold"}} for="selectTrueQues">TrueQuestion</label>
              <select onChange = {handleSelectChange} name ="selectTrueQues"  style={{width:"20%",height:"3vh",color:"blue",marginRight:"30px"}}>
                <option value="0">Answer A</option>
                <option value="1">Answer B</option>
                <option value="2">Answer C</option>
                <option value="3">Answer D</option>
              </select>
              <label style={{fontWeight:"bold"}} for="">Part number</label>
              <select onChange = {handleInputChange} name ="part"  style={{width:"20%",height:"3vh",color:"blue"}}  id="">
                  <option value="1">part 1</option>
                  <option value="2">part 2</option>
                  <option value="3">part 3</option>
                  <option value="4">part 4</option>
                  <option value="5">part 5</option>
              </select>
              </div>
                <label class="choosefile_btn">
                  {Imgurl} <input type="file" name="Imgurl" style={{display: "none",}} onChange = {handleFileChange} />
                </label>
                <label class="choosefile_btn">
                  {Scripturl} <input type="file" name = "Scripturl" style={{display: "none",}} onChange = {handleFileChange} />
                </label>
              <input
              id ="0"
              class="text_input"
              type="text" 
              name = "answer"
              value={answerA}
              onChange={handleInputChange}
              />
              <input 
              id ="1"
              class="text_input"
              type="text" 
              name = "answer"
              value={answerB}
              onChange={handleInputChange}
              />
              <input
              id ="2"
              class="text_input"
              type="text" 
              name = "answer"
              value={answerC}
              onChange={handleInputChange}
              />
              <input 
              id ="3"
              class="text_input"
              type="text" 
              name = "answer"
              value={answerD}
              onChange={handleInputChange}
              />
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"30px"}}>
                <button id="saveupdate_btn">Save</button>
                <button id="cancelupdate_btn">Cancel</button>
              </div>
          </form>
      </div>
  )
    
}

export default AddQuesForm