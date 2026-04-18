import { Button } from "@/components/ui/button";
import { Link, useParams, useLocation } from "wouter";
import { ChevronLeft, Play, Download, LogOut } from "lucide-react";
import { Streamdown } from "streamdown";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

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
      { title: "5 Ferramentas de IA que Vão Transformar Seus Negócios em 2025", url: "https://www.youtube.com/watch?v=lg_lWTI3Zqc" },
      { title: "Como desenvolver uma MENTALIDADE EMPREENDEDORA", url: "https://www.youtube.com/watch?v=YzqTyXMROEk" },
      { title: "5 Passos para Iniciar um Negócio Digital do Zero", url: "https://www.youtube.com/watch?v=Md4Vu9GUlkw" },
      { title: "Como construir um negócio digital do zero em 1h15", url: "https://www.youtube.com/watch?v=4vaulBxBtNA" },
    ],
  },
  "02": {
    title: "Criando Sites com IA",
    subtitle: "Do zero ao site profissional em minutos",
    content: `## Criando Sites com IA

Neste módulo você vai aprender como usar ferramentas de IA para criar sites profissionais sem precisar saber programação.

### Tópicos Principais

- Como usar o Lovable para criar sites do zero usando comandos em português
- Como personalizar o site gerado pela IA (cores, textos, seções)
- Diferença entre site institucional e página de vendas
- Como publicar e entregar o projeto ao cliente

### Exercício Prático

Crie um site simples para um cliente fictício usando as ferramentas que você aprendeu.`,
    videos: [],
  },
  "03": {
    title: "Artes Profissionais com IA",
    subtitle: "Design que impressiona, sem precisar ser designer",
    content: `## Artes Profissionais com IA

Aprenda a criar artes incríveis usando IA e ferramentas de design.

### Tópicos Principais

- Como usar o Canva com os recursos de IA integrados
- Como combinar ChatGPT + Canva para criar artes cinematográficas
- Como criar posts, banners e capas profissionais em minutos
- Como criar um padrão visual consistente para o cliente

### Exercício Prático

Crie um conjunto de 5 artes para um cliente usando as técnicas aprendidas.`,
    videos: [],
  },
  "04": {
    title: "Copywriting",
    subtitle: "Palavras que vendem",
    content: `## Copywriting

Domine a arte de escrever textos que vendem.

### Tópicos Principais

- A estrutura AIDA: Atenção, Interesse, Desejo e Ação
- Como escrever headlines que param o scroll
- Como usar gatilhos mentais (urgência, prova social, autoridade)
- Como escrever a copy de uma página de vendas completa

### Exercício Prático

Escreva a copy completa de uma página de vendas para um produto ou serviço.`,
    videos: [],
  },
  "05": {
    title: "Fechando Clientes pelo WhatsApp",
    subtitle: "Da abordagem ao pagamento em poucas mensagens",
    content: `## Fechando Clientes pelo WhatsApp

Aprenda a vender pelo WhatsApp com profissionalismo e eficiência.

### Tópicos Principais

- Como abordar um prospect sem parecer chato ou desesperado
- Como qualificar o cliente com perguntas simples
- Como enviar uma proposta clara e profissional pelo WhatsApp
- Como lidar com objeções e fechar a venda

### Exercício Prático

Pratique o roteiro de vendas com um amigo e peça feedback.`,
    videos: [],
  },
  "06": {
    title: "Construindo Sua Presença e Comunidade",
    subtitle: "Usar o que você já tem para crescer",
    content: `## Construindo Sua Presença e Comunidade

Crie uma presença forte e uma comunidade engajada.

### Tópicos Principais

- Como criar conteúdo que atrai clientes sem precisar de muito tempo
- A diferença entre conteúdo de autoridade, conteúdo de prova e conteúdo de venda
- Como criar um grupo ou comunidade em torno do seu trabalho
- Como pedir e usar depoimentos de clientes para vender mais

### Exercício Prático

Crie um plano de conteúdo para os próximos 30 dias.`,
    videos: [],
  },
  "07": {
    title: "Automação para Serviços Digitais",
    subtitle: "Otimize seu tempo e escala seus resultados",
    content: `## Automação para Serviços Digitais

Automatize seus processos e escale seu negócio.

### Tópicos Principais

- Introdução às ferramentas de automação (ex: Make.com, Zapier)
- Como automatizar o envio de mensagens no WhatsApp Business
- Automação de e-mails de follow-up e boas-vindas
- Integração de formulários com planilhas e CRMs simples

### Exercício Prático

Configure uma automação simples para seu negócio.`,
    videos: [],
  },
  "08": {
    title: "Precificação Detalhada de Serviços Digitais",
    subtitle: "Como cobrar o valor justo pelo seu trabalho",
    content: `## Precificação Detalhada de Serviços Digitais

Aprenda a precificar seus serviços corretamente.

### Tópicos Principais

- Métodos de precificação (por hora, por projeto, por valor)
- Fatores que influenciam o preço (experiência, complexidade, mercado)
- Como apresentar o preço e justificar o valor
- Estratégias para aumentar seu ticket médio

### Exercício Prático

Calcule o preço justo para seus serviços usando a planilha fornecida.`,
    videos: [],
  },
  "09": {
    title: "Gerenciamento de Múltiplos Clientes",
    subtitle: "Escalando seu negócio sem perder a qualidade",
    content: `## Gerenciamento de Múltiplos Clientes

Gerencie múltiplos clientes com eficiência.

### Tópicos Principais

- Ferramentas de gestão de projetos (ex: Trello, Asana)
- Como organizar demandas e prazos
- Estratégias de comunicação com o cliente
- Delegação e contratação de freelancers

### Exercício Prático

Configure um sistema de gestão de projetos para seu negócio.`,
    videos: [],
  },
  "10": {
    title: "Glossário de Termos Digitais",
    subtitle: "Não fique perdido no jargão do mercado",
    content: `## Glossário de Termos Digitais

Entenda os termos mais usados no mercado digital.

### Tópicos Principais

- Termos essenciais do mercado digital
- Conceitos técnicos explicados de forma simples
- Glossário completo com 50+ termos
- Comunicação profissional com clientes

### Exercício Prático

Crie seu próprio glossário personalizado para usar com clientes.`,
    videos: [],
  },
};

export default function PrivateModuleView() {
  const params = useParams();
  const moduleId = params.id || "01";
  const module = modulesData[moduleId] || modulesData["01"];
  const { isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/dashboard">
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
          <Button
            onClick={handleLogout}
            variant="ghost"
            size="sm"
            className="gap-2 text-slate-300 hover:text-white"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
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
              <h1 className="text-4xl font-bold text-white mb-2">{module.title}</h1>
              <p className="text-xl text-slate-400">{module.subtitle}</p>
            </div>

            {/* Content */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
              <Streamdown>{module.content}</Streamdown>
            </div>

            {/* Videos Section */}
            {module.videos.length > 0 && (
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
            {/* Navigation */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sticky top-20">
              <h3 className="font-bold text-white mb-4">Todos os Módulos</h3>
              <div className="space-y-2">
                {Object.keys(modulesData)
                  .sort()
                  .map((id) => (
                    <Link key={id} href={`/dashboard/modulo/${id}`}>
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
