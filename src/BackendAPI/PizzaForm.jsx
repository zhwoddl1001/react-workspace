import {useState} from "react";
import "./PizzaForm.css";
import axios from "axios";

const PizzaForm = () => {
// java script 형식으로 상태 관리
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    
    // formData는 이미지와 같은 파일형식을 가져올 수 있도록 설정해주는 JavaScript 기능 사용
            const formData = new FormData;
            formData.append("name",name);
            formData.append("price",price);
            formData.append("description",description);
            formData.append("imagePath",image);
    const handleAddPizza = () => {
        axios.post("https://localhost:8080/api.pizzas",
                formData,
            {
                headers:{"Content-Type":"multipart/form-data"}
            }
         )
            .then( // DB에 피자 메뉴추가를 성공했다면
                (response)=> {
                    console.log("데이터 추가 : " + response.data)
                    alert(name + "가 추가되었습니다.")
                    // 기존에 사용자가 작성해놓은 input textarea 값 비워주기
                    setName("");
                    setPrice("");
                    setDescription("");
                    setImage(null);
                }
            )
            .catch(
                (err)=>{
                    alert("피자 데이터를 저장하던 중 문제가 발생했습니다.")
                    console.log("Pizza Form error : ", err);
                }
            )
    }
    return (
        <div className="pizza-form">
            <h1>새로운 피자 추가</h1>
            <label>피자이름</label>
            <input type="text"
                   placeholder="피자이름"
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <label>피자가격</label>
            <input type="number"
                   placeholder="피자가격"
                   onChange={(e) => setPrice(e.target.value)}

            />

            <textarea placeholder="피자설명"
                      onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>사진추가</label>
            {/*
            input 태그에서 type="file" 기능 설정할 때
            두 개 이상의 파일을 가져옴을 인지할 수 있기 때문에
            e.target.files[0] 와 같은 형식으로 이미지 데이터 들 중에서 맨 앞에 있는 1가지만 가져오겠다 설정
            */}
            <input type="file"

                   onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

export default PizzaForm;