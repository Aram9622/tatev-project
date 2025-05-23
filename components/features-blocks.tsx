import Image from 'next/image'
import agendaIcon from '@/public/images/icons/agenda.svg'
export default function FeaturesBlocks() {
  return (
    <section className="relative mt-40" id="agenda">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Agenda</h2>
            <p className="text-xl text-gray-600">May 24, 11:00, Holiday Inn Yerevan - Republic Square</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-black" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-[#ec7d7d]" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-[#ec7d7d]" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Registration</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">10:50 ~ 11:05</p>
            </div>

     
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 1 | Tatev</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">11:00 ~ 11:15</p>
            </div>

         
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 2 | Dr. Nare</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">11:15 ~ 11:45</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 2 | Dr. Aram</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">11:45 ~ 12:15</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 3 | Dr. Pavel</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">12:15 ~ 12:45</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 4 | Dr. Tatev</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">12:45 ~ 13:15</p>
            </div>

           
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg width="66px" height="66px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M825.628972 580.704642h-89.570828l-5.77041-0.383628c0.383628-6.189204 0.556261-12.413574 0.556261-18.67311V499.164434h187.380075c0 174.272773-140.858743 315.58228-314.92052 316.311174a318.056683 318.056683 0 0 0 84.180849-93.88345h0.035166c64.011589-24.715257 114.676108-76.281302 138.109407-140.887516z" fill="#FF4893" /><path d="M603.30355 815.478805c-52.713734 39.257969-118.013674 62.518635-188.770729 62.518635-87.38095 0-166.449952-35.431276-223.680909-92.66543-57.26932-57.234154-92.66543-136.338322-92.66543-223.68091V408.276482H730.843995v153.374618c0 6.259536-0.172633 12.483906-0.556261 18.673111-2.989104 51.323081-18.183984 99.37573-42.803335 141.27434a318.043895 318.043895 0 0 1-84.180849 93.880254z" fill="#42BC90" /><path d="M414.532821 900.378958c-90.465961 0-175.522762-35.236265-239.505579-99.222279-63.97962-63.93806-99.219082-148.998058-99.219081-239.505579V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 78.54471 30.578377 152.364397 86.105385 207.85624 55.533402 55.533402 129.353089 86.118173 207.862633 86.118173 63.727064 0 124.381905-20.086142 175.404477-58.090925a293.776204 293.776204 0 0 0 78.253792-87.265861c23.324604-39.699141 37.071287-85.07918 39.759882-131.245656 0.345266-5.600974 0.521095-11.416141 0.521096-17.371971V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 6.873341-0.201405 13.625201-0.601018 20.05737-3.091405 53.122937-18.944847 105.443452-45.843589 151.226299-23.113609 39.363467-53.433037 73.173913-90.107908 100.491449-58.813424 43.797571-128.713709 66.95274-202.143374 66.95274z" fill="#4F46A3" /><path d="M730.843995 430.654803H98.183285a22.378321 22.378321 0 1 1 0-44.756642H730.843995a22.378321 22.378321 0 1 1 0 44.756642zM602.191027 996.343592H212.926527a22.378321 22.378321 0 1 1 0-44.756642h389.2645a22.378321 22.378321 0 1 1 0 44.756642zM601.912897 837.895489a22.378321 22.378321 0 1 1 0-44.756642c0.022378 0.003197-0.201405 0.019181-0.425188 0.038363 0.575443-0.047954 1.144491-0.070332 1.719934-0.073529 161.363679-0.674547 292.638107-132.530811 292.638106-293.932853a22.378321 22.378321 0 1 1 44.756642 0c0 185.784821-150.970547 337.596154-336.640279 338.686298-0.687334 0.028772-1.387456 0.038363-2.049215 0.038363z" fill="#4F46A3" /><path d="M918.227267 521.545952h-178.34243c-12.359227 0-22.378321-10.015897-22.378321-22.378321s10.019094-22.378321 22.378321-22.378321h178.34243a22.378321 22.378321 0 1 1 0 44.756642zM687.525959 743.983266a22.381518 22.381518 0 0 1-8.065786-43.260491 215.695045 215.695045 0 0 0 125.136374-127.645943 16.208298 16.208298 0 0 1 0.329281-0.853573 22.381518 22.381518 0 1 1 41.578921 16.579139 260.442097 260.442097 0 0 1-150.9162 153.67193 22.477425 22.477425 0 0 1-8.06259 1.508938z" fill="#4F46A3" /><path d="M825.73447 603.082963h-89.676326a22.378321 22.378321 0 1 1 0-44.756642h89.570828c12.359227 0 22.432668 10.019094 22.432668 22.378321s-9.967944 22.378321-22.32717 22.378321zM203.227124 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933733-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.637271-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.141706-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.125722 45.443976-46.930536 55.613325-8.468596 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.811208 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.621286 11.614349-22.621285 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321zM394.120596 288.440573a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.518267 27.13851-45.447173 46.952914-55.616521 8.47499-4.347788 22.656452-11.627136 22.656452-15.837458 0-4.207124-14.178265-11.486472-22.650058-15.837457-19.817602-10.178939-46.959308-24.114239-46.959308-55.651688 0-31.543842 27.151297-45.482339 46.978489-55.658081 8.465399-4.344591 22.634073-11.614349 22.634074-15.795898a22.378321 22.378321 0 1 1 44.756642 0c0 31.518267-27.13851 45.447173-46.952915 55.616522-8.47499 4.347788-22.656452 11.630333-22.656451 15.837457 0 4.207124 14.178265 11.486472 22.650057 15.837458 19.817602 10.178939 46.959308 24.114239 46.959309 55.651687 0 31.543842-27.151297 45.479142-46.97849 55.654885-8.465399 4.344591-22.634073 11.614349-22.634073 15.799094a22.378321 22.378321 0 0 1-22.378321 22.378321zM585.049234 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933732-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.63727-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.13851-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.122525 45.443976-46.933733 55.613325-8.465399 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.808011 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.618089 11.614349-22.618088 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321z" fill="#4F46A3" /><path d="M186.654379 616.161494a22.378321 22.378321 0 0 1-22.378321-22.378321v-100.529812a22.378321 22.378321 0 1 1 44.756642 0v100.529812a22.378321 22.378321 0 0 1-22.378321 22.378321z" fill="#FFFFFF" /><path d="M210.282689 717.116493a22.378321 22.378321 0 0 1-20.05737-12.426362c-1.998064-4.018507-3.471837-6.381018-4.897655-8.666804-3.928994-6.297899-6.739072-11.339415-9.900809-23.54519a22.375124 22.375124 0 0 1 16.054847-27.27278 22.371927 22.371927 0 0 1 27.27278 16.05165c1.675177 6.473729 2.282589 7.448784 4.545996 11.074072a134.04934 134.04934 0 0 1 7.007611 12.442347 22.378321 22.378321 0 0 1-20.0254 32.343067z" fill="#FFFFFF" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Coffee & Brain Yoga Refresh</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">20 minutes</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 5 | Edgar</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">13:35 ~ 14:05</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Module 6 | Lusine</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">14:05 ~ 14:35</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg width="66px" height="66px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M825.628972 580.704642h-89.570828l-5.77041-0.383628c0.383628-6.189204 0.556261-12.413574 0.556261-18.67311V499.164434h187.380075c0 174.272773-140.858743 315.58228-314.92052 316.311174a318.056683 318.056683 0 0 0 84.180849-93.88345h0.035166c64.011589-24.715257 114.676108-76.281302 138.109407-140.887516z" fill="#FF4893" /><path d="M603.30355 815.478805c-52.713734 39.257969-118.013674 62.518635-188.770729 62.518635-87.38095 0-166.449952-35.431276-223.680909-92.66543-57.26932-57.234154-92.66543-136.338322-92.66543-223.68091V408.276482H730.843995v153.374618c0 6.259536-0.172633 12.483906-0.556261 18.673111-2.989104 51.323081-18.183984 99.37573-42.803335 141.27434a318.043895 318.043895 0 0 1-84.180849 93.880254z" fill="#42BC90" /><path d="M414.532821 900.378958c-90.465961 0-175.522762-35.236265-239.505579-99.222279-63.97962-63.93806-99.219082-148.998058-99.219081-239.505579V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 78.54471 30.578377 152.364397 86.105385 207.85624 55.533402 55.533402 129.353089 86.118173 207.862633 86.118173 63.727064 0 124.381905-20.086142 175.404477-58.090925a293.776204 293.776204 0 0 0 78.253792-87.265861c23.324604-39.699141 37.071287-85.07918 39.759882-131.245656 0.345266-5.600974 0.521095-11.416141 0.521096-17.371971V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 6.873341-0.201405 13.625201-0.601018 20.05737-3.091405 53.122937-18.944847 105.443452-45.843589 151.226299-23.113609 39.363467-53.433037 73.173913-90.107908 100.491449-58.813424 43.797571-128.713709 66.95274-202.143374 66.95274z" fill="#4F46A3" /><path d="M730.843995 430.654803H98.183285a22.378321 22.378321 0 1 1 0-44.756642H730.843995a22.378321 22.378321 0 1 1 0 44.756642zM602.191027 996.343592H212.926527a22.378321 22.378321 0 1 1 0-44.756642h389.2645a22.378321 22.378321 0 1 1 0 44.756642zM601.912897 837.895489a22.378321 22.378321 0 1 1 0-44.756642c0.022378 0.003197-0.201405 0.019181-0.425188 0.038363 0.575443-0.047954 1.144491-0.070332 1.719934-0.073529 161.363679-0.674547 292.638107-132.530811 292.638106-293.932853a22.378321 22.378321 0 1 1 44.756642 0c0 185.784821-150.970547 337.596154-336.640279 338.686298-0.687334 0.028772-1.387456 0.038363-2.049215 0.038363z" fill="#4F46A3" /><path d="M918.227267 521.545952h-178.34243c-12.359227 0-22.378321-10.015897-22.378321-22.378321s10.019094-22.378321 22.378321-22.378321h178.34243a22.378321 22.378321 0 1 1 0 44.756642zM687.525959 743.983266a22.381518 22.381518 0 0 1-8.065786-43.260491 215.695045 215.695045 0 0 0 125.136374-127.645943 16.208298 16.208298 0 0 1 0.329281-0.853573 22.381518 22.381518 0 1 1 41.578921 16.579139 260.442097 260.442097 0 0 1-150.9162 153.67193 22.477425 22.477425 0 0 1-8.06259 1.508938z" fill="#4F46A3" /><path d="M825.73447 603.082963h-89.676326a22.378321 22.378321 0 1 1 0-44.756642h89.570828c12.359227 0 22.432668 10.019094 22.432668 22.378321s-9.967944 22.378321-22.32717 22.378321zM203.227124 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933733-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.637271-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.141706-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.125722 45.443976-46.930536 55.613325-8.468596 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.811208 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.621286 11.614349-22.621285 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321zM394.120596 288.440573a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.518267 27.13851-45.447173 46.952914-55.616521 8.47499-4.347788 22.656452-11.627136 22.656452-15.837458 0-4.207124-14.178265-11.486472-22.650058-15.837457-19.817602-10.178939-46.959308-24.114239-46.959308-55.651688 0-31.543842 27.151297-45.482339 46.978489-55.658081 8.465399-4.344591 22.634073-11.614349 22.634074-15.795898a22.378321 22.378321 0 1 1 44.756642 0c0 31.518267-27.13851 45.447173-46.952915 55.616522-8.47499 4.347788-22.656452 11.630333-22.656451 15.837457 0 4.207124 14.178265 11.486472 22.650057 15.837458 19.817602 10.178939 46.959308 24.114239 46.959309 55.651687 0 31.543842-27.151297 45.479142-46.97849 55.654885-8.465399 4.344591-22.634073 11.614349-22.634073 15.799094a22.378321 22.378321 0 0 1-22.378321 22.378321zM585.049234 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933732-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.63727-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.13851-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.122525 45.443976-46.933733 55.613325-8.465399 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.808011 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.618089 11.614349-22.618088 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321z" fill="#4F46A3" /><path d="M186.654379 616.161494a22.378321 22.378321 0 0 1-22.378321-22.378321v-100.529812a22.378321 22.378321 0 1 1 44.756642 0v100.529812a22.378321 22.378321 0 0 1-22.378321 22.378321z" fill="#FFFFFF" /><path d="M210.282689 717.116493a22.378321 22.378321 0 0 1-20.05737-12.426362c-1.998064-4.018507-3.471837-6.381018-4.897655-8.666804-3.928994-6.297899-6.739072-11.339415-9.900809-23.54519a22.375124 22.375124 0 0 1 16.054847-27.27278 22.371927 22.371927 0 0 1 27.27278 16.05165c1.675177 6.473729 2.282589 7.448784 4.545996 11.074072a134.04934 134.04934 0 0 1 7.007611 12.442347 22.378321 22.378321 0 0 1-20.0254 32.343067z" fill="#FFFFFF" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Coffee Break</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">15 minutes</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Neuromarketing Partner</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">14:50 ~ 15:20</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="w-16 h-16 p-1 -mt-1 mb-2 bg-black rounded-full flex items-center justify-center">
                <span className='text-white text-lg'>END</span>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Closing Remarks</h4>
              <p className="text-gray-600 text-center bg-[#dadfe7] p-[5px] rounded-[6px]">15:20 ~ 15:30</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}