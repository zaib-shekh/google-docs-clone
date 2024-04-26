import React, { useState } from 'react';
import logo from '../images/docs.svg';
import profile from '../images/profile.png';
import TextEditor from './TextEditor';
import {AiOutlineLock} from 'react-icons/ai'
function Editor() {
  const [title, setTitle]= useState('Untitle Document');
  return (
    <div className='main-section'>
        <header className='flex justify-between items-center p-3 pb-1 '>
            <img className='cursor-pointer' src={logo} alt='logo'
             style={{width: '36px', height: '36px'}}
             />
            <div className='flex-grow px-2'>
              <input type='text' onChange={e=>setTitle(e.target.value)} value={title}></input>
              <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-grey-600'>
                <p className='option'>File</p>
                <p className='option'>Edit</p>
                <p className='option'>View</p>
                <p className='option'>Insert</p>
                <p className='option'>Format</p>
                <p className='option'>Tools</p>
                <p className='option'>Extension</p>
                <p className='option'>Help</p>
              </div>
            </div>
            <div className='flex item-center'>
              
              <button type='button' className='text-white bg-[#C2E7FF] flex items-center
                font-medium hover:drop-shadow-lg shadow-grey-400 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                  <AiOutlineLock/>
              Share
            </button>
            <img src={profile} alt='profile pic' className='rounded-full h-10 w-10 cursor-pointer option' />
            </div>
            

        </header>
        <TextEditor/>
        
    </div>
  )
}

export default Editor