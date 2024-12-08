import React from 'react';


export default function ChildComponent(props: any) {
  return (
<div>
    <h1 className='text-center'>Class 11 Assignment Props</h1>
    <div className='h-screen grid place-content-center text-center bg-blue-800'>
        <div className='box shadow-xl shadow-black bg-white h-[200px] p-5 rounded-xl ring-8 ring-yellow-300 ring-offset-4 border-[10px] border-red-600'>
        <h1 className='text-2xl mb-4 font-[800]'>Contact Information</h1>
        <p>Name: {props.name}</p>
        <p>Phone: {props.PhoneNumber} </p>
        <p className='w-[350px]'>Email Address: {props.Email}</p>
        </div>
    </div>
</div>
  )
}