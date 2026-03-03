import { useState } from "react";
import HomePage from "./HomePage";
import SolverPage from "./SolverPage";
import ProfilePage from "./ProfilePage";
import HelpPage from "./HelpPage";
import TopicsPage from "./TopicsPage";
import Icon from "@/components/ui/icon";

type Page = "home" | "solver" | "profile" | "help" | "topics";

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "solver", label: "Решатель", icon: "Calculator" },
  { id: "topics", label: "Темы", icon: "BookOpen" },
  { id: "help", label: "Справка", icon: "HelpCircle" },
  { id: "profile", label: "Профиль", icon: "User" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background text-xs font-mono font-semibold">∑</span>
            </div>
            <span className="font-semibold text-sm tracking-tight">МатРешатель</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  page === item.id
                    ? "text-foreground active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setPage("solver")}
            className="hidden md:flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <Icon name="Zap" size={14} />
            Решить задачу
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div key={page} className="animate-fade-in">
          {page === "home" && <HomePage onNavigate={setPage} />}
          {page === "solver" && <SolverPage />}
          {page === "profile" && <ProfilePage />}
          {page === "help" && <HelpPage />}
          {page === "topics" && <TopicsPage />}
        </div>
      </main>

      <nav className="md:hidden border-t border-border bg-background sticky bottom-0">
        <div className="flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
                page === item.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <Icon name={item.icon} size={18} />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}