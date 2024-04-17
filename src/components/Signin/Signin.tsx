import eyeImage from '../../assets/Eye.png';
import {useNavigate } from 'react-router-dom';
import signinImage from '../../assets/SignIn.png'

const Signin = () => {

  const navigate = useNavigate();
  return (
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



          <form className="mt-5 md:mt-10 font-popins">
            <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-10">

              <div className="flex flex-col">
                <label className="text-gray-400">Enter Email</label>
                <input type="text" className="bg-transparent outline-none border-b-2 border-gray-300" />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-400">Password</label>
                <div className="relative">
                  <input type="text" className="bg-transparent outline-none border-b-2 w-full border-gray-300" />
                  <img src={eyeImage} alt="Eye" className="absolute right-0 top-0  -mt-5 mr-2 size-6 md:size-8" />
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
  );
};

export default Signin;
