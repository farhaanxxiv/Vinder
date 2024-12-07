import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

const Header = () => {

    const { isLoggedIn } = useAuth()

    return (

        <div className="rounded-lg bg-pink text-black fixed top-4 w-[95%] z-[9999] border border-black md:w-[60%]  left-1/2 -translate-x-1/2 py-0.5 px-1 flex justify-between gap-6 ">

            <Link className="block" to='/'>
                <div className="flex ">
                    <img src="/logos/logo-pink-black.png" className="w-10 h-10 " />
                    <div className='text-left my-auto h-fit'>
                        <h2 className="text-xl font-semibold">vinderr</h2>
                    </div>
                </div>
            </Link>
            <a className="block my-auto " href='#home-login'>

                <p className="text-lg font-semibold mr-2">match now</p>
            </a>
        </div>
    )
}

export default Header