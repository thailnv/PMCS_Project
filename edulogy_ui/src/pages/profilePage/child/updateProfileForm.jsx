import { useState } from "react";


function UpdateProfileForm(props) {
  return (
      <div class="profile_container">
          <div class="profile_ava">
            <img src="https://i.ibb.co/XV70Wzd/470-4703547-privacy-icon-png.png" alt=""/>
          </div>
          <form class="profile_form" action="" onSubmit={props.handleSubmit}>
            <div class = "input_container">
              <input onChange = {props.handleInputChange} name = "name" type="text" value={props.Username}/>
              <label for="">HọTên</label>
            </div>
            <div class = "input_container">
              <input onChange = {props.handleInputChange} type="mail" autoComplete = "off" name = "email" value={props.Email} />
              <label for="">Email</label>
            </div>
            <div class="button_container">
              <button class = "save updateinfo_btn">Lưu</button>
              <button class = "cancel updateinfo_btn">Hủy</button>
            </div>
          </form>
        </div>
  )
}

export default UpdateProfileForm