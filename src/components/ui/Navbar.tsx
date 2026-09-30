import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type ComponentType } from "react";
import useActiveSection from "../../hooks/useActiveSection";
import { CodeIcon, HomeIcon, MailIcon, ProjectsIcon, UserIcon } from "./icons";

interface NavItem {
  id: "home" | "about" | "skills" | "projects" | "contact";
  label: string;
  Icon: ComponentType<{ size?: number }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Início", Icon: HomeIcon },
  { id: "about", label: "Sobre", Icon: UserIcon },
  { id: "skills", label: "Stack", Icon: CodeIcon },
  { id: "projects", label: "Projetos", Icon: ProjectsIcon },
  { id: "contact", label: "Contato", Icon: MailIcon },
];

const NAV_IDS = NAV_ITEMS.map(({ id }) => id);

interface DockItemProps {
  item: NavItem;
  active: string;
  mobile?: boolean;
  onNavigate: (id: NavItem["id"]) => void;
}

function DockItem({ item, active, mobile = false, onNavigate }: DockItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isActive = active === item.id;
  const showTooltip = !mobile && (isHovered || isFocused);
  const { Icon } = item;

  return (
    <motion.button
      type="button"
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      onClick={() => onNavigate(item.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.08, y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`dock-item group relative inline-flex overflow-visible items-center justify-center bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#9AACFF] ${
        mobile ? "h-[52px] flex-1" : "h-10 w-10 rounded-[10px]"
      } ${isActive ? "text-[#5B7CFF]" : "text-[#9096A3] hover:text-[#F4F6FB]"}`}
    >
      <Icon size={mobile ? 19 : 18} />
      {isActive && (
        <span
          className={`absolute h-1 w-1 rounded-full bg-[#5B7CFF] ${
            mobile ? "bottom-1.5" : "bottom-1"
          }`}
          aria-hidden="true"
        />
      )}
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            className="dock-tooltip"
            aria-hidden="true"
            style={{ x: "-50%" }}
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const active = useActiveSection(NAV_IDS);

  const scrollTo = (id: NavItem["id"]) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-[18px] z-50 hidden h-[52px] items-center px-[clamp(2.5rem,4vw,3rem)] md:flex"
        aria-label="Navegação principal"
      >
        <span className="font-mono text-[0.82rem] font-semibold tracking-[0.1em] text-[#F4F6FB]">
          &lt;DEV<span className="text-[#5B7CFF]">/</span>&gt;
        </span>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 overflow-visible rounded-[15px] border border-white/[0.08] bg-[rgba(10,12,17,0.72)] p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.16)] backdrop-blur-[16px]">
          {NAV_ITEMS.map((item) => (
            <DockItem
              key={item.id}
              item={item}
              active={active}
              onNavigate={scrollTo}
            />
          ))}
        </div>
      </nav>

      <nav
        className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-50 flex items-center rounded-[15px] border border-white/[0.08] bg-[rgba(10,12,17,0.8)] p-1 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-[16px] md:hidden"
        aria-label="Navegação principal"
      >
        {NAV_ITEMS.map((item) => (
          <DockItem
            key={item.id}
            item={item}
            active={active}
            mobile
            onNavigate={scrollTo}
          />
        ))}
      </nav>
    </>
  );
}
