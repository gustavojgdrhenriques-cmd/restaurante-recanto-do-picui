# Auditoria de acessibilidade

## Lighthouse

Auditoria local em Chrome, categoria **Accessibility**, com Lighthouse CLI e configuração padrão de dispositivo móvel, em 30/10/2026:

| Versão | Origem auditada | Pontuação |
| --- | --- | ---: |
| Base do repositório (`origin/main`, commit `21c00d2`) | servidor HTTP local | 100/100 |
| Versão revisada nesta branch | servidor HTTP local | 100/100 |

Não houve aumento numérico: a versão de origem já alcançava 100 na parte que o Lighthouse verifica automaticamente. Esse resultado não prova ausência de barreiras para todos os usuários. A versão revisada também passou por uma análise automatizada Axe com regras WCAG 2 A/AA e 2.1 A/AA sem violações detectadas, além dos testes funcionais em desktop e celular.

## Problemas reais corrigidos no fluxo

1. Os links do menu apontavam para `#` e não levavam à seção escolhida. Agora têm destinos reais, melhorando a navegação por teclado e a orientação na página.
2. O botão de menu alterava uma classe sem estilo correspondente em tela pequena. Agora abre e fecha a navegação visível, anuncia `aria-expanded` e aceita Escape.
3. As ações “Pedir” eram links sem destino, dependentes de `preventDefault()`. Agora são botões semânticos, acionáveis com Enter e Espaço.
4. O pedido salvo não era exibido, e o usuário dependia de `alert()` para saber o resultado. Agora a lista, o total e uma região de status informam as mudanças.
5. O projeto não oferecia um link para pular a navegação repetida. Ele agora aparece ao receber foco.
6. O foco nos links do menu não tinha estado visual próprio. A folha de estilos agora mostra um contorno visível em todos os controles via `:focus-visible`.

Essas correções estão comentadas nos arquivos HTML, CSS e JavaScript. Uma verificação com leitor de tela real e uma revisão humana do texto alternativo e da leitura do vídeo continuam recomendadas para a entrega da Aula 14.
