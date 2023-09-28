import Link from "next/link"
import { useRouter } from "next/router"

export default function products(props) {
    let router = useRouter()

    function deleteProduct(product){
        fetch(`http://localhost:9000/products/${product}`, {method: 'DELETE'}).then((req)=>req.json())
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='font-bold text-4xl m-3 pb-5'>Products list</div>
            <div className='m-3'><Link href='/products/addproduct' className=' px-4 py-3 bg-green-800 rounded-lg text-white'>Add Product</Link></div>
            <table className='table table-auto m-3 bg-slate-200 border border-slate-300 rounded-lg'>
                <thead className=' bg-slate-400'>
                    <tr>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>Title</th>
                        <th className='p-2'>Price</th>
                        <th className='p-2'>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product)=>{
                        return(
                            <tr>
                            <th className='p-2'>{product.id}</th>
                            <th className='p-2'>{product.title}</th>
                            <th className='p-2'>{product.price}</th>
                            <th className='p-2'>
                                <Link href={`products/${product.id}`} className=' px-3 py-2 bg-slate-800 rounded-lg text-white'>View</Link>
                                <button onClick={()=>{deleteProduct(product.id);router.push('/products')}} className='mx-4 px-3 py-2 bg-red-800 rounded-lg text-white'>Delete</button>
                                <Link href={`/editproduct/${product.id}`} className=' px-3 py-2 bg-blue-800 rounded-lg text-white'>Edit</Link>
                            </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps(){
    const request = await fetch('http://localhost:9000/products')
    const data = await request.json()
    return{
        props : {
            products : data
        }
    }
}


