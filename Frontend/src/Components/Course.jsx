import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
        <div className='max-w-screen-2xl mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='mt-28 items-center justify-center text-center'>
              <h1 className='text-2xl md:text-3xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
              <p className='mt-12'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
              a galley of type and scrambled it to make a type specimen book. It has survived not only 
              five centuries, but also the leap
              </p>
            <Link to="/">
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300 mt-6'>Back</button>
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
              list.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
          </div>
        </div>
    </>
  )
}

export default Course
