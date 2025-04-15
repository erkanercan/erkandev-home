import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg text-muted-foreground">{company}</p>
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">{period}</p>
        </div>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
