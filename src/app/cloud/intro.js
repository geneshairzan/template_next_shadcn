"use client";
import { Zap, Database, Shield, Check, ArrowRight } from "lucide-react";
import UI from "@ui";

export default function Home() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900 pt-[160px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <UI.Col className=" justify-center ">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Everything you need to scale
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 ">Powering apps from launch to scale</p>
          </UI.Col>

          <div className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Edge Server</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Edge Server menggunakan teknologi{" "}
                <a href="https://dokploy.com/" target="_blank" rel="noopener noreferrer" className="font-bold ">
                  Dokploy
                </a>{" "}
                untuk manajemen server yang mudah.
              </p>
              <a href="#edgeserver" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center space-x-2 group/btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">N9 | Object Storage</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Solusi penyimpanan berbasis objek dengan kompatibilitas API S3 tanpa khawatir bandwidth.
              </p>
              <a href="#objectstorage" className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center space-x-2 group/btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
