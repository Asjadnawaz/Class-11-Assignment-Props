import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    let name = "Asjad Nawaz";
    let PhoneNumber = "+92 311083297";
    let Email = "asjadnawaz2002@gmail.com";
    
  return (
    <div>
        <ChildComponent 
        name = {name}
        PhoneNumber = {PhoneNumber}
        Email = {Email}
        />
    </div>
  )
}