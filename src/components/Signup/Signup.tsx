import signupImage from '../../assets/SignUp.png';
import eyeImage from '../../assets/Eye.png';
import eyeSlash from '../../assets/Eye-slash.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {


  const [showPassowrd, setShowPaasword] = useState<boolean>(false);

 

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-28 px-5 md:px-20 h-auto w-full">
      <div className="hidden md:block md:w-2/5 pr-0 md:pr-10 md:ml-10">
        <img src={signupImage} alt="Sign Up" className="w-full" />
      </div>

      <div className="bg-white rounded-md ring-1 ring-slate-200 shadow-lg w-full md:w-2/6 h-auto px-5 md:ml-0 md:mt-0 md:pt-0 md:pl-5">
        <div className="">
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

          <form className="mt-5 md:mt-10 font-popins">
            <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-10">
              <div className="flex flex-col">
                <label className="text-gray-400">First Name</label>
                <input type="text" className="bg-transparent outline-none border-b-2 border-gray-300" />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Last Name</label>
                <input type="text" className="bg-transparent outline-none border-b-2 border-gray-300" />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Set Password</label>
                <div className="relative">
                  <input type="password" onClick={(e) => e.stopPropagation()}  className="bg-transparent outline-none border-b-2 w-full border-gray-300" />
                  {showPassowrd ? (<div onClick={(prev) => setShowPaasword(!prev)}>
                    <img src={eyeSlash} alt="Eye" className="absolute right-0 top-0  -mt-5 mr-2 size-6 md:size-8" />

                  </div>) : (
                    <div onClick={(prev) => setShowPaasword(!prev)}>
                      <img src={eyeImage} alt="Eye" className="absolute right-0 top-0  -mt-5 mr-2 size-6 md:size-8" />

                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Retype Password</label>
                <div className="relative">
                  <input type="password" onClick={(e) => e.stopPropagation()} className="bg-transparent outline-none border-b-2 border-gray-300 w-full" />

                  {showPassowrd ? (<div onClick={() => setShowPaasword(prev => !prev)}>
                    <img src={eyeSlash} alt="Eye" className="absolute right-0 top-0  -mt-5 mr-2 size-6 md:size-8" />

                  </div>) : (
                    <div onClick={() => setShowPaasword(prev => !prev)}>
                      <img src={eyeImage} alt="Eye" className="absolute right-0 top-0  -mt-5 mr-2 size-6 md:size-8" />

                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Enter Email</label>
                <input type="email" className="bg-transparent outline-none border-b-2 border-gray-300" />
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
