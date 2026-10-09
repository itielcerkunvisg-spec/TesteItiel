# Identidade visual — New Derm

Clínica de estética/dermatologia em Dourados (MS). Referência para qualquer peça
(tabelas de preço, folders, posts, stories).

## Tom
Feminino, acolhedor e delicado — "autocuidado", não "clínica médica fria".
Premium e elegante: o dourado e o vinho dão o ar sofisticado; o rosa dá o acolhimento.

## Paleta
| Papel | Cor | Hex |
|---|---|---|
| Fundo | Rosa blush claro, com manchas de aquarela rosa nos cantos | `#FBE9EA` (gradiente até `#F9E2E5`) |
| Títulos e preços em destaque | Vinho / framboesa | `#9C2F4F` |
| Logo, divisores, bordas finas | Dourado envelhecido | `#B8864A` (claro `#D8B67E`) |
| Ícones, acentos, selos | Rosa médio | `#E59AAE` (claro `#F4C6D1`) |
| Texto corrido | Vinho acinzentado | `#5E3A45` / `#7A4656` |
| Cards | Branco translúcido (~55%) com borda dourada fina e cantos bem arredondados | — |

## Tipografia
- **Serifa clássica** (títulos, preços): Playfair Display 600/700.
- **Script manuscrita** (frases de efeito, "Combos", "Epilação com"): Great Vibes.
- **Serifa leve** (texto de apoio, itens): Cormorant Garamond 500/600.
- Usar sempre algarismos alinhados (`font-variant-numeric: lining-nums`) — Playfair/Cormorant têm números "old-style" por padrão.

## Elementos gráficos
- Logo "New Derm" manuscrito dourado com borboleta-coração → `logo-newderm-dourado.png`
  (recortado do folder; se tiver o arquivo original, substituir).
- Borboletas rosa, flores de cerejeira com galhos, coraçõezinhos dourados como divisores,
  linhas douradas finas, brilhos (estrelinhas) discretos, moldura dourada dupla arredondada.
- Laço rosa em campanhas de Outubro Rosa.

## Contato (usar nas peças)
- WhatsApp: (67) 99968-0240
- Instagram: @clinica.newderm
- Endereço: Av. Presidente Vargas, 1695 · Medical Center Dourados, sala 912

## Padrões de preço
- Pacotes de 10 sessões exibidos como parcelas.
- Preços em valores redondos (sem centavos), ex.: `10x R$ 80`.
- Em promoções: preço normal sem risco e "Outubro Rosa"/promo em destaque; selo grande com o % OFF no topo.
- Legibilidade: nenhum texto abaixo de ~26px numa arte de 1080px de largura (rodapé incluso); valor final em destaque (maior, negrito, com fundo rosa).

## Nome do procedimento
- Usar **"Laser (fotodepilação)"** — não "Luz Intensa Pulsada".

## Modelo pronto
- **Versão aprovada pela Paula (Outubro Rosa 2026):** `modelo-tabela/tabela-final-aprovada.html` → `tabela-newderm-outubro-rosa-final.png`.
`modelo-tabela/tabela.html` (opção A), `opcao_b.html` (faixa vinho + cards) e `opcao_c.html` (selo circular + cupons) — Story 1080×1920, fontes locais em `modelo-tabela/fonts/`).
Para exportar PNG em 2x: `cd modelo-tabela && npm i playwright-core && node render.js saida.png [arquivo.html]`
(usa o Google Chrome instalado; ou defina `CHROME_PATH`).

## Comunicação e psicologia de venda (padrão das peças promocionais)
- Hierarquia: 1º o desconto (% OFF), 2º o preço final, 3º a chamada para ação. O resto apoia.
- Ancoragem: preço normal ("de 10x R$ X") ao lado do preço promocional, **sem risco** (preferência da Paula).
- Ganho concreto: mostrar "economize R$ X" (total do pacote), que pesa mais que só a %.
- Gancho de entrada: "a partir de 10x R$ 56" logo abaixo do título.
- Urgência verdadeira: prazo real da campanha (ex.: "Só até 31 de outubro"). Nunca inventar escassez ("últimas vagas") nem prova social sem dados.
- Destaque de decisão: selo dourado "★ Maior economia" no combo completo, que guia para o ticket maior.
- Chamada para ação clara: bloco vinho com QR code do WhatsApp (wa.me/5567999680240) + telefone grande.
- Tom emocional ligado à campanha (Outubro Rosa = autocuidado), sem perder a delicadeza da marca.
