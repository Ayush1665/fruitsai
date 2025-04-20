import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginSocialFacebook,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialPinterest,
} from "reactjs-social-login";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Logged in with:", email, password);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email); // Store the email
      navigate("/home");
      setIsLoading(false);
    }, 1500);
  };

  const socialLoginHandler = (platform) => (response) => {
    if (response && response.accessToken) {
      console.log(`${platform} login successful:`, response);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[hsl(240,10%,10%)] rounded-xl shadow-lg overflow-hidden border border-[hsl(240,10%,15%)] transition-all duration-300 hover:shadow-xl hover:border-[hsl(240,10%,20%)]">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-2">
              Welcome to FRUIT.AI
            </h2>
            <p className="text-gray-400">Login in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[hsl(240,10%,15%)] border border-[hsl(240,10%,20%)] text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-[hsl(240,10%,20%)] transition duration-200 outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[hsl(240,10%,15%)] border border-[hsl(240,10%,20%)] text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-[hsl(240,10%,20%)] transition duration-200 outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:cursor-pointer ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(240,10%,20%)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[hsl(240,10%,10%)] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <LoginSocialFacebook
                appId="APP_ID"
                onResolve={socialLoginHandler("Facebook")}
                onReject={(error) => console.log(error)}
              >
                <button className="w-full flex items-center justify-center py-2 px-4 border border-[hsl(240,10%,20%)] rounded-md shadow-sm text-sm font-medium text-gray-300 bg-[hsl(240,10%,15%)] hover:bg-[hsl(240,10%,20%)] transition duration-200 hover:cursor-pointer">
                  <FaFacebook className="h-5 w-5 text-blue-400" />
                </button>
              </LoginSocialFacebook>

              <LoginSocialLinkedin
                appId="APP_ID"
                onResolve={socialLoginHandler("LinkedIn")}
                onReject={(error) => console.log(error)}
              >
                <button className="w-full flex items-center justify-center py-2 px-4 border border-[hsl(240,10%,20%)] rounded-md shadow-sm text-sm font-medium text-gray-300 bg-[hsl(240,10%,15%)] hover:bg-[hsl(240,10%,20%)] transition duration-200 hover:cursor-pointer">
                  <FaLinkedin className="h-5 w-5 text-blue-400" />
                  
                </button>
              </LoginSocialLinkedin>

              <LoginSocialPinterest
                appId="APP_ID"
                onResolve={socialLoginHandler("Pinterest")}
                onReject={(error) => console.log(error)}
              >
                <button className="w-full flex items-center justify-center py-2 px-4 border border-[hsl(240,10%,20%)] rounded-md shadow-sm text-sm font-medium text-gray-300 bg-[hsl(240,10%,15%)] hover:bg-[hsl(240,10%,20%)] transition duration-200 hover:cursor-pointer">
                  <FaPinterest className="h-5 w-5 text-red-400" />
                  
                </button>
              </LoginSocialPinterest>

              <LoginSocialInstagram
                appId="APP_ID"
                onResolve={socialLoginHandler("Instagram")}
                onReject={(error) => console.log(error)}
              >
                <button className="w-full flex items-center justify-center py-2 px-4 border border-[hsl(240,10%,20%)] rounded-md shadow-sm text-sm font-medium text-gray-300 bg-[hsl(240,10%,15%)] hover:bg-[hsl(240,10%,20%)] transition duration-200 hover:cursor-pointer">
                  <FaInstagram className="h-5 w-5 text-pink-400" />
                </button>
              </LoginSocialInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
