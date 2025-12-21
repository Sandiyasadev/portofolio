import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cpu, 
  Terminal, 
  ArrowRight, 
  Layers, 
  Lock, 
  Activity, 
  Zap,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Database
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,700;1,300&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-[#003B5C] selection:text-white font-['Inter'] antialiased">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#111 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#111] flex items-center justify-center rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Shield className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['JetBrains_Mono'] font-bold tracking-tighter text-lg uppercase">The Invisible</span>
              <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.3em] text-gray-400 uppercase">Fortress</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            {['Manifesto', 'Topics', 'Blueprint'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative hover:text-[#003B5C] transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#003B5C] hover:after:w-full after:transition-all">
                {item}
              </a>
            ))}
            <a href="#" className="bg-[#111] text-white px-6 py-2.5 rounded-full hover:bg-[#003B5C] transition-all shadow-lg shadow-black/5 flex items-center gap-2">
              Connect <ChevronRight size={14} />
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-10 md:hidden">
          <div className="flex flex-col gap-10 text-4xl font-['Merriweather'] font-light italic">
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Manifesto</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Topics</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Blueprint</a>
            <a href="#" className="text-[#003B5C]">Connect</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#003B5C]/5 text-[#003B5C] rounded-full text-[10px] font-['JetBrains_Mono'] font-bold mb-8 uppercase tracking-[0.2em] border border-[#003B5C]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003B5C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#003B5C]"></span>
              </span>
              Architectural Perspective 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-['Merriweather'] font-bold leading-[1.1] mb-10 tracking-tight">
              Designing the <span className="italic font-light text-[#003B5C]">Invisible</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-['Merriweather'] italic leading-relaxed mb-12 max-w-2xl border-l-[1px] border-gray-200 pl-8">
              "Keamanan siber dan otomatisasi bukan sekadar lapisan teknis, melainkan arsitektur kepercayaan di tengah kekacauan digital."
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button className="bg-[#111] text-white px-10 py-5 rounded-sm flex items-center gap-4 hover:bg-[#003B5C] hover:-translate-y-1 transition-all duration-300 group shadow-xl shadow-black/10">
                Read the Manifesto <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-gray-200 py-2 hover:border-[#111] transition-all">
                The Archive
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square md:aspect-[4/5] bg-[#111] rounded-2xl overflow-hidden group shadow-2xl">
              {/* Modern Abstract Technical Art */}
              <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-[#555] font-['JetBrains_Mono'] text-[8px] p-6 leading-none">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-full flex justify-between opacity-50 mb-1 overflow-hidden h-3">
                    <span className="text-[#003B5C]">{`SYS_INIT [${i.toString(16).padStart(4, '0')}]`}</span>
                    <span>{`0x${Math.random().toString(16).substr(2, 16)}`}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#003B5C]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                  <Layers size={120} strokeWidth={0.5} className="text-white relative z-10 opacity-80" />
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl">
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-white uppercase tracking-widest opacity-80">System Core: Operational</span>
                 </div>
                 <p className="text-xs text-white/60 font-light leading-snug">
                   "Pertahanan terbaik adalah arsitektur yang bekerja secara pasif namun presisi."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-32 bg-[#FDFDFD]" id="topics">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#003B5C] uppercase tracking-[0.4em] mb-4">Core Philosophy</h2>
              <h3 className="text-5xl font-['Merriweather'] font-bold tracking-tight">The Knowledge Grid</h3>
            </div>
            <div className="text-gray-400 font-light max-w-sm text-lg leading-relaxed">
              Eksplorasi mendalam pada titik temu antara efisiensi mesin dan keamanan absolut.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 - Main Feature */}
            <div className="md:col-span-8 group relative overflow-hidden bg-[#111] rounded-3xl p-12 flex flex-col justify-between min-h-[500px] transition-all duration-700 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#003B5C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <Zap className="text-white w-7 h-7" />
                </div>
                <h4 className="text-4xl md:text-5xl font-['Merriweather'] font-bold text-white mb-6 leading-tight max-w-xl">
                  Mengganti <span className="italic text-[#003B5C]">Manual Labor</span> dengan Kejeniusan n8n
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg font-light">
                  Bagaimana arsitektur otomatisasi low-code dapat merevolusi skalabilitas operasional tanpa beban teknis yang berlebih.
                </p>
              </div>
              <div className="relative z-10 mt-12">
                <button className="flex items-center gap-3 text-white font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest group-hover:gap-6 transition-all bg-white/10 px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-black">
                  Examine Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Card 2 - Security */}
            <div className="md:col-span-4 group bg-white border border-gray-100 rounded-3xl p-10 flex flex-col hover:border-[#003B5C]/20 hover:shadow-xl transition-all duration-500">
              <div className="p-4 bg-gray-50 rounded-2xl w-fit mb-8 group-hover:bg-[#003B5C]/5 transition-colors">
                <Lock className="text-[#003B5C] w-6 h-6" />
              </div>
              <h4 className="text-2xl font-['Merriweather'] font-bold mb-4">Defense in Depth</h4>
              <p className="text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                Strategi keamanan berlapis pada Server Linux: Dari pengerasan kernel hingga kebijakan identitas zero-trust.
              </p>
              <div className="flex items-center justify-between">
                 <span className="text-[10px] font-['JetBrains_Mono'] text-[#003B5C] font-bold tracking-widest uppercase">Security Review</span>
                 <ArrowRight size={16} className="text-gray-300 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Card 3 - Small Tech */}
            <div className="md:col-span-4 group bg-[#F9F9FB] rounded-3xl p-10 flex items-center gap-6 hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                 <Cpu size={24} className="text-gray-400 group-hover:text-[#003B5C] transition-colors" />
               </div>
               <div>
                  <h5 className="font-['JetBrains_Mono'] font-bold text-xs uppercase tracking-widest">Stack Focus</h5>
                  <p className="text-sm text-gray-500">Astro, Docker, & Go</p>
               </div>
            </div>

            {/* Card 4 - Monitoring */}
            <div className="md:col-span-4 group bg-[#F9F9FB] rounded-3xl p-10 flex items-center gap-6 hover:bg-white border border-transparent hover:border-gray-100 transition-all shadow-sm">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                 <Activity size={24} className="text-green-500" />
               </div>
               <div>
                  <h5 className="font-['JetBrains_Mono'] font-bold text-xs uppercase tracking-widest">Uptime Metric</h5>
                  <p className="text-sm text-gray-500">99.9% Reliable Systems</p>
               </div>
            </div>

            {/* Card 5 - Resources */}
            <div className="md:col-span-4 group bg-[#003B5C] rounded-3xl p-10 flex items-center gap-6 hover:shadow-xl transition-all shadow-lg text-white">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                 <Database size={24} className="text-white" />
               </div>
               <div className="flex-grow">
                  <h5 className="font-['JetBrains_Mono'] font-bold text-xs uppercase tracking-widest opacity-70">Blueprints</h5>
                  <p className="text-sm">Technical Resource Library</p>
               </div>
               <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-32 bg-[#111] text-white relative overflow-hidden" id="manifesto">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 0.5px, transparent 0)`, backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-['Merriweather'] font-bold mb-8 italic text-white/90 tracking-tight">The Architect's Journal</h2>
            <div className="flex items-center justify-center gap-4">
               <div className="h-px w-12 bg-[#003B5C]"></div>
               <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.5em] text-[#003B5C]">Thoughts on Infrastructure</span>
               <div className="h-px w-12 bg-[#003B5C]"></div>
            </div>
          </div>

          <div className="space-y-24">
            {[
              {
                date: "Dec 18, 2025",
                category: "Automation",
                title: "Masa Depan Tanpa Tombol",
                snippet: "Otomatisasi bukan tentang menghilangkan interaksi manusia, tetapi tentang memastikan setiap interaksi manusia yang tersisa memiliki makna yang mendalam dan tidak repetitif."
              },
              {
                date: "Nov 24, 2025",
                category: "Security",
                title: "The Zero Trust Paradigm",
                snippet: "Dalam arsitektur benteng modern, kita tidak lagi membangun dinding yang tinggi. Kita membangun lingkungan di mana tidak ada identitas yang dipercayai secara default, baik dari dalam maupun luar."
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer border-b border-white/10 pb-16 hover:border-[#003B5C]/50 transition-colors">
                <div className="flex items-center gap-4 text-[10px] font-['JetBrains_Mono'] text-gray-500 mb-6 uppercase tracking-[0.3em]">
                  <span className="text-white/40">{post.date}</span>
                  <span className="w-1.5 h-1.5 bg-[#003B5C] rounded-full"></span>
                  <span className="text-[#003B5C] font-bold">{post.category}</span>
                </div>
                <h3 className="text-4xl font-['Merriweather'] font-bold mb-8 group-hover:text-[#003B5C] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-xl font-['Merriweather'] font-light leading-relaxed mb-10 italic">
                  "{post.snippet}"
                </p>
                <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-all">
                  Read Full Entry <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-[#003B5C] transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button className="px-12 py-5 border border-white/10 rounded-full font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Explore the Knowledge Base
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white pt-32 pb-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="text-6xl font-['Merriweather'] font-bold mb-10 leading-[1.1] tracking-tighter">
                Mari membangun <span className="text-[#003B5C]">Benteng</span> Anda.
              </h2>
              <p className="text-gray-500 text-xl mb-12 max-w-md font-light">
                Tersedia untuk konsultasi arsitektur sistem, audit keamanan, atau kolaborasi open-source yang menantang.
              </p>
              <div className="group inline-flex flex-col">
                <span className="text-[10px] font-['JetBrains_Mono'] text-gray-500 uppercase tracking-widest mb-2">Direct Contact</span>
                <a 
                  href="mailto:sandiyasa@fortress.tech" 
                  className="text-3xl font-['JetBrains_Mono'] font-bold hover:text-[#003B5C] transition-colors border-b-2 border-transparent hover:border-[#003B5C]"
                >
                  sandiyasa@fortress.tech
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">Presence</h4>
                  <ul className="space-y-4 text-sm font-light text-gray-400">
                     <li className="hover:text-white cursor-pointer transition-colors">Yogyakarta, Indonesia</li>
                     <li className="hover:text-white cursor-pointer transition-colors">Remote Anywhere</li>
                     <li className="hover:text-white cursor-pointer transition-colors text-[#003B5C] font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Available for H1 2026
                     </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">Connect</h4>
                  <div className="flex gap-6">
                    {[Github, Twitter, Linkedin].map((Icon, i) => (
                      <div key={i} className="p-3 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all cursor-pointer">
                        <Icon size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-20">
                <h4 className="text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-[0.4em] text-gray-500 mb-6 text-right lg:text-left">Intelligence Briefing</h4>
                <form className="relative group">
                  <input 
                    type="email" 
                    placeholder="E-mail for technical insights" 
                    className="w-full bg-transparent border-b border-white/10 py-5 focus:outline-none focus:border-[#003B5C] transition-all font-['Merriweather'] italic text-lg"
                  />
                  <button className="absolute right-0 bottom-6 text-[#003B5C] group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={24} />
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-['JetBrains_Mono'] text-gray-600 uppercase tracking-[0.3em]">
            <p>© 2025 The Invisible Fortress. Designed for the Digital Age.</p>
            <div className="flex gap-12">
              {['Privacy', 'Colophon', 'Security'].map(link => (
                <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;