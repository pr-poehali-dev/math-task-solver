import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Как правильно вводить задачу?",
    a: "Пишите задачу обычным текстом на русском языке. Например: «решить уравнение x² - 4 = 0» или «найти производную sin(x)». Для формул используйте стандартные обозначения: ^ для степеней, * или · для умножения.",
  },
  {
    q: "Какие типы задач поддерживаются?",
    a: "Решатель работает с алгеброй, геометрией, тригонометрией, математическим анализом (производные, интегралы, пределы), статистикой и дискретной математикой.",
  },
  {
    q: "Как читать пошаговое решение?",
    a: "Каждый шаг содержит: название действия, математическую формулу и текстовое объяснение. Читайте последовательно сверху вниз — решение построено так, чтобы каждый шаг логически следовал из предыдущего.",
  },
  {
    q: "Можно ли скопировать решение?",
    a: "Да, после получения результата нажмите кнопку «Скопировать решение» — в буфер обмена скопируется полный текст с формулами и объяснениями.",
  },
  {
    q: "Что делать если ответ кажется неверным?",
    a: "Попробуйте переформулировать задачу точнее. Укажите конкретный раздел математики или уточните условие. Если проблема повторяется — напишите нам через форму обратной связи.",
  },
];

const shortcuts = [
  { key: "Ctrl + Enter", action: "Отправить задачу" },
  { key: "Ctrl + K", action: "Перейти к решателю" },
  { key: "Esc", action: "Очистить поле ввода" },
];

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-10">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Справка
        </p>
        <h2 className="text-2xl font-light text-foreground">Часто задаваемые вопросы</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="md:col-span-2">
          <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-secondary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{faq.q}</span>
                  <Icon
                    name={open === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="text-muted-foreground shrink-0"
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Shortcuts */}
          <div className="border border-border rounded-lg p-5">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Горячие клавиши
            </p>
            <div className="space-y-3">
              {shortcuts.map((s) => (
                <div key={s.key} className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs bg-secondary rounded px-2 py-1 text-foreground">{s.key}</span>
                  <span className="text-xs text-muted-foreground text-right">{s.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="border border-border rounded-lg p-5">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Обратная связь
            </p>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Нашли ошибку или хотите предложить улучшение?
            </p>
            <button className="w-full border border-border rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors flex items-center justify-center gap-2">
              <Icon name="Mail" size={14} />
              Написать нам
            </button>
          </div>

          {/* Tips */}
          <div className="bg-secondary/50 border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Lightbulb" size={14} className="text-foreground" />
              <p className="text-xs font-medium text-foreground">Совет</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Для лучшего результата формулируйте задачу точно: укажите что найти, а не просто запишите выражение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
