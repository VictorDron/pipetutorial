// =====================================================
// Data: Array de Etapas Completo
// =====================================================
const steps = [
    {
        id: 1,
        title: "Tela inicial – criar nova negociação",
        image: "tela inicial.png",
        alt: "Tela inicial do Pipedrive, pipeline comercial vazio.",
        objective: "Onde iniciar a criação de um novo negócio.",
        bullets: [
            "Clique em + Negócio (ou use o + da coluna) para abrir o formulário de criação",
            "Verifique se você está no pipeline correto (Funil Comercial)",
            "Escolha a coluna apropriada para iniciar o negócio"
        ],
        hotspots: [
            { x: 15, y: 5, title: "Botão + Negócio", text: "Clique aqui para criar uma negociação a partir de qualquer tela" },
            { x: 25, y: 5, title: "Dropdown", text: "Acesso ao dropdown (ex: importar ou outras opções)" },
            { x: 30, y: 35, title: "Botão + na coluna", text: "Alternativa rápida para criar já posicionado na fase" },
            { x: 85, y: 8, title: "Seletor de Pipeline", text: "Confirme que está em 'Funil Comercial'" },
            { x: 50, y: 15, title: "Importar dados", text: "Opção para carregar negócios em lote (não é o fluxo deste tutorial)" }
        ],
        callouts: [
            {
                type: "info",
                icon: "ℹ️",
                title: "Dica",
                text: "O botão + Negócio está disponível em qualquer tela do sistema para facilitar o cadastro rápido."
            }
        ]
    },
    {
        id: 2,
        title: "Formulário Add Deal – visão geral dos campos",
        image: "add deal.png",
        alt: "Formulário vazio de criar negócio no Pipedrive.",
        objective: "Entender todos os campos do formulário de negociação.",
        bullets: [
            "Preencha os campos obrigatórios: Organização, Canal de origem e Event",
            "Informe Título, Valor e Moeda do negócio",
            "Selecione o Proprietário responsável pela negociação",
            "Configure o Funil, Pipeline stage e Office adequados",
            "Adicione informações de contato (Telefone e E-mail) no painel lateral direito"
        ],
        hotspots: [
            { x: 25, y: 15, title: "1. Pessoa de contato", text: "Busque/adicione a pessoa responsável" },
            { x: 25, y: 22, title: "2. Organização ⚠️", text: "OBRIGATÓRIO - Selecione/adicione a empresa" },
            { x: 25, y: 28, title: "3. Título", text: "Nome claro do negócio (ex: 'Absolut Sport – Ativação')" },
            { x: 25, y: 35, title: "4. Valor + Moeda", text: "Defina valor e confirme a moeda" },
            { x: 25, y: 42, title: "5. Funil & Pipeline stage", text: "Mantenha 'Funil Comercial' e fase inicial" },
            { x: 25, y: 48, title: "6. Proprietário", text: "Quem ficará responsável internamente" },
            { x: 25, y: 55, title: "7. Canal de origem ⚠️", text: "OBRIGATÓRIO - Ex: 'Ativação em Evento'" },
            { x: 25, y: 62, title: "8. PROPOSAL NUMBER", text: "Campo interno sequencial (ex: '20250001')" },
            { x: 25, y: 68, title: "9. Tipo de Cliente", text: "B2B ou B2C" },
            { x: 25, y: 75, title: "10. Event ⚠️", text: "OBRIGATÓRIO - Selecione o evento correto" },
            { x: 25, y: 82, title: "11. Data de Pagamento", text: "Formato DD/MM/AAAA" },
            { x: 25, y: 88, title: "12. Office", text: "Marque 'Brazil' ou 'USA'" },
            { x: 25, y: 95, title: "13. Visível para", text: "Defina visibilidade adequada" },
            { x: 75, y: 35, title: "14. Telefone", text: "Informe tipo (Celular/Comercial)" },
            { x: 75, y: 50, title: "15. E-mail", text: "Informe tipo (Comercial, etc.)" }
        ],
        callouts: [
            {
                type: "warning",
                icon: "⚠️",
                title: "Campos Obrigatórios",
                text: "Organização, Canal de origem e Event são obrigatórios para salvar o negócio."
            },
            {
                type: "info",
                icon: "ℹ️",
                title: "Sequência interna",
                text: "PROPOSAL NUMBER segue padrão AAAA+sequencial (ex: 20250001, depois 20250002)."
            }
        ]
    },
    {
        id: 3,
        title: "Add Deal – exemplo preenchido (referência)",
        image: "add deal exemplo feito.png",
        alt: "Formulário de negócio preenchido como exemplo.",
        objective: "Usar este cartão como guia visual para padronização dos cadastros.",
        bullets: [
            "Observe o título claro: 'Absolut Sport'",
            "Valor definido: 5000 com moeda US Dollar (USD)",
            "Canal de origem preenchido: 'Ativação em Evento'",
            "PROPOSAL NUMBER segue o padrão: 20250001",
            "Tipo de Cliente: B2B selecionado",
            "Event: 'FIFA Club World Cup'",
            "Data de Pagamento formatada: 31/10/2025",
            "Office: Brazil selecionado",
            "Telefone e E-mail devidamente preenchidos no painel direito"
        ],
        hotspots: [
            { x: 25, y: 28, title: "Título", text: "Exemplo: 'Absolut Sport'" },
            { x: 25, y: 35, title: "Valor", text: "5000 com moeda US Dollar (USD)" },
            { x: 25, y: 55, title: "Canal de origem", text: "'Ativação em Evento'" },
            { x: 25, y: 62, title: "PROPOSAL NUMBER", text: "20250001 (exemplo do padrão)" },
            { x: 25, y: 68, title: "Tipo de Cliente", text: "B2B" },
            { x: 25, y: 75, title: "Event", text: "'FIFA Club World Cup'" },
            { x: 25, y: 82, title: "Data de Pagamento", text: "31/10/2025" },
            { x: 25, y: 88, title: "Office", text: "Brazil" },
            { x: 75, y: 35, title: "Telefone", text: "Preenchido com tipo" },
            { x: 75, y: 50, title: "E-mail", text: "Preenchido com tipo" }
        ],
        callouts: [
            {
                type: "info",
                icon: "✅",
                title: "Exemplo de preenchimento",
                text: "Use este formulário como referência para manter a padronização em todos os cadastros de negócio."
            }
        ]
    },
    {
        id: 4,
        title: "Adicionar Organização – onde clicar",
        image: "add empresa.png",
        alt: "Tela de 'Contatos > Organizações' com modal 'Adicionar organização' em branco.",
        objective: "Cadastrar a empresa antes ou durante a criação do negócio, se necessário.",
        bullets: [
            "Acesse Contatos > Organizações no menu lateral esquerdo",
            "Clique no botão + Organização para abrir o modal de cadastro",
            "Preencha os campos principais: Nome, Proprietário, Endereço",
            "Adicione Etiquetas para classificar (ex: HOT LEAD, VIP)",
            "Configure o campo 'Visível para' adequadamente"
        ],
        hotspots: [
            { x: 10, y: 20, title: "Menu Contatos", text: "Acesse a seção 'Contatos'" },
            { x: 10, y: 25, title: "Organizações", text: "Clique em 'Organizações'" },
            { x: 85, y: 10, title: "+ Organização", text: "Abre o modal de cadastro" },
            { x: 50, y: 30, title: "Nome", text: "Nome da empresa/organização" },
            { x: 50, y: 45, title: "Proprietário", text: "Responsável pela organização" },
            { x: 50, y: 60, title: "Endereço", text: "Localização da empresa" },
            { x: 50, y: 75, title: "Etiquetas", text: "Classifique a organização" },
            { x: 50, y: 90, title: "Visível para", text: "Controle de acesso" }
        ],
        callouts: [
            {
                type: "info",
                icon: "ℹ️",
                title: "Quando cadastrar",
                text: "Você pode cadastrar a organização antes de criar o negócio ou durante o processo, usando o botão de adicionar no próprio formulário do deal."
            }
        ]
    },
    {
        id: 5,
        title: "Adicionar Organização – exemplo preenchido",
        image: "add empresa exemplo.png",
        alt: "Modal de organização preenchido (ex.: Dron).",
        objective: "Use etiquetas para priorizar leads (ex.: HOT LEAD, VIP, Parceria).",
        bullets: [
            "Nome da organização: 'Dron'",
            "Proprietário: dev@absolut-sport.com.br",
            "Endereço: 'New York, NY, EUA'",
            "Etiqueta HOT LEAD (vermelha) aplicada",
            "Visível para: grupo do proprietário configurado"
        ],
        hotspots: [
            { x: 50, y: 30, title: "Nome", text: "Exemplo: 'Dron'" },
            { x: 50, y: 45, title: "Proprietário", text: "dev@absolut-sport.com.br" },
            { x: 50, y: 60, title: "Endereço", text: "'New York, NY, EUA'" },
            { x: 50, y: 75, title: "Etiqueta", text: "HOT LEAD (vermelha)" },
            { x: 50, y: 90, title: "Visível para", text: "Grupo do proprietário" }
        ],
        callouts: [
            {
                type: "info",
                icon: "🏷️",
                title: "Dica sobre etiquetas",
                text: "Use etiquetas coloridas para priorizar leads: HOT LEAD (urgente), VIP (cliente importante), Parceria (parcerias estratégicas)."
            }
        ]
    },
    {
        id: 6,
        title: "Adicionar Pessoa – onde clicar",
        image: "add pessoas.png",
        alt: "Tela 'Contatos > Pessoas' com modal 'Adicionar pessoa' em branco.",
        objective: "Cadastrar pessoas de contato associadas às organizações.",
        bullets: [
            "Acesse Contatos > Pessoas no menu lateral",
            "Clique no botão + Pessoa para abrir o modal",
            "Vincule a pessoa à Organização correta",
            "Cadastre Telefone com tipo (Comercial/Celular)",
            "Cadastre E-mail com tipo (Comercial, Pessoal, etc.)",
            "Adicione Etiquetas para classificar (ex: CUSTOMER)"
        ],
        hotspots: [
            { x: 10, y: 20, title: "Menu Contatos", text: "Acesse 'Contatos'" },
            { x: 10, y: 25, title: "Pessoas", text: "Clique em 'Pessoas'" },
            { x: 85, y: 10, title: "+ Pessoa", text: "Abre o modal de cadastro" },
            { x: 50, y: 30, title: "Nome", text: "Nome completo da pessoa" },
            { x: 50, y: 40, title: "Organização", text: "Vincule à empresa correta" },
            { x: 50, y: 55, title: "Telefone", text: "Cadastre com tipo (Comercial/Celular)" },
            { x: 50, y: 70, title: "E-mail", text: "Cadastre canais válidos com tipo" },
            { x: 50, y: 85, title: "Etiquetas", text: "Classifique (ex: CUSTOMER)" }
        ],
        callouts: [
            {
                type: "info",
                icon: "📧",
                title: "Observação importante",
                text: "E-mail e telefone facilitam automações e follow-ups no funil de vendas."
            }
        ]
    },
    {
        id: 7,
        title: "Adicionar Pessoa – exemplo preenchido",
        image: "add pessoa exemplo.png",
        alt: "Modal de pessoa preenchido (ex.: organização Dron, telefone/e-mail).",
        objective: "Exemplo completo de cadastro de pessoa vinculada a uma organização.",
        bullets: [
            "Organização vinculada: 'Dron'",
            "Telefone cadastrado com tipo (Comercial/Celular)",
            "E-mail: 'victor.oliveira@abs...' como Comercial",
            "Proprietário: dev@absolut-sport.com.br",
            "Etiqueta CUSTOMER aplicada"
        ],
        hotspots: [
            { x: 50, y: 40, title: "Organização", text: "Vinculado a 'Dron'" },
            { x: 50, y: 55, title: "Telefone", text: "Com tipo Comercial/Celular" },
            { x: 50, y: 70, title: "E-mail", text: "victor.oliveira@abs... (Comercial)" },
            { x: 50, y: 78, title: "Proprietário", text: "dev@absolut-sport.com.br" },
            { x: 50, y: 85, title: "Etiqueta", text: "CUSTOMER" }
        ],
        callouts: [
            {
                type: "info",
                icon: "✅",
                title: "Cadastro completo",
                text: "Com telefone e e-mail cadastrados, você pode usar automações de marketing e acompanhar melhor o relacionamento com o cliente."
            }
        ]
    }
];

// =====================================================
// State Management
// =====================================================
let currentStepIndex = parseInt(localStorage.getItem('pipedriveGuideStep')) || 0;
let showAnnotations = localStorage.getItem('pipedriveGuideAnnotations') !== 'false';
let zoomLevel = 1;
let isPanning = false;
let panStart = { x: 0, y: 0 };
let panOffset = { x: 0, y: 0 };

// =====================================================
// DOM Elements
// =====================================================
const elements = {
    stepNumber: document.getElementById('stepNumber'),
    stepTitle: document.getElementById('stepTitle'),
    stepImage: document.getElementById('stepImage'),
    stepObjective: document.getElementById('stepObjective'),
    stepActions: document.getElementById('stepActions'),
    hotspotsContainer: document.getElementById('hotspotsContainer'),
    calloutsContainer: document.getElementById('calloutsContainer'),
    stepCounter: document.getElementById('stepCounter'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    stepperBullets: document.getElementById('stepperBullets'),
    progressBar: document.getElementById('progressBar'),
    tableOfContents: document.getElementById('tableOfContents'),
    toggleAnnotations: document.getElementById('toggleAnnotations'),
    resetZoom: document.getElementById('resetZoom'),
    imageContainer: document.getElementById('imageContainer'),
    zoomIndicator: document.getElementById('zoomIndicator')
};

// =====================================================
// Initialization
// =====================================================
function init() {
    renderStepper();
    renderTableOfContents();
    renderStep(currentStepIndex);
    setupEventListeners();
    updateAnnotationsButton();
}

// =====================================================
// Render Functions
// =====================================================
function renderStepper() {
    // Render bullets
    elements.stepperBullets.innerHTML = steps.map((step, index) => {
        const status = index < currentStepIndex ? 'completed' : 
                       index === currentStepIndex ? 'active' : '';
        return `
            <button 
                class="stepper__bullet stepper__bullet--${status}" 
                data-step="${index}"
                aria-label="Ir para etapa ${index + 1}: ${step.title}"
                ${index === currentStepIndex ? 'aria-current="step"' : ''}>
                ${index + 1}
            </button>
        `;
    }).join('');
    
    // Update progress bar
    const progress = ((currentStepIndex + 1) / steps.length) * 100;
    elements.progressBar.style.width = `${progress}%`;
}

function renderTableOfContents() {
    elements.tableOfContents.innerHTML = steps.map((step, index) => {
        const activeClass = index === currentStepIndex ? 'sidebar__nav-link--active' : '';
        return `
            <div class="sidebar__nav-item">
                <a href="#" 
                   class="sidebar__nav-link ${activeClass}" 
                   data-step="${index}"
                   aria-current="${index === currentStepIndex ? 'page' : 'false'}">
                    ${index + 1}. ${step.title}
                </a>
            </div>
        `;
    }).join('');
}

function renderStep(index) {
    const step = steps[index];
    
    // Reset zoom
    resetZoomState();
    
    // Update header
    elements.stepNumber.textContent = `Etapa ${index + 1} de ${steps.length}`;
    elements.stepTitle.textContent = step.title;
    
    // Update image
    elements.stepImage.src = step.image;
    elements.stepImage.alt = step.alt;
    
    // Update objective
    elements.stepObjective.innerHTML = `
        <h3>🎯 O que fazer agora</h3>
        <p>${step.objective}</p>
    `;
    
    // Update actions
    elements.stepActions.innerHTML = `
        <h3>📋 Ações</h3>
        <ul>
            ${step.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
    `;
    
    // Render hotspots
    renderHotspots(step.hotspots);
    
    // Render callouts
    renderCallouts(step.callouts);
    
    // Update counter
    elements.stepCounter.textContent = `${index + 1} / ${steps.length}`;
    
    // Update navigation buttons
    elements.prevBtn.disabled = index === 0;
    elements.nextBtn.disabled = index === steps.length - 1;
    
    // Update stepper and TOC
    renderStepper();
    renderTableOfContents();
    
    // Save to localStorage
    localStorage.setItem('pipedriveGuideStep', index);
    
    // Add animation
    document.getElementById('currentStep').classList.remove('fade-in');
    void document.getElementById('currentStep').offsetWidth; // Trigger reflow
    document.getElementById('currentStep').classList.add('fade-in');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHotspots(hotspots) {
    if (!hotspots || hotspots.length === 0) {
        elements.hotspotsContainer.innerHTML = '';
        return;
    }
    
    elements.hotspotsContainer.innerHTML = hotspots.map((hotspot, index) => `
        <div class="hotspot" style="left: ${hotspot.x}%; top: ${hotspot.y}%;">
            <div 
                class="hotspot__badge" 
                tabindex="0"
                role="button"
                aria-label="${hotspot.title}: ${hotspot.text}"
                aria-describedby="tooltip-${index}">
                ${index + 1}
            </div>
            <div class="hotspot__tooltip" id="tooltip-${index}" role="tooltip">
                <strong>${hotspot.title}</strong><br>
                ${hotspot.text}
            </div>
        </div>
    `).join('');
}

function renderCallouts(callouts) {
    if (!callouts || callouts.length === 0) {
        elements.calloutsContainer.innerHTML = '';
        return;
    }
    
    elements.calloutsContainer.innerHTML = callouts.map(callout => `
        <div class="callout callout--${callout.type}" role="${callout.type === 'warning' ? 'alert' : 'note'}">
            <div class="callout__icon" aria-hidden="true">${callout.icon}</div>
            <div class="callout__content">
                <h4>${callout.title}</h4>
                <p>${callout.text}</p>
            </div>
        </div>
    `).join('');
}

// =====================================================
// Navigation Functions
// =====================================================
function goToStep(index) {
    if (index >= 0 && index < steps.length) {
        currentStepIndex = index;
        renderStep(index);
    }
}

function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        goToStep(currentStepIndex + 1);
    }
}

function prevStep() {
    if (currentStepIndex > 0) {
        goToStep(currentStepIndex - 1);
    }
}

// =====================================================
// Zoom Functions
// =====================================================
function handleImageClick(e) {
    if (e.target !== elements.stepImage) return;
    
    if (zoomLevel === 1) {
        zoomIn(e);
    } else {
        resetZoomState();
    }
}

function zoomIn(e) {
    zoomLevel = 1.8;
    elements.stepImage.style.transform = `scale(${zoomLevel})`;
    elements.imageContainer.classList.add('step__image-container--zoomed');
    elements.zoomIndicator.textContent = `${Math.round(zoomLevel * 100)}%`;
    
    // Calculate zoom origin
    const rect = elements.imageContainer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    elements.stepImage.style.transformOrigin = `${x}% ${y}%`;
}

function resetZoomState() {
    zoomLevel = 1;
    panOffset = { x: 0, y: 0 };
    elements.stepImage.style.transform = 'scale(1) translate(0, 0)';
    elements.stepImage.style.transformOrigin = 'center center';
    elements.imageContainer.classList.remove('step__image-container--zoomed');
    elements.zoomIndicator.textContent = '100%';
}

function handlePanStart(e) {
    if (zoomLevel <= 1) return;
    
    isPanning = true;
    panStart = {
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y
    };
    elements.imageContainer.style.cursor = 'grabbing';
}

function handlePanMove(e) {
    if (!isPanning) return;
    
    e.preventDefault();
    panOffset = {
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
    };
    
    elements.stepImage.style.transform = 
        `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`;
}

function handlePanEnd() {
    isPanning = false;
    if (zoomLevel > 1) {
        elements.imageContainer.style.cursor = 'grab';
    }
}

// =====================================================
// Annotations Toggle
// =====================================================
function toggleAnnotations() {
    showAnnotations = !showAnnotations;
    localStorage.setItem('pipedriveGuideAnnotations', showAnnotations);
    updateAnnotationsButton();
    
    if (showAnnotations) {
        elements.hotspotsContainer.classList.remove('hotspots--hidden');
    } else {
        elements.hotspotsContainer.classList.add('hotspots--hidden');
    }
}

function updateAnnotationsButton() {
    const btn = elements.toggleAnnotations;
    btn.textContent = showAnnotations ? '👁️ Ocultar Anotações' : '👁️ Mostrar Anotações';
    btn.setAttribute('aria-pressed', showAnnotations);
    
    if (!showAnnotations) {
        elements.hotspotsContainer.classList.add('hotspots--hidden');
    }
}

// =====================================================
// Event Listeners
// =====================================================
function setupEventListeners() {
    // Navigation buttons
    elements.nextBtn.addEventListener('click', nextStep);
    elements.prevBtn.addEventListener('click', prevStep);
    
    // Stepper bullets
    elements.stepperBullets.addEventListener('click', (e) => {
        const bullet = e.target.closest('.stepper__bullet');
        if (bullet) {
            const stepIndex = parseInt(bullet.dataset.step);
            goToStep(stepIndex);
        }
    });
    
    // Table of contents
    elements.tableOfContents.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('.sidebar__nav-link');
        if (link) {
            const stepIndex = parseInt(link.dataset.step);
            goToStep(stepIndex);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                prevStep();
                break;
            case 'ArrowRight':
                nextStep();
                break;
            case 'z':
            case 'Z':
                resetZoomState();
                break;
            case 'a':
            case 'A':
                toggleAnnotations();
                break;
        }
    });
    
    // Zoom and pan
    elements.imageContainer.addEventListener('click', handleImageClick);
    elements.imageContainer.addEventListener('mousedown', handlePanStart);
    document.addEventListener('mousemove', handlePanMove);
    document.addEventListener('mouseup', handlePanEnd);
    
    // Touch support for mobile
    elements.imageContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            handlePanStart({ clientX: touch.clientX, clientY: touch.clientY });
        }
    });
    
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isPanning) {
            const touch = e.touches[0];
            handlePanMove({ 
                clientX: touch.clientX, 
                clientY: touch.clientY,
                preventDefault: () => e.preventDefault()
            });
        }
    });
    
    document.addEventListener('touchend', handlePanEnd);
    
    // Control buttons
    elements.toggleAnnotations.addEventListener('click', toggleAnnotations);
    elements.resetZoom.addEventListener('click', resetZoomState);
}

// =====================================================
// Start Application
// =====================================================
document.addEventListener('DOMContentLoaded', init);

