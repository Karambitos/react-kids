import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { object, string, ref } from 'yup';
import { registerUser } from '../../../redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const validationsSchema = object().shape({
    email: string()
      .required('Valid email required')
      .email('Valid email required'),
    password: string().min(8, 'Too Short!').required('Required'),
    confirmPassword: string()
      .required('Please confirm your password')
      .oneOf([ref('password')], 'Passwords do not match'),
  });

  const handleSubmit = values => {
    dispatch(
      registerUser({
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        validationSchema={validationsSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              Email
              <Field type="email" name="email" placeholder="your@email.com" />
            </label>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label>
              Password:
              <Field
                name="password"
                type="password"
                placeholder="your password"
              />
            </label>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <label>
              Confirm Password:
              <Field
                name="confirmPassword"
                type="password"
                placeholder="confirm your password"
              />
            </label>
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
