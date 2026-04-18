import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Zap, Users, Award } from "lucide-react";

export default function Home() {
  const modules = [
    {
      id: "01",
      title: "Mentalidade e Posicionamento",
      description: "A base de tudo antes de abrir o computador",
      icon: "🎯",
    },
    {
      id: "02",
      title: "Criando Sites com IA",
      description: "Do zero ao site profissional em minutos",
      icon: "💻",
    },
    {
      id: "03",
      title: "Artes Profissionais com IA",
      description: "Design que impressiona, sem precisar ser designer",
      icon: "🎨",
    },
    {
      id: "04",
      title: "Copywriting",
      description: "Palavras que vendem",
      icon: "✍️",
    },
    {
      id: "05",
      title: "Fechando Clientes",
      description: "Da abordagem ao pagamento em poucas mensagens",
      icon: "📱",
    },
    {
      id: "06",
      title: "Presença e Comunidade",
      description: "Usar o que você já tem para crescer",
      icon: "👥",
    },
    {
      id: "07",
      title: "Automação para Serviços",
      description: "Otimize seu tempo e escala seus resultados",
      icon: "⚙️",
    },
    {
      id: "08",
      title: "Precificação Detalhada",
      description: "Como cobrar o valor justo",
      icon: "💰",
    },
    {
      id: "09",
      title: "Gerenciamento de Clientes",
      description: "Escalando sem perder qualidade",
      icon: "📊",
    },
    {
      id: "10",
      title: "Glossário Digital",
      description: "Não fique perdido no jargão",
      icon: "📚",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              MX
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">MX Digital</h1>
              <p className="text-xs text-slate-500">Mentoria Completa</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/materiais">
              <Button variant="ghost" size="sm">
                Materiais
              </Button>
            </Link>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              Entrar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Do Zero ao Primeiro Cliente Digital
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Aprenda a criar sites, artes com IA, copywriting e venda pelo WhatsApp. Tudo que você precisa para monetizar sua expertise e construir uma comunidade.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-slate-200 py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">10</div>
            <p className="text-slate-600">Módulos Completos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">40+</div>
            <p className="text-slate-600">Vídeos Selecionados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
            <p className="text-slate-600">Materiais Extras</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
            <p className="text-slate-600">Acesso Vitalício</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="container py-20">
        <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Conteúdo da Mentoria
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link key={module.id} href={`/modulo/${module.id}`}>
              <div className="group cursor-pointer bg-white rounded-xl border border-slate-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{module.icon}</div>
                <div className="text-sm font-semibold text-orange-500 mb-2">
                  Módulo {module.id}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {module.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">{module.description}</p>
                <div className="flex items-center text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  Acessar →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="container">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Por que essa mentoria é diferente
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Conteúdo Prático</h4>
              <p className="text-slate-300 text-sm">
                Tudo é focado em aplicação real e resultados imediatos
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Ferramentas Atuais</h4>
              <p className="text-slate-300 text-sm">
                Usamos as melhores IAs e ferramentas de 2025
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Comunidade Ativa</h4>
              <p className="text-slate-300 text-sm">
                Faça parte de uma comunidade que se ajuda
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Certificado</h4>
              <p className="text-slate-300 text-sm">
                Receba seu certificado ao concluir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Acesso vitalício a todos os módulos, vídeos e materiais extras
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100 font-bold">
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">MX Digital</h4>
              <p className="text-sm">Mentoria completa para profissionais digitais</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Módulos</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Posicionamento</a></li>
                <li><a href="#" className="hover:text-white">Sites com IA</a></li>
                <li><a href="#" className="hover:text-white">Artes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Materiais</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 MX Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
