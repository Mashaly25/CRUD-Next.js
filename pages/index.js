import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=' text-5xl pt-52'>CRUD APP</div>
      <Link href='/products' className=' text-3xl pt-5 underline'>Products</Link>
    </div>
  )
}
