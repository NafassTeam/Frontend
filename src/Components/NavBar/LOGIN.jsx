import {  Link} from "react-router-dom";

const LOGIN = () => (
    <Link
      to="/Login"
      className="hidden md:flex text-white border border-white rounded-full px-9 py-1 text-sm font-inter hover:bg-white hover:text-black transition-all"
    >
      Login
    </Link>
  );

  export default LOGIN;