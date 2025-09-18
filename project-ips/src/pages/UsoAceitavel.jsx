import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function UsoAceitavel() {
  return (
    <>
      <Title>Uso Aceitável</Title>{" "}
      <Img path="https://wehandle.com.br/hubfs/Imported_Blog_Media/213815-seguranca-da-informacao-principais-erros-cometidos-por-profissionais-de-ti.jpg" />
      <Text>
        <ShowMore maxLength={699}>
          O Uso Aceitável de Recursos, conhecido pela sigla UAR, é uma política
          de extrema importância dentro de qualquer organização moderna.
          Trata-se de um conjunto de orientações que define como colaboradores
          devem utilizar sistemas, dispositivos, redes e informações
          corporativas. A ideia é simples, mas poderosa: garantir que os
          recursos tecnológicos disponíveis sejam utilizados de maneira
          responsável, ética e segura. Com a transformação digital cada vez mais
          presente em empresas de todos os setores, cresce também a necessidade
          de regras claras para evitar abusos, acessos não autorizados,
          vazamentos de dados e atitudes que possam comprometer a reputação ou
          até a própria continuidade operacional da instituição. Na prática, o
          conceito de Uso Aceitável de Recursos se traduz em um guia de conduta
          que delimita responsabilidades e limitações no uso das tecnologias
          corporativas. Essas diretrizes deixam explícito quais recursos podem
          ser utilizados, quais comportamentos são permitidos ou proibidos, além
          dos procedimentos a serem seguidos em casos de incidentes ou
          violações. O objetivo vai muito além da simples restrição: trata-se de
          proteger informações sensíveis, reduzir riscos de ataques
          cibernéticos, assegurar o cumprimento de leis e normas vigentes e, ao
          mesmo tempo, promover produtividade e alinhamento com a cultura
          organizacional da empresa.
        </ShowMore>
      </Text>
      <Text>
        Uma política de UAR bem estruturada geralmente contempla diversos
        componentes. Entre eles está o controle de acesso a sistemas e redes,
        que define quem pode acessar determinados recursos e sob quais
        permissões. Também aparecem regras específicas para o uso de e-mails e
        outros meios de comunicação corporativa, reforçando que devem ser
        destinados apenas a fins profissionais. O uso da internet e o download
        de softwares não confiáveis é outro ponto sensível, assim como o
        gerenciamento de dispositivos corporativos e o chamado BYOD (“Bring Your
        Own Device”), que exige regulamentação quando equipamentos pessoais
        acessam sistemas da empresa. Além disso, há aspectos cruciais
        relacionados à segurança da informação, como armazenamento seguro, uso
        de backups e práticas adequadas de senhas, somados ao monitoramento e
        auditoria, que permitem acompanhar a conformidade dos colaboradores e
        identificar incidentes em tempo hábil.
      </Text>
      <Img path="https://phoenixnap.com/glossary/wp-content/uploads/2024/06/what-is-acceptable-use-policy.jpg" />
      <Text>
        Entre as boas práticas recomendadas para que a política de UAR seja
        eficaz, destacam-se a educação contínua dos colaboradores sobre
        segurança digital e a aplicação do princípio do menor privilégio,
        garantindo que cada usuário só tenha acesso ao estritamente necessário
        para exercer suas funções. Também é essencial proibir a instalação de
        softwares não autorizados, incentivar a proteção de dados sensíveis com
        o uso de senhas fortes e autenticação multifator, além de estimular o
        relato imediato de qualquer incidente suspeito. Outro ponto fundamental
        é a atualização periódica da política, de modo que ela acompanhe a
        rápida evolução tecnológica e os novos desafios que surgem no cenário da
        cibersegurança.
      </Text>
      <Text>
        Para reforçar sua credibilidade e aplicabilidade, uma política de Uso
        Aceitável de Recursos deve estar alinhada a normas e padrões amplamente
        reconhecidos. Entre os principais estão a ISO/IEC 27001 e 27002, que
        tratam de controles de segurança e gestão de acessos; o NIST
        Cybersecurity Framework, que fornece diretrizes específicas de segurança
        da informação; e a Lei Geral de Proteção de Dados (LGPD), no caso
        brasileiro, que regulamenta a forma como informações pessoais devem ser
        tratadas. Além desses referenciais externos, cada organização também
        pode integrar a política a seus códigos de conduta internos e demais
        políticas corporativas já existentes.
      </Text>
      <Img path="https://sinfopac.com/images/5-melhores-plataformas-conscientizacao-ciberseguranca.png" />
      <Text>
        Os benefícios da implementação de uma política de Uso Aceitável de
        Recursos vão muito além da prevenção de falhas técnicas. Com regras
        claras, a organização consegue reduzir incidentes de segurança,
        minimizar o risco de vazamentos de dados e proteger informações
        confidenciais de alto valor. Além disso, promove um ambiente de trabalho
        mais produtivo, já que delimita usos adequados da tecnologia, e assegura
        conformidade com normas legais. Outro impacto positivo é a criação de
        uma cultura de responsabilidade digital, em que cada colaborador entende
        seu papel na preservação da segurança e da ética no uso dos recursos da
        empresa.
      </Text>
      <Text>
        Em síntese, o Uso Aceitável de Recursos não é apenas uma recomendação,
        mas sim um elemento essencial para o bom funcionamento e a proteção de
        qualquer ambiente corporativo. Ao orientar os colaboradores sobre
        comportamentos esperados e práticas adequadas, essas políticas oferecem
        segurança, reduzem riscos e reforçam a credibilidade da organização
        diante de clientes e parceiros. Quando integradas a outras políticas de
        segurança da informação, fortalecem ainda mais a defesa digital da
        empresa, criando uma estrutura sólida contra ameaças e promovendo um uso
        consciente e responsável da tecnologia.
      </Text>
    </>
  );
}

export default UsoAceitavel;
