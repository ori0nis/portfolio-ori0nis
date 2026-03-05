export const colorHelper = (tech) => {
  switch (tech.toLowerCase()) {
    case "java":
      return "255, 165, 0"; // text-orange-400
    case "javascript":
      return "251, 191, 36"; // text-amber-400
    case "react":
      return "14, 165, 233"; // text-sky-400
    case "angular":
      return "248, 113, 113"; // text-red-400
    case "typescript":
      return "96, 165, 250"; // text-blue-400
    case "node.js":
      return "34, 197, 94"; // text-green-400
    case "vercel":
      return "243, 244, 246"; // text-zinc-100
    case "vite":
      return "139, 92, 246"; // text-violet-400
    case "springboot":
      return "52, 211, 153"; // text-emerald-400
    case "supabase":
      return "110, 231, 183"; // text-emerald-300
    case "hibernate":
      return "234, 179, 8"; // text-yellow-500
    case "mysql":
      return "251, 191, 36"; // text-orange-300
    case "express":
      return "209, 213, 219"; // text-zinc-300
    case "mongodb":
      return "34, 197, 94"; // text-green-500
    case "tailwindcss":
      return "6, 182, 212"; // text-cyan-400
    case "render":
      return "232, 121, 249"; // text-fuchsia-400
    case "python":
      return "251, 191, 36"; // text-yellow-400
    case "pydantic":
      return "125, 211, 252"; // text-sky-300
    case "uvicorn":
      return "167, 139, 250"; // text-violet-300
    case "fastapi":
      return "45, 212, 191"; // text-teal-400
    case "github":
      return "226, 232, 240"; // text-zinc-200
    default:
      return "209, 213, 219"; // text-zinc-300
  }
};
