import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Step {
  num: number;
  title: string;
  formula: string;
  explanation: string;
}

const demoSolutions: Record<string, { answer: string; steps: Step[] }> = {
  default: {
    answer: "x₁ = 0.5,  x₂ = −3",
    steps: [
      {
        num: 1,
        title: "Запись уравнения",
        formula: "2x² + 5x − 3 = 0",
        explanation: "Имеем квадратное уравнение вида ax² + bx + c = 0, где a = 2, b = 5, c = −3.",
      },
      {
        num: 2,
        title: "Вычисление дискриминанта",
        formula: "D = b² − 4ac = 25 + 24 = 49",
        explanation: "Дискриминант D > 0, значит уравнение имеет два различных вещественных корня.",
      },
      {
        num: 3,
        title: "Нахождение корней",
        formula: "x = (−b ± √D) / 2a = (−5 ± 7) / 4",
        explanation: "Применяем формулу корней квадратного уравнения с найденным дискриминантом.",
      },
      {
        num: 4,
        title: "Вычисление значений",
        formula: "x₁ = (−5 + 7) / 4 = 1/2        x₂ = (−5 − 7) / 4 = −3",
        explanation: "Вычисляем каждый корень отдельно, подставляя знаки плюс и минус.",
      },
      {
        num: 5,
        title: "Проверка",
        formula: "2(0.5)² + 5(0.5) − 3 = 0.5 + 2.5 − 3 = 0 ✓",
        explanation: "Подставляем корни в исходное уравнение и убеждаемся, что оба обращают его в верное тождество.",
      },
    ],
  },
};

const quickExamples = [
  "2x² + 5x - 3 = 0",
  "∫ x² dx",
  "sin²x + cos²x",
  "lim x→0 (sin x / x)",
];

export default function SolverPage() {
  const [input, setInput] = useState("");
  const [solved, setSolved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(0);

  const solution = demoSolutions.default;

  const handleSolve = () => {
    if (!input.trim()) return;
    setLoading(true);
    setSolved(false);
    setVisibleSteps(0);

    setTimeout(() => {
      setLoading(false);
      setSolved(true);
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setVisibleSteps(step);
        if (step >= solution.steps.length) clearInterval(interval);
      }, 200);
    }, 900);
  };

  const handleExample = (ex: string) => {
    setInput(ex);
    setSolved(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-8">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Решатель
        </p>
        <h2 className="text-2xl font-light text-foreground">Введите задачу</h2>
      </div>

      {/* Input */}
      <div className="border border-border rounded-lg overflow-hidden mb-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleSolve();
          }}
          placeholder="Например: решить уравнение x² − 5x + 6 = 0 или найти производную sin(x²)..."
          className="w-full p-4 text-sm font-mono bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none min-h-[100px]"
        />
        <div className="border-t border-border px-4 py-3 flex items-center justify-between bg-secondary/30">
          <span className="text-xs text-muted-foreground">Ctrl+Enter для отправки</span>
          <button
            onClick={handleSolve}
            disabled={!input.trim() || loading}
            className="flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            {loading ? (
              <>
                <Icon name="Loader2" size={14} className="animate-spin" />
                Решаю...
              </>
            ) : (
              <>
                <Icon name="ArrowRight" size={14} />
                Решить
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quick examples */}
      <div className="flex flex-wrap gap-2 mb-10">
        {quickExamples.map((ex) => (
          <button
            key={ex}
            onClick={() => handleExample(ex)}
            className="font-mono text-xs border border-border rounded px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            {ex}
          </button>
        ))}
      </div>

      {/* Solution */}
      {solved && (
        <div className="animate-fade-in">
          {/* Answer */}
          <div className="border border-foreground rounded-lg p-5 mb-6 bg-secondary/20">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
              Ответ
            </p>
            <p className="font-mono text-xl font-medium text-foreground">{solution.answer}</p>
          </div>

          {/* Steps */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Пошаговое решение
            </p>
            <div className="space-y-0">
              {solution.steps.map((step, i) => (
                i < visibleSteps && (
                  <div
                    key={step.num}
                    className="step-card pl-5 pb-6 step-enter"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border border-border bg-background flex items-center justify-center shrink-0 -ml-8 mt-0.5">
                        <span className="text-xs font-mono text-muted-foreground">{step.num}</span>
                      </div>
                      <div className="flex-1 pt-0">
                        <p className="text-xs font-medium text-foreground mb-2">{step.title}</p>
                        <div className="bg-secondary rounded-md px-4 py-3 mb-3">
                          <p className="font-mono text-sm text-foreground whitespace-pre-wrap">{step.formula}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.explanation}</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Actions */}
          {visibleSteps >= solution.steps.length && (
            <div className="animate-fade-in flex gap-3 mt-6 pt-6 border-t border-border">
              <button className="flex items-center gap-2 border border-border rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                <Icon name="Copy" size={14} />
                Скопировать решение
              </button>
              <button className="flex items-center gap-2 border border-border rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                <Icon name="Share2" size={14} />
                Поделиться
              </button>
              <button
                onClick={() => { setInput(""); setSolved(false); }}
                className="flex items-center gap-2 border border-border rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-secondary transition-colors ml-auto"
              >
                <Icon name="RotateCcw" size={14} />
                Новая задача
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
