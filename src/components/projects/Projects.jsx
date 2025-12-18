import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Upcoming Ecommerce Website Spring Boot Project",
    subtitle: "Coming Soon",
    description:
       "I'm currently developing a full-stack E-Commerce application using Java and Spring Boot, focused on building a scalable and secure backend architecture. The project includes product management, user authentication, and database integration using Hibernate and MySQL. The initial version will be pushed to GitHub soon — stay tuned!",
    tags: ["Ongoing", "Java", "Spring Boot", "Hibernate" ,"JPA", "MySQL","REST API"],
    image: "/coming_soon_image.webp",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#9333ea",
  },
  {
    title: "Wander-Lust",
    subtitle: "Hotel Listing Web Application",
    description:
     "WanderLust is an Airbnb-inspired hotel listing application where users can browse, view, and list hotels and stays. The platform focuses on property listings, detailed hotel information, user reviews, and secure access control. Built with a full-stack architecture, the application emphasizes clean UI, structured backend logic, and scalable data handling for hotel-based platforms.",

    tags: [
     "Hotel Booking", "Airbnb Clone", "Full Stack", "MongoDB", "Express", "Node.js"
    ],
    image: "/wanderLust.png",
    liveDemo: "https://wander-lust-4fje.onrender.com/listings",
    githubRepo: "https://github.com/aakash-poddar/Wander-Lust",
    projectColor: "#4f46e5",
  },
  {
    title: "Weather App",
    subtitle: "Android Application (Kotlin)",
    description:
      "A modern Android weather application that fetches real-time weather data using REST APIs. Features include city search, dynamic UI updates, and clean MVVM architecture using Kotlin and Retrofit.",
    tags: [
      "Android",
      "Kotlin",
      "Retrofit",
      "REST API",
      "MVVM"
    ],
    image: "/weather_app.jpg",
    liveDemo: "#",
    githubRepo: "https://github.com/aakash-poddar/Weather-App",
    projectColor: "#432dd7",
  },
  {
    title: "Modern Portfolio",
    subtitle: "Akash - Full Stack Developer",
    description:
     "A modern, responsive personal portfolio designed to showcase projects, skills, and experience in a clean and professional manner. The portfolio features smooth animations, dark/light theme support, and an intuitive user interface, focusing on strong UI/UX design and performance.",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "Email Js",
      "AI",
    ],
    image: "/portfolio.png",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#EA580C",
  },
  {
    title: "Myntra-UI-Clone",
    subtitle: "E-Commerce UI Clone (Myntra Inspired)",
    description:
      "A responsive Myntra-inspired eCommerce UI clone built using HTML, CSS, and JavaScript. The project focuses on recreating Myntra’s core layout, product listing pages, and interactive UI elements to demonstrate strong frontend fundamentals, responsive design, and clean styling.",
    tags: [
      "HTML", "CSS", "JavaScript", "UI Clone", "Responsive Design", "E-Commerce UI"
    ],
    image: "/myntra.png",
    liveDemo: "https://melodious-cuchufli-0a2a06.netlify.app/",
    githubRepo: "https://github.com/aakash-poddar/myntra-ui-clone",
    projectColor: "#d51243",
  },
  {
    title: "Spotify-Clone",
    subtitle: "Music Streaming Web App (Spotify Inspired)",
    description:
        "A Spotify-inspired music streaming web application built using HTML, CSS, and JavaScript. The project replicates Spotify’s core UI including playlists, song cards, and a music player interface, focusing on responsive design, smooth interactions, and clean frontend architecture.",
    tags: [
      "HTML", "CSS", "JavaScript", "Spotify Clone", "Music Player", "Responsive UI"
    ],
    image: "/spotify.png",
    liveDemo: "https://cerulean-gumdrop-231373.netlify.app/ ",
    githubRepo: "https://github.com/aakash-poddar/Spotify-Clone",
    projectColor: "#2563eb",
  },
];

const ProjectTimeline = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: project.projectColor,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold inline-block px-6 py-2 relative z-10"
            style={{
              color: themeColors.primaryColor,
              backgroundColor: themeColors.bg,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Latest Works</span>
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 mx-auto"
              style={{ backgroundColor: themeColors.primaryColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.h2>
        </motion.div>

        {/* Vertical timeline line */}
        <div
          className="w-0.5 hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
          style={{ backgroundColor: themeColors.primaryColor }}
        ></div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;

            return (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isHovered={isHovered}
                setHoveredProject={setHoveredProject}
              />
            );
          })}
        </div>
      </div>

      {/*Note for Read... */}
      <motion.div
        className="max-w-2xl mx-auto mt-20 px-6 relative group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            backgroundColor: themeColors.cardBg,
            border: `1px solid ${themeColors.borderLight}`,
            boxShadow: `0 4px 20px ${themeColors.shadow}`,
            opacity: 0.7,
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-start gap-4">
            {/* <div
              className="flex-shrink-0 mt-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: themeColors.accentGold }}
            /> */}

            <div>
              <motion.p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: themeColors.text }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.3 },
                }}
              >
                <span
                  className="font-bold"
                  style={{ color: themeColors.primaryColor }}
                >
                  Project Selection:{" "}
                </span>
                During my learning journey, I built several practice projects
                including{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  calculator
                </span>
                ,{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  Lottery Game
                </span>
                ,{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  website clones
                </span>
                , and{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  many more
                </span>{" "}
                to sharpen my skills. The projects shown above represent my{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGreen }}
                >
                  best work
                </span>{" "}
                — fully designed and developed from scratch, showcasing complete{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGold }}
                >
                  UI/UX ownership
                </span>{" "}
                and{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGold }}
                >
                  project building logic
                </span>
                .
              </motion.p>

              <motion.div
                className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 border-t"
                style={{ borderColor: themeColors.borderLight }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: themeColors.accentRed }}
                  />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: themeColors.summeryText }}
                  >
                    Currently Mastering
                  </span>
                </div>

                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: themeColors.cardSecondary,
                    color: themeColors.secondary,
                    border: `1px solid ${themeColors.border}`,
                  }}
                >
                  Java, DSA & Spring Boot
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectTimeline;
