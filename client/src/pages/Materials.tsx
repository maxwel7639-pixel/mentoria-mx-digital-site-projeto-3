import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Download, FileText, Sheet, Globe, Award, ChevronLeft } from "lucide-react";

export default function Materials() {
  const materials = [
    {
      id: 1,
      title: "Script de Vendas para WhatsApp",
      description:
        "Guia completo com 4 passos para fechar vendas pelo WhatsApp. Inclui mensagens prontas, técnicas de qualificação e quebra de objeções.",
      icon: FileText,
      color: "bg-blue-600",
      file: "whatsapp_sales_script.md",
      type: "Documento",
    },
    {
      id: 2,
      title: "Planilha de Precificação",
      description:
        "Ferramenta prática para calcular o valor justo dos seus serviços digitais. Inclui métodos de precificação e exemplos reais.",
      icon: Sheet,
      color: "bg-green-600",
      file: "planilha_precificacao_mx.xlsx",
      type: "Planilha Excel",
    },
    {
      id: 3,
      title: "Modelo de Contrato de Serviços",
      description:
        "Contrato profissional e simples para formalizar seus trabalhos com segurança. Pronto para usar com seus clientes.",
      icon: FileText,
      color: "bg-purple-600",
      file: "contrato_servicos_digitais.docx",
      type: "Documento Word",
    },
    {
      id: 4,
      title: "Proposta Comercial Profissional",
      description:
        "Template de proposta com 3 pacotes, cronograma e seções de depoimentos. Aumenta suas chances de fechamento.",
      icon: FileText,
      color: "bg-orange-600",
      file: "proposta_comercial_mx.docx",
      type: "Documento Word",
    },
    {
      id: 5,
      title: "Página de Vendas da Mentoria",
      description:
        "HTML profissional para você vender sua própria mentoria ou serviços. Design responsivo e otimizado para conversão.",
      icon: Globe,
      color: "bg-indigo-600",
      file: "pagina_vendas_mentoria_mx.html",
      type: "Página HTML",
    },
    {
      id: 6,
      title: "Certificado de Conclusão",
      description:
        "Certificado visual elegante para reconhecer a conclusão da mentoria. Aumenta o valor percebido do seu programa.",
      icon: Award,
      color: "bg-red-600",
      file: "certificado_conclusao_mx.png",
      type: "Imagem PNG",
    },
  ];

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
        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Materiais Extras</h1>
          <p className="text-xl text-slate-400">
            Acesse todos os recursos complementares da mentoria MX Digital. Esses materiais foram
            desenvolvidos para acelerar seu aprendizado e facilitar a aplicação prática do conteúdo.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {materials.map((material) => {
            const Icon = material.icon;
            return (
              <div
                key={material.id}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${material.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900/50 px-2 py-1 rounded">
                    {material.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{material.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">{material.description}</p>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            );
          })}
        </div>

        {/* How to Use Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Como usar esses materiais?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Script de Vendas</h3>
              <p className="text-slate-400 text-sm">
                Use como guia para suas conversas no WhatsApp. Adapte as mensagens para sua voz e
                contexto. Pratique com amigos antes de usar com clientes reais.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Planilha de Preços</h3>
              <p className="text-slate-400 text-sm">
                Preencha com seus dados e calcule o valor justo dos seus serviços. Use para
                apresentar preços com segurança aos clientes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Contrato e Proposta</h3>
              <p className="text-slate-400 text-sm">
                Personalize com seus dados e dados do cliente. Use para formalizar todos os seus
                projetos e evitar desentendimentos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Página de Vendas</h3>
              <p className="text-slate-400 text-sm">
                Customize com suas cores e informações. Use para vender sua mentoria ou serviços.
                Teste diferentes versões.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">
                Posso usar esses materiais com meus clientes?
              </h3>
              <p className="text-slate-400 text-sm">
                Sim! Todos os materiais podem ser personalizados e usados com seus clientes. Adapte
                conforme necessário para cada projeto.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Os materiais estão em qual formato?</h3>
              <p className="text-slate-400 text-sm">
                Você encontrará documentos Word (.docx), planilhas Excel (.xlsx), arquivos HTML e
                imagens PNG. Todos compatíveis com programas comuns.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Posso modificar os materiais?</h3>
              <p className="text-slate-400 text-sm">
                Absolutamente! Todos os materiais foram feitos para serem personalizados. Adapte
                cores, textos e estrutura conforme sua necessidade.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Há limite de downloads?</h3>
              <p className="text-slate-400 text-sm">
                Não! Você tem acesso vitalício a todos os materiais. Baixe quantas vezes precisar
                e compartilhe com seus alunos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-20">
        <div className="container text-center">
          <p>&copy; 2025 MX Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
