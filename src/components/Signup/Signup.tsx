import signupImage from '../../assets/SignUp.png';
import eyeImage from '../../assets/Eye.png';
import eyeSlash from '../../assets/Eye-slash.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { signUp } from '../../slices/AuthSlice';
import { useRegisterMutation } from '../../api/auth';

const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reTypePassword, setReTypePassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const username = "Rajesh Kumar";

  const [register] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setProgress(50);
    e.preventDefault();

    try {
      if (password !== reTypePassword) {
        throw new Error("Password does not match");
      }

      const userInfo = {
        firstname: firstName,
        lastname: lastName,
        password,
        email,
        username
      };
      const res = await register(userInfo).unwrap();
      dispatch(signUp(res?.user));
      setProgress(100);
      navigate('/signin');
    } catch (err: unknown) {
      console.error(err);
      setProgress(0);
    }
  };



  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-28 px-5 md:px-20 h-auto w-full">
      {progress > 0 && (
        <div>
          <span id="ProgressLabel" className="sr-only">Loading</span>
          <span
            role="progressbar"
            aria-labelledby="ProgressLabel"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="block rounded-full bg-gray-200 w-64"
          >
            <span className="block h-3 rounded-full bg-indigo-600" style={{ width: `${progress}%` }}></span>
          </span>
        </div>
      )}
      <div className="hidden md:block md:w-2/5 pr-0 md:pr-10 md:ml-10">
        <img src={signupImage} alt="Sign Up" className="w-full" />
      </div>

      <div className="bg-white rounded-md ring-1 ring-slate-200 shadow-lg w-full md:w-2/6 h-auto px-5 md:ml-0 md:mt-0 md:pt-0 md:pl-5">
        <div>
          <h1 className="font-extrabold text-2xl md:text-3xl pt-5 md:pt-10 text-dark-purple">
            Let us know{' '}
            <span className="font-extrabold text-fire-red">!</span>
          </h1>

          <div>
            <Link to="/signin">
              <p className="float-right font-extrabold text-dark-purple text-base md:text-xl underline cursor-pointer ">
                Sign <span className="text-fire-red">in</span>
              </p>
            </Link>
          </div>

          <form className="mt-5 md:mt-10 font-popins" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-10">
              <div className="flex flex-col">
                <label className="text-gray-400">First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="bg-transparent outline-none border-b-2 border-gray-300 " required />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="bg-transparent outline-none border-b-2 border-gray-300" required />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Set Password</label>
                <div className="relative">
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} onClick={(e) => e.stopPropagation()} className="bg-transparent outline-none border-b-2 w-full border-gray-300" required />
                  <img src={showPassword ? eyeImage : eyeSlash} alt="Eye" className="absolute right-0 top-0 -mt-5 mr-2 size-6 md:size-8 cursor-pointer" onClick={() => setShowPassword(prev => !prev)} />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Retype Password</label>
                <div className="relative">
                  <input value={reTypePassword} onChange={(e) => setReTypePassword(e.target.value)} type="password" onClick={(e) => e.stopPropagation()} className="bg-transparent outline-none border-b-2 border-gray-300 w-full" required />
                </div>
              </div>

              {password !== reTypePassword && (
                <div className='bg-red-400 border px-10 py-1'>
                  <p className='text-red-600'>Password not matched</p>
                </div>
              )}

              <div className="flex flex-col">
                <label className="text-gray-400">Enter Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-transparent outline-none border-b-2 border-gray-300" required />
              </div>

              <div className="flex justify-center md:justify-start items-center">
                <button type='submit' className="px-8 md:px-10 py-2 bg-dark-purple rounded-md text-white">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
