# cadastro-inteligente
TechConnect - Sistema de Cadastro Inteligente

O TechConnect é uma interface de cadastro moderna e responsiva, desenvolvida com foco em Experiência do Usuário (UX) e segurança de dados no front-end. O projeto simula um ambiente real de autenticação com validações dinâmicas, indicadores de força de senha e feedback visual de carregamento.
Funcionalidades Principais
Validação em Tempo Real: Os campos são validados individualmente via evento blur ou durante a digitação (input), garantindo que o usuário corrija erros antes de tentar o envio.
barra de Força de Senha: Um indicador visual de 4 níveis (Fraca, Razoável, Boa, Forte) que analisa requisitos como: mínimo de 8 caracteres, letras maiúsculas, números e caracteres especiais.
Mensagens de Erro Detalhadas: O sistema aponta exatamente o que falta na senha (ex: "Falta: 1 maiúscula, 1 número") em vez de apenas dizer que está incorreta.
Confirmação de Senha: Comparação lógica instantânea para garantir a paridade entre os campos de senha.
Simulação de API (Loading): Ao clicar em Login com os dados válidos, o botão entra em estado de loading com um spinner CSS, simulando uma requisição de rede de 2 segundos.
Design Glassmorphism: Interface inspirada no iOS 19, utilizando efeitos de desfoque de fundo (backdrop-filter), gradientes suaves e bordas dinâmicas para estados de erro (vermelho) e sucesso (verde).

Tecnologias Utilizadas

HTML5: Estrutura semântica dos formulários e acessibilidade.

CSS3: Estilização avançada, animações de transição, Media Queries para responsividade e efeitos de vidro.

JavaScript (Vanilla): Lógica de validação pura, manipulação do DOM e simulação de estados assíncronos via setTimeout.

Responsividade

O projeto foi testado e otimizado para dispositivos móveis utilizando o DevTools, garantindo que o formulário se adapte perfeitamente a telas de smartphones e tablets, mantendo a legibilidade e facilidade de clique nos botões.
