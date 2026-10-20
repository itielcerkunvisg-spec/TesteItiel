# TesteItiel

Materiais da clínica **New Derm**. Antes de criar qualquer peça visual (tabela de preços,
folder, post, story), leia `identidade-visual/README.md` e siga a paleta, tipografia,
elementos e contatos de lá. Logo em `identidade-visual/logo-newderm-dourado.png`;
modelo de tabela em `identidade-visual/modelo-tabela/`.

## WhatsApp (ponte do Mac Mini, MCP Michel_Ponte_Claude)

- Para saber o que está pendente ou já respondido, use os scripts que leem o banco do
  WhatsApp Desktop: `python3 ~/bin/whatsapp_nao_lidas.py <dias> <msgs>` e
  `python3 ~/bin/whatsapp_desktop_buscar.py <AAAA-MM-DD> <termo...>`.
- Não conclua "sem resposta" pelo banco da ponte (`~/whatsapp-mcp/whatsapp-bridge/store/messages.db`):
  ele não registra o que a própria ponte envia.
- Antes de afirmar que algo está pendente, confira também o log de envios das sessões
  (chat de registro `169874680746137@lid` e `~/whatsapp-mcp/whatsapp-bridge/bridge.log`).
- Siga `~/AGENTS.md` no Mac: só enviar com o "pode enviar" do Itiel.
