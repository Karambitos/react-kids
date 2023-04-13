import { AuthWrapper } from '../components/AuthWrapper/AuthWrapper';
import { AuthForm } from '../components/AuthForm/AuthForm';

// import { useDispatch } from 'react-redux';
// import { loginUser } from 'redux/auth/authThunks';

const AuthPage = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = form => {
  //   dispatch(loginUser(form));
  // };

  return (
    <AuthWrapper>
      <AuthForm />
    </AuthWrapper>
  );
};

export default AuthPage;
