import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { object, string, ref } from 'yup';
import { registerUser } from '../../../redux/auth/operations';
import SVGcloseEye from '../../../assets/closeEye';
import SVGeye from '../../../assets/eye';

export default function Register({ isShown, handlShowPass }) {
  const dispatch = useDispatch();

  const validationsSchema = object().shape({
    email: string()
      .required('Valid email required')
      .email('Valid email required'),
    password: string().min(8, 'Too short password.').required('Required'),
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
            <div className="formInput">
              <label>
                Email:
                <Field type="email" name="email" placeholder="your@email.com" />
              </label>
              {errors.email && touched.email ? (
                <div className="formError">{errors.email}</div>
              ) : null}
            </div>
            <div className="formInput">
              <label>
                Password:
                <Field
                  name="password"
                  type={isShown ? 'text' : 'password'}
                  placeholder="your password"
                />
              </label>
              {errors.password && touched.password ? (
                <div className="formError">{errors.password}</div>
              ) : null}
              <span type="button" className="formIcon" onClick={handlShowPass}>
                {isShown ? <SVGeye /> : <SVGcloseEye />}
              </span>
            </div>
            <div className="formInput">
              <label>
                Confirm Password:
                <Field
                  name="confirmPassword"
                  type={isShown ? 'text' : 'password'}
                  placeholder="confirm your password"
                />
              </label>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="formError">{errors.confirmPassword}</div>
              ) : null}
              <span type="button" className="formIcon" onClick={handlShowPass}>
                {isShown ? <SVGeye /> : <SVGcloseEye />}
              </span>
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
