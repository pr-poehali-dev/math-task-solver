"""
Решение математических задач с пошаговым объяснением через OpenAI.
Принимает задачу текстом, возвращает ответ и список шагов решения.
"""
import json
import os
from openai import OpenAI


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    task = body.get("task", "").strip()

    if not task:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Задача не указана"})}

    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

    system_prompt = """Ты — математический решатель. Решай задачи пошагово с объяснением каждого действия.

Отвечай СТРОГО в формате JSON (без markdown, без ```):
{
  "answer": "краткий финальный ответ",
  "steps": [
    {
      "num": 1,
      "title": "Название шага",
      "formula": "математическое выражение или формула",
      "explanation": "подробное объяснение этого шага на русском"
    }
  ]
}

Правила:
- Шагов должно быть от 3 до 7
- Каждый шаг логически вытекает из предыдущего
- Объяснения простым языком, понятным школьнику
- В поле formula используй текстовые обозначения: ^ для степени, sqrt() для корня
- answer — конкретное числовое или символьное значение"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Реши задачу: {task}"},
        ],
        temperature=0.2,
        max_tokens=2000,
    )

    content = response.choices[0].message.content.strip()

    result = json.loads(content)

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps(result, ensure_ascii=False),
    }
