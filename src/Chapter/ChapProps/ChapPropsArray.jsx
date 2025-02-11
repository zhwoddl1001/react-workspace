
const ChapPropsArray = () => {
return(
    <div>
        {/*
        <Parent><Parent/>

        만약에 태그 내부에 요소로 특정 값을 넣거나
        특별히 설정할 일이 없다면 아래와 같이

        단축해서 작성할수 있음
        <Parent/>
        */}
        <Parent/>
    </div>
)
}

const ChildOne = ({name,age}) => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*배열 형식으로 단일 데이터가 아닌 2개 이상의 데이터를 표기할 것*/}
                <h2>name, age 로 가져온 사용자 목록</h2>
                <li>
                    {name} / {age}
                </li>
            </ul>
        </div>
    )
}

const ChildTwo = (props) => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <h2>props 로 가져온 사용자 목록</h2>
            <li>
                {props.name} / {props.age}
            </li>
            <ul>
                {/*배열 형식으로 단일 데이터가 아닌 2개 이상의 데이터를 표기할 것*/}
            </ul>
        </div>
    )
}

// 메인으로 확인할 배열리스트 () 내부에 들어올 변수명이 단일이기 때문에 users 에서 {} 를 사용여부는 상관 X
// users 목록 형태 RestController 로 가져오는 형식 우리가 직접 데이터를 써서 오류가 나옴 나중에 js 가져올때는 오류 x
const ChildThree = ({users}) => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*배열 형식으로 단일 데이터가 아닌 2개 이상의 데이터를 표기할 것*/}
                {/*
                1. map() -> return 생략 가능 / UI 로 표해줄 때 많이 사용
                Parent 에서 변수이름.map((반목문 내에서 사용할변수이름, 번호순서 = index) => (<li key={index}> {user.name} / {user.age} <li>)) */}
                {/* html 태그 내부에서 javascript 로 가져온 값을 사용하기 위해서는 반드시{} f를 작성후 변수이름이나 기능 작성*/}
                {
                    users.map((user,index) =>(
                        <li key={index}>{user.name} / {user.age}</li>
                    ))
                }
                
                {/* 
                2. map{} -> return 반드시 사용해야함 / UI 와 기능을 동시에 표현할 때
                Parent 에서 변수이름.map((반목문 내에서 사용할변수이름, 번호순서 = index) => {return(<li key={index}> {user.name} / {user.age} <li>);}) */}

                {
                    users.map((user,index) => {
                        // 추가적으로 작성할 자바스크립트가 존재한다면 자바스크립트를 작성하는 공간
                        return(
                            <li key={index}>{user.name} / {user.age}</li>
                            )
                    })
                }
                
            </ul>
        </div>
    )
}
const Parent = () => {
    // name 과 age 를 담을 배열 생성 -> 추후 데이터 베이스로 가져온 값 변형

    //배열 형태는 [] 로 작성
    const numberList=[1,2,3]
    const stringList=["가","나","다"]
    // 만약 배열에서 한 칸 당 값을 두개씩 가죠오고 싶다면 {} 로 감싸서 가죠오기
    const numStringListOne=[
                                            {number:1,string:"가"},
                                            {number:2,string:"나"},
                                            {number:3,string:"다"}
                                                        ]
    // DB 에서 가져온 값을 표기할 때 사용할 배열 방식 
    // [{React 에서 가져온 Db를 사용할 변수이름1번 : JavaBackend 에서 전달받은 데이터1번,
    // React 에서 가져온 Db를 사용할 변수이름2번 : JavaBackend 에서 전달받은 데이터2번}]
    // Java Backend 에서 가져온 데이터를 사용할 때 왼쪽에서 작성한 변수이름으로 활용하겠다
    const numStringListTwo=[
                                            {numberList:numberList,stringList:stringList},
    ]
    const userList=[
        {name:"홍길동",age:25},
        {name:"김철수",age:35},
        {name:"박영희",age:45},

    ]
    return(
        <div>
            <h1>부모 -> 자식 데이터를 전달 (기본 형태로 전달)</h1>
            <ChildOne name="가나다" age={10}/>
            <ChildTwo name="가나다" age={10}/>

            <h1>부모 -> 자식 데이터를 전달 (배열 형태로 전달)</h1>
            {/*ChildThree 에서 사용할 변수 명칭 = users 사용할 데이터 = userList 에 작성한 데이터를 사용*/}
            <ChildThree users={userList}/>
        </div>
    )
}
export default ChapPropsArray;