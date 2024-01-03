import React from 'react'
import MiddleSegment from './MiddleSegment'
import TimelineSectionLeft from './TimelineSectionLeft'
import TimelineSectionRight from './TimelineSectionRight'

const VerticalTimeline = () =>
{
  return (
    <div className='flex flex-col w-11/12 justify-center items-center'>
        <div className='bg-poland w-full border-2 border-black'>
            <TimelineSectionLeft 
                title={ 'Germany Invades Poland' }
                timelineText={ 'Officially marking the beginning of WWII, Germany declares invasion and marches into Poland.'}
                year={ 1939 }
                isYearNeeded={ true }
                chronNum={ 1 }
                date={ 'September 1, 1939' }
                roundBottom={ false }
            />
        </div>
        {/* gap */}
        <MiddleSegment />
        {/* gap */}
        <div className='w-full border-2 border-black'>
            <TimelineSectionRight
                title={ 'The Soviet Union Invades Poland' }
                timelineText={ 'The Soviet Union declares war on Poland and begins to invade from the East.' }
                year={ 1939 }
                isYearNeeded={ false }
                chronNum={ 2 }
                date={ 'September 17, 1939' }
                roundBottom={ true}
            />
        </div>
    </div>
  )
}

export default VerticalTimeline