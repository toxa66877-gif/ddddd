/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Play, ArrowLeft, Star, Sparkles, Zap, Heart, Bookmark, Youtube, Instagram, Twitter } from "lucide-react";
import { useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function App() {
  const videoId = "TfXqVOm21qk";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: globalScroll } = useScroll();
  const scaleX = useTransform(globalScroll, [0, 1], [0, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div dir="rtl" className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-indigo-600 z-[110] origin-right"
        style={{ scaleX }}
      />

      {/* Sticky Glass Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/60 backdrop-blur-2xl border border-white/30 px-8 py-4 rounded-3xl shadow-2xl shadow-indigo-500/10 pointer-events-auto">
          <div className="text-2xl font-black tracking-tighter text-indigo-600 flex items-center gap-2">
            <Zap className="fill-indigo-600" size={24} />
            Spotlight
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-2xl text-sm font-black hover:bg-slate-950 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
          >
            اتفرج دلوقتي
          </button>
        </div>
      </header>

      {/* Floating Action Button for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-8 right-8 z-50 md:hidden"
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full bg-indigo-600 text-white py-5 rounded-3xl font-black shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform border border-white/20 backdrop-blur-md"
        >
          ابدأ المشاهدة يا بطل <Play size={20} fill="currentColor" />
        </button>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-40 pb-24 px-4 md:pt-56 md:pb-48 overflow-hidden bg-white">
        <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-black mb-12 border border-indigo-100 shadow-sm"
          >
            <Sparkles size={18} className="animate-pulse" />
            <span>أكتر من 10 آلاف واحد شافوا الفيديو ده وغيروا حياتهم.. إنت مستني إيه؟</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
            className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter text-slate-950"
          >
            يا بطل.. الفيديو ده <br />
            <span className="text-indigo-600 relative inline-block">
              هيغير حياتك!
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute -bottom-6 left-0 w-full h-6 text-indigo-200 -z-10" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto mb-24 leading-relaxed font-semibold"
          >
            بجد فكك من التعقيد.. الفيديو ده فيه الزتونة اللي هتخليك تطور نفسك بجد وبخطوات عملية وسهلة جداً.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, type: "spring", bounce: 0.3 }}
            className="relative max-w-5xl mx-auto group"
          >
            {/* Animated Glow effect behind video */}
            <div className="absolute -inset-16 bg-gradient-to-tr from-indigo-500/40 via-purple-500/30 to-rose-500/40 rounded-[4rem] blur-[100px] -z-10 animate-pulse"></div>
            
            <div className="relative aspect-video w-full rounded-[3rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] border-[20px] border-white bg-slate-100 transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
              <iframe
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-24 hidden md:block"
          >
            <button 
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-6 bg-slate-950 text-white px-16 py-8 rounded-[3rem] font-black text-4xl hover:bg-indigo-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-200"
            >
              ابدأ المشاهدة دلوقتي يا وحش <ArrowLeft size={40} className="group-hover:-translate-x-4 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Animated Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, -50, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100/60 rounded-full blur-[150px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -80, 0], 
              y: [0, 80, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-15%] w-[50%] h-[50%] bg-rose-100/50 rounded-full blur-[150px]"
          ></motion.div>
        </div>
      </section>

      {/* Benefits Section - Modern Bento */}
      <section id="benefits" className="py-40 px-4 relative bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">ليه لازم تتفرج دلوقتي؟</h2>
            <p className="text-slate-500 text-2xl font-semibold">جمعنا لك الزتونة كلها في ٤ نقط هتغير يومك بجد.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              {...fadeIn}
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-white p-14 rounded-[4rem] border border-slate-100 shadow-xl shadow-black/5 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center mb-12 group-hover:rotate-12 transition-transform shadow-inner">
                <Zap className="text-indigo-600" size={48} />
              </div>
              <div>
                <h3 className="font-black text-4xl mb-8">الزتونة كلها هنا</h3>
                <p className="text-slate-500 text-2xl leading-relaxed font-medium">مش مجرد كلام نظري، دي معلومات حقيقية هتفيدك في حياتك اليومية وتخليك أذكى في قراراتك.</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 bg-indigo-600 p-14 rounded-[4rem] text-white flex flex-col justify-between group shadow-2xl shadow-indigo-200 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="w-24 h-24 bg-white/20 rounded-[2rem] flex items-center justify-center mb-12 group-hover:scale-110 transition-transform backdrop-blur-md">
                <CheckCircle2 size={48} />
              </div>
              <div>
                <h3 className="font-black text-4xl mb-8">شرح رايق وبسيط</h3>
                <p className="text-indigo-100 text-xl leading-relaxed font-medium">شرح سهل ومفهوم لأي حد، من غير تعقيد ولا مصطلحات صعبة تخليك تتوه.</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-4 bg-slate-950 p-14 rounded-[4rem] text-white flex flex-col justify-between group shadow-2xl shadow-black/20"
            >
              <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mb-12 group-hover:-rotate-12 transition-transform">
                <Play className="text-indigo-400" size={48} fill="currentColor" />
              </div>
              <div>
                <h3 className="font-black text-4xl mb-8">خطة عمل يا وحش</h3>
                <p className="text-slate-400 text-xl leading-relaxed font-medium">هتخرج من الفيديو ومعاك خطة واضحة تنفذها من أول دقيقة وتشوف نتيجة بجد.</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="md:col-span-8 bg-white p-14 rounded-[4rem] border border-slate-100 shadow-xl shadow-black/5 flex flex-col md:flex-row gap-16 items-center group overflow-hidden relative"
            >
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-50 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-40 h-40 bg-rose-50 rounded-[3rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <Sparkles className="text-rose-500" size={80} />
              </div>
              <div>
                <h3 className="font-black text-4xl mb-8 text-center md:text-right">هتطير في السما</h3>
                <p className="text-slate-500 text-2xl leading-relaxed text-center md:text-right font-medium">استراتيجيات مجربة هتخليك تسبق غيرك بخطوات في وقت قصير جداً وبأقل مجهود.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Premium Layout */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="bg-white rounded-[6rem] p-12 md:p-28 border border-slate-100 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.12)] relative overflow-hidden flex flex-col md:flex-row items-center gap-20"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-12 bg-indigo-100 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-[5rem] overflow-hidden border-[16px] border-white shadow-2xl relative z-10 rotate-3 group-hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/egypt-vibe/800/800" 
                  alt="صاحب الفيديو" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-2xl z-20"
              >
                <Heart fill="currentColor" size={40} />
              </motion.div>
            </div>
            <div className="text-center md:text-right relative z-10">
              <h2 className="text-5xl font-black mb-12 tracking-tighter">مين اللي عمل الفيديو؟</h2>
              <p className="text-2xl text-slate-600 leading-relaxed mb-16 font-semibold italic text-indigo-900/80">
                "أنا مؤمن إن أي حد يقدر يوصل للي هو عاوزه لو بس عرف الطريق الصح. الفيديو ده فيه خلاصة اللي اتعلمته في سنين، وبقدمهولك بشكل بسيط عشان تبدأ تغير حياتك من دلوقتي.. بجد إنت تستاهل الأفضل."
              </p>
              <div className="inline-flex items-center gap-6 px-10 py-5 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-inner">
                <Bookmark className="text-indigo-600" size={32} />
                <span className="font-black text-slate-950 text-2xl">واحد بيحب يشارك الخبرة</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-40 px-4 bg-slate-950 text-white rounded-[6rem] mx-4 my-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#4f46e5_0%,_transparent_60%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#ec4899_0%,_transparent_60%)]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">الناس بتقول إيه؟</h2>
            <p className="text-slate-400 text-2xl font-semibold">آراء حقيقية من ناس شافت الفيديو واستفادت فعلاً.. مش مجرد كلام!</p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "سارة محمود", text: "الفيديو ده غير يومي بجد! الخطوات سهلة أوي وأي حد يقدر يعملها.. شكراً بجد!" },
              { name: "أحمد علي", text: "أحلى حاجة إن الكلام مش معقد خالص، حبيت أوي طريقة الشرح البسيطة والممتعة." },
              { name: "محمد إبراهيم", text: "كنت محتاج حد يزقني الزقة دي، الفيديو ده جه في وقته تماماً.. معلومات ميه ميه!" },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -15, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="bg-white/5 p-14 rounded-[4.5rem] border border-white/10 backdrop-blur-2xl transition-all group"
              >
                <div className="flex gap-1.5 mb-10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-200 mb-12 text-xl leading-relaxed italic font-semibold">"{t.text}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-indigo-500/20 flex items-center justify-center font-black text-indigo-400 text-3xl group-hover:scale-110 transition-transform shadow-inner">
                    {t.name[0]}
                  </div>
                  <p className="font-black text-white text-2xl">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - High Impact */}
      <section className="py-48 px-4 text-center relative">
        <motion.div {...fadeIn} className="max-w-5xl mx-auto">
          <motion.div 
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="inline-block p-8 bg-indigo-50 rounded-[3rem] mb-16 shadow-inner"
          >
            <Sparkles className="text-indigo-600" size={80} />
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter leading-[0.85]">جاهز تبدأ <br /> رحلتك؟</h2>
          <p className="text-slate-500 mb-24 text-2xl leading-relaxed max-w-4xl mx-auto font-semibold">
            مضيعش وقت أكتر من كده، المستقبل بيبدأ من اللحظة اللي بتاخد فيها قرار.. إنت قدها يا وحش!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full sm:w-auto bg-indigo-600 text-white px-20 py-10 rounded-[4rem] font-black text-4xl hover:bg-slate-950 transition-all shadow-[0_40px_80px_-20px_rgba(79,70,229,0.5)] flex items-center justify-center gap-5 hover:scale-105 active:scale-95"
            >
              اتفرج دلوقتي <Play size={36} fill="currentColor" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-950 border-[6px] border-slate-100 px-20 py-10 rounded-[4rem] font-black text-4xl hover:bg-slate-50 transition-all shadow-2xl shadow-black/5">
              اوعى يفوتك
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer - Social Focused */}
      <footer className="py-32 bg-white border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-5xl font-black text-slate-950 mb-12 tracking-tighter flex items-center justify-center gap-3">
            <Zap className="fill-indigo-600 text-indigo-600" size={32} />
            Spotlight
          </div>
          <div className="flex justify-center gap-12 mb-20">
            {[
              { icon: Youtube, color: "hover:text-red-600 hover:bg-red-50" },
              { icon: Instagram, color: "hover:text-pink-600 hover:bg-pink-50" },
              { icon: Twitter, color: "hover:text-blue-500 hover:bg-blue-50" }
            ].map((social, i) => (
              <a key={i} href="#" className={`p-6 bg-slate-50 rounded-3xl text-slate-400 transition-all hover:-translate-y-2 shadow-sm ${social.color}`}>
                <social.icon size={36} />
              </a>
            ))}
          </div>
          <div className="h-px w-48 bg-slate-100 mx-auto mb-12"></div>
          <p className="text-slate-400 text-xl font-semibold">&copy; {new Date().getFullYear()} جميع الحقوق محفوظة. معمول بكل حب وفخر في مصر 🇪🇬</p>
        </div>
      </footer>
    </div>
  );
}
