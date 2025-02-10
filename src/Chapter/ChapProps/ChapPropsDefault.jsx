
const ChapPropsDefault = () => {

    // 부모 나 자식 호출 사용
    return(
        <div>
            <Parent/>
        </div>
    )
}
// 값이 null 이경우 null로 표기하지 않기 위해 기본값 설정
/*
함수이름.defaultProps={
    변수이름1 : "변수에 작성할 값1",
    변수이름2 : "변수에 작성할 값2",
}
 */
/***** Child 와 Parent 가 만들어지기 전에 사용할 수 없음
Child.defaultProps = {
    name:"알 수 없음",
    money:0
}

Parent.defaultProps = {
    name:"알 수 없음",
    money:0
}
    */
const ChildOne = ({name, money}) => {
        return(
            <div>
                <h2>이름 : {name}</h2>
                <h4>당첨금 : {money}</h4>
            </div>
        )
}
// 함수명. defaultProps 로 구분지어 상태관리 하기를 원치 않을 경우
// ({}) 내부에 직접적으로 작성 가능
//                              {변수명 " "변수기본값", 변수명 : "변수기본값"}
const ChildTwo = ({name = "미수령", money = 0}) => {
    return(
        <div>
            <h2>이름 : {name}</h2>
            <h4>당첨금 : {money}</h4>
        </div>
    )
}
export default ChapPropsDefault;

const Parent = () => {
    // javaScript 공간 상태 관리
    return(
        <div>
            {/*html 코드를 작성하는 공간 반드시 <div> 나 <> 전체 감싸지 */}
            <h1>이번주 로또 당첨자</h1>
            <ChildOne name="홍길동" money={10}/>
            <ChildOne name="김철수" />
            <ChildOne money={100}/>

            <ChildTwo name="오길동" money={50}/>
            <ChildTwo name="박철수" />
            <ChildTwo money={100}/>
        </div>
    )
}
// Parent 에서 데이터를 가져오지 못하는 경우
// UI 문제가 발생하는 것을 방지하기 위해
// 자식 컴포넌트에 설정
ChildOne.defaultProps = {
    name:"알 수 없음",
    money:0
}

/*
Parent.defaultProps = {
    name:"알 수 없음",
    money:0
}

 */