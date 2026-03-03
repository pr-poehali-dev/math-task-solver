import Icon from "@/components/ui/icon";

type Page = "home" | "solver" | "profile" | "help" | "topics";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const features = [
  {
    icon: "ListOrdered",
    title: "Пошаговое решение",
    desc: "Каждое действие объясняется простым языком — понятно даже без репетитора.",
  },
  {
    icon: "BookOpen",
    title: "Все разделы математики",
    desc: "Алгебра, геометрия, тригонометрия, матанализ, статистика и многое другое.",
  },
  {
    icon: "Zap",
    title: "Мгновенный результат",
    desc: "Введите задачу — получите полное решение за секунды.",
  },
];

const examples = [
  "Решить уравнение 2x² + 5x - 3 = 0",
  "Найти производную f(x) = sin(x) · e^x",
  "Вычислить интеграл ∫(x² + 1)dx",
  "Найти площадь треугольника со сторонами 3, 4, 5",
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-14 border-b border-border">
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">
            Математический решатель
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-foreground mb-6">
            Любая математическая<br />
            <span className="font-semibold">задача с объяснением</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8 max-w-lg">
            Введите задачу — получите пошаговое решение с подробным объяснением каждого действия.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("solver")}
              className="bg-foreground text-background px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Icon name="Calculator" size={16} />
              Решить задачу
            </button>
            <button
              onClick={() => onNavigate("topics")}
              className="border border-border text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-secondary transition-colors"
            >
              Обзор тем
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 border-b border-border">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="space-y-3">
              <div className="w-9 h-9 border border-border rounded-md flex items-center justify-center">
                <Icon name={f.icon} size={18} className="text-foreground" />
              </div>
              <h3 className="font-medium text-sm text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="py-14 border-b border-border">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          Примеры задач
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => onNavigate("solver")}
              className="text-left border border-border rounded-md px-4 py-3 text-sm text-foreground hover:border-foreground hover:bg-secondary transition-all group flex items-center justify-between"
            >
              <span className="font-mono text-xs">{ex}</span>
              <Icon
                name="ArrowRight"
                size={14}
                className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-3"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { num: "50+", label: "тем математики" },
            { num: "100%", label: "с объяснением" },
            { num: "∞", label: "задач без лимита" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-light text-foreground mb-1 font-mono">{s.num}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
