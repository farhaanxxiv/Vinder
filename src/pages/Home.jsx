import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../scripts/authentication';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { user } from '../scripts/user';
import { GiSpiderMask } from "react-icons/gi";
import { GrDisabledOutline } from 'react-icons/gr';

const Home = () => {

    const SignupSchema = Yup.object().shape({
        mail: Yup.string().matches('^(20|21|22|23)[0-9A-Za-z]{8}@vbithyd\.ac\.in$', 'Please Match Mail')
    });

    const { isLoggedIn } = useAuth()
    const userEmail = auth.getUser() != null ? auth.getUser().email : 'NULL'

    const formik = useFormik({
        initialValues: {
            mail: '',
            password: ''
        },
        validationSchema: SignupSchema,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            auth.createUser(values.mail, values.password)
            auth.getUID()
        }
    });

    const gridStyle = {
        backgroundColor: '#f7a3c7',
        opacity: '1',
        backgroundImage: 'linear-gradient(#000000 4px, transparent 4px), linear-gradient(to right, #000000 4px, #f7a3c7 4px)',
        backgroundSize: '80px 80px'
    };

    const dottedStyle = {
        backgroundColor: '#f7a3c7',
        opacity: 1,
        backgroundImage: 'radial-gradient(#000000 2px, transparent 2px), radial-gradient(#000000 2px, #f7a3c7 2px)',
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px',
    };

    const whiteDottedStyle = {
        backgroundColor: '#ffffff',
        opacity: 1,
        backgroundImage: 'radial-gradient(#000000 2px, transparent 2px), radial-gradient(#000000 2px, #ffffff 2px)',
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px',
    };
    return (
        <>

            <section className=' text-black first'>
                <div className='relative bg-pink p-4 md:p-8 md:pr-0 grid md:grid-cols-2 gap-y-8 rounded-lg '>

                    <div className='flex flex-col justify-between gap-y-4'>

                        <div>
                            <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl'>
                                RollNo, <br />Match,<br /> Connect.<br />
                            </h1>
                            {/* <p className='mt-4 text-lg font-semibold lg:ml-2'></p> */}
                        </div>
                        <p className='text-lg font-semibold flex gap-x-1'>Exclusive for Students of ___</p>

                        {/* <p className='text-lg font-bold flex gap-x-1'>Match Anonymously <GiSpiderMask className='my-auto' size={20} fill='black' /> </p> */}

                    </div>
                    <div className=' flex flex-col gap-y-6 justify-between'>
                        <img className='translate-x-4 md:translate-x-0 lg:-translate-y-12  w-full' src="/images/iphone-hero.png" alt="" />
                        <h2 className='mx-auto md:mr-0  font-semibold md:pr-8  text-base md:text-lg w-fit'>
                            Made By Students, For the Students.
                        </h2>
                    </div>
                </div>

            </section>
            <section>
                <h2 className='text-4xl md:text-5xl text-center font-semibold'>
                    How Does <span className='text-pink'>Vinder</span> Work?
                </h2>
                <div className='mt-12 grid md:grid-cols-2 gap-8 gap-y-12'>
                    {/* First Step */}
                    <div className='top-12 grid gap-y-6 bg-black text-white rounded-xl p-0 md:p-8'>
                        <div className='flex flex-col gap-y-6 justify-between'>
                            <div className='bg-black border-2 border-white w-fit p-2 aspect-square rounded-lg'>
                                <span className='block font-semibold text-2xl md:text-3xl translate-x-0.5'>01</span>
                            </div>
                            <div>
                                <h2 className='font-semibold text-2xl md:text-3xl text-pink'>Sign Up for Vinder Below</h2>
                                <p className='mt-4 font-normal'>
                                    Welcome to Vinder! To get started, sign up using your college email and unlock the full Vinder experience.
                                </p>
                            </div>
                        </div>
                        {/* <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/01.svg" alt="Sign-up process" /> */}
                    </div>

                    {/* Second Step */}
                    <div className='top-24 grid  gap-y-6 bg-black text-white rounded-xl p-0 md:p-8'>
                        <div className='flex flex-col gap-y-6 justify-between'>
                            <div className='bg-black border-2 border-white w-fit p-2 aspect-square rounded-lg'>
                                <span className='block font-semibold text-2xl md:text-3xl'>02</span>
                            </div>
                            <div>
                                <h2 className='font-semibold text-2xl md:text-3xl text-pink'>Enter Your Crush's Roll Number</h2>
                                <p className='mt-4 font-normal'>
                                    After signing up, enter your crush's roll number. The system will check if both of you have entered each other's roll number for a match.
                                </p>
                            </div>
                        </div>
                        {/* <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/02.png" alt="Enter crush's roll number" /> */}
                    </div>

                    {/* Third Step */}
                    <div className='top-12 grid gap-y-6 bg-black text-white rounded-xl p-0 md:p-8'>
                        <div className='flex flex-col gap-y-4 md:gap-y-6 justify-between'>
                            <div className='bg-black border-2 border-white w-fit p-2 aspect-square rounded-lg'>
                                <span className='block font-semibold text-2xl md:text-3xl'>03</span>
                            </div>
                            <div>
                                <h2 className='font-semibold text-2xl md:text-3xl text-pink'>Match Day!</h2>
                                <p className='mt-4 font-normal'>
                                    It’s finally time! Log in and see if you’ve matched with someone 🙌🏻
                                </p>
                            </div>
                        </div>
                        {/* <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/03.png" alt="Match day excitement" /> */}
                    </div>
                </div>
            </section>


            <section>

                <div className='relative  py-12 bg-white text-black rounded-xl px-8 grid md:grid-cols-2'>
                    <div style={whiteDottedStyle} className="absolute top-0 left-0 right-0 bottom-0 z-0 !opacity-15 "></div>

                    <h2 className='relative z-20 text-3xl md:text-5xl font-bold flex gap-x-1 my-auto text-black'>Match Anonymously </h2>
                    <p className='relative z-20 mt-4 font-semibold text-md md:text-xl'>When you enter your crush's roll no. on our website, it's completely <span className='font-semibold'>safe</span>. No one can view it except for you.</p>
                </div>
            </section>
            <section className='relative'>
                <div id='home-login' className="absolute bottom-full"></div>
                {
                    !isLoggedIn ?
                        <div className='mt-12 relative bg-black rounded-xl md:p-8 text-pink'>
                            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 !opacity-30"></div>
                            <div className='grid md:grid-cols-2 gap-6 md:gap-12 z-20 relative'>
                                <h2 className='font-semibold my-auto text-3xl md:text-4xl'>Register/Login Here</h2>

                                <form className='w-full' onSubmit={formik.handleSubmit}>
                                    <div className="space-y-6 md:space-y-8">
                                        <input
                                            id="mail"
                                            name="mail"
                                            type="email"
                                            placeholder='College E-Mail'
                                            onChange={formik.handleChange}
                                            value={formik.values.mail}
                                        />


                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder='Password'

                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <p className="text-red">{formik.errors.password}</p>
                                        ) : null}
                                        <button className='black' onClick={console.log(formik)} type="submit">Submit</button>
                                        {/* <p className='text-sm font-semibold'>Your Email will only be stored for matching*</p> */}
                                    </div>

                                </form>
                            </div>
                        </div>
                        : <>
                            <h2 className='text-2xl font-semibold text-center'>  You Are Logged In As <span className='text-pink'> {userEmail}</span></h2>
                            <Link className='block mx-auto w-fit' to='/add-crush'>
                                <button className='pink mt-4'>
                                    Add Crush
                                </button>
                            </Link>
                        </>
                }


            </section>
        </>
    )
}

export default Home