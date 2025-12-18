import React from "react";
import { useSelector } from "react-redux";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);
  const socials = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "6204899360",
      url: "https://wa.me/+916204899360",
      color: "#128C7E",
    },
    {
      id: "linkedin",
      icon: FiLinkedin,
      label: "https://www.linkedin.com/in/akash-chandra-poddar-full-stack-developer-73aa7a195",
      url: "https://www.linkedin.com/in/akash-chandra-poddar-full-stack-developer-73aa7a195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0e76a8",
    },
    {
      id: "github",
      icon: FiGithub,
      label: "aakash-poddar",
      url: "https://github.com/aakash-poddar",
      color: themeColors.text,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {/* eslint-disable-next-line */}
      {socials.map(({ id, icon: Icon, label, url, color }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-start h-[50px] w-[50px] rounded-xl shadow-md transition-all duration-300 overflow-hidden hover:w-[160px] hover:rounded-md cursor-pointer`}
          style={{
            backgroundColor: themeColors.bg,
          }}
        >
          <div className="flex items-center gap-2 px-2">
            <Icon className="w-6 h-6" style={{ color }} />
            <span
              className={`text-sm font-medium transition-all duration-300 w-0 overflow-hidden group-hover:w-[90px]`}
              style={{ color: themeColors.text }}
            >
              {label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
