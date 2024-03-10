import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 ">
          {/* column text */}
          <div className="flex  justify-center flex-col">
            <h1 className="title-font text-3xl md:text-6xl mb-4 font-bold text-primaryColor">
              انفوا للتقنية
            </h1>
            <p className="mb-8 text-secondColor">
              المعلومات الموجودة هي معلومات تم اكتسابها عن طريق التعلم الذاتي أو
              من سوق العمل
            </p>
          </div>
          {/* column img */}
          <div className="order-first md:order-last">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="../assets/img-hero.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
