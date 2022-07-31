import React from 'react';
import { LeftContent } from './components/LeftContent';
import { RightContent } from './components/RightContent';



import { GlobalStyle } from './styles/global';


export function App() {
  return (
    <div className="container">
       <GlobalStyle/>
      <LeftContent/>
      <RightContent/>
    </div>
     
   
  );
}


