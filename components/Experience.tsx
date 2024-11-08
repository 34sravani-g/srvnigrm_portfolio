import React from "react";

interface Experience {
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
}
interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceProps) => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center text-slate-600 dark:text-slate-200 lg:p-2">
        {experiences.map((experience, key) => (
          <div key={key} className="flex">
            <div className="relative mr-6 md:mr-10">
              <div className="flex h-full w-3 items-center justify-center">
                <div className="pointer-events-none h-full w-px bg-blue-500"></div>
              </div>
              <div className="absolute top-16 h-3 w-3 rounded-full bg-blue-500"></div>
              <div className="absolute left-3 top-[4.3rem] h-px w-6 bg-blue-500 md:w-10"></div>
            </div>
            <div className="my-8 mr-auto w-full max-w-4xl rounded-xl border border-blue-500 p-6 shadow-md">
              <div className="flex justify-between">
                <h3 className="text-md mb-1 font-medium">{experience?.role}</h3>
                <h5 className="text-sm">{experience?.company}</h5>
              </div>
              <h5 className="text-sm text-slate-500">{experience?.duration}</h5>
              <ul className="list-disc pl-4 pt-4 text-sm text-slate-500">
                {experience?.responsibilities?.map((responsibility, key) => (
                  <li key={key} className="py-1">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;



/* 
Timeline Line & Indicator:
relative mr-6 md:mr-10: Positions and spaces each item.
Vertical line: pointer-events-none h-full w-px bg-blue-500 creates a vertical blue line for the timeline.
Circle marker: absolute top-16 h-3 w-3 rounded-full bg-blue-500 represents a point on the timeline.
Horizontal line: absolute left-3 top-[4.3rem] h-px w-6 bg-blue-500 md:w-10 adds a horizontal line, extending from the vertical line towards the experience content.
*/