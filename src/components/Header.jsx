import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

const Header = () => {

    const { isLoggedIn } = useAuth()

    return (

        <section className="py-6 flex justify-between gap-6 box-shadow-[] ">
            <div>

            </div>
            <Link to='/'>

                <div className='text-center'>
                    <h2 style={{ fontFamily: 'monospace' }} className="text-5xl">vinderr</h2>
                    <p>Tinder For VBIT</p>
                </div>
            </Link>
            <div className="h-fit my-auto">

            </div>
        </section>
    )
}

export default Header