import {useState} from 'react';
import './App.css';

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.t]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}  

function App() {
  let [title, setTitle] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [t, setT] = useState(0);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');
    return (
      <div>
        <div className="nav">
          <h4>Blog</h4>
        </div>
        {
          title.map((a, i) => {
            return (
              <div className="list" key={i}>
                <h4 onClick={() => {
                  setModal(!modal); setT(i);
                }}>
                  {title[i]}
                  <span onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...good];
                    copy[i] = copy[i] + 1;
                    setGood(copy) 
                  }}>👍</span> {good[i]}
                </h4><br />
                <p>2월 18일 발행</p>
                <button onClick={() => {
                  let copy = [...title];
                  let copygood = [...good]
                  copy.splice(i, 1);
                  copygood.splice(i, 1);
                  setTitle(copy);
                  setGood(copygood);
                }}>삭제</button>
              </div>
            );
          })
        }

        {modal ? <Modal title={title} color={'orange'} t={t}/> : null}

        <button
          onClick={() => {
            let copy = [...title];
            copy.sort();
            setTitle(copy);
          }}
        >
          정렬
        </button>
          <input type="text" onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value)
          }}></input>
          <button onClick={() => {
            let copy = [...title];
            let copygood = [...good];
            copy.unshift(input);
            copygood.unshift(0)
            setTitle(copy);
            setGood(copygood);
          }}>발행</button>
      </div>
    )
}

export default App;
