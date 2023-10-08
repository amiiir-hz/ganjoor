import Link from "next/link";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <nav className="bg-bg-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-white text-5xl font-bold">
          Logo
        </Link>

        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <img
                className="w-8 h-8 rounded-full"
                src="/path-to-profile-pic.jpg"
                alt="User Profile"
              />
              <span className="text-white">User Name</span>
            </>
          ) : (
            <Link
              href={"/login"}
              className="text-white bg-transparent border border-white rounded-md py-2 px-4 hover:bg-bg-100 hover:text-text-100 transition duration-300 ease-in-out text-3xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
