import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import FiduciaryDuty from "@/pages/FiduciaryDuty";
import Kpi from "@/pages/Kpi";
import InsuranceCompanies from "@/pages/InsuranceCompanies";
import SolicitationPolicy from "@/pages/SolicitationPolicy";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/fiduciary-duty"} component={FiduciaryDuty} />
      <Route path={"/kpi"} component={Kpi} />
      <Route path={"/insurance-companies"} component={InsuranceCompanies} />
      <Route path={"/solicitation-policy"} component={SolicitationPolicy} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
