import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Shield, TrendingUp, Users, CheckCircle, Phone, Target, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Credit Report Review",
      description: "We analyze your credit report and explain every detail, helping you understand what's affecting your score.",
      features: [
        "Comprehensive credit report analysis",
        "Detailed explanation of each factor",
        "Identification of improvement opportunities",
        "Personalized recommendations"
      ],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Shield,
      title: "Dispute Assistance",
      description: "We guide you through the process of disputing errors that may affect your score with proven strategies.",
      features: [
        "Error identification and documentation",
        "Dispute letter preparation",
        "Follow-up with credit bureaus",
        "Progress tracking and updates"
      ],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: TrendingUp,
      title: "Credit Building Guidance",
      description: "Learn strategies to rebuild and maintain a healthy credit profile for long-term financial success.",
      features: [
        "Credit building strategies",
        "Payment optimization tips",
        "Credit utilization guidance",
        "Long-term maintenance plans"
      ],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Users,
      title: "Financial Consultation",
      description: "Personalized tips to manage debt and improve creditworthiness with expert financial guidance.",
      features: [
        "Debt management strategies",
        "Budget planning assistance",
        "Financial goal setting",
        "Ongoing support and guidance"
      ],
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-[#F5F0E8] via-white to-[#FAF7F2] py-20 md:py-32 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[#8B6F47]/20 rounded-full blur-3xl blob-animate"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#D4C5B0]/30 rounded-full blur-3xl blob-animate" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-primary/20 animate-fade-in">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Comprehensive Services</span>
              </div>
              
              {/* Headline with Motion Text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight animate-fade-in" style={{animationDelay: '0.2s'}}>
                <span className="text-foreground">Transform Your Credit with</span>
                <br />
                <span className="text-shimmer bg-gradient-to-r from-primary via-primary/80 to-primary">
                  Expert Services
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{animationDelay: '0.4s'}}>
                Our goal is not just to fix credit — it's to empower you with knowledge and confidence. We provide comprehensive credit repair consultation services to help you achieve your financial goals.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Link to="/contact">
                  <Button size="lg" className="button-hover bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold rounded-xl shadow-xl w-full sm:w-auto">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="button-hover px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl w-full sm:w-auto">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#D4C5B0]/30 rounded-3xl transform rotate-3 blur-sm"></div>
                
                {/* Image container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80"
                    alt="Professional financial planning and credit services"
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                  />
                  
                  {/* Floating stat badge */}
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-black">95%</div>
                      <div className="text-xs">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Complete
              <span className="text-primary"> Credit Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Everything you need to build, repair, and maintain excellent credit.
            </p>
          </div>

          {/* Services Grid with Alternating Layout */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''} animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="button-hover bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl mt-4">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`} style={{animationDelay: `${index * 0.1 + 0.2}s`}}>
                  <Card className="card-hover bg-gradient-to-br from-white to-secondary border-2 border-border rounded-3xl shadow-xl p-8">
                    <CardContent className="p-0">
                      <div className="space-y-6">
                        <div className={`w-full h-64 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                          <service.icon className="w-32 h-32 text-primary/40" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-border text-center">
                            <div className="text-2xl font-black text-primary">Fast</div>
                            <div className="text-sm text-muted-foreground mt-1">Results</div>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-border text-center">
                            <div className="text-2xl font-black text-primary">Expert</div>
                            <div className="text-sm text-muted-foreground mt-1">Guidance</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F0E8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              How We
              <span className="text-primary"> Help You Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              A simple, proven process to transform your credit in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We discuss your goals and review your current credit situation.',
                icon: Phone
              },
              {
                step: '02',
                title: 'Analysis & Strategy',
                description: 'We create a personalized action plan tailored to your needs.',
                icon: Target
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We guide you through each step with ongoing support.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Results & Growth',
                description: 'Watch your credit score improve and achieve your goals.',
                icon: TrendingUp
              }
            ].map((process, index) => (
              <div key={index} className="relative animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                <Card className="card-hover bg-white border-2 border-border hover:border-primary/50 rounded-2xl h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl font-black text-primary/20">{process.step}</div>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl flex items-center justify-center">
                        <process.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {process.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#8B6F47] via-[#6B5538] to-[#5D4A2F] gradient-animate text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-white/90">Credit Journey?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards better credit.
            </p>

            <Link to="/contact">
              <Button size="lg" className="button-hover  bg-[#453021] hover:text-black/90 text-white hover:bg-white/90 px-10 py-6 text-lg font-bold rounded-xl shadow-2xl">
                Schedule Free Consultation
              </Button>
            </Link>

            <p className="text-white/80 mt-8 text-sm">
              ✓ No Obligation  •  ✓ 100% Confidential  •  ✓ Expert Guidance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
