import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'

// App is the page-level component. It puts the independent page sections in order.
function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
