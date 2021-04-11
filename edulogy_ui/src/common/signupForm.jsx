import React, { Component } from 'react'

class SignupForm extends Component {
  render () {return (
    <form action="#" method="POST" className="form center ">
      <div className="center-text">
        <h2>Edulogy - Đăng ký tài khoản</h2>
        <div>Vui lòng cung cấp các thông tin dưới đây để đăng ký tài khoản</div>
      </div>
      <div className="input-container">
        <input type="text" name="name" placeholder="Tên đăng nhập"/>
        <input type="text" name="email" placeholder="Địa chỉ email"/>
        <input type="password" name="password" placeholder="Mật khẩu đăng nhập"/>
        <button id="signup-btn">Tạo tài khoản</button>
        <div className='center-text'>Bạn đã có tài khoản? <button onClick = {this.props.onToggle} >Đăng nhập</button> </div>         
      </div>
    </form>
  ) 
  }
}

export default SignupForm