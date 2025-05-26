import logo from "/src/assets/logowhite.png";

const LOGO = () => (
    <div className="text-white font-bold text-xl">
      <img
        src={logo}
        alt="Logo"
        className="h-10 w-auto mt-[-15px]"
      />
      {/* You can add more elements here if needed */}
    </div>
  );
  
  export default LOGO;
  