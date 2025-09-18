import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";

function BackupRecuperacao() {
  return (
    <>
      <Title>Backup e Recuperação</Title>
      <Img path="https://addee.com.br/wp-content/uploads/2021/06/topo-julho-bkp-recuperacao.jpg" />
      <Text>
        Backup e Recuperação de Desastres, conhecidos pela sigla BRD, são hoje
        considerados elementos indispensáveis dentro da segurança da informação.
        À medida que o mundo se torna cada vez mais digital, com empresas e
        indivíduos totalmente dependentes de sistemas computacionais, os dados
        passam a ser vistos como um ativo estratégico tão valioso quanto
        equipamentos ou infraestrutura física. No entanto, esses mesmos dados
        estão constantemente expostos a riscos que vão desde falhas de hardware
        e erros humanos até ataques cibernéticos sofisticados ou mesmo desastres
        naturais. Quando não existem estratégias bem definidas de backup e
        recuperação, qualquer perda de informação pode se transformar em um
        grande problema, resultando em paralisações operacionais, prejuízos
        financeiros significativos e danos duradouros à imagem e à reputação de
        uma organização.
      </Text>

      <Text>
        O conceito de backup está diretamente ligado à ideia de preservação.
        Trata-se do processo de copiar informações e sistemas para um local
        seguro, de forma que possam ser recuperados em caso de imprevistos. Já a
        recuperação de desastres, conhecida como Disaster Recovery, vai além:
        envolve um conjunto de políticas, procedimentos e tecnologias voltados
        para garantir a continuidade dos negócios diante de uma ocorrência
        grave. O objetivo central desse processo é simples, mas poderoso:
        proteger dados essenciais, assegurar que a empresa não interrompa suas
        operações, reduzir os impactos financeiros de falhas e manter
        conformidade com normas e regulamentações que regem o setor da
        informação.
      </Text>
      <Img path="https://techcd.com.br/wp-content/uploads/2021/08/estrategia-backup.jpg" />

      <Text>
        Ao falar sobre backup, é importante destacar que existem diferentes
        abordagens, cada uma com suas vantagens e limitações. O backup completo,
        por exemplo, copia todos os dados existentes e facilita o processo de
        restauração, mas exige maior tempo de execução e mais espaço de
        armazenamento. Já o backup incremental realiza apenas cópias dos
        arquivos alterados desde o último backup, tornando o processo mais
        rápido e econômico, embora sua restauração seja mais trabalhosa. O
        backup diferencial surge como uma solução intermediária: ele copia as
        modificações feitas desde a última cópia completa, proporcionando
        equilíbrio entre rapidez e facilidade de restauração. Há ainda o backup
        contínuo, que funciona quase em tempo real, registrando imediatamente
        qualquer alteração nos dados e garantindo que a perda de informações
        seja mínima em caso de incidentes.
      </Text>

      <Text>
        Outro ponto essencial é o local onde os backups são armazenados. Eles
        podem ser mantidos em servidores locais, dentro da própria organização,
        o que facilita o acesso rápido às informações. Também podem ser
        realizados de forma remota, em datacenters externos que asseguram
        proteção contra desastres físicos, como incêndios ou enchentes. Nos
        últimos anos, muitos especialistas passaram a adotar modelos híbridos,
        que combinam o armazenamento local e remoto, garantindo assim maior
        redundância e segurança dos dados. Essa diversidade de opções permite
        que cada empresa escolha a estratégia que melhor se adapta à sua
        realidade e ao nível de criticidade das informações que possui.
      </Text>
      <Img path="https://www.valuehost.com.br/blog/wp-content/uploads/2018/07/218770-backup-e-restauracao-o-que-e-e-qual-a-importancia.png" />

      <Text>
        A recuperação de desastres, por sua vez, exige planejamento minucioso.
        Não basta ter os backups armazenados, é fundamental que existam planos
        formais, conhecidos como Disaster Recovery Plans (DRP), que estabeleçam
        passo a passo o que deve ser feito em situações de crise. Esses planos
        costumam incluir testes periódicos para garantir que os dados possam ser
        restaurados corretamente, além da definição de dois indicadores
        críticos: o RPO (Recovery Point Objective), que determina a quantidade
        máxima de dados que pode ser perdida em caso de falha, e o RTO (Recovery
        Time Objective), que define quanto tempo a organização pode ficar fora
        do ar antes de retomar suas atividades. Quando bem estruturadas, essas
        medidas fazem toda a diferença na velocidade e eficiência da resposta
        diante de uma emergência.
      </Text>

      <Text>
        Entre as boas práticas recomendadas no universo do backup e recuperação
        de desastres, algumas se destacam pela relevância. É essencial realizar
        cópias de segurança de forma regular e, de preferência, automatizada,
        evitando falhas humanas no processo. Também é altamente recomendado
        distribuir os backups em diferentes locais geográficos, protegendo os
        dados contra catástrofes localizadas. A criptografia deve ser utilizada
        sempre, garantindo que as informações não sejam acessadas indevidamente
        caso os arquivos de backup sejam interceptados. Além disso,
        procedimentos documentados, equipes bem treinadas e o monitoramento
        constante da integridade das cópias são pontos-chave para manter o
        processo confiável e eficiente.
      </Text>
    </>
  );
}

export default BackupRecuperacao;
