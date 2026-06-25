/** @format */

import { Cpu, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { adminName } from "@/data/adminData";

const Footer = () => {
  const focusAreas = ["Python", "FastAPI", "PyTorch", "RAG", "NLP"];

  return (
    <footer className="text-zinc-400 py-8 px-6 border-t">
      <div className="sm:flex sm:flex-row sm:max-w-6xl sm:mx-auto sm:justify-between sm:items-center sm:space-y-0 space-y-5">
        <div className="space-y-3">
          <div className="flex items-center gap-2 dark:text-white text-zinc-900">
            <Cpu className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">{adminName}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <Badge
                key={area}
                className="bg-zinc-800 text-white font-normal"
                variant="outline"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 dark:text-gray-400 text-gray-700 sm:text-right">
          <Sparkles className="h-4 w-4 text-orange-500 flex-shrink-0" />
          <p>Turning research notes into working AI products.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
