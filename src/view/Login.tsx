import { Dispatch, SetStateAction } from 'react';
import { Formik } from 'formik';
import { Button } from '../components/Button';

interface MyFormValues {
  email: string;
}

const LoginPage = ({setIsLoggedIn}: {setIsLoggedIn: Dispatch<SetStateAction<boolean>> }) => {
  const initialValues: MyFormValues = { email: '' };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-[400px] bg-white border border-gray-200 rounded-lg shadow p-3'>
        <h1 className='text-center text-2xl my-2.5'>Remote Reps</h1>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {} as MyFormValues;
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(_values, { setSubmitting }) => {
            setSubmitting(false);
            setIsLoggedIn(true)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='userName'>Email</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='you@example.com'
                />
                <span className='text-red-500'>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className='mt-2'>
                <Button type='submit' disabled={isSubmitting}>
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
