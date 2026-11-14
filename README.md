# FABÊ Bordados & Brilhos — Página de links para o Instagram

Página estática independente, com a logomarca oficial da FABÊ, paleta original, botões em estilo resort e **animação suave** (entrada gradual, flutuação discreta da marca, luz e ondas delicadas). Sem frameworks, sem banco e sem coleta de dados.

## Links

Editar somente `config.js`:

- `site` — URL oficial: `https://fabebrilhosebordados.com.br`.
- `instagram` — Instagram: `https://www.instagram.com/fabe_bordados/`.
- `whatsapp` — **vazio até Fabiane confirmar o número oficial**. Quando confirmado, informar `55` + DDD + número, apenas dígitos. Até lá, personalização, suporte e ícone de WhatsApp são mostrados como *em breve*, sem enviar para números de terceiros.

**Atenção:** confirme que a URL do site publicada já atende clientes antes de colocar a bio no Instagram.

## Identidade
- `assets/logo-fabe.jpg` é a logomarca oficial (preservada).
- `assets/favicon.png` é uma miniatura da marca.
- Cores: rosa tropical `#C81050`, coral `#F05259`, rosa delicado `#F7B6BE`, dourado `#D4AF37`, turquesa `#00A7A7`, off-white `#F9F1E7`.
- Animações CSS respeitam `prefers-reduced-motion`, preferência de acessibilidade do dispositivo.

## Publicar pelo GitHub (modo teste)
1. Crie o repositório `fabe-links-bio` no GitHub.
2. Envie os arquivos da pasta **dentro da raiz** do repositório: `index.html`, `style.css`, `config.js`, `main.js`, `.nojekyll` e pasta `assets/`.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Após a publicação, abra o link informado pelo GitHub Pages para testar no celular.

⚠️ **Nota de uso:** GitHub Pages tem restrições para sites usados principalmente para negócios e transações comerciais. Este projeto pode ser experimentado como prévia, mas para uso comercial contínuo prefira GitHub para repositório + Cloudflare Pages para hospedagem estática, sem precisar mudar o código.

## Testar localmente
```bash
python -m http.server 8000
```
Abra `http://localhost:8000`.

## Segurança
Não envie credenciais, senhas ou chaves privadas ao repositório. O `config.js` é público. Esta página não recebe pagamentos; o botão principal encaminha para a loja externa.
