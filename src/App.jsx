import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-indigo-400 mb-2">
          CareerMatch AI Platform
        </h1>
        <p className="text-slate-400 text-lg">
          Find your ideal career path with AI-driven recommendations.
        </p>
      </header>

      <main className="w-full max-w-md bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl text-center">
        <h2 className="text-xl font-semibold mb-4 text-slate-200">
          Application Configured
        </h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Your project configuration is ready for deployment on Vercel.
        </p>
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg transition-colors">
          Get Started
        </button>
      </main>
    </div>
  );
}
