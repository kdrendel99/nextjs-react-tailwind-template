import React from 'react';
import Image from 'next/image'
import Test from '../components/Test';

//import cat from "../public/images/cat.gif"

export default function Home() {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-3xl'>NextJS React Tailwind Template</h1>
      </div>
      <Test />
    </React.Fragment>
  )
}
