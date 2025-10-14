import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-[470px] relative">
      <div>
        <div className="flex justify-evenly bg-gradient-to-r text-white from-[#1F2937] from-50% to-[#111827] to-50% h-[400px]">
            <div className="text-center pt-10">
                <h1 className="text-4xl py-3">CONTACT US</h1>
            <p className="text-2xl">123 ABS Street, Uni 21, Bangladesh</p>
<p className="text-2xl">+88 123456789</p>
<p className="text-2xl">Mon - Fri: 08:00 - 22:00</p>
<p className="text-2xl"> Sat - Sun: 10:00 - 23:00</p>
            </div>
            <div className="text-center pt-10">
                <h1 className="text-4xl py-3">Follow US</h1>
                <p className="text-2xl">Join us on social media</p>
            </div>
        </div>
        
      </div>

      {/* socket */}
      <div className="bg-[#151515] h-[70px] flex justify-center items-center">
        <p className="text-white text-center">
          Copyright ©{currentYear}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
