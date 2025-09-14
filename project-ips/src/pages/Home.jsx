import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function Home() {
  return (
    <div>
      <Title>O que é?</Title>

      <Img path="https://www.actwork.com.br/wp-content/uploads/shutterstock_738059353.jpg" />
      <Text>
        1. Introdução As Políticas de Segurança da Informação (PSI) são
        diretrizes formais que definem como uma organização protege seus dados,
        sistemas e recursos tecnológicos. Elas garantem que informações críticas
        permaneçam seguras contra acessos não autorizados, alterações indevidas
        ou perda de dados, fortalecendo a confiança de clientes, colaboradores e
        parceiros.
      </Text>

      <Text>
        2. Conceito e Objetivos Uma PSI estabelece princípios, responsabilidades
        e procedimentos para assegurar confidencialidade, integridade e
        disponibilidade da informação. Seus principais objetivos incluem
        proteger ativos de informação, reduzir riscos de incidentes de
        segurança, assegurar continuidade operacional e garantir conformidade
        com normas legais e regulatórias, como LGPD e ISO/IEC 27001.
      </Text>

      <Text>
        3. Princípios Fundamentais As políticas seguem a tríade CIA:
        Confidencialidade (acesso restrito a usuários autorizados), Integridade
        (informações precisas e consistentes) e Disponibilidade (informações
        acessíveis quando necessárias). Adicionalmente, podem incluir
        Autenticidade (garantia de identidade de usuários e sistemas) e
        Conformidade Legal.
      </Text>

      <Text>
        4. Escopo e Abrangência As PSI definem quem e o que está sujeito a elas,
        incluindo colaboradores internos, sistemas corporativos, dispositivos,
        redes e terceiros que processam dados. Atribuem níveis de acesso e
        restrições conforme funções ou responsabilidades.
      </Text>

      <Text>
        5. Exemplos de Políticas Comuns Controle de Acesso: permissões baseadas
        em função, senhas fortes, autenticação multifator e registro de acessos.
        Uso Aceitável de Recursos: regras para dispositivos, e-mails, internet e
        sistemas corporativos. Backup e Recuperação: procedimentos para cópia
        regular de dados e testes periódicos de recuperação.
      </Text>

      <Text>
        6. Benefícios Implementar PSI reduz riscos e vulnerabilidades, protege a
        reputação da organização, assegura conformidade legal, fortalece a
        confiança de clientes e parceiros e melhora a gestão de ativos de
        informação.
      </Text>

      <Text>
        7. Conclusão Políticas de Segurança da Informação fornecem um guia claro
        para proteger dados e sistemas críticos, estabelecer responsabilidades e
        reduzir riscos. Uma PSI bem estruturada demonstra o compromisso da
        organização com segurança e privacidade, promovendo um ambiente digital
        confiável e seguro.
      </Text>
    </div>
  );
}

export default Home;
