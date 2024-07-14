import Image from 'next/image'
export default function slideInage({props}: any) {
  return (
    <section className="relative" id="partners">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-5">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-3 md:pt-10">
            <h2 className="h2 mb-4">{props.title}</h2>
          </div>

          {/* Items */}
          <div className={`max-w-sm md:max-w-4xl mx-auto grid gap-2 lg:grid-cols-${props.modelData.length} sm:grid-cols-2`}>

            {/* Item */}
            {
                props.modelData.map((item: any)=>(
                    <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                        <a href={item.link} target='_blank'>
                        <Image className="md:max-w-none mx-auto rounded" src={item.logo} width={150} height="39" alt={item.name}  title={item.name} /></a>
                    </div>
                ))
            }
            
          </div>
        </div>
      </div>
    </section>
  )
}