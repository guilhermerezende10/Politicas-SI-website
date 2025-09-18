import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function SegurancaFisicaAmbiental() {
  return (
    <>
      <Title>Segurança Física e Ambiental</Title>
      <Img path="https://blog-pt.lac.tdsynnex.com/hubfs/Blog%20-%20TD%20SYNNEX%20BR/2023/Blogposts%20atualizados/qual-a-diferenca-entre-seguranca-fisica-e-seguranca-logica.webp" />
      <Text>
        <ShowMore maxLength={699}>
          A Segurança Física e Ambiental, conhecida pela sigla SFA, é um dos
          pilares fundamentais da segurança da informação. Esse conjunto de
          práticas está voltado para a proteção de ativos físicos e do próprio
          ambiente onde a organização opera. Não se trata apenas de cuidar de
          prédios, salas ou equipamentos, mas de adotar medidas que previnam
          acessos não autorizados, reduzam danos causados por acidentes e
          protejam contra desastres naturais. Em um cenário onde a digitalização
          e a dependência de infraestrutura tecnológica crescem rapidamente,
          falhas nessa esfera podem resultar em interrupções de serviço, perdas
          financeiras relevantes, danos à reputação da empresa e riscos à
          integridade de informações críticas. O conceito de Segurança Física e
          Ambiental pode ser entendido como o conjunto de políticas,
          procedimentos e controles criados para proteger o patrimônio físico e
          o ambiente operacional de uma organização. Seus objetivos são claros:
          evitar acessos indevidos a áreas sensíveis, proteger equipamentos e
          dados contra danos ou destruição, reduzir riscos de acidentes e
          ameaças como incêndios ou inundações, além de garantir que as
          operações possam continuar mesmo em situações de emergência. Dessa
          forma, a SFA amplia o escopo da segurança da informação, indo além do
          digital e cuidando também da base física que sustenta todos os
          processos tecnológicos.
        </ShowMore>
      </Text>

      <Text>
        Entre os principais componentes que compõem a Segurança Física e
        Ambiental estão medidas de Controle de Acesso Físico, que envolvem
        portões, portas e barreiras controladas por cartões magnéticos, sistemas
        biométricos ou vigilância, garantindo que apenas pessoas autorizadas
        circulem em áreas restritas. Há também o Monitoramento e a Vigilância,
        realizados por câmeras, sensores de movimento, alarmes e acompanhamento
        em tempo integral. Outro ponto essencial é a Proteção contra Incêndios e
        Acidentes, por meio de sistemas de detecção, sprinklers, rotas de fuga
        devidamente sinalizadas e treinamentos periódicos para evacuação. Já a
        Proteção Ambiental envolve o controle de temperatura, umidade e poeira
        em data centers, o uso de energia redundante e a gestão adequada de
        resíduos. Por fim, a Segurança de Equipamentos e Infraestrutura garante
        que servidores, racks e dispositivos estejam devidamente protegidos com
        fechaduras, manutenções preventivas e práticas que preservem sua
        integridade.
      </Text>

      <Img path="https://www.scati.com/wp-content/uploads/2024/02/10-tendencias-en-seguridad-fisica-scati.jpg" />
      <Text>
        Para que a SFA seja realmente eficiente, é necessário adotar boas
        práticas que fortaleçam o sistema de proteção. Isso inclui a
        implementação de múltiplos níveis de controle de acesso físico, o uso de
        monitoramento contínuo com registro detalhado de eventos e a revisão
        periódica dos planos de contingência. Treinamentos regulares para
        funcionários, inspeções preventivas em equipamentos críticos e a
        integração entre a SFA e as políticas de segurança da informação também
        são passos indispensáveis para uma proteção completa dos ativos da
        empresa.
      </Text>

      <Text>
        Assim como outras políticas corporativas, a Segurança Física e Ambiental
        deve estar alinhada a normas e referências internacionais e nacionais.
        Entre as mais relevantes estão a ISO/IEC 27001 e 27002, que abordam
        controles físicos e ambientais; a NIST SP 800-53, voltada para segurança
        física em tecnologia da informação; além das Normas Regulamentadoras
        (NRs) relacionadas à segurança do trabalho no Brasil. Também se destacam
        boas práticas específicas para gestão de data centers, que exigem níveis
        ainda mais rigorosos de proteção devido à criticidade das informações
        armazenadas nesses ambientes.
      </Text>

      <Img path="https://newlineseguranca.com.br/wp-content/uploads/2025/06/seguranca-eficiente-comeca-com-a-primeira-escolha-certa.jpg" />
      <Text>
        Os benefícios de uma política de SFA bem aplicada são múltiplos e
        abrangentes. Ela reduz significativamente os riscos de acesso não
        autorizado, vandalismo ou furtos, protege equipamentos e dados críticos
        contra danos e assegura que a operação continue mesmo em cenários de
        emergência. Outro ponto essencial é o cumprimento de exigências legais,
        o que evita penalidades, além de criar um ambiente confiável e seguro
        para colaboradores, clientes e parceiros. Em última análise, a SFA
        fortalece a reputação da organização e garante que sua infraestrutura
        esteja preparada para resistir a adversidades.
      </Text>

      <Text>
        Em conclusão, a Segurança Física e Ambiental deve ser vista como um
        elemento estratégico dentro da proteção organizacional. Ela não
        substitui, mas complementa as políticas de segurança da informação,
        criando uma defesa em múltiplas camadas. Ao combinar controles físicos
        rigorosos, monitoramento ambiental eficiente e planos de contingência
        bem estruturados, as empresas conseguem proteger não apenas seus ativos
        digitais, mas também as pessoas e o ambiente que os sustentam. Esse
        conjunto de medidas é essencial para minimizar riscos e assegurar a
        continuidade das operações em qualquer cenário.
      </Text>
    </>
  );
}

export default SegurancaFisicaAmbiental;
