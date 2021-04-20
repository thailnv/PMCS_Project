import React from 'react';
import { Link } from 'react-router-dom'

function SkillCard(props){
  return (
    <div className="skill-card">
    <div className="img-container">
      <img src={props.skillImg} alt=""/>
    </div>
    <div className="name">{props.skillName}</div>
    <Link to="/">Luyện tập</Link>
  </div>
  )
}

export default SkillCard