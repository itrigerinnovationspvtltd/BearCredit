import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Shield, TrendingUp, Users, Star, Award, Clock, Target, ChevronDown, ChevronUp, HelpCircle, Sprout, LineChart, Search, Home as HomeIcon, DollarSign, RefreshCw } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Classy Full-Height Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Full-height background image with overlay */}
        <div className="absolute inset-0">
          <LazyImage
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop&q=80"
            alt="Professional financial success"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-[#D4C5B0]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-3 rounded-full border border-primary/20 backdrop-blur-sm">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-foreground">Trusted by 2,500+ Clients Nationwide</span>
              </div>
              
              {/* Headline with Motion Text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-foreground">Take Charge of Your</span>
                <br />
                <span className="text-shimmer bg-gradient-to-r from-primary via-primary/80 to-primary">
                  Financial Future
                </span>
                <br />
                <span className="text-foreground">Starting Today!</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                No Ads, No Spam. Get your Credit Score Hassle-free. Bear Credit is the best service to build and improve your credit score.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="button-hover bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold rounded-xl shadow-xl w-full sm:w-auto">
                    Get Your Score Now
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="button-hover px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>

              {/* Stats Row - Premium Design */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative text-center p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary to-[#6B5538] bg-clip-text text-transparent">2.5K+</div>
                    <div className="text-xs md:text-sm text-foreground font-bold mt-2">Clients</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative text-center p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary to-[#6B5538] bg-clip-text text-transparent">150+</div>
                    <div className="text-xs md:text-sm text-foreground font-bold mt-2">Score Boost</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
                  <div className="relative text-center p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-primary to-[#6B5538] bg-clip-text text-transparent">95%</div>
                    <div className="text-xs md:text-sm text-foreground font-bold mt-2">Success</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-foreground">BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-sm font-semibold text-foreground">5-Star Rated</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Floating Card with Stats */}
            <div className="relative lg:block hidden animate-slide-in-right">
              <div className="relative">
                {/* Main floating card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-primary/10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-6 border-b border-border">
                      <h3 className="text-2xl font-black text-foreground">Your Credit Score</h3>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">Excellent</div>
                    </div>
                    
                    {/* Large score display */}
                    <div className="text-center py-8">
                      <div className="inline-flex items-end gap-2">
                        <span className="text-8xl font-black bg-gradient-to-br from-primary to-[#6B5538] bg-clip-text text-transparent">750</span>
                        <span className="text-2xl font-bold text-muted-foreground mb-4">+</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4 font-medium">Average score improvement</p>
                    </div>

                    {/* Progress indicators */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-2">
                          <span className="text-foreground">Payment History</span>
                          <span className="text-primary">Excellent</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-green-500 w-[95%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-2">
                          <span className="text-foreground">Credit Utilization</span>
                          <span className="text-primary">Very Good</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-green-500 w-[85%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm font-semibold mb-2">
                          <span className="text-foreground">Credit History</span>
                          <span className="text-primary">Good</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-green-500 w-[75%] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* CTA inside card */}
                    <div className="pt-6 border-t border-border">
                      <Link to="/contact">
                        <Button className="w-full bg-primary text-white hover:bg-primary/90 py-6 rounded-xl font-bold text-base">
                          Get Your Free Credit Analysis
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl animate-bounce-gentle">
                  <span className="font-bold text-sm">✓ Verified Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Everything You Need to
              <span className="text-primary"> Build Better Credit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Comprehensive credit repair services designed to help you achieve your financial goals faster.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Shield,
                title: 'Credit Report Review',
                description: 'Detailed analysis of your credit report with expert insights.',
                delay: '0s'
              },
              {
                icon: Target,
                title: 'Dispute Assistance',
                description: 'Professional guidance through the error dispute process.',
                delay: '0.2s'
              },
              {
                icon: TrendingUp,
                title: 'Credit Building',
                description: 'Proven strategies to rebuild and maintain healthy credit.',
                delay: '0.4s'
              },
              {
                icon: Users,
                title: 'Personal Consultation',
                description: 'One-on-one support tailored to your unique situation.',
                delay: '0.6s'
              }
            ].map((service, index) => (
              <Card key={index} className="card-hover bg-white border-2 border-border hover:border-primary/50 rounded-2xl animate-scale-in" style={{animationDelay: service.delay}}>
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/30 rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="button-hover px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F0E8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Who We Help</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Is Bear Credit
              <span className="text-primary"> Right for You?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              We help individuals at every stage of their credit journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'First-Time Credit Builders',
                description: 'Starting your credit journey and need expert guidance.',
                icon: Sprout,
                gradient: 'from-green-500/20 to-green-600/20',
                iconColor: 'text-green-600'
              },
              {
                title: 'Credit Score Improvers',
                description: 'Looking to boost your existing credit score significantly.',
                icon: LineChart,
                gradient: 'from-blue-500/20 to-blue-600/20',
                iconColor: 'text-blue-600'
              },
              {
                title: 'Error Dispute Seekers',
                description: 'Found errors on your report and need help fixing them.',
                icon: Search,
                gradient: 'from-purple-500/20 to-purple-600/20',
                iconColor: 'text-purple-600'
              },
              {
                title: 'Loan Applicants',
                description: 'Preparing for a major purchase like a home or car.',
                icon: HomeIcon,
                gradient: 'from-orange-500/20 to-orange-600/20',
                iconColor: 'text-orange-600'
              },
              {
                title: 'Debt Management',
                description: 'Managing debt and working toward financial freedom.',
                icon: DollarSign,
                gradient: 'from-amber-500/20 to-amber-600/20',
                iconColor: 'text-amber-600'
              },
              {
                title: 'Financial Recovery',
                description: 'Recovering from bankruptcy or financial hardship.',
                icon: RefreshCw,
                gradient: 'from-primary/20 to-primary/30',
                iconColor: 'text-primary'
              }
            ].map((item, index) => (
              <Card key={index} className="card-hover bg-white border-2 border-border hover:border-primary/50 rounded-2xl text-center animate-scale-in group" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mx-auto mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <item.icon className={`w-10 h-10 ${item.iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Bear Credit */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform -rotate-3 blur-sm"></div>
                <LazyImage
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=800&fit=crop"
                  alt="Professional credit counselor"
                  className="relative rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                Why Trust
                <span className="text-primary"> Bear Credit?</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We believe everyone deserves a second chance to build strong financial health. Our personalized approach helps you understand your credit, fix issues, and create a clear path forward.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: 'Proven Track Record',
                    description: '95% success rate with over 2,500 satisfied clients'
                  },
                  {
                    icon: Shield,
                    title: 'Complete Transparency',
                    description: 'No hidden fees, no false promises, just honest service'
                  },
                  {
                    icon: Users,
                    title: 'Personalized Support',
                    description: 'One-on-one guidance tailored to your unique situation'
                  },
                  {
                    icon: Clock,
                    title: 'Fast Results',
                    description: 'See improvements in as little as 30-60 days'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button size="lg" className="button-hover bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-bold rounded-xl shadow-xl mt-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Common
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Get answers to the most frequently asked questions about credit repair.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does credit repair take?",
                answer: "The timeline varies depending on your specific situation. Most clients see improvements within 3-6 months, but some complex cases may take longer. We provide realistic timelines during your consultation and keep you updated throughout the process."
              },
              {
                question: "Will credit repair guarantee results?",
                answer: "While we cannot guarantee specific results, we have a proven track record of helping clients improve their credit scores. Our success rate is over 95% for clients who follow our recommendations and stay committed to the process."
              },
              {
                question: "Can I repair my credit myself?",
                answer: "Yes, you can repair your credit yourself, but it requires significant time, knowledge, and persistence. Our experts can guide you through the process more efficiently and help you avoid common mistakes that could delay your progress."
              },
              {
                question: "What documents are required?",
                answer: "We'll need copies of your credit reports from all three bureaus, valid identification, and any relevant financial documents. We'll provide a complete list during your consultation to make the process simple and stress-free."
              },
              {
                question: "How much does credit repair cost?",
                answer: "We offer flexible pricing plans starting at $99/month. Each plan includes different levels of service, from basic credit review to comprehensive credit transformation with personal coaching. Schedule a free consultation to find the plan that's right for you."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-primary font-bold text-lg mt-1">Q:</span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex gap-3 bg-secondary/30 p-4 rounded-xl">
                      <span className="text-primary font-bold text-lg">A:</span>
                      <p className="text-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Hear From Our
              <span className="text-primary"> Happy Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Real stories from real people who transformed their credit with Bear Credit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'First-Time Home Buyer',
                content: 'Bear Credit helped me improve my score by 180 points in just 6 months. I finally bought my dream home!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
              },
              {
                name: 'Michael Chen',
                role: 'Small Business Owner',
                content: 'Professional, honest, and effective. They helped me fix errors and build better credit for my business.',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Recent Graduate',
                content: 'Starting my credit journey with Bear Credit was the best decision. Great support and clear guidance!',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="card-hover bg-white border-2 border-border hover:border-primary/50 rounded-2xl animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 text-base leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
