import { Link } from "react-router-dom";
import AC from "./AboutCard";
import DropDown from "./AboutDropDown";
import ErrorHandling from "../others/ErrorHandling";

export default function About() {
  return (
    <div>
      <div className="max-w-[1006px] flex place-content-center mx-auto font-Poppins mt-10 dark:hidden">
        <div>
          <img
            className="w-[341.47px] h-[501px] rounded-[10px]"
            src="images/grad-pic.jpg"
          />
        </div>
        <div className="">
          <div className="w-[558px] mt-[10px] ml-[37px]">
            <h3 className="text-[24px]">Hello, My name is Jubert C. Nantes</h3>
            <p className="text-[16px] mt-[12px] text-justify">
              A BSIT graduate with solid school experience in Software
              Development, Web Development, and API Development. Completed
              multiple academic projects focused on creating efficient and
              user-friendly applications. Gained practical skills in designing
              modern solutions that address real-world needs.
            </p>
          </div>
          <div className="w-[558px] mt-[29px] ml-[37px]">
            <div className="flex">
              <h5 className="text-[24px]">SKILLS</h5>
              <div className="hover:cursor-pointer">
                <Link to="/skills">
                  <p className="ml-[375px] mt-[8px] text-[16px] text-[#0267ED]">
                    See My Skills
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap mt-[15px]">
              <AC imgPath="/images/web-dev.png" value="Web Development" />
              <AC imgPath="/images/soft-dev.png" value="Software Developer" />
              <AC imgPath="/images/API-dev.png" value="API Developer" />
              <AC imgPath="/images/android.png" value="Android Developer" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-Poppins max-w-[1440px] flex  place-content-center mx-auto dark:hidden">
        <div className="mx-[190px] mt-[77px] mb-[143px]">
          <DropDown Type="EDUCATION" />
          <DropDown Type="INTERNSHIP" />
          <DropDown Type="CERTIFICATES" />
        </div>
      </div>
      <div className="hidden dark:block dark:mt-[45vh]">
        <ErrorHandling />
      </div>
    </div>
  );
}
