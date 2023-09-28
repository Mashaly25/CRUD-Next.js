import Navbar from "./Navbar";



export default function Layout(props) {
    return (
        <div className="App">
            <div>
            <Navbar />
                <div id='main' className=' m-4 w-full'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
