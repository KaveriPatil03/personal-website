import Image from "next/image";
import { useEffect, useState } from "react";
import avatarImg from "../assets/images/avatar.avif";
import Link from "next/link";

const About = () => {
  const texts = ["a Frontend Developer", "Open to Work"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let speed = isDeleting ? 50 : 100; // Typing speed

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        // Typing letters
        if (charIndex < currentText.length) {
          setText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting letters
        if (charIndex > 0) {
          setText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next text and start typing again
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <div>
      <section
        id="about"
        className="bg-gradient-to-r from-slate-950 to-slate-900 ps:0 lg:ps-72"
      >
        <div className=" h-screen min-h-fit flex flex-col lg:flex-row lg:flex-row-reverse items-center gap-14 px-5">
          <div className="w-[100%] ">
            <Image
              src={avatarImg}
              width="400"
              alt=""
              className="rounded-full mt-24 lg:mt-0"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-white text-5xl font-semibold">
              <div>
                {" "}
                Hi, I'm <br />
                Kaveri Patil
              </div>
            </h1>
            <h2 className="text-white text-2xl font-semibold py-3">
              {" "}
              I am{" "}
              <span className="text-cyan-400">
                {text}
                <span className="blinking-cursor">|</span>
              </span>
            </h2>
            <p className="text-white leading-7">
              {" "}
              I'm a BCA graduate with over 2 years of hands-on experience in
              Frontend Development, driven by a strong passion for crafting
              engaging and responsive user interfaces. I specialize in
              transforming designs into seamless digital experiences using a
              robust skill set built on HTML, CSS, and JavaScript. My expertise
              includes creating responsive layouts with Bootstrap, building
              dynamic applications using React JS, and managing complex
              application states efficiently with Redux. Additionally, I
              leverage the power of Next.js to develop fast, scalable, and
              SEO-friendly web applications, enhancing both performance and user
              experience.
            </p>
            <Link href="/Kaveri_Patil_CV.pdf" target="_blank">
              <button className="bg-cyan-700 p-3 my-8 text-white font-semibold">
                Check Resume
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blinking-cursor {
          font-weight: bold;
          font-size: 1.5rem;
          color: white;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
