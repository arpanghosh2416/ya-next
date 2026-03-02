import Image from "next/image";
import { Container } from "../shared";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer className="bg-black">
      <Container>
        <article className="py-8 sm:py-16">
          <Link
            href="#home"
            aria-label="Go to Home"
            className="inline-flex items-center"
          >
            <Image
              src="https://youngarchitects.in/assets/logo/brandlogo.webp"
              alt="Young Architects logo"
              width={160} // intrinsic width (helps Next optimize)
              height={48} // intrinsic height
              priority
              quality={100}
              sizes="(max-width: 640px) 120px, 160px"
              className="h-10 w-auto sm:h-12 select-none"
            />
          </Link>
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
