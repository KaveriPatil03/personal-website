import React from 'react';
import htmlImg from '../images/html-img.png';
import cssImg from '../images/css-img.png';
import jsImg from '../images/js-img.png';
import bootstrapImg from '../images/bootstrap-img.png';
import reactImg from '../images/react-img.png';
import reduxImg from '../images/redux-img.png';
import tailwindImg from '../images/tailwind-img.png';
import jsonImg from '../images/json-img.jpeg';
import expenseImg from '../images/expense_tracker.png';
import jewlImg from '../images/jewellery_store.png';
import foodImg from '../images/food_donation.png';
import tastyImg from '../images/tasty_eats.png';
import bgImg from '../images/slider-pw.png'
import resume from '../resume/Kaveri_Patil_Resume.pdf';

const Home = () => {
  return (
    <>
    
    {/* <!-- HOME START --> */}
  <section id="home">
    <div className="inner-width">
      <div className="content">
        <h1>Hi I'm </h1>
        <div className="sm">
          <a href="https://www.linkedin.com/in/kaveri-patil-5231221ab/" target="_blank"><i
              className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/KaveriPatil03" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krpatil3012@gmail.com" target="_blank"><i
              className="fa-solid fa-envelope"></i></a>
        </div>
        <div className="buttons">

          <a href={resume} target="_blank">View CV</a>
          <a href={resume} target="_blank" rel="noopener noreferrer" download>Download CV</a>
        </div>
      </div>
    </div>
  </section>
{/* <!-- HOME END --> */}
    
    {/* <!-- ABOUT START --> */}
  <section id="about" className="py-5">
    <div className="container my-4">
      <div className="about-us">
        <div className="txt-underline about-title text-center pb-4">
          <h1>About</h1>
        </div>

        <div className="about-content">
          <div className="abt-inner-content px-5">
            <div className="row">

              <p className="first-para">
                Hi there! I'm a BCA graduate with a passion for Frontend Development, backed by 2 years
                of
                dedicated experience. I specialize in bringing designs to life through my robust skill set. My
                expertise
                spans HTML, CSS, and JavaScript, forming the foundation for my work. I've mastered the art of
                responsive
                design with Bootstrap, and my projects come to life with the dynamic capabilities of React JS and
                state
                management with Redux. JSON is another tool in my toolkit, helping me seamlessly handle and exchange
                data.
                My development workflow is streamlined through practical experience in version control using Git and
                GitHub, highlighting my commitment to efficient and collaborative coding practices.
              </p>

              <div className="col-sm-12 col-md-4 col-lg-4" style={{lineHeight: "25px", fontSize: "16px"}}>

                <div className="card p-3 mt-2">
                  <div className="card-content d-flex justify-content-center">

                    <div>
                      <b> <i className="fa-solid fa-briefcase fa-3x"></i> </b>
                    </div>
                    <div className="ps-4">
                     <b> <span>Experience</span> </b><br />
                      <span className="">2 Years</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card p-3 mt-2">
                  <div className="card-content d-flex justify-content-center">
                    <div>
                      <b><i className="fa-solid fa-envelope fa-3x"></i></b>
                    </div>
                    <div className="ps-4">
                      <span><b>Email </b></span><br />
                      <span className="">krpatil3012@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card p-3 mt-2">
                  <div className="card-content d-flex justify-content-center">
                    <b><i className="fa-solid fa-address-book fa-3x"></i></b>
                    <div className="ps-4">
                      <span><b>Contact No.</b></span> <br />
                      <span className="">6360653132</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  {/* <!-- ABOUT END --> */}

  {/* <!-- SKILLS START --> */}
  <section id="skill" className="py-5">
    <div className="container my-4">
      <div className="skills">
        <div className="txt-underline skills-title text-center pb-4">
          <h1>Skills</h1>
        </div>

        <div className="skills-content">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={htmlImg} alt="" className="img-fluid" height="80px" width="80px" />
                </div>
                <div className="card-body text-center">
                  <h5>HTML</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={cssImg} alt="" className="img-fluid" height="70px" width="70px" />
                </div>
                <div className="card-body text-center">
                  <h5>CSS</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={jsImg} alt="" className="img-fluid"  height="80px" width="80px" />
                </div>
                <div className="card-body text-center">
                  <h5>JavaScript</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={bootstrapImg} alt="" className="img-fluid"  height="95px"
                    width="95px" />
                </div>
                <div className="card-body text-center">
                  <h5>Bootstrap</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={reactImg} alt="" className="img-fluid"  height="90px" width="90px" />
                </div>
                <div className="card-body text-center">
                  <h5>React</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={reduxImg} alt="" className="img-fluid"  height="80px" width="80px" />
                </div>
                <div className="card-body text-center">
                  <h5>Redux</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={tailwindImg} alt="" className="img-fluid" height="80px"
                    width="80px" />
                </div>
                <div className="card-body text-center">
                  <h5>Tailwind CSS</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={jsonImg} alt="" className="img-fluid"  height="80px" width="80px" />
                </div>
                <div className="card-body text-center">
                  <h5>JSON</h5>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      </div>
  </section>
  {/* <!-- SKILLS END --> */}

  {/* <!-- EDUCATION START --> */}
  <section id="education" className="py-5">
    <div className="container my-4">
      <div className="education-content">
        <div className="txt-underline education-title text-center pb-4">
          <h1>Education & Experience</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 pt-2">
            <div className="inner-education">
              <div className="card p-3">
                <h5>2017 - 2020</h5>
                <h6>Bachelor of Computer Applications</h6>
                <p><b>College:</b> Bharatesh College of Computer Applications, Belagavi <br />
                  <b>Percentage:</b> 81.25%
                </p>
              </div>
            </div>

            <div className="inner-education">
              <div className="card p-3 mt-4">
                <h5>2015 - 2017</h5>
                <h6>PUC</h6>
                <p><b>College:</b> Maratha Mandal's PU College, Belagavi <br />
                  <b>Percentage:</b> 62.5%
                </p>
              </div>
            </div>

            <div className="inner-education">
              <div className="card p-3 mt-4">
                <h5>2014 - 2015</h5>
                <h6>SSLC</h6>
                <p><b>School:</b> Bharatesh English Medium School, Belagavi <br />
                  <b>Percentage:</b> 80.64%
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-8 pt-2">

            <div className="inner-experience">
              <div className="card pt-3 px-3 pb-2">
                <h5>Sep 2023 - Nov 2023</h5>
                <h6>Elena Geo Systems Pvt Ltd, Bengaluru</h6>
                <h6>Jr. Web Developer</h6>
                <ul>
                  <li>Collaborated on the development of client and company projects, focusing on the implementation of
                    modern web technologies.</li>
                  <li>Collaborated with the development team to troubleshoot and resolve frontend issues, ensuring a
                    smooth and user-friendly online experience.</li>
                  <li>Designed and developed web screens to ensure compatibility across both mobile browsers and
                    desktop/laptop screens.</li>
                  <li>Tested frontend code in multiple browsers to ensure cross-browser compatibility.</li>
                </ul>
              </div>
            </div>


            <div className="inner-experience">
              <div className="card pt-3 mt-4 px-3 pb-2">
                <h5>Nov 2021 - Nov 2022</h5>
                <h6>Infynow Software Solutions LLP, Belagavi</h6>
                <h6>Associate Software Engineer</h6>
                <ul>
                  <li>Role Description: To design and develop compatible web screens for both mobile browsers and
                    desktop/laptop screens. </li>
                  <li>Implemented Designs using HTML, CSS, Bootstrap, JavaScript, React JS.</li>
                  <li>Conducted performance optimization to enhance the speed and efficiency of web applications.</li>
                  <li>Have worked with web debugging tools(Chrome Developer Console).</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- EDUCATION END --> */}

  {/* <!-- PROJECTS START --> */}
  <section id="projects" className="py-5">
    <div className="container my-4">
      <div className="projects">
        <div className="txt-underline projects-title text-center pb-4">
          <h1>My Personal Projects</h1>
        </div>

        <div className="projects-content">
          <div className="row d-flex justify-content-evenly">
            <div className="col-sm-12 col-md-2 col-lg-3 pt-3">
              <div className="card">
                <div className="card-img-top">
                  <img src={expenseImg} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4>Expense Tracker</h4>
                  <p>Built an Expense Tracker that helps to keep track of daily expenses using React JS, Chart JS,
                    ContextAPI, Speechly API.</p>


                  <div className="pro-btn">
                    <a href="https://github.com/KaveriPatil03/expense-tracker.git" target="_blank">
                      <button className="btn btn-outline-dark">View Source</button>
                    </a>
                    <a href="https://kaveripatil03.github.io/expense-tracker/" target="_blank">
                      <button className="btn btn-outline-dark ms-2">Try it Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3 pt-3">
              <div className="card" >
                <div className="card-img-top">
                  <img src={tastyImg} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4>Tasty Eats</h4>
                  <p>Built a Food Ordering website using React JS, Redux, Tailwind CSS.</p>

                  <div className="pt-4 pro-btn">
                    <a href="https://github.com/KaveriPatil03/tasty-eats.git" target="_blank">
                      <button className="btn btn-outline-dark">View Source</button>
                    </a>
                    <a href="https://kaveripatil03.github.io/tasty-eats/" target="_blank">
                      <button className="btn btn-outline-dark ms-2">Try it Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3 pt-3">
              <div className="card" >
                <div className="card-img-top">
                  <img src={jewlImg} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4>Shopping Mart</h4>
                  <p>Built an E-commerce website Shopping Mart using React JS, Redux, Axios.</p>

                  <div className="pt-4 pro-btn">
                    <a href="https://github.com/KaveriPatil03/shopping-mart.git" target="_blank">
                      <button className="btn btn-outline-dark">View Source</button>
                    </a>
                    <a href="https://kaveripatil03.github.io/shopping-mart/" target="_blank">
                      <button className="btn btn-outline-dark ms-2">Try it Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3 pt-3">
              <div className="card" >
                <div className="card-img-top">
                  <img src={foodImg} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4>Food Donation</h4>
                  <p>Built a simple static react project Food Donation using React JS.</p>

                  <div className="pt-4 pro-btn">
                    <a href="https://github.com/KaveriPatil03/food-donation.git" target="_blank">
                      <button className="btn btn-outline-dark">View Source</button>
                    </a>
                    <a href="https://kaveripatil03.github.io/food-donation/" target="_blank">
                      <button className="btn btn-outline-dark ms-2">Try it Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
  </section>
  {/* <!-- PROJECTS END --> */}
    </>
  )
}

export default Home