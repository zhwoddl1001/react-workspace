import {useState} from "react";

const ChapFetch = () => {
    const [데이터,set데이터]=useState("");
    // fetch 는 vanila = 기본 자바 스크립트에서 사용 가능
    // react 에서만 사용할 수 있는 것이 아님!
    /*
    fetch 란 ?
    자바스크립트에 기본적으로 내장된 비동기 http 요청 함수
    따로 설치할 필요없이 브라우저에서 바로 사용 가능
    장점 : 자바스크립트에 기본 기능이기 때문에 따로 설치할 필요가 없음
                .json() 을 이용해서 쉽게 객체 -> json 형식으로 ㄷ이터 변환
                json 형식이 간결하고 읽기 편하기 때문에 속도나 사용 측면 용이
                
    단점 : http 400 이나 500 에러가 발생해도 fetch 실패로 간주하지 않음
         -> response.ok 속성을 통해 정상적으로 동작하는지 확인
         -> response.ok 문제가 없음을 200으로 표기
         자체적으로 데이터 종료 시점 설정 (타임아웃 설정할 수 없음)
         axios 는 json 으로 자동 변환 해주지만 ,fetch 는 직접변환
         POST 요청 보낼때 headers 와 body 설정을 직접 설정해야함
     */
    
    //fetch 기본코드 : GET 방식
    fetch("api url 주소")
    
        .then(
            (res)=>{
            res.json() // 응답을 JSON 형식으로 변환
        }
        )
        .then(// 위에서 주소를 가져온 후 JSON 형식으로 변환 성공했다면
           // ABC 라는 이름이 존재하는 함수 function ABC()=>{}
           // 익명함수  ()=>{}
            (data)=>{
            set데이터(data);   //set데이터에 data 를 저장하는데 활용
            // 
            }
            )
        .catch((err) =>{
        alert("문제가 발생했습니다.")
        console.log("개발자가 확인할 수 있도록 발생한 문제 확인 : " + err);
    })


    //fetch 기본코드 : POST 방식
    fetch("api url 주소",{
        method:"POST",
        headers:{
            'Content-Type':'application/json' // 문자를 json 형식으로 전송
        },
        body:JSON.stringify({
            title:'제목',
            description:'DB에 저장할 설명'
        }) // DB에 저장할 데이터 설정
        
    })

        .then(
            (res)=>{
                res.json() // 응답을 JSON 형식으로 변환
            }
        )
        .then(// 위에서 주소를 가져온 후 JSON 형식으로 변환 성공했다면
            // ABC 라는 이름이 존재하는 함수 function ABC()=>{}
            // 익명함수  ()=>{}
            ()=>{
                alert("데이터가 성공적으로 DB에 저장되었습니다")  //set데이터에 data 를 저장하는데 활용

            }
        )
        .catch((err) =>{
            alert("데이터를 저장하는데 문제가 발생했습니다.")
            console.log("개발자가 확인할 수 있도록 발생한 문제 확인 : " + err);
        })

    return(
        <div>
            
        </div>
    )
}
export default ChapFetch;