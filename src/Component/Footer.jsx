import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer md:footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
  <aside className="text-center max-w-md">
   <h2 className='text-3xl  md:text-5xl font-bold'>KeenKeeper</h2>
    <p className="text-sm md:text-base mt-2">
     Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
     
    </p>
  
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-5">
      <a>
    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-black"
  >
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"/>
    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 15.8 2.8 2.8 0 0 0 12 9.2z"/>
    <circle cx="17.5" cy="6.5" r="1.2"/>
  </svg>
</div>
      </a>
      
      <a>
     <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-black"
  >
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12z"/>
  </svg>
</div>
      </a>
      <a>
        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-black"
  >
    <path d="M18.244 2H21l-6.52 7.43L22 22h-6.18l-4.86-6.32L5.4 22H2.64l7.01-8.01L2 2h6.32l4.43 5.77L18.244 2zm-1.08 18h1.66L7.2 3.99H5.45L17.164 20z"/>
  </svg>
</div>
      </a>
    </div>
      <div className="w-full border-t border-white/30 my-4"></div>

  <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"'>
    <div>  <p>Copyright © {new Date().getFullYear()} - All right reserved</p></div>
    <div className='flex gap-4'>
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
        <a href="">Cookies</a>
    </div>
  

  </div>
  </nav>
  
</footer>

        </div>
    );
};

export default Footer;