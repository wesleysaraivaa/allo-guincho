import { Clock, User, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CONTACT_CONFIG } from "@/config/contact";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const blogPosts = [
    {
      id: 1,
      title: "O que fazer quando o carro quebra na estrada?",
      excerpt:
        "Guia completo com dicas essenciais para manter a segurança quando seu veículo apresenta problemas na estrada.",
      date: "2024-01-15",
      author: "Equipe Allô Guincho",
      readTime: "5 min",
      category: "Dicas de Segurança",
      slug: "o-que-fazer-quando-carro-quebra-estrada",
    },
    {
      id: 2,
      title: "Como escolher um serviço de reboque confiável",
      excerpt:
        "Descubra os critérios importantes para selecionar uma empresa de reboque segura e eficiente.",
      date: "2024-01-10",
      author: "Equipe Allô Guincho",
      readTime: "4 min",
      category: "Guia do Cliente",
      slug: "como-escolher-servico-reboque-confiavel",
    },
    {
      id: 3,
      title: "Manutenção preventiva: evite quebras inesperadas",
      excerpt:
        "Dicas de manutenção que podem evitar problemas e a necessidade de reboque de emergência.",
      date: "2024-01-08",
      author: "Equipe Allô Guincho",
      readTime: "6 min",
      category: "Manutenção",
      slug: "manutencao-preventiva-evite-quebras-inesperadas",
    },
    {
      id: 4,
      title: "Reboque vs. Conserto no Local: quando chamar cada um?",
      excerpt:
        "Entenda quando é melhor rebocar o veículo ou tentar um conserto emergencial no local.",
      date: "2024-01-05",
      author: "Equipe Allô Guincho",
      readTime: "4 min",
      category: "Dicas Técnicas",
      slug: "reboque-vs-conserto-local-quando-chamar",
    },
    {
      id: 5,
      title: "Documentos necessários para reboque",
      excerpt:
        "Lista completa dos documentos que você precisa ter em mãos durante um serviço de reboque.",
      date: "2024-01-03",
      author: "Equipe Allô Guincho",
      readTime: "3 min",
      category: "Documentação",
      slug: "documentos-necessarios-para-reboque",
    },
    {
      id: 6,
      title: "Cuidados especiais no reboque de veículos automáticos",
      excerpt:
        "Precauções importantes que devem ser tomadas ao rebocar carros com transmissão automática.",
      date: "2024-01-01",
      author: "Equipe Allô Guincho",
      readTime: "5 min",
      category: "Dicas Técnicas",
      slug: "cuidados-reboque-veiculos-automaticos",
    },
  ];

  const categories = [
    "Todos",
    "Dicas de Segurança",
    "Guia do Cliente",
    "Manutenção",
    "Dicas Técnicas",
    "Documentação",
  ];

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Blog Allô Guincho
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dicas, guias e informações importantes sobre serviços de reboque,
            manutenção automotiva e segurança no trânsito.
          </p>
        </div>

        {/* Minha Localização Section */}
        <div className="mb-16">
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-orange-50 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Nossa Localização
                </h2>
              </div>

              <div className="text-center mb-6">
                <p className="text-lg text-muted-foreground mb-4">
                  Atendemos 24 horas na Grande São Paulo, interior e litoral
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Grande São Paulo
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Capital e região metropolitana
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Interior Paulista
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Campinas, Sorocaba, Ribeirão
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Litoral
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Santos e Baixada Santista
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary-hover">
                    <a href={`tel:${CONTACT_CONFIG.phone.link}`}>
                      Ligar: {CONTACT_CONFIG.phone.display}
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
                  >
                    <a
                      href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="border-0 bg-gradient-primary text-white overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
                    Artigo em Destaque
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-white/90 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-white/80 text-sm mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime} de leitura</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    <Link
                      to={`/blog/${blogPosts[0].slug}`}
                      className="flex items-center space-x-2"
                    >
                      <span>Ler Artigo</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Tópicos Abordados:</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Sinalizando o veículo com segurança</li>
                    <li>• Quando tentar resolver sozinho</li>
                    <li>• Como chamar ajuda profissional</li>
                    <li>• Documentos necessários</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category ? "bg-gradient-primary" : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .slice(selectedCategory === "Todos" ? 1 : 0)
            .map((post) => (
              <Card
                key={post.id}
                className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary-hover"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center space-x-2"
                    >
                      <span>Ler mais</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Empty State for Filter */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhum artigo encontrado nesta categoria.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-secondary rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Reboque?</h2>
          <p className="text-xl mb-6 opacity-90">
            Não perca tempo lendo artigos em uma emergência. Entre em contato
            conosco agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover shadow-primary"
            >
              <a
                href={`tel:${CONTACT_CONFIG.phone.link}`}
                className="flex items-center space-x-2"
              >
                <span>Ligar: {CONTACT_CONFIG.phone.display}</span>
              </a>
            </Button>
            <Button
              asChild
              className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
            >
              <a
                href={`https://wa.me/${CONTACT_CONFIG.phone.whatsapp}?text=Olá! Preciso de reboque urgente.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
