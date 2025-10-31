# 📊 Guia Interativo Pipedrive

Um manual interativo passo a passo para criar negociações no Pipedrive, desenvolvido com HTML, CSS e JavaScript puro (sem dependências externas).

## 🎯 Funcionalidades

### Navegação
- ✅ **Stepper de progresso** visual (1/7, 2/7, etc.)
- ✅ **Navegação por teclado** (← → para navegar, Z para resetar zoom, A para toggle anotações)
- ✅ **Sumário lateral** com links rápidos para todas as etapas
- ✅ **Botões Próximo/Anterior** intuitivos
- ✅ **Persistência** do progresso em localStorage

### Imagem e Anotações
- ✅ **Hotspots numerados** com tooltips informativos
- ✅ **Modo Zoom** 1.8x com clique na imagem
- ✅ **Pan/Arrastar** quando em zoom (mouse e touch)
- ✅ **Indicador de zoom** em tempo real
- ✅ **Toggle de anotações** (mostrar/ocultar hotspots)

### Design e Acessibilidade
- ✅ **Design responsivo** mobile-first
- ✅ **Dark mode** automático (via prefers-color-scheme)
- ✅ **Alto contraste** e foco visível
- ✅ **ARIA labels** e roles adequados
- ✅ **Navegação por teclado** completa (tab, enter, setas)
- ✅ **Tooltips com aria-describedby**

### UI/UX
- ✅ **Animações suaves** (fade-in, pulse)
- ✅ **Callouts** com ícones (ℹ️ info, ⚠️ warning, ✅ success)
- ✅ **BEM naming** no CSS
- ✅ **CSS Variables** para fácil customização
- ✅ **Sticky header** com stepper sempre visível

## 📁 Estrutura do Projeto

```
pipetutorial/
├── index.html          # Estrutura principal do manual
├── styles.css          # Estilos, grid, animações e dark mode
├── script.js           # Lógica de navegação, zoom e interações
├── README.md           # Esta documentação
├── LICENSE             # Licença do projeto
└── *.png               # Imagens das 7 etapas do tutorial
```

## 🚀 Como Usar

1. **Abrir o Manual**
   - Abra o arquivo `index.html` em qualquer navegador moderno
   - Ou sirva com um servidor local (ex: `python -m http.server` ou Live Server do VS Code)

2. **Navegar pelas Etapas**
   - Use os botões **Próximo** / **Anterior**
   - Clique nos números do **stepper** (1-7) no topo
   - Use as **setas do teclado** (← →)
   - Clique no **sumário lateral** para ir direto a uma etapa

3. **Interagir com as Imagens**
   - **Passe o mouse** sobre os números para ver tooltips
   - **Clique na imagem** para dar zoom (1.8x)
   - **Arraste** para mover a imagem quando em zoom
   - **Clique em "Resetar Zoom"** ou pressione **Z** para voltar ao normal

4. **Controles Adicionais**
   - **Mostrar/Ocultar Anotações**: Toggle dos hotspots
   - Pressione **A** para alternar rapidamente

## ⌨️ Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `←` | Etapa anterior |
| `→` | Próxima etapa |
| `Z` | Resetar zoom |
| `A` | Toggle anotações |
| `Tab` | Navegar entre elementos interativos |

## 📱 Responsividade

O manual foi desenvolvido com abordagem **mobile-first** e funciona perfeitamente em:

- 📱 **Mobile** (360px+): Layout em coluna única, stepper compacto
- 📱 **Tablet** (768px+): Layout adaptado
- 💻 **Desktop** (1024px+): Layout completo com sidebar fixa

## 🎨 Personalização

### Cores (CSS Variables)

Edite as variáveis em `styles.css`:

```css
:root {
    --primary: #0d6efd;      /* Cor principal */
    --accent: #20c997;       /* Cor de destaque */
    --warning: #ffc107;      /* Avisos */
    --danger: #dc3545;       /* Alertas */
    --success: #28a745;      /* Sucesso */
}
```

### Adicionar Nova Etapa

No arquivo `script.js`, adicione um novo objeto ao array `steps[]`:

```javascript
{
    id: 8,
    title: "Nova Etapa",
    image: "nova-imagem.png",
    alt: "Descrição da imagem",
    objective: "Objetivo desta etapa",
    bullets: [
        "Primeira ação",
        "Segunda ação"
    ],
    hotspots: [
        { x: 50, y: 50, title: "Hotspot", text: "Descrição" }
    ],
    callouts: [
        {
            type: "info",
            icon: "ℹ️",
            title: "Dica",
            text: "Informação adicional"
        }
    ]
}
```

## 🎓 Conteúdo das Etapas

1. **Tela inicial** - Onde criar uma nova negociação
2. **Formulário Add Deal** - Visão geral dos campos
3. **Add Deal Exemplo** - Referência de preenchimento
4. **Adicionar Organização** - Onde clicar
5. **Organização Exemplo** - Exemplo preenchido
6. **Adicionar Pessoa** - Onde clicar
7. **Pessoa Exemplo** - Exemplo preenchido

## 🔒 Privacidade

- ✅ Nenhum dado é enviado para servidores externos
- ✅ Progresso salvo apenas no localStorage do navegador
- ✅ Sem cookies ou tracking
- ✅ Sem dependências externas (CDNs, bibliotecas)

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Grid, Flexbox, Animations, Variables
- **JavaScript ES6+** - Classes, Arrow Functions, Template Literals
- **localStorage API** - Persistência de dados

## 📊 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Licença

Consulte o arquivo `LICENSE` para detalhes.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido com foco em:
- Acessibilidade (WCAG 2.1)
- Performance
- Manutenibilidade
- Experiência do usuário

---

**Dica**: Para melhor experiência, use o manual em tela cheia (F11) e aproveite todos os recursos interativos! 🚀

