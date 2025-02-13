import {useState} from "react";
import "./PizzaForm.css";

const PizzaForm = () => {
// java script 형식으로 상태 관리
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const handleAddPizza = () => {

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
            <input type="file"

                   onChange={(e) => setImage(e.target.value)}
            />
            <button type="button" onClick={handleAddPizza}>추가하기</button>
        </div>
    )
}

export default PizzaForm;