import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Design */}
      <section className="relative bg-gradient-to-br from-[#F5F0E8] via-white to-[#FAF7F2] py-20 md:py-32 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-[#8B6F47]/20 rounded-full blur-3xl blob-animate"></div>
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-[#D4C5B0]/30 rounded-full blur-3xl blob-animate"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-primary/20 animate-fade-in">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Free Consultation Available
                </span>
              </div>

              {/* Headline with Motion Text */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-foreground">Ready to Start Your</span>
                <br />
                <span className="text-shimmer bg-gradient-to-r from-primary via-primary/80 to-primary">
                  Credit Journey?
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Fill out the form below, and our team will reach out to you to
                schedule your free consultation. Your financial comeback starts
                with one conversation.
              </p>

              {/* Quick Stats */}
              <div
                className="grid grid-cols-3 gap-4 pt-4 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                {[
                  { value: "24h", label: "Response Time" },
                  { value: "Free", label: "Consultation" },
                  { value: "Expert", label: "Guidance" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-md border border-border"
                  >
                    <div className="text-2xl md:text-3xl font-black text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#D4C5B0]/30 rounded-3xl transform -rotate-3 blur-sm"></div>

                {/* Image container */}
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80"
                    alt="Professional consultation and customer support"
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                  />

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold text-sm">Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3 animate-slide-in-left">
              <Card className="border-2 border-border rounded-3xl shadow-xl p-8 bg-white">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-3xl font-black text-foreground mb-3">
                    Get Your Free Consultation
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Fill out the form below and we'll contact you within 24
                    hours to schedule your free consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-foreground mb-3">
                        Thank You!
                      </h3>
                      <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        We've received your message and will contact you within
                        24 hours to schedule your free consultation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="h-14 text-base rounded-xl border-2 border-border focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="h-14 text-base rounded-xl border-2 border-border focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-foreground mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          required
                          className="h-14 text-base rounded-xl border-2 border-border focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-bold text-foreground mb-2"
                        >
                          Message / Credit Concern *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your credit situation and goals..."
                          required
                          rows={6}
                          className="text-base rounded-xl border-2 border-border focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="button-hover w-full hover:bg-[#453021] hover:text-white bg-white text-[#453021] h-14 text-lg font-bold rounded-xl shadow-xl"
                      >
                        Submit Your Request
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
              {/* Contact Information Card */}
              <Card className="border-2 border-border rounded-3xl shadow-xl p-8 bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-black text-[#453021]">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+1 (817) 307-6564",
                      subtext: "Mon-Fri, 9AM-6PM CST",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "support@bearcredit.net",
                      subtext: "We respond within 24 hours",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      content: "Mansfield, TX 76063",
                      subtext: "",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday",
                      subtext: "9:00 AM - 6:00 PM CST",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#453021]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#453021] text-sm mb-1">
                          {item.title}
                        </div>
                        <div className="text-[#453021] font-semibold">
                          {item.content}
                        </div>
                        <div className="text-[#453021] text-sm mt-1">
                          {item.subtext}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Links Card */}
              <Card className="border-2 border-border rounded-3xl shadow-xl p-8 bg-white">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-black text-foreground">
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  {[
                    { text: "View Our Services", link: "/services" },
                    { text: "About Bear Credit", link: "/about" },
                    { text: "Success Stories", link: "/" },
                    { text: "FAQs", link: "/services" },
                  ].map((link, index) => (
                    <Link key={index} to={link.link}>
                      <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group">
                        <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                          {link.text}
                        </span>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F0E8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Why Bear Credit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Why Clients
              <span className="text-primary"> Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Experience the Bear Credit difference with our proven approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Results',
                description: 'See improvements in as little as 30-60 days with our proven strategies.',
                color: 'from-yellow-500/20 to-yellow-600/20'
              },
              {
                icon: CheckCircle,
                title: '95% Success Rate',
                description: 'Join thousands of satisfied clients who achieved their credit goals.',
                color: 'from-green-500/20 to-green-600/20'
              },
              {
                icon: Star,
                title: 'Expert Team',
                description: 'Work with certified credit specialists with years of experience.',
                color: 'from-blue-500/20 to-blue-600/20'
              }
            ].map((feature, index) => (
              <Card key={index} className="card-hover text-center border-2 border-border hover:border-primary/50 rounded-2xl animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories Section */}
      {/* <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Real Results from
              <span className="text-primary"> Real People</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Maria Gonzalez',
                result: '+165 Points',
                timeframe: '5 months',
                story: 'I was able to buy my first home thanks to Bear Credit. They helped me dispute errors and build my score from 520 to 685!',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
              },
              {
                name: 'James Wilson',
                result: '+140 Points',
                timeframe: '4 months',
                story: 'After bankruptcy, I thought I would never recover. Bear Credit gave me hope and a clear path forward. Highly recommend!',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
              }
            ].map((story, index) => (
              <Card key={index} className="card-hover border-2 border-border hover:border-primary/50 rounded-2xl p-8 animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{story.name}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                          {story.result}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          in {story.timeframe}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{story.story}"
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#8B6F47] via-[#6B5538] to-[#5D4A2F] gradient-animate text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Your Financial Comeback
              <br />
              <span className="text-white/90">Starts Here</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
              Don't wait another day. Take control of your credit and transform
              your financial future.
            </p>

            <Button
              size="lg"
              className="button-hover bg-white text-[#453021] hover:bg-white/90 px-10 py-6 text-lg font-bold rounded-xl shadow-2xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get Started Today
            </Button>

            <p className="text-white/80 mt-8 text-sm">
              ✓ Free Consultation • ✓ No Obligation • ✓ 24h Response Time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
