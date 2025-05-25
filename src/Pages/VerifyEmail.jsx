import React, { useEffect, useState } from 'react';
import BackgroundWrapper from "/src/Components/BackgroundWrapper.jsx";
import VerifyImage from "/src/assets/VerifyAccount.png";
import axios from 'axios';

const VerifyEmail = () => {
  const [seconds, setSeconds] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const email = localStorage.getItem('userEmail')|| "mockuser@example.com";  //ghir bach mayakhrejch error right after timeisout

  

  useEffect(() => {
    if (!email) {
      setError("No email found. Please go back and register again.");
    }
  }, [email]);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      setCanResend(false);
      timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleResend = async () => {
    if (!email) return;
    setIsSending(true);
  
    try {
      const response = await axios.post('/api/auth/resend-verification', { email });
  
      if (response.status === 200) {
        setMessage('Verification email sent again!');
        setError('');
        setSeconds(59); 
        setCanResend(false);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setMessage('');
    } finally {
      setIsSending(false);
    }


  };
  

  return (
    <BackgroundWrapper>
      <div className="absolute inset-0 bg-[#070707]/30 backdrop-blur-2xl z-0"></div>
      <section className="flex justify-center px-6 md:px-10">
        <div
          className="relative py-12 md:px-50 md:py-6 rounded-[40px] max-w-300 w-full flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-10 z-[10] md:z-[30] overflow-hidden "
          style={{
            boxShadow: '0px 0px 50.9px 0px #00000040',
          }}
        >
          <div
            className="absolute inset-0 z-0 rounded-[40px] border-4 border-white bg-white"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="text-2xl mt-10 md:text-4xl font-bold font-mulish text-[#002313] mb-10">
              Verify your account.
            </h1>

            <h2 className="text-base md:text-lg mt-3 font-mulish text-[#002313] whitespace-nowrap ml-[-70px] mr-[70px]">
              We've sent a verification link to your email. Please click the link to activate your account.
            </h2>

            <div className="text-base md:text-lg mt-2 mb-[-30px] font-mulish text-[#002313]">

              <h2>
                Didn’t get the email? Don’t worry &nbsp;   
                {canResend ? (
                  <button
                    onClick={handleResend}
                    disabled={isSending}
                    className={`underline font-bold transition-colors ${
                      isSending
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-green-600 hover:text-green-800'
                    }`}
                  >
                    {isSending ? 'Sending...' : 'Resend'}
                  </button>
                ) : (
                  <button
                    disabled
                    className="text-[#FF154B] underline font-bold cursor-not-allowed"
                  >
                    Resend in {seconds}s
                  </button>
                )}
              </h2>

              {message && (
                <p className="text-green-700 font-semibold mt-2 mb-2">{message}</p>
              )}
              {error && (
                <p className="text-[#FF154B] font-semibold mt-2 mb-2">{error}</p>
              )}
            </div>

            <img
              src={VerifyImage}
              alt="verify"
              className="w-[270px] md:w-[300px] mb-[-48px]"
            />
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default VerifyEmail;
