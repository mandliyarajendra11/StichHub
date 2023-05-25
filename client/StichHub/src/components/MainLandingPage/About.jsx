import React, { useEffect, useState } from "react";
import { AboutUsVector, AvatarDemo } from "../../assets/MainLandingPage/Icons";
import vk from "../../assets/vk.jpg";
import sp from "../../assets/sp.jpg";
import nc from "../../assets/nc.jpg";
import sy from "../../assets/sy.jpg";
import hl from "../../assets/hl.jpg";
const About = () => {
  const [contributors, setContributors] = useState([
    { name: 'SIDDHANT', image: sp },
    { name: 'VISHAL', image: vk },
    { name: 'NARESH', image: nc },
    { name: 'HARSHAL', image: hl },
    { name: 'SAURABH', image: sy },
  ]);

  useEffect(() => {
    // Shuffle the array of contributors
    const shuffledContributors = [...contributors];
    for (let i = shuffledContributors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledContributors[i], shuffledContributors[j]] = [
        shuffledContributors[j],
        shuffledContributors[i],
      ];
    }
    setContributors(shuffledContributors);
  }, []);
  return (
    <div
      id="aboutus"
      className="h-[100%] relative mt-20 mx-7 lg:p-20 lg:ml-20 lg:mr-20"
    >
      <div className="relative z-[5] flex">
        {/* Title on left */}
        <div id="title" className="">
          <span className="lg:text-6xl font-semibold">
            A <br />B<br />O<br />U<br />T<br />
            <br /> U<br />S
          </span>
        </div>

        <div>
          {/* Top Part */}
          <div id="devId" className="ml-10 lg:ml-0 flex flex-wrap justify-between">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? 'lg:ml-[100px] lg:mt-[40px]' : index === 1 ? 'lg:ml-0 lg:pt-[180px] pt-14' : index === 2 ? 'lg:mt-[120px] mt-4' : index === 3 ? 'lg:mt-[60px] mt-14' : 'lg:mt-[150px] mt-4'}`}
              >
                <div className="flex justify-center">
                  <img
                    src={contributor.image}
                    className="relative bg-black/50 rounded-3xl lg:w-[140px] w-[100px] ml-2"
                  />
                </div>
                <div id="name">
                  <span className="text-base lg:text-lg font-medium">{contributor.name}</span>
                </div>
              </div>
            ))}
          </div>


          {/* Bottom Part */}
          <div id="description" className="flex flex-col lg:flex-row mt-5 lg:mt-0">
          <div className="flex justify-center">
          <img src={AboutUsVector} className="lg:hidden lg:w-[340px] w-[200px]" />
          </div>
            <p className="text-base lg:text-lg lg:mt-28 lg:ml-40 text-left">
              We're a team of enthusiasts , hoping to bring the tailor community
              online and introduce them to the benifits of online business.
              Ismai customers kaa bhii dalnaa haii.
            </p>
            <img src={AboutUsVector} className="hidden lg:block lg:w-[340px] w-[200px]" />
          </div>
        </div>
      </div>

      {/* BG-Gradients */}
      <div className="absolute circleGradient-peach w-[670px] h-[570px] top-[20px] left-[175px] z-0 blur-xl"></div>
      <div className="absolute circleGradient-white w-[170px] h-[270px] top-[20px] right-[175px] z-0 blur-xl"></div>
    </div>
  );
};

export default About;
