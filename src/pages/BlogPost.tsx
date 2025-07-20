import { Clock, User, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CONTACT_CONFIG } from "@/config/contact";

const BlogPost = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Dicas de Segurança
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              O que fazer quando o carro quebra na estrada?
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Guia completo com dicas essenciais para manter a segurança quando
              seu veículo apresenta problemas na estrada. Saiba como agir em
              emergências.
            </p>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Equipe Allô Guincho</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min de leitura</span>
              </div>
              <span>15 de Janeiro, 2024</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-primary rounded-lg p-6 text-white mb-8">
              <h2 className="text-2xl font-bold mb-3 text-white">
                ⚠️ Situação de Emergência?
              </h2>
              <p className="mb-4 opacity-90">
                Se você está lendo este artigo em uma situação de emergência,
                não perca tempo! Ligue agora mesmo para o Allô Guincho.
              </p>
              <Button
                asChild
                className="bg-white text-primary hover:bg-gray-100"
              >
                <a href={`tel:${CONTACT_CONFIG.phone.link}`}>
                  Ligar: {CONTACT_CONFIG.phone.display}
                </a>
              </Button>
            </div>

            <p className="text-lg text-muted-foreground">
              Quebrar na estrada é uma das situações mais estressantes que um
              motorista pode enfrentar. Seja por pane seca, superaquecimento,
              problema na transmissão ou qualquer outro imprevisto, é
              fundamental saber como agir para garantir sua segurança e a de
              outros motoristas.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              1. Mantenha a Calma e Pare em Local Seguro
            </h2>

            <p className="text-muted-foreground mb-4">
              O primeiro e mais importante passo é manter a calma. Procure parar
              o veículo em um local seguro, preferencialmente:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>No acostamento da rodovia, longe do trânsito</li>
              <li>Em um posto de gasolina próximo</li>
              <li>Em uma área de escape ou retorno</li>
              <li>Evite curvas e lombadas onde a visibilidade é reduzida</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              2. Sinalize Adequadamente o Veículo
            </h2>

            <p className="text-muted-foreground mb-4">
              A sinalização adequada é crucial para evitar acidentes:
            </p>

            <Card className="my-6 border-0 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  Checklist de Sinalização:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Ligue o pisca-alerta imediatamente</li>
                  <li>✅ Coloque o triângulo a 30 metros atrás do veículo</li>
                  <li>✅ Use o colete refletivo ao sair do carro</li>
                  <li>✅ Levante o capô (sinal universal de pane)</li>
                  <li>✅ Acenda as luzes de posição se estiver escuro</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              3. Proteja Você e Seus Passageiros
            </h2>

            <p className="text-muted-foreground mb-4">
              A segurança pessoal deve ser prioridade absoluta:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Saia do veículo pela lateral oposta ao trânsito</li>
              <li>Mantenha passageiros longe da pista</li>
              <li>Fique atrás das barreiras de proteção quando possível</li>
              <li>Nunca tente reparos na pista de rolamento</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              4. Quando Tentar Resolver Sozinho
            </h2>

            <p className="text-muted-foreground mb-4">
              Alguns problemas podem ser resolvidos no local, mas apenas se for
              seguro:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card className="border-0 bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-700 mb-2">
                    ✅ Pode Tentar:
                  </h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Pane seca (ter combustível)</li>
                    <li>• Pneu furado em local seguro</li>
                    <li>• Bateria descarregada (com cabos)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-red-50 border-red-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-700 mb-2">
                    ❌ Chame Ajuda:
                  </h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Problemas no motor</li>
                    <li>• Superaquecimento</li>
                    <li>• Problemas na transmissão</li>
                    <li>• Local perigoso para reparo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              5. Como Chamar Ajuda Profissional
            </h2>

            <p className="text-muted-foreground mb-4">
              Quando não conseguir resolver o problema, é hora de chamar
              profissionais:
            </p>

            <Card className="my-6 border-0 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  Informações para Passar ao Guincho:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    📍 <strong>Localização exata:</strong> KM da rodovia, pontos
                    de referência
                  </li>
                  <li>
                    🚗 <strong>Modelo do veículo:</strong> Marca, modelo, cor
                  </li>
                  <li>
                    ⚠️ <strong>Tipo do problema:</strong> Descreva o que
                    aconteceu
                  </li>
                  <li>
                    👥 <strong>Número de pessoas:</strong> Quantos passageiros
                  </li>
                  <li>
                    🆘 <strong>Urgência:</strong> Se há feridos ou situação de
                    risco
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              6. Documentos Importantes
            </h2>

            <p className="text-muted-foreground mb-4">Tenha sempre em mãos:</p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Carteira de motorista válida</li>
              <li>Documento do veículo (CRLV)</li>
              <li>Comprovante de seguro (se houver)</li>
              <li>Documento de identidade</li>
            </ul>

            <div className="bg-gradient-secondary rounded-lg p-8 text-white my-8">
              <h2 className="text-2xl font-bold mb-4">
                Allô Guincho: Seu Parceiro na Estrada
              </h2>
              <p className="mb-6 opacity-90">
                Com mais de 10 anos de experiência, o Allô Guincho oferece
                atendimento 24h em Fortaleza e região metropolitana. Nossa
                equipe qualificada está sempre pronta para te ajudar em
                situações de emergência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary-hover">
                  <a href={`tel:${CONTACT_CONFIG.phone.link}`}>
                    Emergência: {CONTACT_CONFIG.phone.display}
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
                >
                  <a
                    href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Li o artigo sobre pane na estrada e gostaria de saber mais sobre os serviços.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              Conclusão
            </h2>

            <p className="text-muted-foreground mb-4">
              Quebrar na estrada não precisa ser uma experiência traumática. Com
              as orientações certas e um serviço de reboque confiável como o
              Allô Guincho, você pode enfrentar essas situações com mais
              tranquilidade e segurança.
            </p>

            <p className="text-muted-foreground">
              Lembre-se: em caso de dúvida, sempre priorize sua segurança e
              chame ajuda profissional. O Allô Guincho está disponível 24 horas
              por dia para te atender em Fortaleza e região metropolitana.
            </p>
          </article>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Artigos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">
                    Como escolher um serviço de reboque confiável
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Critérios importantes para selecionar uma empresa de reboque
                    segura...
                  </p>
                  <Link
                    to="/blog/como-escolher-servico-reboque-confiavel"
                    className="text-primary hover:text-primary-hover text-sm font-medium"
                  >
                    Ler artigo →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">
                    Documentos necessários para reboque
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Lista completa dos documentos que você precisa ter em
                    mãos...
                  </p>
                  <Link
                    to="/blog/documentos-necessarios-para-reboque"
                    className="text-primary hover:text-primary-hover text-sm font-medium"
                  >
                    Ler artigo →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
