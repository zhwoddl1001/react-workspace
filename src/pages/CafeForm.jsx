import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CafeForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [openingTime, setOpeningTime] = useState("");
    const [closingTime, setClosingTime] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/cafes",formData,{
                    headers:{"Content-Type" : "application/json"}
                }
            )
            .then((respronse)=>{
                alert(name + "가 추가 되었습니다.");

                setName("");
                setAddress("");
                setPhoneNumber("");
                setDescription("");
            })
            .catch(
                (err) => {
                    alert("카페를 저장하던 중 문제가 발생했습니다.");
                    console.log("cafe Form error : " , err);
                }
            )
    }

    const handleInputChange  = (e) => {
        const {name,value} = e.target;
        if(name === "name") setName(value);
        else if (name === "address") setAddress(value);
        else if (name === "phoneNumber") setPhoneNumber(value);
        else if (name === "description") setDescription(value);
    };
    const formData = new FormData();
    formData.append("name",name);
    formData.append("address",address);
    formData.append("phoneNumber",phoneNumber);
    formData.append("openingTime",openingTime);
    formData.append("closingTime",closingTime);
    formData.append("description",description);



        return (
            <div>
                <h1>새로운 카페 추가</h1>
                <form onSubmit={handleSubmit}>
                    <label>이름</label>
                    <input type="text"
                           name="name"
                           placeholder="카페이름"
                           value={name}
                           onChange={handleInputChange }/>

                    <label>주소</label>
                    <input type="text"
                           name="address"
                           placeholder="주소"
                           value={address}
                           onChange={handleInputChange }/>

                    <label>전화번호</label>
                    <input type="text"
                           name="phoneNumber"
                           value={phoneNumber}
                           onChange={handleInputChange }/>


                    <label>영업 시작 시간</label>
                    <input type="time" value={openingTime} onChange={(e) => setOpeningTime(e.target.value)} required/>

                    <label>영업 종료 시간</label>
                    <input type="time" value={closingTime} onChange={(e) => setClosingTime(e.target.value)} required/>

                    <label>설명</label>
                    <textarea placeholder="카페설명"
                              name="description"
                              value={description}
                              onChange={handleInputChange }></textarea>

                    <button type="submit">추가하기</button>
                </form>
            </div>
        );
    };

export default CafeForm;