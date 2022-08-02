import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
function Topbar() {

    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {
       setInterval(()=> {

           setCurrentTime(dayjs().format('dddd'))
       })
    }, [])


    return (
        <div className="bg-primary py-1"> <div className='container'>
            <div className='row'>
                <div className='col '>

                    <p className='mb-0 text-center text-white '>
                        {currentTime}</p>
                </div>
            </div>

        </div></div>
    )
}

export default Topbar