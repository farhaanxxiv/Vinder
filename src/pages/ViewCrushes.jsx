import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../scripts/authentication';
import { user } from '../scripts/user';
import { useLayoutEffect, useState } from 'react';

const ViewCrushes = () => {


    const [crushes, setCrushes] = useState({})
    const [loading, setLoading] = useState(true)


    async function getCrushes() {
        const crush = await user.getCrushes()
        setLoading(false)

        const crushArr = [...crush.crushes_rollno, ...crush.crushes_names.map(item => item.name)]
        console.log(crushArr)

        setCrushes(crushArr)
    }

    useLayoutEffect(() => {
        getCrushes()
    }, [])

    return (
        <section>
            <h1>Your Crushes</h1>
            {(crushes != {} && !loading) &&
                crushes.map((ele) => {
                    return (

                        <p key={ele}>
                            {ele}
                        </p>

                    )
                })
            }

        </section>
    )
}

export default ViewCrushes