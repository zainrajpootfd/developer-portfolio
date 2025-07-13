"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelancer",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Working as a freelance full-stack developer, creating custom web applications for various clients using React, Next.js, and Node.js. Managing complete project lifecycles from requirements gathering to deployment.",
    achievements: [
      "Completed 7+ successful projects",
      "Maintained 5-star rating on Freelancer platform",
      "Delivered projects 15% ahead of schedule on average",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Bytestan",
    location: "Pakistan",
    period: "2022 - 2023",
    description:
      "Transitioned from internship to full-time role, developing scalable web applications and contributing to the company's core products. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Led development of 3 major client projects",
      "Improved application performance by 35%",
      "Mentored 2 junior developers",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    company: "Bytestan",
    location: "Pakistan",
    period: "2021 - 2022",
    description:
      "Started as an intern focusing on frontend development with React and modern JavaScript. Gained hands-on experience in building responsive user interfaces and working with RESTful APIs.",
    achievements: [
      "Built 5+ responsive web applications",
      "Learned modern development workflows",
      "Contributed to company's component library",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work <span className="text-purple-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 hidden md:block" />

              <div className="md:ml-20">
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-white font-medium">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: index * 0.2 + i * 0.1,
                            }}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
