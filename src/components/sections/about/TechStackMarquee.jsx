import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiOpenai,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import {
  TbSql,
  TbApi,
  TbHierarchy2,
  TbLayersLinked,
  TbNetwork,
  TbCloudNetwork,
  TbBinaryTree,
  TbDatabaseSearch,
  TbSearch,
  TbLanguage,
  TbBrain,
  TbRobot,
  TbInfinity,
  TbTestPipe,
  TbShieldCheck,
  TbActivity,
} from 'react-icons/tb'

// Single unified stream of 37 technologies with authentic brand colors
export const techStackItems = [
  { name: 'Python', icon: SiPython, color: '#3776AB' }, // Official Python Steel Blue
  { name: 'JavaScript', icon: SiJavascript, color: '#EAB308' }, // Rich JS Gold (higher contrast than #F7DF1E on light surfaces)
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }, // Official TypeScript Blue
  { name: 'Dart', icon: SiDart, color: '#0175C2' }, // Official Dart Blue
  { name: 'SQL', icon: TbSql, color: '#00758F' }, // Classic Relational SQL Teal-Blue
  { name: 'React', icon: SiReact, color: '#0891B2' }, // Deep React Cyan (crisp on both light and dark modes)
  { name: 'Next.js', icon: SiNextdotjs, color: '#171717' }, // Authentic Next.js Monochrome Obsidian
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' }, // Official FastAPI Teal
  { name: 'Django', icon: SiDjango, color: '#0C4B33' }, // Official Django Deep Emerald
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' }, // Official Node.js Green
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }, // Official PostgreSQL Slate Blue
  { name: 'Redis', icon: SiRedis, color: '#DC382D' }, // Official Redis Crimson
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' }, // Official Flutter Navy Blue
  { name: 'Firebase', icon: SiFirebase, color: '#F59E0B' }, // Official Firebase Amber-Gold (readable on white)
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' }, // Official Supabase Emerald
  { name: 'REST APIs', icon: TbApi, color: '#EA580C' }, // Postman/Swagger API Orange
  { name: 'System Design', icon: TbHierarchy2, color: '#7C3AED' }, // Architecture Violet
  { name: 'Software Architecture', icon: TbLayersLinked, color: '#4F46E5' }, // Structural Indigo
  { name: 'Microservices', icon: TbNetwork, color: '#DB2777' }, // Distributed Mesh Magenta
  { name: 'Distributed Systems', icon: TbCloudNetwork, color: '#0284C7' }, // Cloud Network Sky Blue
  { name: 'DSA', icon: TbBinaryTree, color: '#059669' }, // Algorithmic Emerald
  { name: 'LLM Integration', icon: SiOpenai, color: '#10A37F' }, // Official OpenAI / LLM Teal
  { name: 'RAG', icon: TbDatabaseSearch, color: '#2563EB' }, // Retrieval Cobalt Blue
  { name: 'Vector Databases', icon: TbSearch, color: '#9333EA' }, // Embedding Space Purple
  { name: 'NLP', icon: TbLanguage, color: '#D97706' }, // Hugging Face / NLP Warm Amber
  { name: 'AI Engineering', icon: TbBrain, color: '#C026D3' }, // Neural Network Fuchsia
  { name: 'AI APIs', icon: TbRobot, color: '#0D9488' }, // Inference Endpoint Teal
  { name: 'Microsoft Azure', icon: VscAzure, color: '#0078D4' }, // Official Microsoft Azure Blue
  { name: 'Docker', icon: SiDocker, color: '#2496ED' }, // Official Docker Blue
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }, // Official Kubernetes Royal Blue
  { name: 'CI/CD', icon: TbInfinity, color: '#F97316' }, // Pipeline DevOps Orange
  { name: 'Git', icon: SiGit, color: '#F05032' }, // Official Git Vermilion
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' }, // Official GitHub Actions Blue
  { name: 'Linux', icon: SiLinux, color: '#EAB308' }, // Tux Gold-Amber (sharp contrast vs #FCC624)
  { name: 'Automated Testing', icon: TbTestPipe, color: '#16A34A' }, // Passing Test Suite Green
  { name: 'Application Security', icon: TbShieldCheck, color: '#DC2626' }, // Security Alert Crimson
  { name: 'Monitoring', icon: TbActivity, color: '#0891B2' }, // Telemetry / Grafana Cyan
]

export default function TechStackMarquee() {
  return (
    <div className="w-full overflow-hidden select-none marquee-mask py-2">
      {/* ── Single Smooth Infinite-Scrolling Row (70s linear infinite, authentic brand colors, pause-on-hover) ── */}
      <div className="animate-marquee flex gap-8 md:gap-10 items-center">
        {[...techStackItems, ...techStackItems].map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.name}-${index}`}
              className="group flex flex-col items-center shrink-0 cursor-default"
            >
              {/* Circular Icon Badge: 48px mobile, 56px desktop with subtle border/shadow and authentic brand color */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:border-py-500 group-hover:shadow-sm">
                <Icon
                  className="w-6 h-6 md:w-7 md:h-7 shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{ color: item.color }}
                />
              </div>

              {/* Clean Label Directly Underneath: Zero progress rings or percentages */}
              <span className="text-xs md:text-[13px] font-body font-medium mt-2 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] whitespace-nowrap text-center transition-colors duration-200">
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
