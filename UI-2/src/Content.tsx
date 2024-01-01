// import React from 'react'
import img2 from '../src/assets/pic/images.png'
import icon1 from '../src/assets/pic/people.png'
import icon2 from '../src/assets/pic/list.png'
import icon3 from '../src/assets/pic/responsive.png'
import icon4 from '../src/assets/pic/word.png'
import arrow from '../src/assets/pic/right-arrow.png'

function Content() {
  return (
    <div >
      <div className='bg-zinc-100'>
        <div className='xl:flex  p-16 pb-1 space-x-5 border'>
          <div className='xl:max-w-[50%] space-y-6 ml-10 border '>
            <h1 className='text-2xl text-center sm:text-5xl font-semibold pt-14 ' >Stremline your tailwind projects</h1>
            <p>Expertly made,responsive,accessible components in React and HTML ready to be used on your Website or app.just copy and paste them on your Tailwind project.</p><button className='bg-green-600 rounded p-2 flex gap-3 text-white items '>Get Started <img src={arrow} alt="" /></button>
          </div>
          <div className=' xl:max-w-[40%] flex items-center justify-center'>
             <img className='xl:w-screen' src={img2} alt="" />
          </div>
        </div>
        <div className='space-y-5 xl:flex p-16 space-x-5 '>

          <div className='flex flex-col  items-center border p-5 rounded-lg text-center space-y-5 bg-white shadow-slate-400 shadow-md'><img src={icon1} alt="" /><p><b>Accessible components</b></p><p>All components come with proper attributes to ensure fully accessibility with the WAI-ARIA standards</p></div>

          <div className='flex flex-col items-center border p-5 rounded-lg text-center space-y-5 bg-white shadow-slate-400 shadow-md'><img src={icon2} alt=""  /><p><b>Just copy & paste</b></p><p>All components can be copied and pasted and easily implimented to your tailwind projects</p></div>

          <div className='flex flex-col items-center border p-5 rounded-lg text-center space-y-5 bg-white shadow-slate-400 shadow-md'><img src={icon3} alt="" /><p><b>Fully responsive</b></p><p>Every component is fully responsive and implimented to look graet at any screen size</p></div>

          <div className='flex flex-col items-center border p-5 rounded-lg text-center space-y-5 bg-white shadow-slate-400 shadow-md'><img src={icon4} alt="" /><p><b>Vanila taiwind</b></p><p>Code used in its original form without any customisation or third party dependencies</p></div>
        </div>
         
      </div>
    </div>
  )
}

export default Content
