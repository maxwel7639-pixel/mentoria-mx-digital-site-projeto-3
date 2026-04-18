import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ChevronLeft, Play, Download } from "lucide-react";
import { Streamdown } from "streamdown";

const modulesData: Record<string, any> = {
  "01": {
    title: "Mentalidade e Posicionamento",
    subtitle: "A base de tudo antes de abrir o computador",
    content: `## Por que isso importa?

Antes de sair criando site para todo mundo, você precisa entender quem você é no mercado, quem você atende e quanto vale o seu trabalho. Quem pula essa etapa fica perdido na hora de fechar o primeiro cliente.

## O que você vai aprender

- O que é o mercado de serviços digitais e por que está explodindo
- Como se posicionar como profissional e não como amador
- Como definir o seu nicho inicial (não precisa ser perfeito)
- Como precificar seus serviços sem trabalhar de graça

## Exercício Prático

Escreva em uma folha: 1) Quem eu atendo, 2) Qual problema eu resolvo, 3) Quanto vou cobrar pelos meus serviços. Guarde isso — vai ser a base da sua proposta comercial.

## Dica MX Digital

Não tenha pressa em definir tudo perfeitamente. Comece com um nicho pequeno e vá expandindo conforme ganha experiência.`,
    videos: [
      { title: "10 Ferramentas Obrigatórias de IA para o Seu Negócio", url: "#" },
      { title: "Estudos revelam as melhores IAs de 2025", url: "#" },
    ],
  },
  "02": {
    title: "Criando Sites com IA",
    subtitle: "Do zero ao site profissional em minutos",
    content: `## A ferramenta principal da MX Digital

Criar sites era algo que demorava dias ou custava muito dinheiro. Hoje, com IA, você consegue entregar um site profissional em até 5 dias — exatamente como prometemos na MX Digital. A ferramenta que usamos é o **Lovable**.

## O que você vai aprender

- Como usar o Lovable para criar sites do zero usando comandos em português
- Como personalizar o site gerado pela IA (cores, textos, seções)
- Diferença entre site institucional e página de vendas
- Como publicar e entregar o projeto ao cliente

## Exercício Prático

Acesse o Lovable (lovable.dev), crie uma conta gratuita e construa um site simples para um negócio fictício — pode ser uma barbearia, loja de roupas ou restaurante. Salve o link e compartilhe no grupo.

## Dica MX Digital

Comece criando o seu próprio site como portfólio antes de vender para clientes. Isso serve como prática e como vitrine do seu trabalho.`,
    videos: [
      {
        title: "Lovable Tutorial (2025) – Build Websites & Apps Without...",
        url: "https://www.youtube.com/watch?v=kogbA7-HSoM",
      },
      {
        title: "This AI Builds Websites From Your Ideas | Lovable Tutorial",
        url: "https://www.youtube.com/watch?v=aSxEp9w6zTg",
      },
      {
        title: "Lovable AI Tutorial: Build your website without coding",
        url: "https://www.youtube.com/watch?v=e9Xkt69tC6g",
      },
      {
        title: "How to Create Website with AI | Lovable Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=fIT3MRWvKhI",
      },
    ],
  },
  "03": {
    title: "Artes Profissionais com IA",
    subtitle: "Design que impressiona, sem precisar ser designer",
    content: `## Arte é parte do serviço

Todo cliente que contrata um site também precisa de artes para redes sociais. Saber criar artes com IA é um diferencial enorme — e te permite oferecer um pacote mais completo e cobrar mais.

## O que você vai aprender

- Como usar o Canva com os recursos de IA integrados
- Como combinar ChatGPT + Canva para criar artes cinematográficas
- Como criar posts, banners e capas profissionais em minutos
- Como criar um padrão visual consistente para o cliente (identidade visual básica)

## Exercício Prático

Crie 3 artes para o negócio fictício que você criou o site no módulo anterior: um post de apresentação, um post de promoção e um story de contato. Compartilhe no grupo para feedback.

## Dica MX Digital

Use sempre as cores e a logo do cliente nas artes. Isso passa profissionalismo e fideliza. Pergunte ao cliente: 'Você tem uma paleta de cores ou já tem uma identidade visual?' antes de começar.`,
    videos: [
      {
        title: "How To Use ChatGPT with Canva for Design 2025",
        url: "https://www.youtube.com/watch?v=i56y2qhpqkY",
      },
      {
        title: "How To Use ChatGPT with Canva (2025) | Create Posts",
        url: "https://www.youtube.com/watch?v=aSq3dTf9n1I",
      },
      {
        title: "The Ultimate Canva 2025 Tutorial: Beginner's Guide + AI",
        url: "https://www.youtube.com/watch?v=aYhNTZIzDf4",
      },
    ],
  },
  "04": {
    title: "Copywriting",
    subtitle: "Palavras que vendem",
    content: `## Por que copy faz toda a diferença?

Uma página de vendas linda mas com texto ruim não vende. O copywriting é a arte de usar as palavras certas para fazer o cliente tomar uma ação — seja comprar, entrar em contato ou clicar em um link.

## O que você vai aprender

- A estrutura AIDA: Atenção, Interesse, Desejo e Ação
- Como escrever headlines que param o scroll
- Como usar gatilhos mentais (urgência, prova social, autoridade)
- Como escrever a copy de uma página de vendas completa
- Como usar o ChatGPT para ajudar na escrita da copy

## A estrutura básica de uma página de vendas

- **Headline**: promessa clara e direta
- **Subheadline**: reforça a promessa com um benefício
- **Problema**: mostra que você entende a dor do cliente
- **Solução**: apresenta o serviço como a resposta
- **Prova**: depoimentos, portfólio, resultados
- **Oferta**: o que está incluso e o preço
- **CTA**: botão ou contato claro (WhatsApp, formulário)

## Exercício Prático

Escreva a copy completa de uma página de vendas para o negócio fictício dos módulos anteriores. Use a estrutura acima e tente aplicar pelo menos 2 gatilhos mentais.

## Dica MX Digital

Use o ChatGPT para gerar a primeira versão da copy e depois ajuste com a voz e os detalhes do cliente. Isso economiza horas de trabalho.`,
    videos: [
      {
        title: "Tutorial completo de COPYWRITING (2025)",
        url: "https://www.youtube.com/watch?v=Hz9HflWtK1o",
      },
    ],
  },
  "05": {
    title: "Fechando Clientes pelo WhatsApp",
    subtitle: "Da abordagem ao pagamento em poucas mensagens",
    content: `## Seu celular é seu escritório de vendas

No mercado brasileiro, o WhatsApp é a ferramenta de vendas mais poderosa que existe. Saber conduzir uma conversa do primeiro contato até o fechamento é o que separa quem vende de quem fica apenas enviando orçamentos sem retorno.

## O que você vai aprender

- Como abordar um prospect sem parecer chato ou desesperado
- Como qualificar o cliente com perguntas simples
- Como enviar uma proposta clara e profissional pelo WhatsApp
- Como lidar com objeções (tá caro, vou pensar, não preciso agora)
- Como fechar e receber o pagamento pelo próprio app

## Script básico de abordagem

**Passo 1**: Apresentação curta + referência em comum (ex: vi que você tem uma loja)

**Passo 2**: Pergunta de qualificação (ex: você já tem site ou está começando do zero?)

**Passo 3**: Proposta simples: o que inclui, prazo e preço

**Passo 4**: Fechamento: pedir sinal (50% entrada via Pix para iniciar)

## Exercício Prático

Simule uma conversa de venda com um amigo jogando o papel de cliente. Grave o áudio ou salve as mensagens. Depois avalie: onde você ficou travado? Onde o 'cliente' resistiu? Traga para o grupo.

## Dica MX Digital

Nunca envie o preço sem antes entender o que o cliente precisa. Quem faz isso parece desesperado. Faça perguntas, entenda o contexto, e aí apresente sua proposta.`,
    videos: [
      {
        title: "Como vender pelo WhatsApp? Tutorial completo",
        url: "https://www.youtube.com/watch?v=jsjfs0mlIz0",
      },
      {
        title: "Como VENDER pelo WhatsApp Business todos os dias",
        url: "https://sebraepr.com.br/comunidade/artigo/como-vender-pelo-whatsapp-business-todos-os-dias-confira-nossas-6-dicas-incriveis",
      },
      {
        title: "7 dicas infalíveis de como vender pelo WhatsApp",
        url: "https://site.getnet.com.br/vender-pelo-whatsapp/whatsapp/",
      },
    ],
  },
  "06": {
    title: "Construindo Sua Presença e Comunidade",
    subtitle: "Usar o que você já tem para crescer",
    content: `## Você já tem audiência — agora use com estratégia

Você já viu que postar sobre o seu trabalho no perfil pessoal atrai interesse. Esse módulo é sobre como transformar esse interesse em uma audiência fiel e em clientes recorrentes.

## O que você vai aprender

- Como criar conteúdo que atrai clientes sem precisar de muito tempo
- A diferença entre conteúdo de autoridade, conteúdo de prova e conteúdo de venda
- Como criar um grupo ou comunidade em torno do seu trabalho
- Como pedir e usar depoimentos de clientes para vender mais

## Os 3 tipos de post que você precisa fazer

- **Bastidores**: mostre como você trabalha, as ferramentas que usa, o processo
- **Resultado**: antes e depois, prints de projetos entregues, feedback de clientes
- **Educativo**: ensine algo rápido sobre IA, digital ou o mercado

## Exercício Final

Crie um plano de 2 semanas de conteúdo com 6 posts: 2 de bastidores, 2 de resultado e 2 educativos. Poste e observe qual tem mais engajamento — esse é o seu caminho.

## Dica MX Digital

Você não precisa de muitos seguidores. 10 posts de qualidade mostrados para as pessoas certas valem mais do que 100 posts sem estratégia. Comece mostrando o seu processo.`,
    videos: [],
  },
  "07": {
    title: "Automação para Serviços Digitais",
    subtitle: "Otimize seu tempo e escala seus resultados",
    content: `## Por que automatizar?

Automatizar tarefas repetitivas é crucial para quem trabalha com serviços digitais. Isso libera tempo para focar no que realmente importa: o cliente e a estratégia.

## O que você vai aprender

- Introdução às ferramentas de automação (ex: Make.com, Zapier)
- Como automatizar o envio de mensagens no WhatsApp Business
- Automação de e-mails de follow-up e boas-vindas
- Integração de formulários com planilhas e CRMs simples

## Ferramentas Recomendadas

- **Make.com**: Automação visual e intuitiva
- **Zapier**: Conecta centenas de aplicações
- **Integromat**: Alternativa poderosa ao Make
- **n8n**: Solução open source e self-hosted

## Dica MX Digital

Comece com automações simples e vá escalando. O objetivo é otimizar, não complicar. Teste sempre antes de colocar em produção.`,
    videos: [],
  },
  "08": {
    title: "Precificação Detalhada de Serviços Digitais",
    subtitle: "Como cobrar o valor justo pelo seu trabalho",
    content: `## Por que precificar corretamente?

Precificar corretamente é um dos maiores desafios. Cobrar pouco desvaloriza seu trabalho. Cobrar muito afasta clientes. Encontrar o equilíbrio é essencial.

## O que você vai aprender

- Métodos de precificação (por hora, por projeto, por valor)
- Fatores que influenciam o preço (experiência, complexidade, mercado)
- Como apresentar o preço e justificar o valor
- Estratégias para aumentar seu ticket médio

## Métodos de Precificação

### Por Hora
Ideal para: Consultoria, mentorias, suporte
Fórmula: Custo de vida + lucro desejado + margem de segurança

### Por Projeto
Ideal para: Sites, artes, copywriting
Fórmula: Horas estimadas × Valor hora + margem de lucro

### Por Valor
Ideal para: Serviços com alto ROI
Fórmula: Valor que o cliente vai ganhar × Sua porcentagem

## Recurso Adicional

Utilize a **Planilha de Precificação de Serviços Digitais** (disponível nos materiais extras) para calcular e organizar seus preços de forma profissional.

## Dica MX Digital

Nunca diminua seu preço por pressão do cliente. Se o preço está caro, o problema é a proposta, não o valor.`,
    videos: [],
  },
  "09": {
    title: "Gerenciamento de Múltiplos Clientes",
    subtitle: "Escalando seu negócio sem perder a qualidade",
    content: `## Por que gerenciar bem?

À medida que seu negócio cresce, gerenciar múltiplos clientes se torna essencial. Aprenda a manter a organização e a qualidade em todos os seus projetos.

## O que você vai aprender

- Ferramentas de gestão de projetos (ex: Trello, Asana)
- Como organizar demandas e prazos
- Estratégias de comunicação com o cliente
- Delegação e contratação de freelancers (quando e como)

## Ferramentas Recomendadas

- **Trello**: Simples e visual com cards
- **Asana**: Mais robusta e completa
- **Monday.com**: Interface moderna e intuitiva
- **Notion**: Tudo em um só lugar
- **ClickUp**: Altamente customizável

## Estrutura de Comunicação

1. **Briefing Inicial**: Entenda tudo sobre o projeto
2. **Proposta Clara**: Deixe claro o que será entregue
3. **Atualizações Regulares**: Mantenha o cliente informado
4. **Revisões Estruturadas**: Máximo 2-3 rodadas
5. **Entrega Final**: Com documentação completa

## Dica MX Digital

Organização é a chave para escalar. Invista em boas ferramentas desde o início.`,
    videos: [],
  },
  "10": {
    title: "Glossário de Termos Digitais",
    subtitle: "Não fique perdido no jargão do mercado",
    content: `## Termos Essenciais do Mercado Digital

O mercado digital é cheio de termos técnicos. Este glossário rápido irá te ajudar a entender os principais conceitos e a se comunicar com mais confiança.

### A
- **AIDA**: Atenção, Interesse, Desejo, Ação – Estrutura de copywriting.
- **API**: Interface de Programação de Aplicações – Permite que sistemas se comuniquem.
- **Automação**: Processo de executar tarefas repetitivas automaticamente.

### C
- **CTA (Call to Action)**: Chamada para Ação – Botão ou texto que incentiva o usuário a realizar uma ação.
- **Copywriting**: A arte de escrever textos persuasivos para vendas.
- **Conversão**: Quando um visitante realiza a ação desejada (compra, inscrição, etc).
- **CRM (Customer Relationship Management)**: Gestão de Relacionamento com o Cliente.

### F
- **Funil de Vendas**: Processo que representa a jornada do cliente, desde o primeiro contato até a compra.
- **Follow-up**: Acompanhamento com o cliente após o primeiro contato.

### L
- **Landing Page**: Página de destino focada em conversão.
- **Lovable**: Ferramenta de criação de sites com IA.
- **Lead**: Pessoa interessada no seu serviço.

### N
- **Nicho de Mercado**: Segmento específico de um mercado maior.

### P
- **Proposta de Valor**: O que diferencia você da concorrência.
- **Persona**: Representação fictícia do seu cliente ideal.

### S
- **SEO (Search Engine Optimization)**: Otimização para Motores de Busca.
- **Script**: Roteiro de conversa ou apresentação.

### T
- **Tráfego Orgânico**: Visitantes que chegam ao seu site de forma natural, sem anúncios pagos.
- **Ticket Médio**: Valor médio de cada venda.

### V
- **Venda Consultiva**: Abordagem focada em entender a necessidade do cliente.
- **Vídeo Marketing**: Uso de vídeos para promover produtos ou serviços.

## Dica MX Digital

Não tenha medo de não conhecer todos os termos. A indústria digital está sempre evoluindo. O importante é estar sempre aprendendo.`,
    videos: [],
  },
};

export default function ModuleView() {
  const params = useParams();
  const moduleId = params.id || "01";
  const module = modulesData[moduleId] || modulesData["01"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              MX
            </div>
          </div>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Module Header */}
            <div className="mb-8">
              <div className="text-sm font-semibold text-orange-500 mb-2">
                Módulo {moduleId}
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                {module.title}
              </h1>
              <p className="text-xl text-slate-600">{module.subtitle}</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
              <Streamdown>{module.content}</Streamdown>
            </div>

            {/* Videos Section */}
            {module.videos.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Vídeos Recomendados
                </h2>
                <div className="space-y-4">
                  {module.videos.map((video: any, idx: number) => (
                    <a
                      key={idx}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-orange-50 transition-colors border border-slate-200 hover:border-orange-300 group"
                    >
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                          {video.title}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          Clique para assistir no YouTube
                        </p>
                      </div>
                      <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors rotate-180 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 sticky top-20">
              <h3 className="font-bold text-slate-900 mb-4">Seu Progresso</h3>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all"
                  style={{ width: "33%" }}
                ></div>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Módulo 3 de 10 completos
              </p>
              <Link href={`/modulo/${String(parseInt(moduleId) + 1).padStart(2, "0")}`}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Próximo Módulo
                </Button>
              </Link>
            </div>

            {/* Materials Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-4">Materiais Extras</h3>
              <p className="text-sm text-slate-600 mb-4">
                Acesse scripts, planilhas e certificados
              </p>
              <Link href="/materiais">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Ver Materiais
                </Button>
              </Link>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Todos os Módulos</h3>
              <div className="space-y-2">
                {Object.keys(modulesData).sort().map((id) => (
                  <Link key={id} href={`/modulo/${id}`}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        moduleId === id
                          ? "bg-orange-500 text-white font-semibold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-sm font-semibold">Módulo {id}</span>
                      <span className="text-xs ml-2 block truncate">
                        {modulesData[id].title}
                      </span>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
