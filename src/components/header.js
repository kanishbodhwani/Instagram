import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { HiOutlineHome } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";

export default function Header() {
  const { onAuthStateChanged, signOut, auth } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-between w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img
                  src="/images/logo.png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <HiOutlineHome
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    fontSize={"1.2em"}
                  />
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => signOut(auth)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      signOut();
                    }
                  }}
                >
                  <IoLogOutOutline
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    fontSize={"1.3em"}
                  />
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="flex rounded-full w-8 h-8"
                      alt="image2"
                      src={`/images/avatars/karl.jpg`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGNUP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
