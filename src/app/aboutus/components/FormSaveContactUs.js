'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation schema
import { TbSend } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { selectCurrentUserData } from '@/store/features/auth/authSlice';
import { useCreateContactUsMutation } from '@/store/features/contactus/contactus';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import Loading from '@/components/loading/Loading';
import { Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';


const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    message: Yup.string().required("Message is required")
});

export default function FormSaveContactUs() {

    const [loading, setLoading] = useState(false);
    const dataUsers = useSelector(selectCurrentUserData)
    const [addCreateContactUs, { isLoading, isError, isSuccess }] = useCreateContactUsMutation();
    const router = useRouter();


     //model
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    const gotoLogin = () => {
        router.push("/login");
    };

    const handleSaveContactUs = async (values) => {
    
            var raw = JSON.stringify({
                "email": values.email,
                "userUUID": dataUsers.uuid,
                "message": values.message
            });
            try {
                const { data } = await addCreateContactUs(raw).unwrap();
                // console.log("contact us data : "+data)
                toast.success('successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } catch (error) {

                if (error.data.code === 404) {
                    toast.warn('send to request false!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
    }


    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    message: '',
                }}
                validationSchema={validationSchema} // Corrected variable name
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    // Perform any form submission logic here
                    if (!dataUsers) {
                        setLoading(true);
                        props.setOpenModal("pop-up")
                        return;
                    }
                    handleSaveContactUs(values);
                    
                    resetForm();
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form
                        className="mt-[23px] w-full mx-auto pt-[80px] md:w-[50%] justify-center "
                    >
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="block z-50 mb-6 w-full rounded-[16px]  p-4 text-gray-900 border border-gray-300  bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="email"
                                className='text-red-500'
                                component="div"
                            />
                        </div>
                        <label
                            htmlFor="message"
                            className="block mb-2 z-50 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {" "}
                            Message
                        </label>
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            rows="4"
                            className="block mb-6 p-2.5 w-full  rounded-[16px]  text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <ErrorMessage
                            name="message"
                            className='text-red-500'
                            component="div"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-white z-50 mb-6 w-full mt-5 dark:text-white rounded-[16px]  bg-red text-[17px] font-medium px-5 py-2.5 mr-2    "
                        >
                              {isLoading ? (
                        <svg
                          className="animate-spin h-5 w-5 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <>
                        {" "}
                            Send{" "}
                            <div className="inline ml-2 text-[24px]">
                                {/* Make sure you have imported and provided the TbSend component */}
                                <TbSend className={"text-[24px] inline"} />
                            </div>
                        </>
                      )}
                            
                        </button>
                    </Form>
                )}
            </Formik>

            {
            loading ?   ( 
            <Modal
              show={props.openModal === "pop-up"}
              size="md"
              popup
              onClose={() => props.setOpenModal(undefined)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    You need to log in first to send a message
                  </h3>
                  <div className="flex justify-center gap-4">
                    <button
                      className="btn rounded-main bg-red text-white"
                      onClick={gotoLogin}
                    >
                      {/* write yes I'm sure  */}
                      Go to login
                    </button>
                    <button
                      className="btn rounded-main bg-gray-300 text-black"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>) : null
            }
            <ToastContainer />
            </>
    );
}