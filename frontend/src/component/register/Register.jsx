// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import careerimg from '../image/career.jpg';
import style from '../register/Register.module.css';

const Register = () => {
    return (
        <>
            <div className={style.back_img}>
                <div className={style.form}>
                    <div>
                        <h4>Create your Naukri profile</h4>
                        <p>Search & apply to jobs from India's No.1 Job Site</p>
                        <Formik
                            initialValues={{ name: '', email: '', contact: '', password: '' }}

                            validationSchema={
                                Yup.object({
                                    name: Yup.string().required("Name is Required"),
                                    email: Yup.string().email("Invalid email").required("Required"),
                                    contact: Yup.number("Invalid contact").required("Required"),
                                    password: Yup.string().min(8).max(16).required("  Password is Required"),
                                    // role: Yup.string().role("Invalid email").required("Required"),
                                })
                            }

                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "300px",
                                    margin: "auto",
                                    color: "white"
                                }}>
                                    <label>Name:</label>
                                    <Field type="name" name="name" placeholder="Enter your name" />
                                    <ErrorMessage name="name" component="div" style={{ color: "red" }} />

                                    <label>Email :</label>
                                    <Field type="email" name="email" placeholder="Enter your email" />
                                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />

                                    <label>         Contact :</label>
                                    <Field type="contact" name="contact" placeholder="Enter your " />
                                    <ErrorMessage name="contact" component="div" style={{ color: "red" }} />

                                    <label className='mt-2'> Password:</label>
                                    <Field type="password" name="password" placeholder="Enter your password" />
                                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />

                                    <label className='mt-2'>Choose Role</label>
                                    <select>
                                        <option value='student' >Student</option>
                                        <option value='recruiter' >Recruiter</option>
                                    </select>

                                    <button className='mt-2' type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>


                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;