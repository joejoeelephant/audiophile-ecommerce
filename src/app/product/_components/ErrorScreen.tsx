import React from 'react'
import ToolBar from '@/components/ToolBar'
import GoBack from './GoBack'
export default function ErrorScreen() {
    return (
        <main>
            <ToolBar />
            <GoBack />
            <div className='min-h-96 flex justify-center items-center text-2xl md:text-4xl font-bold'>
                Product could not be found
            </div>
        </main>
    )
}
