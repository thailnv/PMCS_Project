import { constants as c } from "../../../constants";

export default function SubView(props) {
  let {
    test,
    mode,
    score,
    listAnswers,
    trueAnswers,
    currentQuestion,
    handleChangeQuestion,
    handleSubmit,
    handleRedo } = props;
  return (
    <div className="col sub-view">
      <div className="timer">
        <div onClick={handleSubmit} className="submit">
          <i className="fas fa-check"></i> <br />
        Nộp bài
        </div>
        <span>{mode === c.SUBMITED_MODE ? `${score} / ${test.questions.length}` : "00 : 59 : 22"}</span>
        <div onClick={handleRedo} className="redo">
          <i className="fas fa-redo"></i> <br />
        Làm lại
        </div>
      </div>
      <div className="list-question">
        {
          test.questions.map((v, i) => {
            let customClass = i === currentQuestion ? "round question-active" : "round";
            if (mode === c.DO_TEST_MODE && listAnswers[i] !== undefined)
              customClass += " question-active";
            if (mode === c.SUBMITED_MODE)
              if (listAnswers[i] === trueAnswers[i])
                customClass += " question-true";
              else
                customClass += " question-wrong";
            return (
              <div className="col1-7" key={i}>
                <div className="auto-padding">
                  <div className="square">
                    <button onClick={() => handleChangeQuestion(i)} className={customClass}>{i + 1}</button>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}