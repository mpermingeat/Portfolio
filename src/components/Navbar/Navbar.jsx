function Navbar() {
  return (
    <div className="flex w-full flex-row justify-evenly">
      <div className="flex w-2/3 text-primaryLight ml-20 items-center">
        <span className="text-primaryLight items-center p-4">Logo</span>
      </div>
      <div className="w-1/3">
        <ul className=" w-full text-primaryLight font-bold flex justify-center mx-4 p-2">
          <li className="rounded cursor-pointer mx-4 p-2 hover:bg-secondaryDark">
            Home
          </li>
          <li className="rounded cursor-pointer mx-4 p-2  hover:bg-secondaryDark">
            About
          </li>
          <li className="rounded cursor-pointer mx-4 p-2 hover:bg-secondaryDark">
            Proyects
          </li>
          <li className="rounded cursor-pointer mx-4 p-2 hover:bg-secondaryDark">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
