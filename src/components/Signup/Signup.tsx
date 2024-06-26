import signupImage from '../../assets/SignUp.png';
import eyeImage from '../../assets/Eye.png';
import eyeSlash from '../../assets/Eye-slash.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { UserInfo, signUp } from '../../slices/AuthSlice';
import { useRegisterMutation } from '../../api/auth';
import { toast } from 'react-toastify';
import { AiOutlineWarning } from 'react-icons/ai';
import { newUser } from '../../types/types';

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
  const [register] = useRegisterMutation();


  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/; 
    return regex.test(password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setProgress(50);
    e.preventDefault();

    try {
      if (password !== reTypePassword) {
        throw new Error("Password does not match");
        
      }

      if (!validatePassword(password)) {
        setProgress(0);
        toast.error("Password must be at least 8 characters long, contain a number, and have a mix of uppercase and lowercase letters.");
        return;
       
      }

      const newUser:newUser = {
        fullName: `${firstName} ${lastName}`,
        password,
        email,
      };
      

      const res = await register(JSON.stringify(newUser)).unwrap();
      dispatch(signUp(res.user as unknown as UserInfo));
      setProgress(100);
      navigate('/otp');
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

      <div className="flex flex-col md:flex-row justify-center items-center py-28 px-5 md:px-20 h-auto w-full">


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
                    <input value={password} onChange={handlePasswordChange} type={showPassword ? "text" : "password"} onClick={(e) => e.stopPropagation()} className="bg-transparent outline-none border-b-2 w-full border-gray-300" required />
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
                  <div className='flex items-center bg-red-400 border px-4 py-3 rounded-md'>
                    <div className='text-red-200'>
                      <AiOutlineWarning />
                    </div>
                    <div className='ml-3 text-red-200'>
                      <p>Passwords do not match</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col">
                  <label className="text-gray-400">Enter Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-transparent outline-none border-b-2 border-gray-300" required />
                </div>

                <div className="flex justify-start md:justify-center items-center">
                  <button type='submit' className="px-8 md:px-20 py-2 bg-dark-purple rounded-md text-white">Sign Up</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Signup;
