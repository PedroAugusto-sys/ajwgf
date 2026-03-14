# AJ Dragon Previewer

Cópia fiel do gerador [AJ Dragon Previewer](https://perchance.org/ajpw-dragon-previewer) do Perchance para pré-visualizar dragões do Animal Jam Play Wild.

## Funcionalidade

- **Mesmos endpoints**: todas as imagens são carregadas de `https://user-uploads.perchance.org/file/...` (mesma API do original).
- **Mesmas opções**: forma dos olhos, cauda, padrão do corpo, asas, crinas, chifres, cores primária/secundária/terciária e dos olhos, cílios.
- **Mesma lógica de camadas**: empilhamento de sprites com filtros de cor (main/secondary/tertiary e tema dos olhos), conforme o gerador Perchance.

## Como usar

**Importante:** Para as imagens e cores carregarem (evitar bloqueio por `file://`), use um servidor local:

```bash
npx serve
# ou
python -m http.server 8080
```

Depois abra no navegador: **http://localhost:3000** (ou **http://localhost:8080** no caso do Python).

1. Ajuste os selects e o checkbox de cílios; o preview atualiza na hora.
2. Use **Sortear aleatório** para uma combinação aleatória.

## Deploy no Netlify

1. Acesse [Netlify](https://app.netlify.com) e faça login.
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Conecte o repositório **PedroAugusto-sys/ajwgf**.
4. O Netlify detecta o `netlify.toml`: **Publish directory** = `.`, **Build command** em branco.
5. Clique em **Deploy site**. O site ficará em `https://seu-site.netlify.app`.

Não é necessário configurar variáveis de ambiente; o projeto é estático (HTML + JS).

## Estrutura

- `index.html` — página e lógica do preview (selects, empilhamento, filtros CSS).
- `data.js` — dados (layers, URLs, opções, filtros de cor).
- `netlify.toml` — configuração de deploy no Netlify.
