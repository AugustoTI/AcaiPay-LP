import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CreditCard,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  SquareArrowOutUpRight,
} from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function AcaiPayLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <div className="bg-white rounded-full shadow-xl border border-gray-100 px-6 py-3 flex items-center justify-between">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <Image
              src="/images/acaipay-logo.png"
              alt="AçaiPay"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              AçaiPay
            </span>
          </Link>
          <nav className="hidden lg:flex gap-6 items-center">
            <Link
              href="#solucoes"
              className="text-sm font-medium hover:text-primary-600 transition-colors text-gray-600"
              prefetch={false}
            >
              Soluções
            </Link>
            <Link
              href="#precos"
              className="text-sm font-medium hover:text-primary-600 transition-colors text-gray-600"
              prefetch={false}
            >
              Preços
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary-600 transition-colors text-gray-600"
              prefetch={false}
            >
              FAQ
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium hover:text-primary-600 transition-colors text-gray-600"
              prefetch={false}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Button
              variant="ghost"
              className="text-sm bg-primary-50 text-primary-700 hover:bg-primary-50 hover:text-primary-700 rounded-full px-4 py-2 font-medium border border-primary-200"
            >
              Entrar
            </Button>
            <Button className="text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-full px-4 py-2 font-medium shadow-lg">
              Abra sua conta <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden hover:bg-primary-600"
              >
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <ul className="space-y-5 mt-9">
                <li className="flex justify-between items-center border border-black p-2 rounded-md">
                  Entrar <SquareArrowOutUpRight size={20} />
                </li>
                <li className="flex justify-between items-center border border-black p-2 rounded-md">
                  Abra sua conta <SquareArrowOutUpRight size={20} />
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Add padding to main content to account for fixed header */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-primary-50/30">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 mb-4">
                🚀 O Futuro dos Pagamentos Digitais
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900  md:text-7xl">
                Pagamentos rápidos, seguros e sem complicação.
              </h1>
              <p className="text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
                A AçaiPay conecta sua empresa ao futuro dos pagamentos digitais.
                Integração simples, taxas transparentes e suporte 24/7 para
                impulsionar seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-white hover:bg-primary-700 bg-primary-600 shadow-xl px-8 py-3"
                >
                  Começar agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-3 bg-transparent"
                >
                  Ver demonstração
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Sem taxa de setup. Integração em minutos.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <div className="bg-gradient-to-br from-primary-200 to-green-100 rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className=" font-semibold text-lg">
                        Dashboard AçaiPay
                      </h3>
                      <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Ao vivo
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Vendas hoje</p>
                        <p className=" font-bold text-2xl text-primary-600">
                          R$ 12.450
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Transações</p>
                        <p className=" font-bold text-2xl text-green-600">
                          847
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Companies Section */}
        <section className="w-full py-12 bg-white border-b border-gray-100">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Mais de 10.000 empresas confiam na AçaiPay
              </p>
            </div>
            <InfiniteSlider gap={48} reverse className="w-full">
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                  <span className="text-white font-bold text-sm">FinTech</span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
                  <span className="text-white font-bold text-sm">E-comm</span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                  <span className="text-white font-bold text-sm">SaaS</span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                  <span className="text-white font-bold text-sm">Retail</span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg">
                  <span className="text-white font-bold text-sm">
                    Marketplace
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg">
                  <span className="text-white font-bold text-sm">StartUp</span>
                </div>
              </div>
              <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-20 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg">
                  <span className="text-white font-bold text-sm">Digital</span>
                </div>
              </div>
            </InfiniteSlider>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Cansado da burocracia dos pagamentos?
              </h2>
              <p className="mt-4 text-gray-600">
                Integrações complexas, taxas ocultas e suporte limitado podem
                prejudicar seu negócio. A AçaiPay simplifica tudo.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Integração Simples
                </h3>
                <p className="text-gray-600">
                  Configure em minutos com nossa API intuitiva e documentação
                  completa.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Taxas Transparentes
                </h3>
                <p className="text-gray-600">
                  Sem surpresas na fatura. Preços claros e sem custos ocultos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Suporte 24/7
                </h3>
                <p className="text-gray-600">
                  Equipe especializada sempre disponível para resolver suas
                  dúvidas rapidamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="solucoes"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Conheça a AçaiPay: Pagamentos Simplificados.
              </h2>
              <p className="mt-4 text-gray-600">
                Oferecemos ferramentas intuitivas para gerenciar todos os
                aspectos dos seus pagamentos digitais, sem complicação.
              </p>
            </div>
            <div className="grid gap-12 md:gap-16">
              {/* Feature 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary-50 to-primary-300/45 rounded-xl p-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Integração AçaiPay</h4>
                        <Zap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-sm font-mono">
                        npm install acaipay-sdk
                      </div>
                      <div className="text-sm text-primary-700">
                        ✓ Integração completa em 5 minutos
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 mb-2">
                    <Zap className="inline-block h-4 w-4 mr-1" /> Integração
                    Simples
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Configure em Minutos, Não em Semanas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nossa API intuitiva e documentação completa permitem
                    integração rápida. SDK disponível para todas as principais
                    linguagens de programação.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Documentação clara e exemplos práticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      SDKs para PHP, Node.js, Python e mais
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Sandbox para testes ilimitados
                    </li>
                  </ul>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-last">
                  <div className="bg-gradient-to-br from-primary-300/45 to-primary-50 rounded-xl p-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">
                            Métodos de Pagamento
                          </h4>
                          <CreditCard className="h-5 w-5 text-primary-700" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-primary-50 rounded p-2 text-center text-xs">
                            PIX
                          </div>
                          <div className="bg-primary-200/45 rounded p-2 text-center text-xs">
                            Cartão
                          </div>
                          <div className="bg-gray-50 rounded p-2 text-center text-xs">
                            Boleto
                          </div>
                        </div>
                        <div className="text-sm text-primary-700">
                          ✓ Todos os métodos em uma API
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 mb-2">
                    <CreditCard className="inline-block h-4 w-4 mr-1" /> Todos
                    os Métodos
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    PIX, Cartão e Boleto em Um Só Lugar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ofereça todos os métodos de pagamento que seus clientes
                    preferem. PIX instantâneo, cartões de crédito e débito, e
                    boleto bancário.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      PIX com aprovação instantânea
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Cartões com antifraude avançado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Boleto com vencimento flexível
                    </li>
                  </ul>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary-50 to-primary-300/45 rounded-xl p-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">Suporte 24/7</h4>
                        <Users className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        </div>
                        <span className="text-sm">Especialista online</span>
                      </div>
                      <div className="text-sm text-primary-700">
                        ✓ Resposta em menos de 2 minutos
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 mb-2">
                    <Users className="inline-block h-4 w-4 mr-1" /> Suporte
                    Humano
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    Suporte Real, Quando Você Precisa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nossa equipe de especialistas está disponível 24/7 para
                    resolver qualquer dúvida. Chat ao vivo, telefone e email com
                    resposta rápida.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Chat ao vivo com especialistas
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Telefone e WhatsApp Business
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Base de conhecimento completa
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="precos"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Planos Transparentes para Todos os Tamanhos
              </h2>
              <p className="mt-4 text-gray-600">
                Escolha o plano ideal para seu negócio. Sem taxas ocultas,
                sempre.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="shadow-lg border border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Starter
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Ideal para começar a vender online.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-extrabold text-gray-900">
                    2,9%{" "}
                    <span className="text-xl font-normal text-gray-500">
                      por transação
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Até R$ 10.000/mês
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      PIX, cartão e boleto
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Dashboard básico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Suporte por email
                    </li>
                  </ul>
                  <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                    Começar grátis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-2 border-primary-300 relative bg-gradient-to-br from-primary-50 to-white">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-lg">
                  Mais Popular
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Pro
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Para negócios em crescimento.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-extrabold text-gray-900">
                    2,4%{" "}
                    <span className="text-xl font-normal text-gray-500">
                      por transação
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Até R$ 100.000/mês
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Todos os métodos de pagamento
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Dashboard avançado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Suporte prioritário 24/7
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      API completa
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />{" "}
                      Webhooks em tempo real
                    </li>
                  </ul>
                  <Button className="w-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg">
                    Começar agora <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full blur-lg"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-200 rounded-full blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
          </div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Transforme seus recebimentos com a AçaiPay
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-100">
              Junte-se a milhares de empresas que já escolheram a melhor solução
              de pagamentos do Brasil.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-100 shadow-xl"
              >
                Começar agora mesmo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-gray-900">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600">
                  O que é a AçaiPay?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A AçaiPay é um gateway de pagamentos brasileiro que oferece
                  soluções completas para recebimentos online. Integramos PIX,
                  cartões e boleto em uma única API, com foco em simplicidade e
                  transparência.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600">
                  Como funciona a integração?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Nossa integração é simples e rápida. Oferecemos SDKs para as
                  principais linguagens, documentação completa e ambiente de
                  testes. A maioria dos desenvolvedores consegue integrar em
                  menos de uma hora.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600 text-left">
                  Quais métodos de pagamento vocês aceitam?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Aceitamos PIX (com aprovação instantânea), cartões de crédito
                  e débito (Visa, Mastercard, Elo, Amex) e boleto bancário.
                  Todos os métodos estão disponíveis em uma única integração.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600">
                  Existem taxas ocultas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Não! Nossa política é de total transparência. Você paga apenas
                  a taxa por transação aprovada, sem mensalidades, taxas de
                  setup ou custos ocultos. Tudo está claro em nossos planos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600">
                  Como funciona o suporte?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oferecemos suporte humano 24/7 via chat, telefone e WhatsApp
                  Business. Nossa equipe de especialistas tem tempo médio de
                  resposta de 2 minutos e está sempre pronta para ajudar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contato"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="footerGrid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footerGrid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-16 h-16 bg-primary-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-12 h-12 bg-green-300 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/acaipay-logo.png"
                  alt="AçaiPay"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="ml-2 text-2xl font-bold">AçaiPay</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                A solução completa de pagamentos para o seu negócio digital.
                Simples, seguro e transparente.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#solucoes"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#precos"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Preços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Sandbox
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Imprensa
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Parceiros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Central de ajuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Segurança
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="text-white font-semibold mb-2">
                Fique por dentro
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Receba as últimas novidades e dicas sobre pagamentos digitais.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm"
                />
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 text-sm">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AçaiPay. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
