import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  type: "work" | "education" | "milestone";
  content: string;
  tags: string[];
}

export function TimelineItem({
  date,
  title,
  subtitle,
  type,
  content,
  tags,
}: TimelineItemProps) {
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[45px] mt-1.5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/50 bg-zinc-900 shadow-[0_0_10px_rgba(168,85,247,0.2)] group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">
          {type === "work" && <Briefcase className="h-4 w-4 text-purple-400" />}
          {type === "education" && (
            <GraduationCap className="h-4 w-4 text-purple-400" />
          )}
          {type === "milestone" && (
            <Award className="h-4 w-4 text-purple-400" />
          )}
        </div>
      </div>

      <div>
        <span className="inline-block mb-3 text-sm font-medium text-purple-400 bg-purple-900/20 px-3 py-1 rounded-full">
          {date}
        </span>
        <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group-hover:border-purple-500/30 transition-all duration-300 shadow-lg">
          <div className="absolute h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-80"></div>
          <CardContent className="p-6 pt-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-lg text-zinc-400">{subtitle}</p>
            </div>
            <p className="mb-4 text-zinc-300">{content}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-zinc-800/50 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
