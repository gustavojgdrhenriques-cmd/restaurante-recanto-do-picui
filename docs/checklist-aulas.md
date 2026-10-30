# Situação diante do guia de avaliação por pares

Este quadro separa critérios verificáveis no código dos que exigem um Pull Request, a publicação ou testes no endereço público. “Pronto localmente” significa que o recurso foi implementado e testado no navegador; não atribui nota à atividade.

| Aula | Evidência local | Dependência da entrega |
| --- | --- | --- |
| 1 — Git/GitHub | Repositório público, README, `.gitignore`, branch e commit descritivo. | Abrir o PR da aula a partir da branch exigida. |
| 2 — Web | `DOCTYPE`, `html`, `head`, `body`, `charset`, `viewport`; página sem erro no console local. | Registrar a verificação no PR. |
| 3 — HTML semântico | `header`, `nav`, `main`, `section`, `article`, `footer`; campos com `label`, `for/id` e `required`. | Revisão por pares. |
| 4 — Multimídia | Vídeo na História com MP4/WebM, `controls` e `preload="metadata"`. | Confirmar autorização de republicação do teaser antes do deploy público. |
| 5 — Gráficos | SVG informativo com `<title>`; escolha de SVG justificada no README. | Revisão por pares. |
| 6 — CSS base | Arquivos CSS externos, `box-sizing: border-box`, sem `!important`. | Revisão por pares. |
| 7 — Flexbox/Grid | Cabeçalho e cards com Flexbox; grade responsiva Bootstrap; teste em 390, 760, 768, 1024 e 1365 px. | Revisão por pares. |
| 8 — Navegação | Menu grande e pequeno, âncoras válidas, estados `:hover` e `:focus-visible`, teste com teclado. | Revisão por pares. |
| 9 — Botões/formulários | Ação primária e secundária distintas, foco visível, validação nativa preservada. | Revisão por pares. |
| 10 — JavaScript | Total calculado em função, `const`/`let` com nomes descritivos, execução sem erro no console local. | Dados específicos da atividade da aula, se diferentes do projeto. |
| 11 — DOM/armazenamento | `defer`, pedido e nota persistidos, delegação de eventos, `textContent` para dados digitados. | PR na branch `feature/dom-interatividade`, se esta for a entrega da Aula 11. |
| 12 — Bootstrap | Bundle local, modal funcional, colunas com breakpoints, pedido anterior preservado, sem `!important`. | PR na branch `feature/bootstrap-integracao`, se esta for a entrega da Aula 12. |
| 13 — Prompt/IA | Registro de duas solicitações reais e comparação das versões; estrelas em stack vanilla e operáveis por teclado. | A rubrica pede dois resultados independentes para o mesmo componente no PR `feature/componente-ia`; esse experimento não foi apresentado como concluído. |
| 14 — Acessibilidade | Lighthouse local 100/100 antes e depois; seis correções registradas; Axe sem violações detectadas; foco e semântica testados. | PR da aula em `feature/acessibilidade` com a auditoria documentada. |
| 15 — Deploy | Workflow Pages preparado para a subpasta; teste local em subcaminho sem 404; caminhos relativos. | Ativar Pages, publicar `main`, verificar URL, HTTPS e todas as funções no site público; então documentar o link funcional. |

Os requisitos de branch pertencem a entregas de aulas diferentes. Uma única branch de revisão geral não substitui esses PRs individuais. As pontuações e observações acima refletem testes locais, não uma avaliação oficial do professor ou de colegas.
