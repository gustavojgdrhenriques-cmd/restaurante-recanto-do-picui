# Recanto do Picuí

Projeto acadêmico de desenvolvimento front-end sobre um cardápio nordestino. O pedido, o formulário e a avaliação são demonstrações locais: não enviam dados ao restaurante nem realizam pagamentos.

**Site publicado:** [Recanto do Picuí no GitHub Pages](https://gustavojgdrhenriques-cmd.github.io/restaurante-recanto-do-picui/).

## Executar

Na raiz do repositório:

```bash
python -m http.server 8000 --directory restaurante-recanto-do-picui
```

Acesse `http://localhost:8000/`. Os arquivos HTML, CSS, JavaScript, vídeo e Bootstrap ficam no repositório; não é necessário instalar pacotes para abrir o site.

## Recursos implementados

- Navegação com âncoras reais e menu móvel; foco visível e link para pular ao conteúdo.
- Cardápio responsivo com grid Bootstrap (`col-12 col-md-6 col-lg-4`).
- Pedido simulado com total, remoção, limpeza e persistência em `localStorage`; migração dos pedidos da primeira versão.
- Modal Bootstrap explicando o pedido, alimentado pelo `bootstrap.bundle.min.js` local.
- História com o teaser enviado pelo aluno, poster, controles, `preload="metadata"` e fontes MP4/WebM. [Vídeo original no YouTube](https://www.youtube.com/watch?v=YCRXQQHf2Kw).
- SVG informativo de sol e prato com `<title>`. SVG foi escolhido por ser um desenho vetorial estático; Canvas seria útil para desenho pixel a pixel ou animação intensiva, que não são necessários aqui.
- Avaliação da apresentação do cardápio por estrelas, com controles nativos de rádio, uso por teclado e nota salva no navegador.
- Formulário de sugestão com campos obrigatórios e rótulos associados; texto digitado é exibido com `textContent` e não é enviado.

Bootstrap 5.3.8 está em `restaurante-recanto-do-picui/vendor/bootstrap/` com sua licença. O CSS do projeto vem depois do Bootstrap e não usa `!important`. O JavaScript usa `defer`, nomes descritivos e delegação de eventos na grade e na lista de pedidos.

## Aulas e evidências

O [checklist detalhado por aula](docs/checklist-aulas.md) mostra o que já foi verificado e o que depende das entregas no GitHub.

Para estudar a implementação, leia o [guia do código linha por linha](docs/guia-completo-do-codigo.md) junto dos arquivos abertos no VS Code.

| Aulas | Aplicação no restaurante |
| --- | --- |
| 1–3 | Git e README; HTML semântico, meta tags e formulário com labels e validação nativa. |
| 4–5 | Vídeo com fontes alternativas, controles e preload; SVG acessível com escolha técnica explicada. |
| 6–9 | CSS externo, `border-box`, Flexbox e grid responsivo, navegação e estados de foco. |
| 10–11 | Lógica de total, DOM, `localStorage`, delegação de eventos e `textContent` para entrada do usuário. |
| 12–13 | Grid e modal Bootstrap preservando o pedido; avaliação por estrelas em JavaScript puro. [Registro de uso de IA](docs/engenharia-de-prompt.md). |
| 14–15 | [Auditoria de acessibilidade](docs/auditoria-acessibilidade.md), correções comentadas no código e fluxo de GitHub Pages em `.github/workflows/pages.yml`. |

## Publicação

O workflow de Pages publica **somente a subpasta** `restaurante-recanto-do-picui/` quando houver push em `main`. A origem em *Settings → Pages → Build and deployment → Source* está definida como **GitHub Actions**. O endereço público acima foi verificado por HTTPS: HTML, CSS, JavaScript, imagem e vídeo carregaram, e as interações principais funcionaram no navegador. Todos os caminhos de `href` e `src` do site são relativos.

O vídeo é um teaser de documentário obtido do YouTube e fornecido para este projeto. O autor do projeto confirmou autorização para republicá-lo; o crédito e o link para o original aparecem junto ao vídeo.

## Revisão

Para reproduzir o comportamento: abra em tela grande e pequena; navegue com Tab, setas, Enter e Espaço; abra e feche o modal; reproduza o vídeo; adicione, remova e limpe pratos; recarregue para verificar a persistência; teste o formulário e a avaliação. A auditoria Lighthouse local ficou em **100/100 antes e depois**; os detalhes e limites do resultado estão no registro de acessibilidade. Os nomes de branch/PR exigidos por aulas específicas ainda precisam ser registrados nas respectivas entregas.
