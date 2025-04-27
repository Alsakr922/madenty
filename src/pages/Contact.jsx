import React from "react";

const Contact = () => {
  return (
    <div className="bg-smokewhite h-[calc(100vh-80px)] [direction:rtl]">
      <div className="container m-auto h-full">
        <div className="flex flex-col items-center justify-center lg:px-10 lg:py-5">
          <div className="text-center p-5">
            <h1 className="text-4xl font-bold text-black py-5 px-0 bg-white ">
              تواصل معنا
            </h1>
            <p className="text-xl text-black py-3">
              سجل اهتماماتك وسيقوم خبير عقاري بلاتصال بك في اقرب وقت{" "}
            </p>
          </div>
          <form className="flex flex-col gap-5 w-full lg:w-1/2 p-5 mt-10">
            <div className="userName flex justify-center items-center">
              <label htmlFor="name" className="text-xl text-black w-1/2">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                placeholder="الاسم"
                className="rounded-4xl py-2 text-black font-medium w-3/5 outline-none border border-white px-5"
              />
            </div>
            <div className="userEmail flex justify-center items-center">
              <label htmlFor="email" className="text-xl text-black w-1/2">
                البريد الالكتروني
              </label>
              <input
                type="email"
                id="email"
                placeholder="البريد الالكتروني"
                className="rounded-4xl py-2 text-black font-medium w-3/5 outline-none border border-white px-5"
              />
            </div>
            <div className="userPhone flex justify-center items-center">
              <label htmlFor="phone" className="text-xl text-black w-1/2">
                رقم الهاتف
              </label>
              <input
                type="tel"
                id="phone"
                dir="rtl"
                placeholder="رقم الهاتف"
                className="rounded-4xl py-2 text-black font-medium w-3/5 outline-none border border-white px-5"
              />
            </div>
            <div className=" flex justify-center items-center">
              <label htmlFor="message" className="text-xl text-black w-1/2">
                الرسالة
              </label>
              <textarea
                id="message"
                placeholder="الرسالة"
                className="rounded-4xl py-2 text-blackblack font-medium w-3/5 outline-none border border-white px-5"></textarea>
            </div>
            <button className="text-black w-1/2 self-center mt-5 py-2 px-4 rounded-4xl hover:scale-105 cursor-pointer bg-white transition duration-300">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
