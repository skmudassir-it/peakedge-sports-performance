import {
  Dumbbell,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Apple,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Apple,
  Trophy,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Dumbbell;
  return <Icon className={className} />;
}
