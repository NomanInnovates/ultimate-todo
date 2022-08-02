import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className="bg-dark py-2">
            <div className='container'>
                <div className='row'>
                    <div className='col'></div>
                    <p className='mb-0 text-center text-white '></p>
                    &copy; {year} all right reserved.
                </div>

            </div>
        </footer>
    )
}
