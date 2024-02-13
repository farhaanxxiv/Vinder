import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../scripts/authentication';
import { useNavigate } from "react-router-dom";
import { user } from '../scripts/user';

const FillDetails = () => {
    const navigate = useNavigate();

    function goToAddCrush() {
        window.location.href = '/add-crush';
    }

    const formik = useFormik({
        initialValues: {
            section: ''
        },

        onSubmit: async (values) => {
            console.log(JSON.stringify(values, null, 2));
            if (values.section != '') {
                await user.uploadSection(values.section)
            }
            // goToAddCrush()


        }
    });
    return (

        <>
            <section className='w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <h2 className='text-xl'>The app has recognised your Branch & Year from your roll No.</h2>
                <p className='text-xl'> The app would also like to know your section for better results</p>
                <form className='mt-8' onSubmit={formik.handleSubmit}>
                    <label htmlFor="section">Your Section : </label>
                    <select
                        id="section"
                        onChange={formik.handleChange}
                        value={formik.values.mail}
                        name='section'>
                        <option value="" hidden>Select Your Section</option>
                        <option value="A" >A</option>
                        <option value="B" >B</option>
                        <option value="C" >C</option>
                        <option value="D" >D</option>
                        <option value="E" >E</option>
                    </select>
                    <br />

                    <button className='mt-8' onClick={console.log(formik)} type="submit">Next</button>
                    <p className='text-xs mt-2'> *You can change this by logging in again</p>


                </form>

            </section>
        </>
    )
}

export default FillDetails