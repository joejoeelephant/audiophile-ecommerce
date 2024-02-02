import React from 'react'
import ToolBar from '@/components/ToolBar'
export default function ErrorScreen() {
    return (
        <main>
            <ToolBar />
            <div className='min-h-96 flex justify-center items-center text-2xl md:text-4xl font-bold'>
                Cart Is Empty
            </div>
        </main>
    )
}
