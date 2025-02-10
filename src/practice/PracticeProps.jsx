

const PracticeProps= () => {
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

// 1. name 변수명을 사용해서 완성
const Child1 = ({name}) => {
    return(
        <div>
            <h2>내이름은 :{name} 입니다</h2>
        </div>
    )
}


const Parent1 = () => {
    return(
        <div>
            <h1>자식에게 이름 전달하기</h1>
            <Child1 name={"홍길동"}/>
            <Child1 name={"김철수"}/>
        </div>
    )
}

// 2. 부모가 자식에게 나이와 이름 전달
  // 변수명  name age
const Child2 = ({name,age}) =>{
    return(
        <div>
            <h4>{name}의 나이 : {age} 세</h4>
        </div>
    )
}

const Parent2 = ({}) =>{
    return(
        <div>
            <h1>부모 컴포넌트</h1>
            <Child2 name={"홍길동"} age={25}/>
            <Child2 name={"김철수"} age={35}/>
            {/*
            홍길동 25세
            김철수 35세
            */}
        </div>
    )
}

// 자식 컴포넌트 (직업을 받아서 출력)
const Child3 = ({ name, job }) => {
    return (
        <div>
            <h2>🧒 {name}의 직업: {job}</h2>
        </div>
    );
};

// 부모 컴포넌트
const Parent3 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모 컴포넌트</h1>
            {/*
            홍길동 25세 의사
            김철수 30세 개발자
            */}
            <Child3 name={"홍길동"} job={"의사"}/>
            <Child3 name={"김철수"} job={"개발자"}/>
        </div>
    );
};

// 자식 컴포넌트 (색상을 받아서 출력)
const Child4 = ({ name, color }) => {
    return (
        <div>
            <h2>🧒 {name}이 좋아하는 색상: {color}</h2>
        </div>
    );
};

// 부모 컴포넌트
const Parent4 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모 컴포넌트</h1>
            {/*
            홍길동 빨강
            김철수 파랑
            */}
            <Child4 name={"홍길동"} color={"빨강"}/>
            <Child4 name={"김철수"} color={"파랑"}/>
        </div>
    );
};

// 자식 컴포넌트 (상속받은 재산을 표시)
const Child5 = ({ name, money }) => {
    return (
        <div>
            <h2>🧒 {name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산: {money}억 원</p>
        </div>
    );
};

// 부모 컴포넌트
const Parent5 = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>
            {/*
            홍길동 10
            김철수 30
            */}
            <Child5 name={"홍길동"} money={10}/>
            <Child5 name={"김철수"} money={30}/>
        </div>
    );
};

export default PracticeProps;