import React, { useEffect } from 'react';

export default function Message({ message, isVisible, closeMessage }: { message: string; isVisible: boolean; closeMessage: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            closeMessage();
        }, 3000);
        
        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, [closeMessage]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white px-8 py-4 text-center rounded-lg">
            {message}
        </div>
    );
}
