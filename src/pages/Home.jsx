import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../scripts/authentication';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";

const Home = () => {

  

    const SignupSchema = Yup.object().shape({
        mail: Yup.string().matches('^(20|21|22|23)[0-9A-Za-z]{8}@vbithyd\.ac\.in$', 'Please Match Mail')
    });

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
    return (
        <section>
  
            <div className='grid md:grid-cols-3 gap-x-12 gap-y-12'>
                <div className='text-center'>
                    <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/01.svg" alt="" />
                    <h2 className='font-bold text-2xl'>Sign-up For Vinder</h2>
                    <p className='mt-4'>Welcome to Vinder ! You will need to sign-up using your college mail to explore Vinder.</p>
                </div>
                <div className='text-center'>
                    <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/02.png" alt="" />
                    <h2 className='font-bold text-2xl'>Enter Your Crush's Roll No</h2>
                    <p className='mt-4'>After signining-up, you will be asked to enter your crush's rollno. for the system to check if 2 people have written each other's roll no</p>
                </div>
                <div className='text-center'>
                    <img className='w-[80%] mx-auto ar-square scale-[0.8]' src="/images/03.png" alt="" />
                    <h2 className='font-bold text-2xl'>Match Day !</h2>
                    <p className='mt-4'>You can now Login & view if you are matched with someone 🙌🏻</p>
                </div>

            </div>
            <div className='text-center  py-12'>
                <img className='w-[60%] md:w-[20%] mx-auto ar-square scale-[0.8] invert' src="/images/anonymous.png" alt="" />
                <h2 className='font-bold text-2xl'>Anonymous</h2>
                <p className='mt-4'>When you enter your crush's roll no. on our website, it's completely <span className='font-semibold'>safe</span>. No one can view it except for you.</p>
            </div>
            <div className='mt-12'>
                <div className=' gap-12'>
                    <h2 className='font-semibold text-center text-xl  my-auto'>Register/Login Here</h2>

                    <form className='mt-8 w-full' onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col gap-8">
                            <input
                                id="mail"
                                name="mail"
                                type="email"
                                placeholder='E-Mail'
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
                            <button onClick={console.log(formik)} type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
      
        </section>
    )
}

export default Home