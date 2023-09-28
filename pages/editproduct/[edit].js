import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EditProduct(props) {
    const { id, title, price, description, category, image } = props.product;
    const [newTitle, setNewTitle] = useState(title);
    const [newPrice, setNewPrice] = useState(price);
    const [newDescription, setNewDescription] = useState(description);
    const [newCategory, setNewCategory] = useState(category);
    const [newImage, setNewImage] = useState(image);

    const router = useRouter();

    const formSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`http://localhost:9000/products/${id}`, {
                title: newTitle,
                price: newPrice,
                description: newDescription,
                category: newCategory,
                image: newImage,
            })
            .then((response) => {
                console.log(response.data);
                router.push('/products');
            })
            .catch((error) => {
                console.error('Error updating product:', error);
            });
    };

    return (
        <div className=" w-full ">
            <form onSubmit={formSubmit}>
                <div className=" container flex flex-col justify-center items-start space-y-5">
                    <div>
                        <label>ID: {id}</label>
                    </div>
                    <div>
                        <label>Title</label>
                        <input className=" m-2 w-96 rounded-lg shadow-sm"
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input  className=" m-2 w-96 rounded-lg shadow-sm"
                            placeholder="Price"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input className=" m-2 w-96 rounded-lg shadow-sm"
                            placeholder="Description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Category</label>
                        <input className=" m-2 w-96 rounded-lg shadow-sm"
                            placeholder="Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input className=" m-2 w-96 rounded-lg shadow-sm"
                            placeholder="Image URL"
                            value={newImage}
                            onChange={(e) => setNewImage(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="py-3 px-4 my-6 bg-slate-700 text-white rounded-xl"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { edit } = context.query;
    const req = await fetch(`http://localhost:9000/products/${edit}`);
    const data = await req.json();
    return {
        props: {
            product: data,
        },
    };
}
