"use client";
import { Zap, Database, Shield, Check, ArrowRight } from "lucide-react";
import Menu from "@/components/app/homepage/menu";
import Footer from "@/components/app/homepage/footer";
import WA from "@/components/app/homepage/wa";
import Pricing from "./pricing";
import Intro from "./intro";
import Testimonial from "./testimonial";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Menu />
      <Intro />
      <Pricing />
      <Testimonial />
      <Footer />
      <WA />
    </div>
  );
}
