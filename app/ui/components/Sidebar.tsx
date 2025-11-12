import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-primary-dark text-gray-200 p-2 hidden sm:flex flex-col gap-3">
      <h1>Side Bar</h1>
      <li>items</li>
      <li>items</li>
      <li>items</li>
      <li>items</li>
      <li>items</li>
      <Link className="mt-auto" href="/login">
        Login
      </Link>
    </div>
  );
};

export default SideBar;
