import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ChevronLeft, Play, Download, Lock } from "lucide-react";
import { Streamdown } from "streamdown";

const modulesData: Record<string, any> = {
  "01": {
    title: "Mentalidade e Posicionamento",
    subtitle: "A base de tudo antes de abrir o computador",
    isFree: true,
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
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Como usar o Lovable para criar sites do zero usando comandos em português
- Como personalizar o site gerado pela IA (cores, textos, seções)
- Diferença entre site institucional e página de vendas
- Como publicar e entregar o projeto ao cliente`,
    videos: [],
  },
  "03": {
    title: "Artes Profissionais com IA",
    subtitle: "Design que impressiona, sem precisar ser designer",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Como usar o Canva com os recursos de IA integrados
- Como combinar ChatGPT + Canva para criar artes cinematográficas
- Como criar posts, banners e capas profissionais em minutos
- Como criar um padrão visual consistente para o cliente`,
    videos: [],
  },
  "04": {
    title: "Copywriting",
    subtitle: "Palavras que vendem",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- A estrutura AIDA: Atenção, Interesse, Desejo e Ação
- Como escrever headlines que param o scroll
- Como usar gatilhos mentais (urgência, prova social, autoridade)
- Como escrever a copy de uma página de vendas completa`,
    videos: [],
  },
  "05": {
    title: "Fechando Clientes pelo WhatsApp",
    subtitle: "Da abordagem ao pagamento em poucas mensagens",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Como abordar um prospect sem parecer chato ou desesperado
- Como qualificar o cliente com perguntas simples
- Como enviar uma proposta clara e profissional pelo WhatsApp
- Como lidar com objeções e fechar a venda`,
    videos: [],
  },
  "06": {
    title: "Construindo Sua Presença e Comunidade",
    subtitle: "Usar o que você já tem para crescer",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Como criar conteúdo que atrai clientes sem precisar de muito tempo
- A diferença entre conteúdo de autoridade, conteúdo de prova e conteúdo de venda
- Como criar um grupo ou comunidade em torno do seu trabalho
- Como pedir e usar depoimentos de clientes para vender mais`,
    videos: [],
  },
  "07": {
    title: "Automação para Serviços Digitais",
    subtitle: "Otimize seu tempo e escala seus resultados",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Introdução às ferramentas de automação (ex: Make.com, Zapier)
- Como automatizar o envio de mensagens no WhatsApp Business
- Automação de e-mails de follow-up e boas-vindas
- Integração de formulários com planilhas e CRMs simples`,
    videos: [],
  },
  "08": {
    title: "Precificação Detalhada de Serviços Digitais",
    subtitle: "Como cobrar o valor justo pelo seu trabalho",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Métodos de precificação (por hora, por projeto, por valor)
- Fatores que influenciam o preço (experiência, complexidade, mercado)
- Como apresentar o preço e justificar o valor
- Estratégias para aumentar seu ticket médio`,
    videos: [],
  },
  "09": {
    title: "Gerenciamento de Múltiplos Clientes",
    subtitle: "Escalando seu negócio sem perder a qualidade",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Ferramentas de gestão de projetos (ex: Trello, Asana)
- Como organizar demandas e prazos
- Estratégias de comunicação com o cliente
- Delegação e contratação de freelancers`,
    videos: [],
  },
  "10": {
    title: "Glossário de Termos Digitais",
    subtitle: "Não fique perdido no jargão do mercado",
    isFree: false,
    content: `## Conteúdo Bloqueado

Para acessar este módulo e todos os outros, você precisa contratar a mentoria completa.

**Neste módulo você vai aprender:**
- Termos essenciais do mercado digital
- Conceitos técnicos explicados de forma simples
- Glossário completo com 50+ termos
- Comunicação profissional com clientes`,
    videos: [],
  },
};

export default function ModuleView() {
  const params = useParams();
  const moduleId = params.id || "01";
  const module = modulesData[moduleId] || modulesData["01"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white">
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
                {module.isFree && (
                  <span className="ml-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                    GRÁTIS
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{module.title}</h1>
              <p className="text-xl text-slate-400">{module.subtitle}</p>
            </div>

            {/* Content */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
              {module.isFree ? (
                <Streamdown>{module.content}</Streamdown>
              ) : (
                <div className="text-center py-12">
                  <Lock className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Conteúdo Bloqueado</h2>
                  <p className="text-slate-400 mb-8 max-w-md mx-auto">
                    Para acessar este módulo e todos os outros, você precisa contratar a mentoria
                    completa da MX Digital.
                  </p>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 mb-8 max-w-md mx-auto">
                    <p className="text-slate-300 mb-4">
                      <strong>Neste módulo você vai aprender:</strong>
                    </p>
                    <Streamdown>{module.content}</Streamdown>
                  </div>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Contratar Mentoria Completa
                  </Button>
                </div>
              )}
            </div>

            {/* Videos Section */}
            {module.isFree && module.videos.length > 0 && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Vídeos Recomendados</h2>
                <div className="space-y-4">
                  {module.videos.map((video: any, idx: number) => (
                    <a
                      key={idx}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors border border-slate-700 hover:border-orange-500 group"
                    >
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-700 transition-colors">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                          {video.title}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">
                          Clique para assistir no YouTube
                        </p>
                      </div>
                      <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-colors rotate-180 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress Card */}
            {module.isFree && (
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6 sticky top-20">
                <h3 className="font-bold text-white mb-4">Seu Progresso</h3>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-orange-600 h-2 rounded-full transition-all"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <p className="text-sm text-slate-400 mb-6">Módulo 1 de 10 (Teste Grátis)</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Próximo Módulo (Pago)
                </Button>
              </div>
            )}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-600/20 to-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-6 sticky top-20">
              <h3 className="font-bold text-white mb-2">Quer Mais?</h3>
              <p className="text-sm text-slate-300 mb-4">
                Acesse todos os 10 módulos, 40+ vídeos e materiais extras.
              </p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Contratar Mentoria
              </Button>
            </div>

            {/* Materials Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-white mb-4">Materiais Extras</h3>
              <p className="text-sm text-slate-400 mb-4">
                Scripts, planilhas e certificados
              </p>
              <Link href="/materiais">
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Download className="w-4 h-4 mr-2" />
                  Ver Materiais
                </Button>
              </Link>
            </div>

            {/* Navigation */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4">Todos os Módulos</h3>
              <div className="space-y-2">
                {Object.keys(modulesData)
                  .sort()
                  .map((id) => (
                    <Link key={id} href={`/modulo/${id}`}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          moduleId === id
                            ? "bg-orange-600 text-white font-semibold"
                            : "text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        <span className="text-sm font-semibold">M{id}</span>
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
