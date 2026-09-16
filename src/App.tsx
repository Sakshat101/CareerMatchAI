import React, { useState } from 'react';
import {
Bell,
Calendar,
Clock,
BookOpen,
CheckCircle,
Briefcase,
ChevronRight,
Search,
Sparkles,
Building2,
Code,
Brain,
Target,
X,
AlertCircle,
BarChart3,
Star,
ArrowRight,
FileText,
User,
ExternalLink,
Award,
Layers,
GraduationCap,
PlayCircle,
Filter,
CheckSquare,
Bookmark
} from 'lucide-react';

export default function App() {
const [activeTab, setActiveTab] = useState('drives');
const [showNotifications, setShowNotifications] = useState(false);
const [selectedCompany, setSelectedCompany] = useState(null);
const [prepProgress, setPrepProgress] = useState({
'python-core': true,
'dsa-trees': true,
'ml-fundamentals': false,
'transformers-attention': false,
'sys-design-ml': false
});

// Mock Campus Recruitment Drives Data
const campusDrives = [
{
id: 'google-2026',
company: 'Google',
logo: 'https://www.google.com/favicon.ico',
role: 'AI / ML Engineer',
visitDate: '2026-09-20',
formattedDate: 'September 20, 2026',
time: '10:00 AM - 01:00 PM IST',
venue: 'Auditorium Hall A & Online Test Portal',
package: '$140,000 - $180,000 / year (or equivalent LPA)',
eligibility: 'B.Tech / M.Tech in CS, AI, Data Science (CGPA > 8.0)',
status: 'Upcoming Next Week',
featured: true,
description:
'Google is visiting campus to recruit high-caliber AI/ML Engineers for the Core AI & Search Infrastructure teams. The selection process includes an online coding assessment followed by technical deep-dives.',
requiredSkills: [
'Python 3.x',
'TensorFlow / PyTorch',
'Data Structures & Algorithms',
'Machine Learning Math (Linear Algebra & Calculus)',
'Distributed System Fundamentals'
],
testPattern: [
{ section: 'Section 1: Data Structures & Algorithms', duration: '45 Mins', weightage: '30%' },
{ section: 'Section 2: Machine Learning Concepts & Math', duration: '45 Mins', weightage: '40%' },
{ section: 'Section 3: Coding in Python / PyTorch Optimization', duration: '40 Mins', weightage: '30%' }
],
topicsToStudy: [
{
category: 'Data Structures & Algorithms',
items: [
{ id: 'dsa-trees', name: 'Trees, Graphs, Segment Trees & Disjoint Set Union' },
{ id: 'dsa-dp', name: 'Dynamic Programming & Memoization techniques' },
{ id: 'dsa-algo', name: 'Time/Space complexity optimization' }
]
},
{
category: 'Python & Core AI Tools',
items: [
{ id: 'python-core', name: 'Python GIL, Asyncio, Generators & Memory Management' },
{ id: 'numpy-pandas', name: 'Vectorized computing with NumPy & Pandas performance tricks' }
]
},
{
category: 'Machine Learning & Deep Learning',
items: [
{ id: 'ml-fundamentals', name: 'Supervised/Unsupervised Learning & Regularization (L1/L2)' },
{ id: 'transformers-attention', name: 'Self-Attention, Transformer Architectures & LLM Fine-tuning' },
{ id: 'cnn-rnn', name: 'Gradient Descent variants (Adam, SGD) and Loss Functions' }
]
},
{
category: 'ML System Design',
items: [
{ id: 'sys-design-ml', name: 'Scalable Data Pipelines, Model Inference Latency & Quantization' },
{ id: 'mlops', name: 'Model Monitoring, Data Drift, & Vector Databases (Pinecone/FAISS)' }
]
}
]
},
{
id: 'microsoft-2026',
company: 'Microsoft',
logo: 'https://www.microsoft.com/favicon.ico',
role: 'Software Development Engineer II (Cloud & AI)',
visitDate: '2026-10-05',
formattedDate: 'October 5, 2026',
time: '09:30 AM IST',
venue: 'Campus Tech Center',
package: '$120,000 / year',
eligibility: 'All Engineering Disciplines (CGPA > 7.5)',
status: 'Scheduled',
featured: false,
requiredSkills: ['C# / C++ / Python', 'Azure Cloud', 'System Design', 'DSA'],
testPattern: [
{ section: 'Coding Test (3 Hard DSA Problems)', duration: '90 Mins', weightage: '60%' },
{ section: 'System Architecture MCQs', duration: '30 Mins', weightage: '40%' }
],
topicsToStudy: [
{
category: 'System Design',
items: [{ id: 'ms-sys-1', name: 'Microservices, Caching Strategies (Redis) & Load Balancing' }]
},
{
category: 'Algorithms',
items: [{ id: 'ms-dsa-1', name: 'Graph Traversal (BFS/DFS) and Shortest Path algorithms' }]
}
]
},
{
id: 'amazon-2026',
company: 'Amazon',
logo: 'https://www.amazon.com/favicon.ico',
role: 'Applied Scientist - ML',
visitDate: '2026-10-18',
formattedDate: 'October 18, 2026',
time: '11:00 AM IST',
venue: 'Virtual Drive',
package: '$150,000 / year',
eligibility: 'B.Tech / M.Tech / PhD in CS or related fields',
status: 'Scheduled',
featured: false,
requiredSkills: ['Python', 'Deep Learning', 'Leadership Principles', 'System Architecture'],
testPattern: [
{ section: 'Amazon Leadership Principles & Work Simulation', duration: '60 Mins', weightage: '40%' },
{ section: 'Machine Learning & Math Assessment', duration: '60 Mins', weightage: '60%' }
],
topicsToStudy: [
{
category: 'Behavioral & Leadership',
items: [{ id: 'amz-lp', name: 'Amazon 16 Leadership Principles & STAR Method Answers' }]
}
]
}
];

const unreadNotificationsCount = 2;

const togglePrepTask = (taskId) => {
setPrepProgress((prev) => ({
...prev,
[taskId]: !prev[taskId]
}));
};

const calculatePrepPercent = (drive) => {
if (!drive || !drive.topicsToStudy) return 0;
const allTasks = drive.topicsToStudy.flatMap((c) => c.items);
if (allTasks.length === 0) return 0;
const completed = allTasks.filter((t) => prepProgress[t.id]).length;
return Math.round((completed / allTasks.length) * 100);
};

return (

{/* TOP NAVIGATION BAR */}







CareerMatch AI Hub

Campus Recruitment & AI Career Prep



    {/* SEARCH & QUICK ACTIONS */}
    <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 w-72 focus-within:border-indigo-500 transition-all">
      <Search className="w-4 h-4 text-slate-400 mr-2" />
      <input
        type="text"
        placeholder="Search companies, skills, roles..."
        className="bg-transparent text-sm text-slate-200 outline-none w-full placeholder-slate-500"
      />
    </div>

    {/* NOTIFICATION BELL & USER PROFILE */}
    <div className="flex items-center space-x-4">
      {/* Notification Bell Button */}
      <div className="relative">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse border-2 border-slate-900">
              {unreadNotificationsCount}
            </span>
          )}
        </button>

        {/* NOTIFICATIONS DROPDOWN PANEL */}
        {showNotifications && (
          <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-800/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-4 bg-slate-950/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-semibold text-sm text-white">Campus Announcements</h3>
              </div>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                2 New Updates
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/40">
              {/* Google Notification item */}
              <div
                onClick={() => {
                  setSelectedCompany(campusDrives[0]);
                  setActiveTab('drives');
                  setShowNotifications(false);
                }}
                className="p-4 hover:bg-slate-800/60 cursor-pointer transition-colors bg-indigo-950/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-indigo-400">🔥 Visiting Next Week!</p>
                      <span className="text-[10px] text-slate-400">Just now</span>
                    </div>
                    <h4 className="text-sm font-medium text-slate-100 mt-0.5">Google Campus Drive Announced</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Google is hiring for <strong>AI / ML Engineer</strong> on <strong>September 20, 2026</strong>. Python & Deep Learning preparation topics added!
                    </p>
                    <span className="inline-flex items-center text-xs text-indigo-400 font-medium mt-2 hover:underline">
                      View Prep Syllabus & Schedule <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Microsoft Notification */}
              <div
                onClick={() => {
                  setSelectedCompany(campusDrives[1]);
                  setActiveTab('drives');
                  setShowNotifications(false);
                }}
                className="p-4 hover:bg-slate-800/60 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow">
                    <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-emerald-400">Drive Scheduled</p>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <h4 className="text-sm font-medium text-slate-100 mt-0.5">Microsoft SDE II Drive</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      Scheduled for October 5, 2026. Review system design & C++/Python syllabus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-950/40 text-center">
              <button
                onClick={() => {
                  setActiveTab('drives');
                  setShowNotifications(false);
                }}
                className="text-xs text-slate-400 hover:text-indigo-400 font-medium transition-colors"
              >
                View All Upcoming Drives →
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-6 w-[1px] bg-slate-800"></div>

      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-xs ring-2 ring-indigo-500/30">
          JS
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-xs font-medium text-slate-200">Alex Chen</p>
          <p className="text-[10px] text-slate-400">B.Tech AI Class of '27</p>
        </div>
      </div>
    </div>
  </header>

  {/* MAIN LAYOUT */}
  <div className="flex-1 flex overflow-hidden">
    {/* SIDEBAR NAVIGATION */}
    <aside className="w-64 bg-slate-950/50 border-r border-slate-800 p-4 hidden lg:flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">Campus Recruitment</p>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('drives')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'drives'
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4" />
                <span>Visiting Companies</span>
              </div>
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Next Week
              </span>
            </button>

            <button
              onClick={() => {
                setSelectedCompany(campusDrives[0]);
                setActiveTab('prep');
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'prep'
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4" />
                <span>Company Prep Syllabus</span>
              </div>
              <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full">
                Google
              </span>
            </button>
          </nav>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-2">AI Career Tools</p>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('resume')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'resume'
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>AI Resume Score</span>
            </button>

            <button
              onClick={() => setActiveTab('mock')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'mock'
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>AI Interview Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('roadmap')}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Skill Gap Roadmap</span>
            </button>
          </nav>
        </div>

        {/* UPCOMING FEATURED BANNER */}
        <div className="bg-gradient-to-b from-indigo-950/60 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              Featured Drive
            </span>
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-white">Google AI/ML Drive</h4>
          <p className="text-[11px] text-slate-400 mt-1">Date: Sept 20, 2026</p>
          <div className="mt-3 bg-slate-900/80 rounded-full h-1.5 w-full overflow-hidden">
            <div
              className="bg-indigo-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${calculatePrepPercent(campusDrives[0])}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
            <span>Prep Readiness</span>
            <span className="font-bold text-indigo-300">{calculatePrepPercent(campusDrives[0])}%</span>
          </div>
          <button
            onClick={() => {
              setSelectedCompany(campusDrives[0]);
              setActiveTab('prep');
            }}
            className="w-full mt-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            Start Preparation <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="text-[11px] text-slate-500 text-center border-t border-slate-800/80 pt-3">
        CareerMatch Placement Cell © 2026
      </div>
    </aside>

    {/* CONTENT AREA */}
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-900">
      {/* MOBILE NAVIGATION TABS */}
      <div className="lg:hidden flex overflow-x-auto space-x-2 pb-4 mb-4 border-b border-slate-800 no-scrollbar">
        <button
          onClick={() => setActiveTab('drives')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
            activeTab === 'drives' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          🏢 Visiting Companies
        </button>
        <button
          onClick={() => {
            setSelectedCompany(campusDrives[0]);
            setActiveTab('prep');
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
            activeTab === 'prep' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          📚 Prep Topics (Google)
        </button>
        <button
          onClick={() => setActiveTab('resume')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
            activeTab === 'resume' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          📄 AI Resume
        </button>
      </div>

      {/* TAB 1: VISITING COMPANIES & ANNOUNCEMENTS */}
      {activeTab === 'drives' && (
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* HEADER BANNER */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-purple-950/50 border border-indigo-500/20 p-6 sm:p-8">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                College Placement Season 2026 - 2027
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Upcoming Campus Recruitment Drives
              </h1>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Track visiting tech giants, test patterns, and step-by-step topic guides required to clear recruitment rounds.
              </p>
            </div>
          </div>

          {/* FEATURED DRIVE HIGHLIGHT - GOOGLE */}
          <div className="bg-slate-950/80 border-2 border-indigo-500/40 rounded-2xl p-6 relative overflow-hidden shadow-xl shadow-indigo-950/20">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-purple-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow">
              <Bell className="w-3.5 h-3.5 animate-bounce" /> Visiting Next Week
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow-lg shadow-black/40">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white">Google</h2>
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium">
                      Confirmed Visit
                    </span>
                  </div>
                  <p className="text-indigo-300 font-semibold text-base mt-0.5">AI / ML Engineer Role</p>
                  
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 mt-3">
                    <span className="flex items-center gap-1.5 text-slate-200 font-medium">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      20 September 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-indigo-400" />
                      10:00 AM IST
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      B.Tech / M.Tech CS & AI
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
                <button
                  onClick={() => {
                    setSelectedCompany(campusDrives[0]);
                    setActiveTab('prep');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  View Topics & Prep Plan
                </button>
              </div>
            </div>

            {/* SKILLS TAGS & QUICK SYLLABUS PREVIEW */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Required Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {campusDrives[0].requiredSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-900 text-slate-300 border border-slate-800 text-xs px-2.5 py-1 rounded-lg font-mono flex items-center gap-1"
                    >
                      <Code className="w-3 h-3 text-indigo-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Test Format & Topics Breakdown
                </p>
                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-300">
                    <span>• Data Structures & Algorithms</span>
                    <span className="font-mono text-indigo-400">Trees, DP & Graph Optimization</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>• Python Core & Libraries</span>
                    <span className="font-mono text-indigo-400">NumPy, PyTorch, Memory & GIL</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>• Machine Learning & Systems</span>
                    <span className="font-mono text-indigo-400">Transformers, MLOps & Math</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ALL UPCOMING DRIVES GRID */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-400" />
              Complete Recruitment Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {campusDrives.map((drive) => (
                <div
                  key={drive.id}
                  className="bg-slate-950/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shadow">
                        <img src={drive.logo} alt={drive.company} className="w-full h-full object-contain" />
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                          drive.featured
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}
                      >
                        {drive.formattedDate}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mt-4">{drive.company}</h4>
                    <p className="text-xs text-indigo-400 font-medium">{drive.role}</p>

                    <p className="text-xs text-slate-400 mt-3 line-clamp-2">{drive.description}</p>

                    <div className="mt-4 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{drive.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span>Package: {drive.package}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Required Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {drive.requiredSkills.slice(0, 3).map((sk, i) => (
                          <span key={i} className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded">
                            {sk}
                          </span>
                        ))}
                        {drive.requiredSkills.length > 3 && (
                          <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                            +{drive.requiredSkills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCompany(drive);
                      setActiveTab('prep');
                    }}
                    className="w-full mt-5 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    View Prep Details <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COMPANY PREPARATION & SYLLABUS DETAILS */}
      {activeTab === 'prep' && (
        <div className="max-w-5xl mx-auto space-y-6">
          {/* COMPANY HEADER */}
          {(() => {
            const company = selectedCompany || campusDrives[0];
            const percent = calculatePrepPercent(company);

            return (
              <>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow">
                      <img src={company.logo} alt={company.company} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Campus Drive Details</span>
                        <span className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-0.5 rounded border border-indigo-500/20">
                          {company.formattedDate}
                        </span>
                      </div>
                      <h1 className="text-2xl font-bold text-white mt-1">{company.company} - {company.role}</h1>
                      <p className="text-xs text-slate-400 mt-1">Eligibility: {company.eligibility} • Venue: {company.venue}</p>
                    </div>
                  </div>

                  {/* PREPARATION PROGRESS TRACKER */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 min-w-[220px]">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-slate-300">Readiness Score</span>
                      <span className="text-indigo-400">{percent}% Completed</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${percent}%` }}></div>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2">Check off syllabus items as you study</p>
                  </div>
                </div>

                {/* TWO COLUMN CONTENT: SYLLABUS TOPICS & TEST PATTERN */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* TOPICS & CHECKLIST */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-indigo-400" />
                          Topics Required to Crack {company.company}
                        </h3>
                        <span className="text-xs text-slate-400">Interactive Prep Checklist</span>
                      </div>

                      <div className="space-y-6">
                        {company.topicsToStudy?.map((cat, idx) => (
                          <div key={idx} className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/80">
                            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Target className="w-3.5 h-3.5 text-indigo-400" />
                              {cat.category}
                            </h4>
                            <div className="space-y-2">
                              {cat.items.map((item) => {
                                const isDone = !!prepProgress[item.id];
                                return (
                                  <div
                                    key={item.id}
                                    onClick={() => togglePrepTask(item.id)}
                                    className={`flex items-start gap-3 p-2.5 rounded-lg border cursor-pointer transition-all ${
                                      isDone
                                        ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                                        : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200'
                                    }`}
                                  >
                                    <div className={`mt-0.5 rounded p-0.5 ${isDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                                      <CheckSquare className="w-4 h-4" />
                                    </div>
                                    <span className={`text-xs leading-relaxed ${isDone ? 'line-through text-slate-400' : ''}`}>
                                      {item.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TEST PATTERN & QUICK RESOURCES */}
                  <div className="space-y-6">
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        Recruitment Test Pattern
                      </h3>
                      <div className="space-y-3">
                        {company.testPattern?.map((pattern, i) => (
                          <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs">
                            <p className="font-semibold text-slate-200">{pattern.section}</p>
                            <div className="flex justify-between text-slate-400 mt-1.5 text-[11px]">
                              <span>Duration: {pattern.duration}</span>
                              <span className="text-indigo-400 font-medium">Weight: {pattern.weightage}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-950 to-slate-950 border border-indigo-500/30 rounded-2xl p-5">
                      <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        Recommended Prep Strategy
                      </h3>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                        <li>Solve at least 20 Medium/Hard LeetCode problems on Dynamic Programming and Trees.</li>
                        <li>Revise Python memory allocation, GIL overhead, and PyTorch autograd engine.</li>
                        <li>Practice explaining ML algorithms step-by-step on a whiteboard.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* TAB 3: RESUME ANALYZER (BONUS FEATURE) */}
      {activeTab === 'resume' && (
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto mb-3 border border-indigo-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">AI Resume Matcher for Google AI/ML</h2>
            <p className="text-xs text-slate-400 mt-1">
              Upload your resume text to get an instant match score against the visiting Google AI/ML position.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Paste Resume Content or Summary</label>
              <textarea
                rows={6}
                placeholder="Paste your experience, technical skills (e.g. Python, PyTorch, LeetCode, Projects)..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 outline-none focus:border-indigo-500 font-mono"
                defaultValue="B.Tech Computer Science Student with experience in Python, Machine Learning models, Scikit-learn, and Data Structures. Built a Transformer model for text classification."
              />
            </div>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm flex items-center justify-center border border-emerald-500/20">
                  82%
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Strong Match for Google AI/ML Role</p>
                  <p className="text-[11px] text-slate-400">Match criteria: Python (Match), PyTorch (Match), System Design (Missing)</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap">
                Re-Analyze Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: AI MOCK INTERVIEW */}
      {activeTab === 'mock' && (
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mx-auto border border-purple-500/20">
            <Brain className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Google AI / ML Mock Technical Interview</h2>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Practice technical questions tailored specifically for Google's upcoming test on September 20, 2026.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-left max-w-xl mx-auto space-y-3">
            <span className="text-[10px] font-bold text-indigo-400 uppercase bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Sample Question #1
            </span>
            <p className="text-sm text-slate-200 font-medium">
              "How does self-attention in Transformer models achieve $O(N^2)$ time complexity, and how do flash attention algorithms optimize GPU SRAM usage?"
            </p>
            <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-500">Topic: Deep Learning & Memory</span>
              <button className="text-xs text-indigo-400 hover:underline font-semibold flex items-center gap-1">
                Start Voice Simulator <PlayCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-2">Personalized Placement Roadmap 2026</h2>
          <p className="text-xs text-slate-400 mb-6">Targeting high-tier AI & Software Engineering roles</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
                1
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Complete Google AI/ML Syllabus</h4>
                <p className="text-[11px] text-slate-400">Focus on NumPy, PyTorch, and Graph Algorithms by Sept 18</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs">
                2
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Take 2 Full Mock Tests</h4>
                <p className="text-[11px] text-slate-400">Time-bound coding & ML theory assessments</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  </div>
</div>


);
}
