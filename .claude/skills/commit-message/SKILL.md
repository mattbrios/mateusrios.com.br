---
name: commit-message
description: Gera uma mensagem de commit em português a partir das mudanças ainda não commitadas na branch atual
---

Analise as mudanças feitas no código que ainda não tiveram commit executado na branch atual (staged e unstaged) e gere uma mensagem de commit.

Passos:

1. Rode: `git status` para ver os arquivos alterados/novos/removidos
2. Rode: `git diff` para ver as mudanças unstaged
3. Rode: `git diff --staged` para ver as mudanças já staged
4. Se nenhum dos comandos acima mostrar diferenças, avise que não há mudanças pendentes de commit e pare por aqui

Analise o diff completo para entender o que foi adicionado, alterado ou removido, e por quê (quando isso for evidente pelo próprio código).

Gere um texto corrido (não em bullet points, não em markdown), em português, explicando de forma resumida tudo o que foi alterado. Regras para o texto:

- Não utilize aspas simples (')
- Máximo de 1000 caracteres, preferencialmente entre 200 e 1000 (pode passar de 1000 apenas se for estritamente necessário para não omitir uma mudança relevante)
- Foque no que mudou e, quando possível, no porquê

Não crie o commit nem faça stage de arquivos — apenas gere o texto da mensagem, pronto para eu copiar e usar no commit.
