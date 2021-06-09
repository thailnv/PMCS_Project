import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";

import Nav from "../../common/nav";
import Footer from "../../common/footer";
import LoadingPage from "../loadingPage";
import Popup from "../../components/popup";
import MenuSidebar from "../../common/menuSidebar";
import TestCard from "../../components/card/testCard";
import { testActions } from "../../actions/testActions";
import { constants as c } from "../../constants";

function ListTestPage(props) {

  const dispatch = useDispatch();

  const [level, setLevel] = useState("full");
  const tests = useSelector(state => state.test.tests);
  let status = useSelector(state => state.test.status);

  let currentTest = useMemo(() => {
    if (!tests)
      return [];
    if (level === "full")
      return tests;
    let ctests = tests.filter((v) => v.level === level);
    return ctests;
  }, [level, tests]);

  const [query, setQuery] = useState({ ...queryString.parse(props.location.search), page: 1, pagesize: 15 });

  function handleChangeLevel(lv) {
    setLevel(lv);
  }

  function handleChangePage(page) {
    setQuery({ ...query, page: page });
  }


  useEffect(() => {
    if (status === c.LOADING)
      dispatch(testActions.getTest(query));
    else {
      console.log(currentTest);
    }

  })

  return (
    <React.Fragment>
      <Nav />
      <div className="list-test-page">
        {
          status === c.LOADING ? <LoadingPage />
            :
            <React.Fragment>
              <div className="row">
                <span>DANH SÁCH ĐỀ THI</span>
                <div className="flex">
                  <button onClick={() => handleChangeLevel("full")}>Toàn bộ</button>
                  <button onClick={() => handleChangeLevel("250-500")}>Level 250 - 500</button>
                  <button onClick={() => handleChangeLevel("500-750")}>Level 500 - 750</button>
                  <button onClick={() => handleChangeLevel("750-990")}>Level 750 - 990</button>
                </div>
              </div>
              <div className="list-tests">
                {
                  currentTest.map((v, i) => <TestCard key={i} img={v.img} id={v._id} name={v.name} time={v.time} level={v.level} />)
                }
              </div>
              <div className="paginate" style={{ display: "none" }}>
                <button onClick={() => handleChangePage(1)}>1</button>
              </div>
            </React.Fragment>
        }
      </div>
      <Footer />
      <Popup />
      <MenuSidebar />
    </React.Fragment>
  )
}

export { ListTestPage }