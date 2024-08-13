import "./MainCss.css"

function Header() {
    return (
      <header>
        <div className="container">
          <h1>Meu Site Completo</h1>
          <nav>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  // Componente de Seção Home
  function Home() {
    return (
      <section id="home">
        <div className="container">
          <h2>Bem-vindo ao Meu Site</h2>
          <p>Este é um exemplo de uma página web completa com várias seções. Explore as diferentes partes do site para ver como elas são organizadas e estilizadas.</p>
          <a href="#about" className="btn">Saiba Mais</a>
        </div>
      </section>
    );
  }
  
  // Componente de Seção Sobre
  function About() {
    return (
      <section id="about">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>Somos uma empresa fictícia dedicada a fornecer exemplos de código de alta qualidade para desenvolvedores iniciantes. Nosso objetivo é ajudar você a aprender HTML e CSS de forma prática.</p>
        </div>
      </section>
    );
  }
  
  // Componente de Seção Serviços
  function Services() {
    return (
      <section id="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="service">
            <h3>Desenvolvimento Web</h3>
            <p>Oferecemos soluções completas de desenvolvimento web, desde sites simples até aplicações web complexas.</p>
          </div>
          <div className="service">
            <h3>Design Gráfico</h3>
            <p>Nossos designers criam interfaces e materiais gráficos que combinam estética com funcionalidade.</p>
          </div>
          <div className="service">
            <h3>Consultoria Técnica</h3>
            <p>Proporcionamos consultoria para ajudar você a encontrar as melhores soluções técnicas para o seu negócio.</p>
          </div>
        </div>
      </section>
    );
  }
  
  // Componente de Barra Lateral
  function Sidebar() {
    return (
      <aside>
        <div className="container">
          <h3>Notícias Recentes</h3>
          <ul>
            <li><a href="#">Lançamento de novo curso de HTML e CSS</a></li>
            <li><a href="#">Dicas para otimizar seu site para SEO</a></li>
            <li><a href="#">Como escolher a paleta de cores ideal</a></li>
          </ul>
        </div>
      </aside>
    );
  }
  
  // Componente de Rodapé
  function Footer() {
    return (
      <footer>
        <div className="container">
          <p>&copy; 2024 Meu Site Completo. Todos os direitos reservados.</p>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>
      </footer>
    );
  }

export const Main = () => {

    
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Services />
            <Sidebar />
            <Footer />
        </div>
    );
}