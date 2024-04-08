import Link from 'next/link'
import logo from '@/public/images/logo.jpg'
import Image from 'next/image'


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <>
        <Image
                src={logo}
                width={50}
                height={50}
                className='rounded-full'
                alt="Picture of the author"
              />
      </>
    </Link>
  )
}
