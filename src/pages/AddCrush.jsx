import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../scripts/authentication';
import { user } from '../scripts/user';
import { useEffect, useState } from 'react';

const AddCrush = () => {

    const [addRollno, setRollno] = useState(true)

    useEffect(() => {

    }, [addRollno])

    const rollNoSchema = Yup.object().shape({
        rollno: Yup.string().matches('^(20|21|22|23)[0-9A-Za-z]{8}$', 'Please Enter A Valid Roll No')
    })


    const nameFormSchema = Yup.object().shape({
        name: Yup.string().required('Please Enter Their Name'),
        year: Yup.string().required('Please Enter Their Year'),
        branch: Yup.string().required('Please Enter Their Branch'),
        section: Yup.string().required('Please Enter Their Section')
    });

    const rollNoForm = useFormik({
        initialValues: {
            rollno: '',
        },
        validationSchema: rollNoSchema,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            user.addCrush(values)
        }
    });
    
    const nameForm = useFormik({
        initialValues: {
            name: '',
            year: '',
            branch: '',
            section: ''

        },
        validationSchema: nameFormSchema,

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            user.addCrush(values)
        }
    });
    return (
        <section className='py-16'>
            <h2 className='text-xl'> Add Your Crush !!, just type in their RollNo. and click 'Add Crush'</h2>
            <p className=''>It remains anonymous, no one will be able to read it.</p>

            <div className='mt-8 sm:flex sm:grid-cols-2 gap-12'>
                <div className='flex flex-col gap-3'>
                    <button onClick={() => { setRollno(true) }}>Add By RollNo</button>
                    <button onClick={() => { setRollno(false) }}>Add By Name</button>
                </div>
                <div className='mt-8'>
                    {addRollno ?
                        <form onSubmit={rollNoForm.handleSubmit} className='flex flex-col gap-3'>
                            <label htmlFor="rollno">Enter Their Roll No.</label>
                            <input
                                id="rollno"
                                name="rollno"
                                type="text"
                                onChange={rollNoForm.handleChange}
                                value={rollNoForm.values.rollno}
                            />
                            {rollNoForm.touched.rollno && rollNoForm.errors.rollno ? (
                                <p className="text-[#db2e2e] text-xs">{rollNoForm.errors.rollno}</p>
                            ) : null}


                            <button onClick={console.log(rollNoForm)} type="submit">Add Crush</button>

                        </form>
                        :
                        <form onSubmit={nameForm.handleSubmit} className='flex flex-col gap-3'>

                            <input
                                placeholder="Crush's Name"
                                id="name"
                                name="name"
                                type="text"
                                onChange={nameForm.handleChange}
                                value={nameForm.values.name}
                            />
                            {nameForm.touched.name && nameForm.errors.name ? (
                                <p className="text-[#db2e2e] text-xs">{nameForm.errors.name}</p>
                            ) : null}
                            <select name="year" id="year" onChange={nameForm.handleChange} value={nameForm.values.year}>
                                <option value="" selected hidden>Year</option>

                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>

                            </select>
                            {nameForm.touched.year && nameForm.errors.year ? (
                                <p className="text-[#db2e2e] text-xs">{nameForm.errors.year}</p>
                            ) : null}


                            <select name="branch" id="branch" onChange={nameForm.handleChange} value={nameForm.values.branch}>
                                <option value="" selected hidden>Branch</option>

                                <option value="CIVIL">CIVIL</option>
                                <option value="EEE">EEE</option>
                                <option value="MECH">MECH</option>
                                <option value="ECE">ECE</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="CSB">CSB</option>
                                <option value="CSC">CSC</option>
                                <option value="CSM">CSM</option>
                                <option value="CSD">CSD</option>
                            </select>
                            {nameForm.touched.branch && nameForm.errors.branch ? (
                                <p className="text-[#db2e2e] text-xs">{nameForm.errors.branch}</p>
                            ) : null}

                            <select name="section" id="section" onChange={nameForm.handleChange} value={nameForm.values.section}>
                                <option value="" selected hidden>Section</option>

                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>

                            </select>
                            {nameForm.touched.section && nameForm.errors.section ? (
                                <p className="text-[#db2e2e] text-xs">{nameForm.errors.section}</p>
                            ) : null}

                            <button onClick={console.log(nameForm)} type="submit">Add Crush</button>
                        </form>
                    }
                </div>
            </div>



        </section>
    )
}

export default AddCrush