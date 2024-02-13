import { Link } from "react-router-dom"

const Footer = () => {

    return (

        <section>
            <footer className='py-12 text-center text-[#aaaaaa]'>
                <p className="text-xs">*This is not affiliated anyway to Vignana Bharathi Institute of Technology.
                    It was made by the students for the students.
                </p>
                <div className='flex justify-center mt-4'>
                    {/* <Link className='underline' to='/privacy'>Your Privacy</Link> */}
                </div>
            </footer>
        </section>
    )
}

export default Footer