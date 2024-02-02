import React from 'react'
import './LoadingScreen.css'
import ToolBar from '@/components/ToolBar'
import GoBack from './GoBack'
export default function LoadingScreen() {
  return (
    <main>
      <ToolBar />
      <GoBack />
        <div>
          <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-36">
                <div className='skeleton-img'>
                    
                </div>
                <div className='grid gap-6 self-center md:items-center  lg:gap-8'>
                    <h1 className='text-3xl lg:text-5xl font-bold lg:w-8/12 skeleton-title'>
                    </h1>
                    <p className='lg:w-10/12 skeleton-text'>
                    </p>
                    <div className='text-xl font-bold skeleton-text'>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex w-5/12  font-bold skeleton-text'>
                            <div className='flex-1 flex justify-center items-center '></div>
                            <div className='flex-1 flex justify-center items-center'></div>
                            <div className='flex-1 flex justify-center items-center'></div>
                        </div>
                        <div className='block text-xs py-3 px-8 skeleton-text'>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='mt-24 lg:mt-32'>
            <div className='container p-6 md:px-10 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-20 lg:gap-32'>
                <div className='lg:col-span-3 grid gap-8'>
                    <h3 className='text-3xl font-bold uppercase skeleton-title'>
                    </h3>
                    <div className='text-secondary-color grid gap-6 font-medium'>
                        <p className='skeleton-text'></p>
                        <p className='skeleton-text'></p>
                        <p className='skeleton-text'></p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 lg:col-span-2 lg:self-start'>
                    <h3 className='text-3xl font-bold uppercase skeleton-title'>
                    </h3>
                    <div>
                        <ul className='grid gap-3'>
                            <li className='skeleton-text'></li>
                            <li className='skeleton-text'></li>
                            <li className='skeleton-text'></li>
                            <li className='skeleton-text'></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </main>
  )
}
