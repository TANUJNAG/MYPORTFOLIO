import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import EDA from "@/pages/eda";
import Features from "@/pages/features";
import Modeling from "@/pages/modeling";
import Evaluation from "@/pages/evaluation";
import Deployment from "@/pages/deployment";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/eda" component={EDA} />
        <Route path="/features" component={Features} />
        <Route path="/modeling" component={Modeling} />
        <Route path="/evaluation" component={Evaluation} />
        <Route path="/deployment" component={Deployment} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
