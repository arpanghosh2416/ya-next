import Image from "next/image";
import { Container } from "../shared";

const Footer = (props) => {
  return (
    <footer className="bg-black">
      <Container>
        <article className="py-8 sm:py-16">
          <a href="#hero">
            <Image
              className="h-12 cursor-pointer"
              alt="YA-logo"
              src="https://youngarchitects.in/assets/logo/brandlogo.webp"
              width={48}
              height={48}
            />
          </a>
          <div className="my-10 h-px w-full bg-secondary-light bg-opacity-50"></div>
          <section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-gray-400">
              <div className="text-center sm:text-start">
                Copyright &copy; {new Date().getFullYear()} YA. All Rights
                Reserved.
              </div>
            </div>
            <ul className="flex items-center gap-8 text-white">
              <li className="hover:text-primary">
                <a href="https://www.instagram.com/young.architects__/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="hover:text-primary">
                <a href="https://www.facebook.com/profile.php?id=61552365513089">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="hover:text-primary">
                <a href="https://www.linkedin.com/company/young-aarchitects">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </footer>
  );
};

export default Footer;
