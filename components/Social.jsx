import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MarkVincent93" },
  { icon: <FaLinkedinIn />, path: "https://www.pornhub.com/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/markvincent.quiao/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/chongvl93/?hl=en" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
