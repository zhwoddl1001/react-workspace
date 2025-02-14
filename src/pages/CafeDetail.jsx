import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CafeDetail = () => {
    const { id } = useParams();
    const [cafe, setCafe] = useState(null);
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    };

    useEffect(() => {
        
        axios
            .get(`http://localhost:8080/api/cafes/${id}`)
            .then((response) => {
                setCafe(response.data);
            })
            .catch((error) => {
                console.error("백엔드 데이터 오류:", error);
                alert("백엔드 데이터 오류");
            });
    }, []);



    return (
        <>
            {
                cafe ?(
                    <div>
                        <h1>{cafe.name} 상세 정보</h1>
                        <p>📍 주소 : {cafe.address}</p>
                        <p>📞 전화번호 : {cafe.phoneNumber}</p>
                        <p>🕒 영업시간: 오픈 - 마감 : {cafe.openingTime} - {cafe.closingTime}</p>
                        <p>📖 설명 : {cafe.description}</p>
                        <button onClick={backBtn}>뒤로가기</button>
                    </div>
                ) :
                    (<div>
                        <p> 로딩중</p>
                    </div>)
            }
        </>
    )

};

export default CafeDetail;