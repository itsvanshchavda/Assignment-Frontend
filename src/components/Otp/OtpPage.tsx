
import otpImage from '../../assets/otp.png'
import { useState } from 'react';
import { useAppSelector } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Signin = () => {


  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const navigate = useNavigate();

  const { userInfo } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const otpVal = otp.join('');
      const storedOtp = userInfo?.otp.toString();
      console.log("🚀 ~ handleSubmit ~ storedOtp:", storedOtp)

      if (otpVal !== storedOtp) {
        throw new Error('Invalid OTP');
      }
      navigate('/');
      toast.success('Register Success'); 
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('An unknown error occurred');
      }
    }
  };
  



  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-44 md:py-28 px-5 md:px-24 h-auto w-full">
      <div className="hidden md:block md:w-2/4 pr-0 md:pr-10 md:ml-10">
        <img src={otpImage} alt="Sign Up" className="w-full" />
      </div>

      <div className="bg-white rounded-md ring-1 ring-slate-200 shadow-lg w-full md:w-2/6 h-auto px-5 md:ml-0 md:mt-0 md:pt-0 md:pl-5">
        <div className="">
          <h1 className="font-extrabold text-2xl md:text-3xl pt-5 md:pt-10 text-dark-purple">
            Fill OTP{' '}
            <span className="font-extrabold text-fire-red">!</span>
          </h1>



          <form className="mt-5 md:mt-10 font-popins" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 md:gap-8 mb-5 md:mb-10">

              {/* OTP Fields */}
              <label className="text-gray-400">Enter OTP</label>
              <div className="flex justify-between w-full border">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const { value } = e.target;
                      handleOtpChange(index, value);
                      if (index < 6 && value !== '') {
                        (document.getElementById(`otp-${index + 1}`) as HTMLInputElement)?.focus();
                      }
                    }}
                    className="w-8 h-8 border ring-1 ring-slate-400 rounded-md text-center bg-transparent outline-none "
                    id={`otp-${index}`}
                  />
                ))}
              </div>




              <div className="flex flex-col justify-center md:justify-start items-center gap-5">
                <p>Not recieved ? <span className='text-fire-red underline cursor-pointer'>Resend</span> </p>
                <button type='submit' className="px-8 md:px-28 py-2 bg-dark-purple rounded-md text-white">Verify</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Signin;
