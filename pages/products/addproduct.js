import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

export default function addproduct() {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    let router = useRouter()

    const formSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:9000/products',{
            id,
            title,
            price,
            description,
            category,
            image,
        }).then((data)=>console.log(data))
        router.push('/products')
    }


    return (
        <div>
        <form onSubmit={formSubmit} >
            <div className=' container flex flex-col justify-center items-start space-y-5'>
                <div>
                    <label>id</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='id' type='number' onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div>
                    <label>title</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='title' type='number' onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label>price</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='title' type='number' onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>description</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='price' type='number' onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <div>
                    <label>category</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='price' type='number' onChange={(e)=>{setCategory(e.target.value)}}/>
                </div>
                <div>
                    <label>image</label>
                    <input className=" m-2 w-96 rounded-lg shadow-sm" placeholder='price' type='number' onChange={(e)=>{setImage(e.target.value)}}/>
                </div>
            </div>
            <button type='submit' className='py-3 px-4 my-6 bg-slate-700 text-white rounded-xl'>Add Product</button>
        </form>
    </div>
    )
}
