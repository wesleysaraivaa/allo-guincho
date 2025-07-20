import { Shield, Clock, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Clock, label: "Anos de Experiência", value: "10+" },
    { icon: Users, label: "Clientes Atendidos", value: "5000+" },
    { icon: Shield, label: "Resgates Realizados", value: "15000+" },
    { icon: Award, label: "Disponibilidade", value: "24/7" },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Sobre o Allô Guincho
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 10 anos prestando serviços de reboque e guincho com
            excelência, segurança e rapidez na Grande São Paulo, interior e
            litoral paulista.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Nossa História
            </h2>
            <p className="text-muted-foreground">
              O Allô Guincho nasceu da necessidade de oferecer um serviço de
              reboque confiável e rápido para os motoristas da Grande São Paulo.
              Fundada em 2014, nossa empresa cresceu baseada nos valores de
              confiança, rapidez e atendimento humanizado.
            </p>
            <p className="text-muted-foreground">
              Ao longo dos anos, expandimos nossa frota e capacitamos nossa
              equipe para atender diversos tipos de emergências em toda região
              paulista, sempre mantendo o foco na segurança e satisfação dos
              nossos clientes.
            </p>
          </div>

          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Shield className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <strong>Segurança:</strong> Prioridade máxima em todos os
                  resgates
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <strong>Rapidez:</strong> Atendimento ágil em situações de
                  emergência
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <strong>Humanização:</strong> Tratamento respeitoso e empático
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  <strong>Excelência:</strong> Qualidade superior em todos os
                  serviços
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Nossa Missão
          </h2>
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Proporcionar tranquilidade e segurança aos motoristas em momentos
              de dificuldade, oferecendo serviços de reboque e guincho com
              rapidez, profissionalismo e preço justo, 24 horas por dia,
              contribuindo para um trânsito mais seguro na Grande São Paulo,
              interior e litoral paulista."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
