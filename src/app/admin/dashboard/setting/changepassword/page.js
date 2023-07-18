'use client'
import {ErrorMessage, Field, Form, Formik} from "formik";
import Link from "next/link";
import * as Yup from "yup"

export default function ChangePassword() {
    const validationShcema = Yup.object().shape({
        // validate old password
        old_password: Yup.string().required("Old password is required"),
        // validate password
        new_password: Yup.string()
            .required('Password is required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            ),
        // validate repeat new password
        repeat_new_password: Yup.string()
            .required("Repeat new password is required")
            .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
    });
    const initialValues = {
        old_password: '',
        new_password: '',
        repeat_new_password: '',
    };
    let setSubmitting = false;
    const handleSubmit = async (values, {setSubmitting}) => {
        console.log("hello pengny")
        console.log(values)
        //    let myHeaders = new Headers()
        //    myHeaders.append("Content-Type", "application/json")
        //    var raw = JSON.stringify({
        //      oldPassword:values.old_passsword,
        //      newPassword:values.new_passsword,
        //      repeatPassword:values.repeat_passsword,
        //  })
        //  console.log("data",raw)

        //    let requestOptions = {
        //        method: "PUT",
        //        headers: myHeaders,
        //        body: raw,
        //        redirect: "follow",
        //    }
        //    // http://localhost:8080/api/v1/users/12
        //        try {
        //            const response = await fetch(BASE_URL +
        //                "users/13",
        //                requestOptions
        //            );
        //            const data = await response.json();
        //            setSubmitting(true);
        //            console.log(data);
        //            setTimeout(() => {
        //                setSubmitting(false);
        //            }, 5000);


        //        } catch (error) {
        //            console.log("error", error);
        //        }
        //    // Handle form submission logic here
        //    console.log(selectedDate);
        //    console.log(values);
        //    setSubmitting(false);
    };
    return (
        <section className="h-screen p-5 max-sm:px-5 db-bg dark:bg-primary max-md:px-5 ">
            <div className="sticky top-20 z-40 db-bg dark:bg-primary">
            <h1 className="text-[32px] text-light dark:text-white font-semibold mb-5">Profile</h1>
            
			<div className='text-sm mb-3 breadcrumbs'>
				<ul className='font-extralight text-light dark:text-white'>
					<li>
						<Link href="/admin/dashboard">Admin</Link>
					</li>
					<li>
						<Link href={'/admin/dashboard/setting/profile'}>Setting</Link>
					</li>
                    <li>
						<Link href={'/admin/dashboard/setting/changepassword'}>Change Password</Link>
					</li>
					
				</ul>
			</div>
            </div>
			{/* end of header section */}
            <div className="xl:w-[1000px]">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationShcema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div>
                            {/*old password*/}
                            <div className="pb-5">
                                <label htmlFor="old_password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                   Old Password
                                </label>
                                <Field
                                    type="password"
                                    id="old_password"
                                    name="old_password"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="old password"
                                    required
                                />
                                <ErrorMessage name="old_password" component="div" className="text-red-500"/>
                            </div>
                            {/*new password*/}
                            <div className="pb-5">
                                <label htmlFor="new_password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    New password
                                </label>
                                <Field
                                    type="password"
                                    id="new_password"
                                    name="new_password"
                                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="new password"
                                    required
                                />
                                <ErrorMessage name="new_password" component="div" className="text-red-500"/>
                            </div>
                            {/*repeat new password*/}
                            <div className="pb-5">
                                <label htmlFor="repeat_new_password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Repeat new password
                                </label>
                                <Field
                                    type="password"
                                    id="repeat_new_password"
                                    name="repeat_new_password"
                                    className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="repeat new password"
                                    required
                                />
                                <ErrorMessage name="repeat_new_password" component="div" className="text-red-500"/>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={setSubmitting}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-main text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Save change
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}