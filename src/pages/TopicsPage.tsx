import Icon from "@/components/ui/icon";

const topics = [
  {
    category: "Алгебра",
    icon: "Variable",
    items: ["Линейные уравнения", "Квадратные уравнения", "Системы уравнений", "Неравенства", "Логарифмы", "Степени и корни"],
  },
  {
    category: "Геометрия",
    icon: "Triangle",
    items: ["Площади фигур", "Объёмы тел", "Теорема Пифагора", "Тригонометрия", "Углы и отрезки", "Векторы"],
  },
  {
    category: "Математический анализ",
    icon: "TrendingUp",
    items: ["Производные", "Интегралы", "Пределы", "Ряды", "Дифференциальные уравнения", "Экстремумы функций"],
  },
  {
    category: "Статистика и вероятность",
    icon: "BarChart2",
    items: ["Среднее и дисперсия", "Комбинаторика", "Теория вероятностей", "Распределения", "Выборки", "Гипотезы"],
  },
  {
    category: "Дискретная математика",
    icon: "GitBranch",
    items: ["Теория множеств", "Логические операции", "Графы", "Рекуррентные соотношения", "Булева алгебра", "Алгоритмы"],
  },
  {
    category: "Числа и арифметика",
    icon: "Hash",
    items: ["Натуральные числа", "Дроби", "Проценты", "Пропорции", "НОД и НОК", "Простые числа"],
  },
];

export default function TopicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-10">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Разделы
        </p>
        <h2 className="text-2xl font-light text-foreground mb-1">Темы математики</h2>
        <p className="text-sm text-muted-foreground">Выберите тему — подберём задачи для практики</p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {topics.map((topic) => (
          <div
            key={topic.category}
            className="bg-background p-6 hover:bg-secondary/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-border rounded flex items-center justify-center group-hover:border-foreground transition-colors">
                <Icon name={topic.icon} size={16} className="text-foreground" />
              </div>
              <h3 className="font-medium text-sm text-foreground">{topic.category}</h3>
            </div>
            <ul className="space-y-1">
              {topic.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer">
                  <span className="w-1 h-1 rounded-full bg-border inline-block shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
