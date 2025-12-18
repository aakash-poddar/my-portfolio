import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const approachCards = [
    {
      icon: "🧠",
      title: "Problem Solving",
      description:(
        <>
        Strong problem-solving skills with{" "}
        <span
          className="font-bold"
          style={{ color: themeColors.primaryColor }}
        >
          100+ LeetCode
        </span>{" "}
         problems solved, specializing in data structures and algorithms.
        I enjoy breaking down complex problems into optimized, scalable
        solutions.
      </>
    ),
    },
    {
      icon: "🔄",
      title: "Lifelong Learning",
      description:
        "Committed to staying updated with the latest web technologies.",
    },
  ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor }}>{children}</span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        <div className="mb-10">
          {/* heading */}
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ color: themeColors.primaryColor }}
          >
            My Development Philosophy
          </h3>

          {/* summary  */}
          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${themeColors.primaryColor}08`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                <Highlight>Java, Spring Boot & MERN Stack (MongoDB, Express, Node.js)</Highlight>: Developing backend systems using Java Spring Boot and MERN stack, creating RESTful APIs, implementing business logic, and integrating databases for full-stack applications.
              </li>

              <li>
                <Highlight>React & JavaScript</Highlight>:
                Building responsive and reusable frontend interfaces using React, with a focus on clean component structure and maintainable UI logic.
              </li>

              <li>
                <Highlight>State Management & API Integration</Highlight>:{" "}
                
                Handling API data and application state using Redux Toolkit and TanStack Query to ensure efficient data flow and smooth user experiences.
              </li>

              <li>
                <Highlight>Android Studio (Java / Kotlin)</Highlight>:
               Building Android applications using Android Studio, implementing API integration, UI components, and real-time data handling for mobile experiences.
              </li>

              <li>
                <Highlight>Git & Development Practices</Highlight>:
                Using Git and GitHub for version control, maintaining clean project structure, and following consistent coding and formatting practices.
              </li>

              <li>
                <Highlight>UI & Styling</Highlight>: Designing modern, responsive, and animated interfaces
              </li>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>
              <p className="text-sm" style={{ color: themeColors.summeryText }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Upcoming Learning Goals
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Advanced Java & Spring Boot", "System Design" , "Android App Development (Advanced)"].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                  border: `1px solid ${themeColors.primaryColor}30`,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
