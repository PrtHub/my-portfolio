"use client";

import HeadingBadge from "@/components/heading-badge";
import { IconBrandNextjs } from "@tabler/icons-react";
import { DiRedis } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPrisma,
  SiDrizzle,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  RiFirebaseFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiDatabase2Fill,
} from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { Lightbulb } from "lucide-react";

type Skill = {
  name: string;
  icon?: React.ReactNode | string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

// Sample skills data
const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <IconBrandNextjs /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Figma", icon: <FiFigma /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "Neon DB", icon: <RiDatabase2Fill /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Drizzle", icon: <SiDrizzle /> },
      { name: "Firebase", icon: <RiFirebaseFill /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
      { name: "Redis", icon: <DiRedis /> },
    ],
  },
];

const SkillTag = ({ name, icon }: Skill) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-sm bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-gray-900/30 dark:hover:border-slate-500/10 hover:bg-gray-50 dark:hover:bg-[#111111] cursor-pointer">
      {icon && (
        <span className="flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-xs font-medium text-[#08090a] dark:text-slate-200">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-[#08090a] dark:text-gray-200">
        {name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="Skills" icon={<Lightbulb size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">Skills</span> I
            have
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Technologies and tools I&apos;ve worked with and enjoy using
          </p>
        </div>
      </div>

      <div className="w-full space-y-5">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience highlights */}
      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "2+", label: "Years Experience" },
          { value: "20+", label: "Projects" },
          { value: "10+", label: "Clients" },
          { value: "15+", label: "Technologies" },
        ].map((highlight) => (
          <div
            key={highlight.label}
            className="group relative p-6 rounded-sm border border-gray-200/20 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-slate-200/5 transition-all duration-300 text-center overflow-hidden dark:hover:bg-[#111111]"
          >
            <div className="relative z-10">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#08090a] to-[#737373] dark:from-slate-300 dark:to-slate-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {highlight.value}
              </div>
              <div className="text-xs font-medium text-[#737373] dark:text-gray-400 mt-2 group-hover:text-[#08090a] dark:group-hover:text-white transition-colors duration-300">
                {highlight.label}
              </div>
            </div>
            {/* <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: mounted
                  ? theme === "dark"
                    ? `radial-gradient(circle at center, rgba(34, 197, 94, 0.03) 0%, rgba(34, 197, 94, 0.06) 35%, transparent 70%)`
                    : `radial-gradient(circle at center, rgba(8, 9, 10, 0.03) 0%, rgba(8, 9, 10, 0.06) 35%, transparent 70%)`
                  : defaultBackground,
              }}
            /> */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#08090a]/30 dark:via-slate-300/10 to-transparent scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
