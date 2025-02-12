import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import ChapUseState from "./Chapter/ChapUseState";
import PracticeUseState from "./practice/PracticeUseState";
import ChapProps from "./Chapter/ChapProps/ChapProps";
import PracticeProps from "./practice/PracticeProps";
import ChapPropsFunction from "./Chapter/ChapProps/ChapPropsFunction";
import PracticePropsFunction from "./practice/PracticePropsFunction";
import ChapPropsDefault from "./Chapter/ChapProps/ChapPropsDefault";
import PraticePropsDefault from "./practice/PracticePropsDefault";
import ChapPropsArray from "./Chapter/ChapProps/ChapPropsArray";
import PracticePropsArray from "./practice/PracticePropsArray";
import PracticePropsArrayDefault from "./practice/PracticePropsArrayDefault";
import ChapUseEffect from "./Chapter/ChapUseEffect";
import PracticeUseEffectAxios from "./practice/PracticeUseEffectAxios";
import PizzaList from "./BackendAPI/PizzaList";
import RootPath from "./RootPath";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* App.js 는 필수로 사용해야하는 자바스크립트 파일이 아님
         만일 App.js 가 아니라 다른 파일을 사용하길 원한다면
         파일명.js 를 import 해서 사용할 수 있음
       */}
      {/*BrowserRouter 로 
        이동할 경로를 설정했다면
        index.js 최상단에 BrowserRouter 로
        
        모든 javascript,javascriptXML 파일을 감싸줘야함
        BrowserRouter 와 Routes 은 모든 파일에서 최초 1회만 작성
      */}
        
      <RootPath/>
      {/*
        <App />
      <ChapUseState/>
      <PracticeUseState/>
      <ChapProps/>
      <PracticeProps/>
       <ChapPropsFunction/>
        <PracticePropsFunction/>
       <ChapPropsDefault/>
      <PracticePropsDefault/>
      <ChapPropsArray/>
      <PracticePropsArrayDefault/>
      <PracticePropsArray/>
      <ChapUseEffect/>
      <PracticeUseEffectAxios/>
      */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
