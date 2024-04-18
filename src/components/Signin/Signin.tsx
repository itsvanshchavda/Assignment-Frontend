import eyeImage from '../../assets/Eye.png';
import eyeSlash from '../../assets/Eye-slash.png';
import { useNavigate } from 'react-router-dom';
import signinImage from '../../assets/SignIn.png';
import { useState } from 'react';
import { useLoginMutation } from '../../api/auth';
import { signIn } from '../../slices/AuthSlice';
import { useAppDispatch } from '../../store/store';
import { toast } from 'react-toastify';
import {loginUser} from '../../types/types';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgress(50);

    try {
      const newUser: loginUser = {
        password,
        email,
      };


      if (!validatePassword(password)) {
        toast.error("Your password must be at least 8 characters long, contain at least one number, and have a mixture of uppercase and lowercase letters.");
        return;
      }

      const res = await login(JSON.stringify(newUser)).unwrap();
      dispatch(signIn(res?.data));
      setProgress(100);
      navigate('/');
      toast.success("Login success");
    } catch (err) {
      console.error(err);
      setProgress(0);
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  return (
    <>
      {progress > 0 && (
        <div>
          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow={progress}
            className="block rounded-full relative overflow-hidden bg-slate-700"
            style={{ height: '3px' }}
          >
            <span className="block absolute inset-0 bg-indigo-600" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></span>
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center py-32 md:py-28 px-5 md:px-24 h-auto w-full">

        <div className="hidden md:block md:w-2/5 pr-0 md:pr-10 md:ml-10">
          <img src={signinImage} alt="Sign Up" className="w-full" />
        </div>

        <div className="bg-white rounded-md ring-1 ring-slate-200 shadow-lg w-full md:w-2/6 h-auto px-5 md:ml-0 md:mt-0 md:pt-0 md:pl-5">
          <div className="">
            <h1 className="font-extrabold text-2xl md:text-3xl pt-5 md:pt-10 text-dark-purple">
              Fill what we know{' '}
              <span className="font-extrabold text-fire-red">!</span>
            </h1>

            <form className="mt-5 md:mt-10 font-popins" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-10">
                <div className="flex flex-col">
                  <label className="text-gray-400">Enter Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="bg-transparent outline-none border-b-2 border-gray-300" />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-400">Set Password</label>
                  <div className="relative">
                    <input value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"} onClick={(e) => e.stopPropagation()} className="bg-transparent outline-none border-b-2 w-full border-gray-300" required />
                    <img src={showPassword ? eyeImage : eyeSlash} alt="Eye" className="absolute right-0 top-0 -mt-5 mr-2 size-6 md:size-8 cursor-pointer" onClick={() => setShowPassword(prev => !prev)} />
                  </div>
                </div>

                <div className="flex flex-col justify-center md:justify-start items-center gap-5">
                  <button className="px-8 md:px-28 py-2 bg-dark-purple rounded-md text-white">Sign In</button>
                  <button onClick={() => navigate('/signup')} className="px-8 md:px-28 py-2 bg-white rounded-md border border-gray-900 text-black">Sign Up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
