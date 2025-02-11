/*
* package.json 에서
* dependencies" 내부에
    "axios" 가 작성되어있다면 더이상 npm i axios 를 하지 않아도 됨
     설치가 되어있기 때문에 my-app 폴더 내에서 언제든지 axios 를 사용할 수 있음
* 
* */
import {useEffect, useState} from "react";
import axios from "axios";

const APIDog = () => {
    const [dog,setDog] = useState("");

    const dogBtn = () => {
            axios
                .get("https://api.thedogapi.com/v1/images/search")
                .then((res)=> {
                        setDog(res.data[0].url);
                    }
                )
                .catch(()=>{
                    alert("API에서 데이터를 불러올수 없습니다 백엔드를 확인해 주세요")
                })
    }
    useEffect(() => {
        dogBtn();
    }, []);

    return(
        <div>
            <div>
                <h1>랜덤 강아지 사진</h1>
                {dog ? <img src={dog}/> : <p>로딩중</p> }
                <button onClick={dogBtn}>새로운 강아지 보기</button>
            </div>
        </div>
    )
}
const APIRandomJoke = () => {
    const [setup,setSetup] = useState("");
    const [delivery,setDelivery] = useState("");

    useEffect(() => {
        
        // jokeapi =[] 로 이루어진 배열 형태가 아님
        // category , setup , delivery
        axios
            .get("https://v2.jokeapi.dev/joke/Any")
            .then(
                (res)=>{
                setSetup(res.data.setup)
                    setDelivery(res.data.delivery)
            })
            .catch(()=>{
                alert("API에서 데이터를 가져올수 없습니다.")
            })
    }, []);


    return(
        <div>
            <h1>랜덤으로 농담 설정하기</h1>
            {setup ? <p>{setup}</p> : <p>로딩중</p>}
            {delivery ? <p>{delivery}</p> : <p>로딩중</p>}
        </div>
    )
}
const APIRandomUser = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [picture,setPicture] = useState("");

    useEffect(() => {
            axios
                .get("https://randomuser.me/api/")
                .then((res)=>{
                    const user = res.data.results[0];
                    setName(user.name.title + user.name.first + user.name.last)
                    setEmail(user.email)
                    setPicture(user.picture.medium)
                })
                .catch(()=>{

                })

    }, []);

    return(
        <div>
            <h1>랜덤 유저 정보 불러오기</h1>
            {name ? <p>{name}</p> : <p>로딩중</p>}
            {email ? <p>{email}</p> : <p>로딩중</p>}
            {picture ? <img src={picture}/> : <p>로딩중</p>}
        </div>
    )
}


const PracticeUseEffectAxios = () => {
    
    return(
        <div>
            { /* <APIDog/> , <APIRandomJoke/> */}
            <APIRandomUser/>

        </div>
    )
}
export default PracticeUseEffectAxios;