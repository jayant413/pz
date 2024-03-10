import Logout from "@/components/Logout";

const Header = () => {
  return (
    <div>
      <header className="bg-white h-[4rem] w-[100vw] flex justify-start items-center">
        <div className="flex w-[50%] justify-center items-center">
          <a href="/login">
            {" "}
            <img src="img/Logo.png" alt="logo" />
          </a>
        </div>
        <div className="w-[50%] justify-end flex pr-10">
          <Logout />
        </div>
      </header>
    </div>
  );
};

export default Header;
