import React from 'react';
import styles from '../styles/components/_test.module.scss';

const Test = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {/* <h1 className='text-3xl'>This is the Test File</h1> */}
      <h1 className={`${styles.test_cat} text-3xl`}>This is the Test File</h1>
    </div>
  )
}

export default Test;