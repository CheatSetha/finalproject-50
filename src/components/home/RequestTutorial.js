"use client";
import { selectCurrentUserData } from "@/store/features/auth/authSlice";
import Loading from "../loading/Loading";
import { useCreateRequestTutorialMutation } from "@/store/features/requestTutorial/requestTutorialApiSlice";
import { useGetUserQuery } from "@/store/features/user/userApiSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import WatermarkNavItem from "../nav/components/WatermarkNavItem";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const validationSchema = Yup.object({
  subject: Yup.string().required("Subject is required"),
  description: Yup.string().required("descriptions is required"),
});

export default function RequestForm() {
  const { data: session } = useSession();
  const [uuid, setUuid] = useState();
  const { data: user, isSuccess } = useGetUserQuery();
  const [loading, setLoading] = useState(false);
  const dataUsers = useSelector(selectCurrentUserData)

  //model
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const gotoLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (user) {
      setUuid(user?.data?.uuid);
    }
  }, [user]);
  const [
    createRequestTutorial,
    { isLoading: creating, isSuccess: created, isError: failed },
  ] = useCreateRequestTutorialMutation();
  const router = useRouter();

  const handleSubmit = async (values) => {
    let myHeaders = new Headers();
    // console.log(uuid, "uuid in reque");
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
      userUUID: uuid,
      description: values?.description,
    });

    try {
      await createRequestTutorial(raw);
      toast.success("Request tutorial has been sent");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Failed to send request tutorial");
      setLoading(false);
    }
  };
  return (
    <>
    <Formik
      initialValues={{
        subject: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            if (!dataUsers) {
              setLoading(true);
              props.setOpenModal("pop-up")
                // setLoading(true);
                return;
            }
          //   alert(JSON.stringify(values, null, 2));
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        }, 2000); // set timeout for 2 seconds
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              placeholder="eg. How can I use this on mobile phone?"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500  "
            />
          </div>

          
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="description"
              placeholder="eg. I want to know how to use this on mobile phone."
              className="shadow-sm rounded-[16px] w-full h-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500  "
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red p-2.5 w-full md:w-fit text-white rounded-main px-7"
            >
              {/* Send */}
              {creating ? (
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
                        "Send"
                      )}
            </button>
          </div>
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
                    You need to login first to request a tutorial
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
