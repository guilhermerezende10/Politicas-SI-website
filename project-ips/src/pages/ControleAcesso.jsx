import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function ControleAcesso() {
  return (
    <div>
      <Title>Controle de Acesso</Title>
      <Img path="https://www.controlid.com.br/blog/wp-content/uploads/2024/10/controle_de_acesso_riscos-1000x415.jpg" />
      <Text>
        <ShowMore maxLength={699}>
          O Controle de Acesso é amplamente reconhecido como um dos pilares da
          segurança da informação. Ele tem como principal função garantir que
          apenas usuários ou sistemas devidamente autorizados possam acessar
          informações, recursos e serviços de uma organização. Atuando como uma
          barreira protetora, impede acessos não autorizados, reduz a
          probabilidade de vazamentos de dados e dificulta a manipulação
          indevida de informações críticas. Em um mundo cada vez mais digital,
          onde redes, dispositivos e sistemas estão interligados, torna-se
          indispensável adotar práticas robustas de controle de acesso para
          assegurar a confidencialidade, a integridade e a disponibilidade dos
          ativos informacionais. Na prática, o controle de acesso pode ser
          entendido como o conjunto de políticas, procedimentos e mecanismos
          técnicos que estabelecem quem pode acessar um recurso, quando, de que
          forma e sob quais condições. Ele regula o fluxo de informações dentro
          de sistemas corporativos e delimita fronteiras que protegem dados
          sensíveis contra usos indevidos. Os objetivos são claros: permitir que
          apenas pessoas ou sistemas autorizados interajam com recursos
          críticos, reduzir os riscos de ataques tanto internos quanto externos,
          garantir rastreabilidade por meio de registros de auditoria e
          assegurar a conformidade com normas legais e regulatórias, como a
          LGPD, a ISO/IEC 27001 e o GDPR.
        </ShowMore>
      </Text>
      <Text>
        Existem diferentes modelos de controle de acesso, cada um com
        finalidades e aplicações específicas. O controle de acesso pode ser
        físico, aplicado em espaços restritos de uma organização; lógico,
        voltado para sistemas digitais; baseado em função (RBAC), que concede
        permissões de acordo com os papéis ocupados pelos usuários; baseado em
        atributos (ABAC), que leva em consideração variáveis contextuais;
        discricionário (DAC), em que o dono da informação define quem terá
        acesso; ou ainda obrigatório (MAC), geralmente utilizado em ambientes de
        alta segurança, onde regras rígidas determinam quem pode acessar
        determinados recursos.
      </Text>
      <Img path="https://www.jcseg.com.br/wp-content/uploads/2025/02/Controle-de-acesso-para-condominios-em-Sorocaba.webp" />
      <Text>
        Os sistemas de controle de acesso são estruturados em quatro componentes
        fundamentais. O primeiro é a identificação, em que o usuário declara sua
        identidade. O segundo é a autenticação, que confirma se essa identidade
        é legítima, utilizando senhas, biometria ou certificados digitais. Em
        seguida, ocorre a autorização, que define quais ações o usuário pode
        realizar dentro do sistema. Por fim, há a auditoria e o monitoramento,
        responsáveis por registrar as atividades realizadas e permitir
        rastreabilidade, fator essencial para investigações e conformidade.
      </Text>
      <Text>
        Boas práticas são indispensáveis para a eficácia de qualquer política de
        controle de acesso. Entre elas estão a aplicação do princípio do menor
        privilégio, garantindo que cada usuário possua apenas o acesso
        necessário para desempenhar suas funções; a utilização de autenticação
        multifator (MFA), que adiciona camadas extras de proteção; a revisão
        periódica dos acessos concedidos; a exigência de senhas fortes; a
        segmentação de redes e sistemas críticos; e o monitoramento contínuo,
        com registros atualizados de todas as atividades de usuários.
      </Text>
      <Img path="https://padraosp.com.br/wp-content/uploads/2021/12/controle-de-acesso.jpg" />
      <Text>
        Esse tema também é amplamente orientado por normas e referenciais
        internacionais que fornecem diretrizes reconhecidas para a segurança da
        informação. Entre os principais estão a ISO/IEC 27001 e 27002, que
        detalham boas práticas e controles de segurança; a publicação NIST SP
        800-53, que oferece orientações específicas para ambientes de tecnologia
        da informação; além das regulamentações nacionais, como a LGPD no
        Brasil, que reforçam a importância da conformidade legal e da proteção
        de dados pessoais.
      </Text>
      <Text>
        Quando bem implementado, o controle de acesso traz benefícios
        significativos para as organizações. Ele reduz os riscos de vazamentos
        de dados e ataques internos, protege informações estratégicas de alto
        valor, garante maior rastreabilidade e transparência nas operações e
        reforça o cumprimento das exigências legais. Além disso, contribui para
        evitar perdas financeiras e danos à reputação, assegurando que a empresa
        seja percebida como confiável por clientes, parceiros e órgãos
        reguladores.
      </Text>
    </div>
  );
}

export default ControleAcesso;
