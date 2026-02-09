# Como Usar o Suplemento de Follow-Up de Email

## Visão Geral

Este suplemento imita a funcionalidade de follow-up (acompanhamento) que existe no Microsoft Outlook quando conectado a servidores Exchange ou POP, tornando-a disponível também para contas IMAP.

## Funcionalidades Principais

### ✓ Marcar Email como Concluído
Depois de tratar a ação relacionada com um email, você pode:
1. Clicar no sinalizador junto ao email (na coluna "Follow Up")
2. Selecionar "Marcar como Concluído"
3. O sinalizador muda de cor/estado para indicar que a tarefa foi feita
4. No Outlook moderno, aparece um check verde (✓)

### ✓ Email Permanece na Caixa de Entrada
- O email **não** é movido ou apagado
- O email continua visível na sua caixa de entrada
- Apenas o estado do sinalizador muda

### ✓ Tarefa Removida da Lista de Pendências
- A tarefa associada ao email desaparece da lista de tarefas pendentes
- Você pode ver todas as tarefas concluídas filtrando pela categoria "Follow Up - Completed"

## Como Usar

### Método 1: Usando o Painel de Tarefas

1. **Abrir um email** que deseja gerenciar
2. **Clicar no botão "Open Follow-Up"** na faixa de opções (ribbon) do Outlook
3. O painel lateral abre mostrando:
   - Assunto do email
   - Remetente do email
   - Estado atual do sinalizador

#### Estados Possíveis:

**📭 Sem Sinalizador**
- Email não tem follow-up ativo
- Botão disponível: "Set Follow-Up Flag"

**🚩 Pendente de Follow-Up**
- Email está sinalizado para acompanhamento
- Fundo amarelo/dourado
- Botões disponíveis: 
  - "Mark as Completed" (Marcar como Concluído)
  - "Clear Flag" (Limpar Sinalizador)

**✓ Tarefa Concluída**
- Follow-up foi marcado como concluído
- Fundo verde
- Check verde visível
- Botão disponível: "Clear Flag"

### Método 2: Usando o Botão da Faixa de Opções

1. **Abrir um email** sinalizado
2. **Clicar no botão "Mark Completed"** diretamente na faixa de opções
3. O email é imediatamente marcado como concluído
4. Uma notificação confirma a ação

## Operações Disponíveis

### Definir Sinalizador de Follow-Up
1. Abra o painel de tarefas
2. Clique em "Set Follow-Up Flag"
3. O email fica marcado com 🚩 (sinalizador vermelho)
4. Email aparece na sua lista de tarefas pendentes

### Marcar como Concluído
1. Com um email sinalizado aberto
2. Clique em "Mark as Completed"
3. O sinalizador muda para ✓ (check verde)
4. Email permanece na caixa de entrada
5. Tarefa desaparece da lista de pendências

### Limpar Sinalizador
1. Com um email sinalizado ou concluído
2. Clique em "Clear Flag"
3. Todos os sinalizadores são removidos
4. Email volta ao estado normal (sem follow-up)

## Compatibilidade

### Tipos de Conta Suportados
- ✓ **IMAP** - Funcionalidade completa
- ✓ **POP3** - Funcionalidade completa  
- ✓ **Exchange** - Funcionalidade completa
- ✓ **Office 365** - Funcionalidade completa

### Plataformas Suportadas
- ✓ **Outlook Desktop (Windows)** - Completo
- ✓ **Outlook Desktop (Mac)** - Completo
- ✓ **Outlook na Web** - Completo
- ~ **Outlook Mobile (iOS/Android)** - Limitado

## Vantagens para Contas IMAP

Contas IMAP tradicionalmente não têm acesso total às funcionalidades de follow-up do Outlook que estão disponíveis em Exchange ou POP. Este suplemento resolve essa limitação:

1. **Sincronização Local**: O estado do follow-up é armazenado nas propriedades personalizadas do email
2. **Categorias Visuais**: Utiliza categorias do Outlook para indicação visual
3. **Integração com Tarefas**: Emails sinalizados aparecem na lista de tarefas do Outlook

## Categorias Utilizadas

O suplemento usa categorias do Outlook para organização visual:

- **"Follow Up"**: Email está aguardando follow-up
- **"Follow Up - Completed"**: Follow-up foi concluído

Você pode filtrar ou buscar emails por estas categorias no Outlook.

## Dicas de Uso

1. **Workflow Recomendado**:
   - Leia o email
   - Se precisa de ação futura: Defina sinalizador de follow-up
   - Quando completar a ação: Marque como concluído
   - Email fica na inbox com check verde ✓

2. **Organização**:
   - Use filtros por categoria para ver apenas emails pendentes ou concluídos
   - Emails concluídos permanecem na inbox mas saem da lista de tarefas

3. **Produtividade**:
   - Use o botão rápido na faixa de opções para marcar rapidamente como concluído
   - Não precisa abrir o painel de tarefas toda vez

## Resolução de Problemas

### O suplemento não aparece
- Verifique se está instalado corretamente
- Tente reiniciar o Outlook
- Confirme que tem um email aberto

### As mudanças não persistem
- Verifique se tem permissão de escrita no email
- Confirme que o tipo de conta suporta propriedades personalizadas
- Tente novamente

### Categorias não aparecem
- Certifique-se de que o Outlook tem suporte a categorias habilitado
- Verifique o tipo de conta
- Atualize a visualização do Outlook

## Suporte

Para problemas ou sugestões, visite:
https://github.com/edgarmirandasilva/outlookaddincheck

## Autor
Edgar Miranda Silva
