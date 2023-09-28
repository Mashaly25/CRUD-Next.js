import Link from "next/link";


export default function Sidebar() {
    return (
        <div className=' bg-indigo-300 w-60 p-3 h-full min-h-[900px]'>
            <ul>
                <li></li>
                <li><Link href='/catagory'>get all catagory</Link></li>
            </ul>
        </div>
    )
}
