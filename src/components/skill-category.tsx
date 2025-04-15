import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 shadow-lg relative">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-80"></div>
      <CardHeader className="pb-2 pt-8">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className="bg-zinc-800 text-zinc-300 hover:bg-purple-900/30 hover:text-purple-200 border-zinc-700 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
