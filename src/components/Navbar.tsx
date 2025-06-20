import CustomButton from "./CustomButton";
import ResponsiveContainer from "./ResponsiveContainer";
import arrowImage from "../assets/arrow.png";

const Navbar = () => {
  return (
    <div className="py-6">
      <ResponsiveContainer className="flex justify-between items-center">
        <h1 className="font-bold md:text-4xl sm:text-2xl text-xl">DEVLOP.ME</h1>

        <ul className="flex md:gap-10 gap-7 items-center">
          <li className="md:text-lg text-base font-medium">Home</li>
          <li className="md:text-lg text-base font-medium">About</li>
          <li className="md:text-lg text-base font-medium">Portfolio</li>
          <li className="md:text-lg text-base font-medium">Blog</li>
          <li className="md:text-lg text-base font-medium">
            <CustomButton icon={arrowImage} color="black">
              Start Project
            </CustomButton>
          </li>
        </ul>
      </ResponsiveContainer>
    </div>
  );
};

export default Navbar;
