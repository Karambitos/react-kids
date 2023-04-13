import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { object, string, ref } from 'yup';
import { loginUser } from '../../../redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const validationsSchema = object().shape({
    email: string()
      .required('Valid email required')
      .email('Valid email required'),
    password: string().required('Required'),
  });

  const handleSubmit = values => {
    dispatch(loginUser(values));
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
