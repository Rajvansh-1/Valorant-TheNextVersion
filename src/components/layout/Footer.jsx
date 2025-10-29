import { socialMedia } from "../../constants";
import { riotlogogray } from "../../assets";
import styles from "../../style";

// Inlined GitHub SVG icon for a clean, dependency-free implementation
const GithubIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.03c-3.338.724-4.043-1.61-4.043-1.61C4.447 18.163 3.65 17.7 3.65 17.7c-1.088-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.302-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23.956-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.813 1.102.813 2.222v3.293c0 .319.192.694.8.576C20.565 21.795 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
  </svg>
);


const Footer = () => (
  <div className={`pb-8 bg-[#0f1923] pt-12 ${styles.paddingX}`}>
    <div className={`${styles.boxWidth} mx-auto`}>
      
      {/* --- SOCIAL MEDIA (Kept premium hover effect) --- */}
      <ul className="py-4 flex flex-row items-center justify-center">
        {socialMedia.map((social) => (
          <li 
            key={social.id} 
            className="m-2 p-3 cursor-pointer bg-[#292929] rounded-[10px] social-icon-link"
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.id} className="w-[24px] h-[24px]" />
            </a>
          </li>
        ))}
      </ul>
      
      {/* --- LEGAL LINKS (Kept premium hover effect) --- */}
      <div className="flex justify-center align-center p-8">
        <ul className="flex sm:flex-row flex-col justify-center align-center">
          <li className="font-poppins font-semibold relative cursor-pointer text-center text-[13px] uppercase sm:mr-6 mb-2 sm:mb-0 text-white legal-link">
            <a href="#">PRIVACY NOTICE</a>
          </li>
          <li className="font-poppins font-semibold relative cursor-pointer text-center text-[13px] uppercase sm:mr-6 mb-2 sm:mb-0 text-white legal-link">
            <a href="#">TERMS OF SERVICE</a>
          </li>
          <li className="font-poppins font-semibold relative cursor-pointer text-center text-[13px] uppercase text-white legal-link">
            <a href="#">COOKIE PREFERENCES</a>
          </li>
        </ul>
      </div>

      {/* --- RIOT LOGO & COPYRIGHT --- */}
      <div className={`py-4 ${styles.flexCenter}`}>
        <a href="#">
          <img src={riotlogogray} alt="riot" />
        </a>
      </div>
      <div className="mx-auto text-center max-w-[640px]">
        <p className="mx-auto text-[#7e7e7e] text-[13px]">
          © 2025 Riot Games, Inc. Riot Games, VALORANT, and any associated logos
          are trademarks, service marks, and/or registered trademarks of Riot
          Games, Inc.
        </p>
      </div>

      {/* --- NEW DEVELOPER CREDIT SECTION --- */}
      <div className="dev-credit-wrapper">
        <span className="font-poppins text-sm text-gray-400">Designed & Developed by</span>
        <a 
          href="https://github.com/Rajvansh-1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dev-credit-link"
        >
          <GithubIcon className="dev-credit-icon" />
          <span className="dev-credit-name">Rajvansh</span>
        </a>
        <span className="text-gray-500">&</span>
        <a 
          href="https://github.com/RohitSuwalka" // Assuming this is the profile URL
          target="_blank" 
          rel="noopener noreferrer" 
          className="dev-credit-link"
        >
          <GithubIcon className="dev-credit-icon" />
          <span className="dev-credit-name">Rohit</span>
        </a>
      </div>

    </div>
  </div>
);

export default Footer;