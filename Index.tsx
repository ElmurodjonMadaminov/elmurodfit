import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { QuickReferenceCard } from "@/components/fueling/QuickReferenceCard";
import { CarbSourceCard } from "@/components/fueling/CarbSourceCard";
import { DataTable } from "@/components/fueling/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Waves,
  Bike,
  PersonStanding,
  Zap,
  Target,
  Calculator,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-background blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-background blur-3xl" />
        </div>
        <div className="container relative">
          <Badge className="mb-4 bg-background/20 text-primary-foreground border-0">
            Science-Based Nutrition Guide
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 max-w-4xl">
            Triathlon Carbohydrate Fueling Guide
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
            Race-specific strategies for Sprint, Olympic, Half Ironman, and Ironman distances.
            Get your personalized fueling plan in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/calculator">
                <Calculator className="w-5 h-5" />
                Get My Fueling Plan
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="#guide">
                Read the Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full">
              <Waves className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground">Swim</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full">
              <Bike className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground">Bike</span>
            </div>
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full">
              <PersonStanding className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground">Run</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 space-y-16" id="guide">
        {/* CTA Banner */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-accent/10 via-accent/5 to-transparent">
          <CardContent className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">
                  Get Your Personalized Fueling Plan
                </h2>
                <p className="text-muted-foreground text-sm">
                  Enter your race details and download a custom PDF plan
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link to="/calculator">
                Start Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Reference Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Quick Reference by Distance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickReferenceCard
              distance="Sprint"
              duration="45min - 1.5hr"
              carbsPerHour="30-60g"
              totalCarbs="30-90g"
              color="swim"
            />
            <QuickReferenceCard
              distance="Olympic"
              duration="2-3hr"
              carbsPerHour="60-80g"
              totalCarbs="120-240g"
              color="bike"
            />
            <QuickReferenceCard
              distance="Half Ironman"
              duration="4-7hr"
              carbsPerHour="80-100g"
              totalCarbs="320-700g"
              color="run"
            />
            <QuickReferenceCard
              distance="Ironman"
              duration="8-17hr"
              carbsPerHour="90-120g"
              totalCarbs="720-1500g+"
              color="primary"
            />
          </div>
        </section>

        {/* Key Principle */}
        <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-secondary/20">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-2">The Golden Rule</h3>
              <p className="text-muted-foreground">
                <strong>Longer races = higher carb intake.</strong> As race duration increases,
                your body relies more on external carbohydrates. Train your gut to handle race-day
                intake—never try new nutrition on race day.
              </p>
            </div>
          </div>
        </div>

        {/* Timing Overview */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Fueling Timeline Overview
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <Badge className="mb-3 bg-muted">Pre-Race</Badge>
                <h3 className="font-display font-bold mb-2">3-4 Hours Before</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    2-4g carbs per kg body weight
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Low fiber, easy to digest
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Familiar foods only
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <Badge className="mb-3 bg-swim text-primary-foreground">Swim → Bike</Badge>
                <h3 className="font-display font-bold mb-2">T1 Transition</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Quick sip of sports drink
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Start bike fueling within 15min
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Don't waste time eating in T1
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <Badge className="mb-3 bg-bike text-primary-foreground">On the Bike</Badge>
                <h3 className="font-display font-bold mb-2">Primary Fueling</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    70-80% of total race carbs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Every 15-20 minutes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Mix gels, drinks, solids
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <Badge className="mb-3 bg-run text-primary-foreground">On the Run</Badge>
                <h3 className="font-display font-bold mb-2">Maintenance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Gels and drinks only
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Every 20-30 minutes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Reduce if GI issues arise
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Carb Sources */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-secondary/10">
              <BookOpen className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Carbohydrate Sources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CarbSourceCard
              title="Gels"
              icon="🍯"
              carbsPerServing="20-30g per gel"
              bestFor={["Running", "Quick absorption", "Convenience"]}
              examples={["GU, Maurten, SiS, Clif"]}
              tips={[
                "Always chase with water",
                "Choose isotonic for no-water option",
                "Test caffeine in training",
              ]}
            />
            <CarbSourceCard
              title="Sports Drinks"
              icon="🥤"
              carbsPerServing="20-80g per bottle"
              bestFor={["Cycling", "Hydration + fuel", "Hot conditions"]}
              examples={["Gatorade, Maurten, Skratch, Tailwind"]}
              tips={[
                "Pre-mix to race concentration",
                "Consider hypotonic in heat",
                "Practice with course brand",
              ]}
            />
            <CarbSourceCard
              title="Solid Foods"
              icon="🍌"
              carbsPerServing="15-50g per serving"
              bestFor={["Long bike", "Satiety", "Ultra-distance"]}
              examples={["Banana, rice cake, energy bar, dates"]}
              tips={[
                "Only on bike, not run",
                "Cut into small pieces",
                "Chew thoroughly",
              ]}
            />
            <CarbSourceCard
              title="Real Food"
              icon="🍚"
              carbsPerServing="Variable"
              bestFor={["Ironman", "Aid stations", "Variety"]}
              examples={["Pretzels, PB&J, potatoes, cola"]}
              tips={[
                "Use for ultra-distance only",
                "Know what's on course",
                "Have backups ready",
              ]}
            />
          </div>
        </section>

        {/* Data Tables */}
        <section className="space-y-6">
          <DataTable
            title="Race Day Cheat Sheet"
            headers={["Phase", "Sprint/Oly", "Half IM", "Ironman"]}
            rows={[
              ["Pre-race breakfast", "2g/kg carbs", "3g/kg carbs", "4g/kg carbs"],
              ["Final top-up", "15-20g", "20-30g", "30g"],
              ["Bike carbs/hr", "40-60g", "80-90g", "90-100g"],
              ["Run carbs/hr", "30-40g", "60-70g", "60-80g"],
              ["Primary sources", "Drinks + gels", "Mix all", "All + real food"],
              ["Fluid per hour", "500-600ml", "600-800ml", "700-1000ml"],
            ]}
          />
        </section>

        {/* Bottom CTA */}
        <section className="text-center py-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Personalized Plan?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use our calculator to get exact carb targets based on your race distance, body weight,
            and intensity. Download a PDF to take with you on race day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/calculator">
                <Calculator className="w-5 h-5" />
                Open Calculator
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">View FAQ & Troubleshooting</Link>
            </Button>
          </div>
        </section>

        {/* Disclaimer */}
        <footer className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> This guide provides general recommendations based on
            sports science research. Individual needs vary based on sweat rate, gut tolerance,
            training status, and conditions. Always test your nutrition strategy in training.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
