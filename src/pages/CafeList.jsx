import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CafeList = () => {
    const [cafes, setCafes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/cafes")
            .then((res)=>{
                console.log(res.data);
                setCafes(res.data);
            })
            .catch(()=>{
                alert("백엔드에서 데이터를 가져오지 못했습니다.")
            })
    }, []);
    return (
        <div>
            <h1>☕ 카페 목록</h1>
            {cafes.map((cafe)=>{
                return(
                    <ul>
                        <li key={cafe.id}>
                            <h3>{cafe.name}</h3>
                            <p>{cafe.description}</p>
                            <Link to={`/cafes/${cafe.id}`}>
                                <button>상세보기</button>
                            </Link>
                        </li>
                    </ul>
                )
            })}
                <Link to={"/cafes/add"}>
                    <button>새 카페 추가</button>
                </Link>

        </div>
    );
};

export default CafeList;