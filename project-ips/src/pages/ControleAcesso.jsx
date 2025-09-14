import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function ControleAcesso() {
  return (
    <div>
      <Title>Controle de Acesso</Title>{" "}
      <Img path="https://www.actwork.com.br/wp-content/uploads/shutterstock_738059353.jpg" />
      <Text>
        1. Introdução O Controle de Acesso é um dos pilares da segurança da
        informação, garantindo que apenas usuários ou sistemas autorizados
        possam acessar informações, recursos ou serviços dentro de uma
        organização. Ele atua como uma barreira protetora, prevenindo acessos
        não autorizados, vazamentos de dados e manipulação indevida de
        informações críticas. Em um mundo cada vez mais digital, onde sistemas,
        redes e dispositivos estão interconectados, o controle de acesso é
        essencial para manter a confidencialidade, integridade e disponibilidade
        dos ativos de informação.
      </Text>
      <Text>
        2. Conceito Controle de acesso é o conjunto de políticas, procedimentos
        e mecanismos técnicos que determinam quem pode acessar um recurso,
        quando, como e sob quais condições. Ele regula o fluxo de informações
        dentro de sistemas e estabelece limites para proteger dados sensíveis.
        Os objetivos principais incluem garantir que apenas pessoas ou sistemas
        autorizados possam acessar recursos críticos, minimizar riscos de
        ataques internos e externos, garantir rastreabilidade e auditoria dos
        acessos, e assegurar conformidade com normas legais e regulamentares
        (LGPD, ISO 27001, GDPR).
      </Text>
      <Text>
        3. Tipos de Controle de Acesso O controle de acesso pode ser físico,
        lógico, baseado em função (RBAC), baseado em atributos (ABAC),
        discricionário (DAC) ou obrigatório (MAC). Cada tipo define como e quem
        pode acessar recursos, desde entradas físicas em áreas restritas até
        permissões detalhadas em sistemas digitais.
      </Text>
      <Text>
        4. Componentes de um Sistema de Controle de Acesso Os sistemas de
        controle de acesso possuem quatro componentes principais: identificação
        (declaração da identidade), autenticação (confirmação da identidade),
        autorização (definição de permissões) e auditoria/monitoramento
        (registro e rastreabilidade das ações dos usuários).
      </Text>
      <Text>
        5. Boas Práticas Entre as melhores práticas destacam-se: aplicar o
        princípio do menor privilégio, utilizar autenticação multifator (MFA),
        revisar periodicamente acessos, adotar senhas fortes, segmentar redes e
        sistemas críticos, e manter registro e monitoramento contínuo dos
        acessos.
      </Text>
      <Text>
        6. Normas e Referências O controle de acesso segue padrões
        internacionais como ISO/IEC 27001 e 27002, NIST SP 800-53, e
        regulamentações nacionais como a LGPD, garantindo que a organização
        adote boas práticas e esteja em conformidade legal.
      </Text>
      <Text>
        7. Benefícios Um controle de acesso eficiente reduz riscos de vazamentos
        e ataques internos, protege informações estratégicas, aumenta
        rastreabilidade e transparência, assegura conformidade legal e minimiza
        perdas financeiras e de reputação.
      </Text>
      <Text>
        8. Conclusão O Controle de Acesso é essencial para a segurança da
        informação, garantindo que apenas usuários autorizados interajam com
        sistemas e dados. Políticas claras, tecnologias de autenticação e
        monitoramento contínuo criam um ambiente seguro e confiável para
        colaboradores, parceiros e clientes.
      </Text>
      <Img path="https://www.actwork.com.br/wp-content/uploads/shutterstock_738059353.jpg" />
    </div>
  );
}

export default ControleAcesso;
