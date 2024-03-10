const Login = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="img/Logo.png" alt="logo" />
        </div>
        <div>&nbsp;</div>
      </header>
      <main className="relative">
        <div className="background-img bg-[url(/img/bg.jpg)]"></div>
        <form
          action=""
          className="bg-white text-gray-600 w-[30rem] h-[30rem]  flex flex-col gap-y-8 
          absolute rounded-xl right-[20vw] top-[10vh] justify-center items-center"
        >
          <div className="flex justify-center items-center text-xl uppercase">
            {" "}
            <a href="/login" className="text-gray-400">
              Register
            </a>
            <span className="mx-5">|</span>
            <a href="/login">Login</a>
          </div>
          <div className="flex flex-col w-[80%] gap-y-3">
            <input
              type="text"
              placeholder="Username"
              className="p-2 bg-transparent border-b-2 border-gray-500 outline-none"
            />
            <input
              type="text"
              placeholder="password"
              className="p-2 bg-transparent border-b-2 border-gray-500 outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-400 p-3 rounded-xl hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="gray-background"></div>
      </main>
    </div>
  );
};

export default Login;
