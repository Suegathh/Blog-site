import { useEffect, useRef } from "react";

function LoginForm() {

    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
  <div className="mb-4">
    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
    <input
      ref={usernameRef}
      type="text"
      id="username"
      placeholder="Username"
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      id="password"
      placeholder="Password"
      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Login
  </button>
</form>

    )
}

export default LoginForm;