import React from "react";

const ProfileCard = () => {
  return (
    <div className="block fixed top-28 left-8 w-96 z-10">
      <div className="bg-primary rounded-xl p-8 text-center shadow-xl min-h-[560px]">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-50 h-80 mx-auto object-cover rounded-md "
        />

        <h4 className="text-2xl font-semibold mt-6">Hasifa Sherin C.P.</h4>
        <p className="text-white/80 text-base mt-2 leading-relaxed">
          MERN Stack Developer
          <br />
          Malappuram, Kerala
        </p>

        <div className="flex justify-center gap-5 mt-5 text-white text-xl">
          <a href="https://www.linkedin.com/in/hasifa-sherin-cp/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Hasifasherin" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:hasifasherincp@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <a href="/HasifaSherin.pdf" download>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:scale-105 transition">
            Download CV <i className="fas fa-download ml-1"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
