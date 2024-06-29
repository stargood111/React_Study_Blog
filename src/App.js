/* eslinet-disbale */
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App(){

    let posts = '강남 우동 맛집';
    let [A, SetA] = useState( ['들쥐 추천', '강남 우동맛집', '파이썬 독학'] );
    let [num1,num2] = [1,2] // num1 = 1 num2 =2
    let [Good, SetGood] = useState([0,1,2]);
    let [modal, setModal] = useState(false);
    let [modalChoice, setModalChoice] = useState('');
    let [title, setTitle] = useState(0);
    let [input , setInput] = useState('');
    let [Copy,setCopy] = useState();
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {/*<button onClick={()=>{*/}
            {/*    let copy = [...A]*/}
            {/*    SetA(copy.sort())*/}
            {/*}}>가나다순정렬</button>*/}
            {/*<div className="list">*/}
            {/*    <h4>{A[0]} <span onClick={()=>{*/}
            {/*        SetGood(Good+1)*/}
            {/*    }}>👍</span>{Good}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{ A[1] }</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{ A[2] }</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<button onClick={()=>{*/}
            {/*    let copy= [...A]*/}
            {/*    copy[0] = '여자코튼추천';*/}
            {/*    console.log(copy)*/}
            {/*    SetA(copy)*/}
            {/*    modal == false ? setModal(true) : setModal(false)*/}
            {/*}}>검색</button>*/}
            {/*{*/}
            {/*    modal == true ? <Modal></Modal> : ""*/}
            {/*}*/}
            {
                // // A.map((e,i)=> {
                // //     return <div className="list">
                // //         <h4>{A[i]}</h4>
                // //         {/*<h4>{e}</h4>*/}
                // //         <p>2월 17일 발행</p>
                // //     </div>
                // })
                A.map((a,i)=>{
                    return (
                        <div className="list" key ={i} onClick={(e)=>{e.stopPropagation()}}>
                            <h4 onClick={()=>{
                                setTitle(i);
                                setModal(true);
                            }}>{A[i]}
                            <span onClick={(e)=>{
                                let copy = [...Good];
                                copy[i] = copy[i] + 1
                                SetGood(copy)
                                e.stopPropagation();
                            }}>👍</span>{Good[i]}
                            <button onClick={()=>{
                                let copy = [...A]
                                copy.splice(i,1);
                                SetA(copy);
                            }}>삭제</button></h4>
                            <p>2월 17일 발행</p>
                        </div>
                    )
                })
            }
            <input type ="text" onChange={(e)=>{
                setCopy([e.target.value, ...A])
            }}>
            </input>
            <button onClick={()=>{
                SetA(Copy)
                console.log(A)
                // let copy = [...A];
                // copy.unshift(Copy);
                // SetA(copy)
            }}>추가</button>
            { modal == true ?
                <Modal A ={A} color={'coral'} SetA ={SetA} title = {title}></Modal> : null
            }
            </div>

    )
}

function  Modal(props, i) {

    return (
        <div className="modal" style ={{background: props.color}}>
            <h4>{props.A[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
}

export default App;
