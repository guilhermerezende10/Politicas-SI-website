import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";
import ShowMore from "../ui/ShowMore";

function Home() {
  return (
    <div>
      <Title>O que é?</Title>

      <Img path="https://www.totvs.com/wp-content/uploads/2022/10/politica-de-seguranca-da-informacao.jpg" />
      <Text>
        <ShowMore maxLength={706}>
          A segurança da informação tornou-se um dos pilares mais importantes
          para a sobrevivência e o crescimento das organizações modernas. As
          chamadas Políticas de Segurança da Informação (PSI) são documentos
          formais que definem, de maneira clara e objetiva, como uma empresa
          deve proteger seus dados, sistemas e recursos tecnológicos. Mais do
          que apenas um conjunto de regras, elas representam um compromisso
          institucional com a preservação da integridade dos ativos digitais.
          Quando bem aplicadas, essas políticas garantem que informações
          críticas estejam protegidas contra acessos indevidos, alterações não
          autorizadas ou mesmo perdas acidentais, fortalecendo a confiança de
          clientes, colaboradores e parceiros de negócios. O conceito de uma PSI
          está diretamente ligado à criação de princípios, responsabilidades e
          procedimentos que assegurem três pontos centrais: confidencialidade,
          integridade e disponibilidade da informação. Além de definir quem pode
          acessar o quê, essas políticas têm como objetivo proteger ativos de
          informação da empresa, reduzir riscos de incidentes de segurança,
          assegurar a continuidade das operações em momentos críticos e garantir
          conformidade com normas legais e regulatórias, como a Lei Geral de
          Proteção de Dados (LGPD) no Brasil e a norma internacional ISO/IEC
          27001. Em um mercado cada vez mais competitivo, o alinhamento com
          essas diretrizes torna-se não apenas uma necessidade, mas também um
          diferencial estratégico.
        </ShowMore>
      </Text>

      <Text>
        Entre os princípios fundamentais que norteiam as PSI, destaca-se a
        chamada tríade CIA: Confidencialidade, que assegura que apenas pessoas
        autorizadas tenham acesso às informações; Integridade, que garante que
        os dados permaneçam consistentes, exatos e não sejam alterados de forma
        imprópria; e Disponibilidade, que garante que as informações estejam
        acessíveis sempre que necessário. Algumas organizações ainda expandem
        essa base para incluir valores adicionais, como Autenticidade — que
        assegura a identidade de usuários e sistemas envolvidos nas operações —
        e Conformidade Legal, essencial para respeitar legislações específicas
        do setor em que a empresa atua.
      </Text>
      <Img path="https://gaea.com.br/wp-content/uploads/2017/02/66572-entenda-o-que-e-a-politica-de-seguranca-da-informacao.jpg" />

      <Text>
        O escopo e a abrangência dessas políticas também merecem destaque. Elas
        definem não apenas quem deve segui-las, mas também quais áreas e
        recursos estão sob sua responsabilidade. Isso inclui desde colaboradores
        internos até parceiros terceirizados, fornecedores de tecnologia,
        sistemas corporativos, dispositivos móveis e redes utilizadas para
        processar informações. Outro ponto fundamental é a atribuição de
        diferentes níveis de acesso conforme as funções desempenhadas dentro da
        empresa, reduzindo a possibilidade de exposição desnecessária de dados
        sensíveis.
      </Text>

      <Text>
        Na prática, as organizações costumam adotar políticas específicas para
        diferentes áreas de risco. O Controle de Acesso, por exemplo, estabelece
        regras como permissões baseadas em funções, exigência de senhas fortes,
        autenticação multifator e registro de acessos. Já a política de Uso
        Aceitável de Recursos define como colaboradores podem utilizar
        dispositivos corporativos, e-mails, internet e outros sistemas internos.
        Outro exemplo comum é a política de Backup e Recuperação, que descreve
        como devem ser realizadas as cópias regulares de dados e os testes
        periódicos de restauração, garantindo que informações possam ser
        recuperadas em caso de falhas ou ataques cibernéticos.
      </Text>
      <Img path="https://acervonet.com.br/wp-content/uploads/2021/02/politica-de-seguranca-da-informacao.png" />

      <Text>
        Os benefícios da implementação de uma PSI são amplos e perceptíveis a
        curto, médio e longo prazo. Entre eles estão a redução significativa de
        riscos e vulnerabilidades, a proteção da reputação da organização, o
        cumprimento de legislações em vigor, o fortalecimento da confiança junto
        a clientes e parceiros e uma melhor gestão dos ativos de informação.
        Além disso, uma política bem estruturada favorece a criação de uma
        cultura organizacional voltada à segurança, envolvendo todos os níveis
        hierárquicos e promovendo maior consciência sobre boas práticas no uso
        da tecnologia.
      </Text>

      <Text>
        Em conclusão, as Políticas de Segurança da Informação não devem ser
        vistas como burocracia, mas como um guia essencial para a proteção de
        dados e sistemas críticos. Elas ajudam a estabelecer responsabilidades
        claras, reduzir riscos e reforçar o compromisso de uma organização com a
        segurança e a privacidade. Em um cenário em que ameaças digitais se
        tornam cada vez mais sofisticadas, investir em uma PSI bem planejada é
        investir na confiança e na sustentabilidade do ambiente digital em que
        empresas, colaboradores e clientes convivem diariamente.
      </Text>
    </div>
  );
}

export default Home;
