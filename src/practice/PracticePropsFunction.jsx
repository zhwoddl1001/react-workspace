import {useState} from "react";

const PracticePropsFunction= () => {
return(
        <div>
            <Parent1/>
            <Parent2/>
            <Parent3/>
            <Parent4/>
            <Parent5/>
        </div>
    )
}
// 변수명 : `message` `setMessage` `changeMessage` `handelChangeMessage`
const Child1 = ({handelChangeMessage}) => {
    return<button onClick={handelChangeMessage}>메세지 변경</button>
}

const Parent1 = () => {
    const [message,setMessage]= useState("기본 메세지");
    const changeMessage= ()=>{
        setMessage("버튼이 클릭되었습니다.");
    }
    return(
        <div>
            <h1>{message}</h1>
            <Child1 handelChangeMessage ={changeMessage}/>
        </div>
    )
}

//----------- 자식 컴포넌트 (버튼 클릭 시 숫자 증가) ---------------------------------------------------------------------
const Child2 = ({handleIncreaseNumber}) => {
    return <button onClick={handleIncreaseNumber}>숫자 증가</button>;
};

// 부모 컴포넌트
const Parent2 = () => {
    const [number,setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber  (number + 1);
    };

    return (
        <div>
            <h1>현재 숫자: {number}</h1>
            <Child2 handleIncreaseNumber ={increaseNumber} />
        </div>
    );
};


// ------자식 컴포넌트 (버튼 클릭 시 배경색 변경) ------------------------------------------------------------------------
const Child3 = ({handleChangeColor}) => {
    return <button onClick={handleChangeColor}>배경색 변경</button>;
};

// 부모 컴포넌트
const Parent3 = () => {
    const [color, setColor] = useState("white");

    const changeColor = () => {
        setColor(color=== "white" ? "lightblue" : "white");
    };

    return (
        <div style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}>
            <h1>배경색 변경</h1>
            <Child3 handleChangeColor={changeColor} />
        </div>
    );
};

// 자식 컴포넌트 (버튼 클릭 시 부모의 텍스트 변경)---------------------------------------------------------------------
const Child4 = ({handleUpdateText}) => {
    return <button onClick={handleUpdateText}>텍스트 변경</button>;
};

// 부모 컴포넌트
const Parent4 = () => {
    const [text,setText] = useState("안녕하세요!");

    const updateText= () => {
        setText("반갑습니다!");
    };

    return (
        <div>
            <h1>{text}</h1>
            <Child4 handleUpdateText={updateText} />
        </div>
    );
};

// 자식 컴포넌트 (버튼 클릭 시 좋아요 상태 변경)--------------------------------------------------------------
const Child5 = ({ toggleLike }) => {
    return <button onClick={toggleLike}>좋아요/취소</button>;
};

// 부모 컴포넌트
const Parent5 = () => {
    const [liked, setLiked] = useState(false);
    // onClick onSubmit 과 같이 수행 기능 명칭 handle 표기
    const handleToggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <h1>{liked ? "❤️ 좋아요!" : "♡ 좋아요 취소"}</h1>
            <Child5 toggleLike={handleToggleLike} />
        </div>
    );
};
export default PracticePropsFunction;