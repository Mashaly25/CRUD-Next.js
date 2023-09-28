import Link from "next/link";

export default function Navbar() {
    return (
        <div className=' bg-indigo-400 font-bold flex flex-row justify-between px-5 py-3'>
            <div className='font-bold text-slate-900 '>
                LOGO
            </div>
            <div className=" flex flex-row space-x-5">
                <Link className=' text-slate-900' href='/'>Home</Link>
                <Link href='/products'>Products</Link>
            </div>
        </div>
    )
}
