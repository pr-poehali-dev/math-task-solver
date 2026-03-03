import Icon from "@/components/ui/icon";

const history = [
  { task: "2x² + 5x − 3 = 0", type: "Алгебра", date: "Сегодня, 14:32", status: "solved" },
  { task: "∫ x·sin(x) dx", type: "Матанализ", date: "Сегодня, 13:10", status: "solved" },
  { task: "Площадь треугольника: a=3, b=4, c=5", type: "Геометрия", date: "Вчера, 18:45", status: "solved" },
  { task: "lim x→∞ (x² - 1) / (2x² + 3)", type: "Матанализ", date: "Вчера, 16:20", status: "solved" },
];

const stats = [
  { label: "Решено задач", value: "24", icon: "CheckCircle" },
  { label: "Тем изучено", value: "6", icon: "BookOpen" },
  { label: "Дней подряд", value: "3", icon: "Flame" },
];

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-10">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Профиль
        </p>
        <h2 className="text-2xl font-light text-foreground">Личный кабинет</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          {/* User card */}
          <div className="border border-border rounded-lg p-5">
            <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mb-4">
              <span className="text-background font-medium text-lg">А</span>
            </div>
            <p className="font-medium text-foreground mb-0.5">Пользователь</p>
            <p className="text-xs text-muted-foreground">user@example.com</p>
            <div className="mt-4 pt-4 border-t border-border">
              <button className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                <Icon name="Settings" size={12} />
                Настройки аккаунта
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3">
                  <Icon name={s.icon} size={15} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                <span className="font-mono font-medium text-sm text-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              История решений
            </p>
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Очистить
            </button>
          </div>
          <div className="border border-border rounded-lg divide-y divide-border overflow-hidden">
            {history.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between px-5 py-4 hover:bg-secondary/30 transition-colors cursor-pointer group"
              >
                <div className="flex-1 min-w-0 mr-4">
                  <p className="font-mono text-xs text-foreground mb-1 truncate">{item.task}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                </div>
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 border border-dashed border-border rounded-lg p-6 text-center">
            <Icon name="Lock" size={20} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground mb-1">Войдите для сохранения</p>
            <p className="text-xs text-muted-foreground mb-4">Ваша история сохраняется на устройстве. Авторизуйтесь для синхронизации.</p>
            <button className="bg-foreground text-background text-xs font-medium px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
              Войти / Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
