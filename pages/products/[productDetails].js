
export default function productDetails(props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className='font-bold text-4xl m-3 pb-5'>Product Details </h1>
            <div className="flex flex-col justify-center items-center">
                <h1>ID: {props.product.id}</h1>
                <h1>title: {props.product.title}</h1>
                <div>price: {props.product.price}</div>
                <div>description : {props.product.description}</div>
                <div className=" w-40"><img src={props.product.image}/></div>
                <div>category: {props.product.category} </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const request = await fetch(`http://localhost:9000/products/${context.query.productDetails}`)
    const data = await request.json()
    return{
        props : {
            product : data
        }
    }
}
