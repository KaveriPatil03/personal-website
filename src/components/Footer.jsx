import React from 'react'

const Footer = () => {
  return (
    <>
     {/* <!-- FOOTER START --> */}
  <footer>
    <section id="footer" className="py-5 bg-dark">
      <div className="footer-content text-center">
        <a href="https://www.linkedin.com/in/kaveri-patil-5231221ab/" target="_blank"><i
            className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/KaveriPatil03" target="_blank"><i className="fa-brands fa-github"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krpatil3012@gmail.com" target="_blank"><i
            className="fa-solid fa-envelope"></i></a>
        <div className="text-center text-white fs-5 pt-4">
          <p>&copy; 2022</p>
        </div>
      </div>
    </section>
  </footer>
  {/* <!-- FOOTER END --> */}
    </>
  )
}

export default Footer