import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 font-semibold">
        <nav>
          <header className="footer-title text-red opacity-100">
            Services
          </header>
          <a className="link link-hover">Blood Donation</a>
          <a className="link link-hover">Finding Donors</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-red opacity-100">Company</header>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title text-red opacity-100">Legal</header>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <form>
          <header className="footer-title text-red opacity-100">
            Newsletter
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn  bg-[#de2d45]  text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="flex text-center justify-center p-2 gap-2 text-white font-semibold rounded-t-lg bg-[#de2d45]">
        <p>MD Ehsanul Haque Rizvy &copy; {new Date().getFullYear()}</p>|
        <p>TRUST - Blood Donation Website</p>
      </div>
    </div>
  );
};

export default Footer;
