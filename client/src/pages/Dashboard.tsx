import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { LogOut, BookOpen, Download, User, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const modules = [
  { id: "01", title: "Mentalidade e Posicionamento", icon: "🎯", completed: false },
  { id: "02", title: "Criando Sites com IA", icon: "💻", completed: false },
  { id: "03", title: "Artes Profissionais com IA", icon: "🎨", completed: false },
  { id: "04", title: "Copywriting", icon: "✍️", completed: false },
  { id: "05", title: "Fechando Clientes", icon: "📱", completed: false },
  { id: "06", title: "Presença e Comunidade", icon: "👥", completed: false },
  { id: "07", title: "Automação para Serviços", icon: "⚙️", completed: false },
  { id: "08", title: "Precificação Detalhada", icon: "💰", completed: false },
  { id: "09", title: "Gerenciamento de Clientes", icon: "📊", completed: false },
  { id: "10", title: "Glossário Digital", icon: "📚", completed: false },
];

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const completedCount = modules.filter((m) => m.completed).length;
  const progressPercentage = (completedCount / modules.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              MX
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">MX Digital</h1>
              <p className="text-xs text-slate-400">Área do Aluno</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-300">
              <User className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo, {user.name}! 👋
          </h2>
          <p className="text-slate-400">
            Você tem acesso completo a todos os 10 módulos da mentoria. Comece de onde parou!
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-4">Seu Progresso</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-orange-500">
                {completedCount}/{modules.length}
              </p>
              <p className="text-sm text-slate-400">Módulos completos</p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Módulos da Mentoria</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Link key={module.id} href={`/dashboard/modulo/${module.id}`}>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{module.icon}</div>
                    {module.completed && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <div className="text-sm font-semibold text-orange-500 mb-2">
                    Módulo {module.id}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {module.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/10 border border-orange-500/30 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Download className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Materiais Extras</h3>
              <p className="text-slate-300 mb-4">
                Acesse scripts de vendas, planilhas de precificação, contratos e muito mais!
              </p>
              <Link href="/materiais">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Ver Materiais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
