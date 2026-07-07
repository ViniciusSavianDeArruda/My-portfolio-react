import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-bg-2 border border-neutral-800 ${className}`}>
      {children}
    </div>
  );
}
