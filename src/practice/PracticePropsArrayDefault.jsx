
const MusicPlay = ({song}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {song.map((song,index) =>(
                    <li key={index}>제목 : {song.title || "재생목록이 없습니다."} 가수 : {song.artist}</li>
                ))}
            </ul>
        </div>
    );
};

MusicPlay.defaultProps  ={
    song:[{title:"재생 목록이 없습니다."}]
}

const Tod = ({list}) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {list.map((lists,index)=>(
                    <li key={index}>{lists.task || "할일이 없습니다."} / {lists.done}</li>
                ))}
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


const Parent = () => {
    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        {  artist: "Black Pink" }
];

    const tasks = [
        { task: "React 공부하기", done: "false" },
        { task: "운동하기", done: "true" },
        { task: "책 읽기", done: "false" },
        { done: "false" }
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



const PracticePropsArrayDefault = () => {
return(
    <div>
        <Parent/>
    </div>
)
}
export default PracticePropsArrayDefault;