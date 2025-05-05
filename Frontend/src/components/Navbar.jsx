import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className="bg-purple-600 border-b border-purple-500 fixed w-full top-0 z-40 backdrop-blur-lg ">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9  rounded-lg bg-purple-100 flex items-center justify-center  group-hover:bg-primary-content-custom/20">
                <MessageSquare className="w-5.5 h-5.5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 bg-purple-800 hover:bg-purple-950`}
            >
              <Settings className="w-7 h-7" />
              <span className="hidden sm:inline text-lg">Settings</span>
            </Link>
            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className={`btn btn-sm gap-2  bg-purple-800 hover:bg-purple-950`}
                >
                  <User className="size-7" />
                  <span className="hidden sm:inline text-lg">Profile</span>
                </Link>
                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-7" />
                  <span className="hidden sm:inline text-lg">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
