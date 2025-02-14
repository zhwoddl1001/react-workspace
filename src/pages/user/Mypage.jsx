import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const Mypage = ({user}) => {
    const navigate = useNavigate();
    const [storedUser, setStoredUser] = useState(user);

    useEffect(() => {
        if (!user) {
            const savedUser = localStorage.getItem("user");
            if (savedUser) {
                setStoredUser(JSON.parse(savedUser));
            } else {
                navigate("/login"); //로그인한 유저 정보가 없다면 로그인페이지로 돌려보내기
            }
        }
    }, [user, navigate]);


//    if (!storedUser) return <div>로딩중 ...</div>;

    const handleLogout = () => {
        axios
            .post("http://localhost:8080/api/user/logout")
            .then( // 로그아웃 주소 연결하고 controller 에서 로그아웃에 대한 정보 전달받았다면
                ()=>{
                    localStorage.removeItem("user");
                    alert("로그아웃 완료");
                    navigate("/login");
                }
            )   .catch(
            (err) => {
                alert("로그아웃을 할 수 없습니다.");
                console.log("로그아웃 오류 : ", err);
            }
        )

    }

    return (
        <>
            { storedUser ?
                (<div>
                        <h1>마이페이지</h1>
                        <p>아이디 : {storedUser.userId}</p>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>


                ) : (
                    <div>로딩중 ...</div>
                )
            }
        </>
    )
}

export default Mypage;