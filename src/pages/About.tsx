import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Heart, Target, Users, Award, Shield, TrendingUp, CheckCircle, Star, Clock } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-[#F5F0E8] via-white to-[#FAF7F2] py-20 md:py-32 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[#8B6F47]/20 rounded-full blur-3xl blob-animate"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#D4C5B0]/30 rounded-full blur-3xl blob-animate" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Trusted Since 2016</span>
              </div>
              
              {/* Headline with Motion Text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-foreground">We're</span>
                <br />
                <span className="text-shimmer bg-gradient-to-r from-primary via-primary/80 to-primary">
                  Bear Credit
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                We believe everyone deserves a second chance to build strong financial health. At Bear Credit, we provide personalized consultations to help you understand your credit report, identify issues, and create a clear path towards better credit.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With honesty, transparency, and proven strategies, we help you take the first step toward financial freedom.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-border animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl md:text-5xl font-black text-primary">8+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-border animate-scale-in" style={{animationDelay: '0.4s'}}>
                  <div className="text-4xl md:text-5xl font-black text-primary">2,500+</div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium mt-2">Lives Changed</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Decorative background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform rotate-3 blur-sm"></div>
                
                {/* Main image container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional team meeting"
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
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

      {/* Mission & Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Mission &
              <span className="text-primary"> Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              With honesty, transparency, and proven strategies, we help you take the first step toward financial freedom.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We understand that financial struggles can be overwhelming. We approach every client with empathy and understanding.',
                color: 'from-pink-500/20 to-pink-600/20'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Complete transparency in our process and pricing. No hidden fees, no false promises, just honest service.',
                color: 'from-blue-500/20 to-blue-600/20'
              },
              {
                icon: Target,
                title: 'Excellence',
                description: 'We strive for the best possible results through proven strategies and continuous improvement.',
                color: 'from-green-500/20 to-green-600/20'
              },
              {
                icon: Users,
                title: 'Empowerment',
                description: "We educate our clients to make informed decisions about their financial future. It's your credit, we help you control it.",
                color: 'from-purple-500/20 to-purple-600/20'
              }
            ].map((value, index) => (
              <Card key={index} className="card-hover text-center border-2 border-border hover:border-primary/50 rounded-2xl animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F0E8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform -rotate-3 blur-sm"></div>
                <LazyImage
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 animate-slide-in-right order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-semibold text-foreground">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Building Trust,
                <span className="text-primary"> One Client at a Time</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, Bear Credit was born from a simple belief: everyone deserves a fair chance to achieve financial success, regardless of their past.
                </p>
                <p>
                  Our founder experienced firsthand the challenges of rebuilding credit after financial hardship. That personal journey inspired the creation of a service that combines expert knowledge with genuine care for each client's unique situation.
                </p>
                <p>
                  Today, we've helped over 2,500 individuals and families transform their credit scores and achieve their financial goals. From first-time home buyers to small business owners, each success story fuels our passion to help more people.
                </p>
                <p className="font-semibold text-foreground">
                  We're not just fixing credit scores – we're changing lives.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Licensed & Bonded</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#8B6F47] via-[#6B5538] to-[#5D4A2F] gradient-animate text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              Real results from real people who trusted Bear Credit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '2,500+', label: 'Happy Clients' },
              { icon: TrendingUp, value: '150+', label: 'Avg Score Increase' },
              { icon: Award, value: '95%', label: 'Success Rate' },
              { icon: Clock, value: '60', label: 'Days to Results' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Ready to
              <span className="text-primary"> Start Your Journey?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 font-light max-w-2xl mx-auto">
              Join thousands of satisfied clients who transformed their credit with Bear Credit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="button-hover bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-bold rounded-xl shadow-xl w-full sm:w-auto">
                  Get Your Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="button-hover border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-lg font-bold rounded-xl w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </div>

            <p className="text-muted-foreground mt-8 text-sm">
              ✓ No Obligation  •  ✓ 100% Confidential  •  ✓ Personalized Approach
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
