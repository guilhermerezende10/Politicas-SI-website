import Title from "../ui/Title";
import Text from "../ui/Text";
import Img from "../ui/Img";

function BackupRecuperacao() {
  return (
    <>
      <Title>Backup e Recuperação</Title>
      <Img path="https://www.actwork.com.br/wp-content/uploads/shutterstock_738059353.jpg" />
      <Text>
        1. Introdução Backup e Recuperação de Desastres (BRD) são elementos
        cruciais da segurança da informação, garantindo que dados críticos
        possam ser restaurados em caso de falhas, ataques cibernéticos, erros
        humanos ou desastres naturais. A dependência crescente de sistemas
        digitais torna os dados um ativo estratégico. Sem estratégias adequadas
        de backup e recuperação, a perda de informações pode causar interrupções
        operacionais, prejuízos financeiros e danos à reputação.
      </Text>

      <Text>
        2. Conceito Backup é o processo de copiar dados e sistemas para
        armazenamento seguro, permitindo sua restauração futura. Recuperação de
        Desastres (Disaster Recovery, DR) é o conjunto de políticas,
        procedimentos e tecnologias que garantem a continuidade das operações
        após um incidente. Seus objetivos incluem proteger dados críticos,
        garantir continuidade operacional, minimizar impactos financeiros e
        assegurar conformidade com normas e regulamentações.
      </Text>

      <Text>
        3. Tipos de Backup Backup completo: cópia total de todos os dados, fácil
        de restaurar, mas exige mais tempo e espaço. Incremental: copia apenas
        dados modificados desde o último backup, mais rápido e econômico, mas
        restauração mais complexa. Diferencial: copia alterações desde o último
        backup completo, equilibrando velocidade e facilidade de restauração.
        Backup contínuo: atualiza dados em tempo real ou quase em tempo real,
        minimizando perdas em caso de falhas.
      </Text>

      <Text>
        4. Armazenamento de Backup Pode ser local (on-premises), remoto
        (off-site) ou híbrido (combinando local e remoto), garantindo
        redundância e proteção contra desastres físicos.
      </Text>

      <Text>
        5. Estratégias de Recuperação Incluem planos de recuperação detalhados
        (DRP), testes periódicos de restauração, definição de RPO (máximo de
        dados que pode ser perdido) e RTO (tempo máximo aceitável para
        recuperação), assegurando que a organização possa retomar operações
        rapidamente.
      </Text>

      <Text>
        6. Boas Práticas Realizar backups regulares e automatizados, garantir
        redundância geográfica, criptografar dados, documentar procedimentos,
        treinar equipes e monitorar integridade dos backups.
      </Text>

      <Text>
        7. Normas e Referências Seguir normas reconhecidas, como ISO/IEC 27001 e
        27002, NIST SP 800-34, LGPD e ITIL, garantindo que os processos de
        backup e recuperação estejam alinhados às boas práticas e
        regulamentações.
      </Text>

      <Text>
        8. Benefícios Proteção contra perda e corrupção de dados, garantia de
        continuidade operacional, redução de impactos financeiros e
        reputacionais, maior confiança de clientes e parceiros, e cumprimento de
        normas legais e regulatórias.
      </Text>

      <Text>
        9. Conclusão Backup e Recuperação de Desastres são fundamentais para
        organizações que dependem de informações digitais. Estratégias robustas,
        testes regulares e armazenamento seguro garantem que dados críticos
        estejam protegidos e que a operação possa ser retomada rapidamente,
        minimizando riscos e impactos.
      </Text>
    </>
  );
}

export default BackupRecuperacao;
