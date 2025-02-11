
const User = ({users}) => {
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/*map() 형태로 데이터 불러오기 "ㅇㅇㅇ"님은 ㅁㅁ세 입니다.*/}
                {users.map((user,index) =>(
                    <li key={index}>{user.name}님은{user.age}세 입니다.</li>
                ))}
            </ul>
        </div>
    );
};

const Product = ({products}) => {
    return(
        <div>
            <h2>제품 목록</h2>
            <ul>
                {/*map{} 형태로 데이터 불러오기 제품명- "ㅇㅇㅇ", ㅁㅁ 원 입니다.*/}
                {products.map((product,index) => {
                    return(
                        <li key={index}>제품명-{product.name},{product.price}원 입니다.</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

const ScoreList = ({scores}) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {scores.map((score,index)=>(
                    <li key={index}>{score.name} 의 점수는{score.score}</li>
                ))}
            </ul>
        </div>
    );
};

const Order = ({orders}) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {orders.map((order,index) => (
                    <li key={index}>{order.item} {order.quantity}개</li>
                ))}
            </ul>
        </div>
    );
};

const Book = ({books}) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {books.map((book,index)=>(
                    <li key={index}>책이름 : {book.title} 저자 :{book.author}</li>
                ))}
            </ul>
        </div>
    );
};

const ParentOne = () => {
    // 부모 컴포넌트에서 전달할 데이터 작성
    const userList=[
        {name : "가나다",age:5},
        {name : "마바사",age:15},
        {name : "아자차",age:25},
    ];

    const productList=[
        {name : "노트북",price:120000},
        {name : "스마트폰",price:80000},
        {name : "태블릿",price:60000},
    ];
    const scoreList = [
        { name: "김영희", score: 95 },
        { name: "이철수", score: 88 },
        { name: "박민준", score: 76 }
    ];
    const orderList = [
        { item: "커피", quantity: 2 },
        { item: "샌드위치", quantity: 1 },
        { item: "케이크", quantity: 3 }
    ];
    const bookList = [
        { title: "자바스크립트 완벽 가이드", author: "David Flanagan" },
        { title: "리액트 프로그래밍", author: "김민수" },
        { title: "모던 프론트엔드 개발", author: "이정환" }
    ];

    return(
        <div>
            {/*각 데이터 자식 컴포넌트에 각각 전달*/}
            <User users={userList}/>
            <Product products={productList}/>
            <ScoreList scores={scoreList}/>
            <Order orders={orderList}/>
            <Book books={bookList}/>
        </div>
    )
}

const MusicPlay = ({song}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                    {/* 삼항 연산자 이용해서 직접적으로 표시*/}
                {song.map((song,index) =>(
                    <li key={index}>제목 : {song.title || "재생목록이 없습니다."} 가수 : {song.artist}</li>
                ))}
            </ul>
        </div>
    );
};

// defaultProps 부모에게서 특정 값을 가져오지 못할 때를 대비해서 설정
// 부모에서 상태를 전달할 때는 props.songs 자체가 undefined 상태일 때 적용
// 상태 관리 부모 컴포넌트 이외 외부 작성했을 경우 많이 불러옴


MusicPlay.defaultProps  ={
    song:[{title:"재생 목록이 없습니다.",artist:"아티스트 미상"}]
}

const Tod = ({list}) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {list.map((lists,index)=> {
                    // done = boolean = true , false 값
                    // true false 는 화면에 보이지 않으므로
                    // 화면에 보여지기 위해서는 값 변환을 해서 넣어줘야함
                    return(<li key={index}>{lists.task || "할일이 없습니다."} / {lists.done ? "완료" : "미완료"}</li>)
                })}
            </ul>
        </div>
    );
};

const TeamMembers = ({team}) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {team.map((member,index)=>(
                    <li key={index}>{member.name || "등록된 팀원이 없습니다"} 담당 {member.role}</li>
                ))}
            </ul>
        </div>
    );
};

const ShoppingCart = ({cart}) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {cart.map((item,index)=>(
                    <li key={index}>{item.item || "장바구니가 비었습니다"} 수량 {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

const EventSchedule = ({event}) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {event.map((event,index)=>(
                    <li key={index}>{event.name || "예정된 행사가 없습니다."} 날짜 : {event.date}</li>
                ))}
            </ul>
        </div>
    );
};


const ParentTwo = ()=>{

    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        {  artist: "Black Pink" }
    ];

    const tasks = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    const teamMembers = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    const cartItems = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const events = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];

    return(
        <div>
            <MusicPlay song={songs}/>
            <Tod list={tasks}/>
            <TeamMembers team={teamMembers}/>
            <ShoppingCart cart={cartItems}/>
            <EventSchedule event={events}/>
        </div>
    )
}


const PracticePropsArray = () => {
    return(
        /*
         배열 형태의 데이터가 들어갈 때
         map 사용
         map 에서 배열 형태의 데이터가 존재하지 않으면 에러 발생

        */
      <ParentOne/>,
        <ParentTwo/>
    )
}
export default PracticePropsArray;