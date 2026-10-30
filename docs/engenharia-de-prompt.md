# Registro de uso de IA no projeto

Este registro descreve solicitações reais desta conversa e as decisões técnicas adotadas. O projeto continua em HTML, CSS e JavaScript; não foi gerado um aplicativo React ou Vue.

## Solicitação inicial

> “esse é um repositorio de um projeto meu da faculdade, baixe ela para que possamos modificar o codigo, vou anexar um arquivo de como sera fieta a avaliao do projeto, para que voce altere ele muito bem”

A primeira versão revisada corrigiu links de navegação, menu móvel, pedido com `localStorage`, formulário e foco. A solicitação era ampla: ela não especificava o vídeo definitivo nem quais técnicas das aulas posteriores seriam demonstradas.

## Solicitação reforçada

> “coloque esse video na aba de historia, para servir como ‘um pouquinho da nossa história’, e aplique o conteudo que esta em todos esses pdfs”

Para implementar essa solicitação no projeto existente, usei a seguinte especificação técnica:

> Integre o vídeo fornecido à seção História com controles, `preload="metadata"`, poster, fontes MP4 e WebM, texto de contexto e crédito. Preserve a simulação de pedido e sua persistência. Use o grid responsivo e um modal do Bootstrap 5.3 com o bundle JavaScript. Inclua um SVG informativo com `<title>`. Crie uma avaliação de 1 a 5 estrelas em HTML, CSS e JavaScript puro, com controles nativos de rádio, rótulos, navegação por teclado e persistência local. Mantenha os caminhos relativos para GitHub Pages. Teste em navegador, em telas grande e pequena, com teclado e auditoria de acessibilidade.

## Comparação e revisão crítica

| Aspecto | Após a solicitação inicial | Após a solicitação reforçada |
| --- | --- | --- |
| Vídeo | Apresentação simples feita das fotografias do cardápio | Teaser fornecido pelo usuário, colocado na História, com dois formatos e crédito |
| Componentes | CSS próprio, pedido e formulário | Grid e modal Bootstrap; avaliação por estrelas com controles nativos |
| Gráficos | Fotografias raster | SVG informativo com título acessível; Canvas não se justifica para um ícone estático |
| Publicação | Caminhos relativos | Fluxo de GitHub Pages preparado para a subpasta do site |

Os trechos das apostilas são modelos de estudo, não código copiado para a entrega. Esta comparação registra duas solicitações reais e as versões correspondentes; não representa dois resultados independentes gerados a partir de um mesmo prompt para o componente de estrelas. Se a atividade da Aula 13 exigir esse experimento específico, ele precisa ser executado e descrito no PR da aula.
