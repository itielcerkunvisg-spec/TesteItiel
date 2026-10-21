# Partida de um agente em nuvem (reinício semanal)

Aprovado pelo Itiel em 21/10/2026 (teste com a sessão "Outros"). A sessão nova é criada no
mesmo ambiente e repositório, com uma mensagem curta que diz qual agente ela é, o ID da
sessão anterior e que este arquivo deve ser seguido. O papel de cada agente está no
`CLAUDE.md` (seção "Agentes em nuvem").

## Quem é o Itiel

Itiel Cerkunvis Gonçalves: consultor (ICG Industrial Solutions), ex-VP de Manutenção e
Obras da Inpasa. Mora em Dourados/MS, fuso America/Campo_Grande (UTC-4); use esse fuso em
todo horário. É da CCB: com irmãos da igreja, "A paz de Deus" quando ele inicia, "Amém" se o
irmão já deu a paz, e "Deus abençoe" no lugar de "obrigado". Lê tudo no celular: resultado
primeiro, curto, uma linha por item, uma pergunta no fim.

## Passos da sessão nova (nesta ordem, sem enviar nada a terceiros)

1. **Nome.** Confira o título com `get_session` (sem ID). Se não for o do agente, ajuste com
   `set_session_title`.
2. **Regras do Mac.** Pela ponte do Michel (ferramenta `Shell` do servidor
   `Michel_Ponte_Claude`, que roda no Mac mini do Itiel), leia
   `~/.claude/CLAUDE.md` e `~/.claude/projects/-Users-itielgoncalves/memory/agentes-papeis.md`.
   As outras memórias ficam na mesma pasta; leia só as que o seu assunto pedir (o índice é
   `MEMORY.md`, por exemplo `whatsapp-leitura-envio.md` e `email-icloud-mcp.md`).
3. **Passagem de bastão.** Pela ponte, leia
   `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Cerebro_Michel/_Claude/Agentes/estado/nuvem-<agente>.md`
   (`<agente>` = whatsapp, email, inpasa ou outros). Se não existir ou estiver velha (mais de
   2 dias), recupere pelo histórico da sessão anterior: `list_events` com o ID dela,
   `kinds: ["user","assistant"]`, só as últimas ~60 mensagens. Grave o arquivo no formato abaixo.
4. **Registro.** Pela ponte, troque em `agentes-papeis.md` (tabela "Agentes em nuvem") o
   sessionId do seu agente pelo seu e anote "(desde DD/MM/AAAA, reinício semanal)".
5. **Pronto.** Responda em até 6 linhas: título, sessionId novo, nº de pendências carregadas
   (as 3 mais urgentes, uma por linha), o que não deu certo.

## Como alcançar as ferramentas

- **No Mac mini, pela ponte do Michel:** WhatsApp do 7524 (ponte local, porta 8080), avisos
  ao Itiel pelo +595 (`~/whatsapp-avisos/avisar.sh`), e-mail iCloud e Gmail Inpasa
  (`icloud-email`), Obsidian, ponte dos agentes P00–P06 e imagens pelo Codex
  (`~/bin/gerar_imagem.sh`). Os comandos estão no `~/.claude/CLAUDE.md` e nas memórias.
- **Direto daqui:** Gmail pessoal, Google Agenda e ClickUp (conectores).
- **Parceiras em nuvem:** ache pelo título com `list_sessions` e fale com `send_message`.
- **Agentes do Mac (P00–P06):** pela ponte, `python3 ~/claude-evolucao/ponte-agentes/ponte.py escrever p0N nuvem-<agente> "texto que se baste sozinho"`.

## Passagem de bastão (quando pedirem, e antes de cada reinício)

Grave `estado/nuvem-<agente>.md` pela ponte, neste formato:

```
# Passagem de bastão — nuvem <agente> (DD/MM/AAAA HH:MM)
## Pendências abertas
- o quê | com quem | prazo | onde está o material | atividade do ClickUp
## Envios aprovados e ainda não feitos
- destino | cópias | assunto | texto exato | quando o Itiel aprovou
## Combinados recentes e regras novas do Itiel
- (o que ainda não está na memória do Mac; grave lá também)
```
