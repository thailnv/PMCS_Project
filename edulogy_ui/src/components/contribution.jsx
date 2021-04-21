import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '../actions/appActions';

function ToeicInfo() {
    const [currentForm, setCurrentForm] = useState('contribution')

    const dispatch = useDispatch();

    function handleCloseForm() {
        dispatch(appActions.hidePopup());
    }

    return (
        <div className="contribution-container center">
            <button className="close-btn" onClick={handleCloseForm}>X</button>
            <form action="#" method="POST" className="form center ">
                <div className="center-text">
                    <h2>Edulogy - Đóng góp câu hỏi</h2>
                    <div>Vui lòng hoàn thành những nội dung bên dưới để đóng góp câu hỏi!</div>
                </div>
                <div className="contribution-input-container">
                    <div class="control-group">
                        <div class="select">
                            <select>
                                <option>--Part--</option>
                                <option>Part 1</option>
                                <option>Part 2</option>
                                <option>Part 3</option>
                                <option>Part 4</option>
                                <option>Part 5</option>
                                <option>Part 6</option>
                                <option>Part 7</option>
                            </select>
                            <div class="select__arrow"></div>
                        </div>
                        <div class="select">
                            <select>
                                <option>--Type--</option>
                                <option>Grammar</option>
                                <option>Reading</option>
                            </select>
                            <div class="select__arrow"></div>
                        </div>
                    </div>

                    <input type="text" name="question" placeholder="Nội dung câu hỏi" />
                    <input type="text" name="answer" placeholder="Đáp án A" />
                    <input type="text" name="answer" placeholder="Đáp án B" />
                    <input type="text" name="answer" placeholder="Đáp án C" />
                    <input type="text" name="answer" placeholder="Đáp án D" />
                    <div class="control-group">
                        <label class="container">A
                            <input type="radio" name="radio"/>
                                <div class="checkmark"></div>
                        </label>
                        <label class="container">B
                            <input type="radio" name="radio"/>
                                <div class="checkmark"></div>
                        </label>
                        <label class="container">C
                            <input type="radio" name="radio"/>
                                <div class="checkmark"></div>
                        </label>
                        <label class="container">D
                            <input type="radio" name="radio"/>
                                <div class="checkmark"></div>
                        </label>
                    </div>
                    <div class="control-group">
                        <button className="btn" onClick={handleCloseForm}>Huỷ</button>
                        <button className="btn" href="/trang-chu">Gửi</button>
                    </div>
                   
                </div>
            </form>
        </div>
    );
}



export default ToeicInfo;

