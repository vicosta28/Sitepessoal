
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Curiosidades from './components/curiosidades'
import Footer from './components/footer';

function App() {
  return (
    <div>
      <header>
          <Header/>
      </header>
      <main>
          <Hero/>

          <section>
            <h2 class="titulos">Curiosidades sobre mim:</h2>
            <div className='curiosidades'>
              <Curiosidades img='/imagens/foto2.jpeg' texto='Voltei a infância para comemorar meus 18 anos.'/>
              <Curiosidades img='/imagens/diabetes.jpeg' texto='Aos 12 anos fui diagnósticada com diabetes tipo 1.'/>
              <Curiosidades img='/imagens/praia.jpeg' texto='Gosto de ir a Praia.'/>
            </div>
          </section>
          <section>
          <h2 class="titulos"> 3 Projetos do Github:</h2>
             <div className='projetos_do_github'>
                <h1>Jogo da Memoria</h1>
                <p> Jogo criado na Materia de Programação para internet, usando HTML, CSS e JS. Um clássico jogo da memoria, com os personagens da série Bridgerton.</p>
                <a href="https://github.com/lauralemos05/JogodaMemoria">Clique Aqui</a>
             </div>
             <div>
                <h1>Chá Aconchegante</h1>
                <p> Um site feito em Autoria web, usando HTML e CSS.</p>
                <a href="https://github.com/lauralemos05/aweb/tree/main/chaaconchegante">Clique Aqui</a>
             </div>
             <div>
                <h1>Site de Moda</h1>
                <p> Um site feito em Autoria web, usando HTML e CSS.</p>
                <a href="https://github.com/lauralemos05/aweb/tree/main/sitemoda">Clique Aqui</a>
             </div>
          </section>
      </main>
      <Footer/>
      
        
    </div>
  );
}

export default App;
