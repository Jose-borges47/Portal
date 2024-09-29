import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo_SobreVidas.svg';
import fundo from './img_fundo.svg';
import canto from './img_canto.svg';
import sinal from './sinal_menor.svg';
import './App.css';

// Páginas (placeholders até que você crie as páginas reais)
const Home = () => <div>Home</div>;
const SobreNos = () => <div>Sobre Nós</div>;
const Noticias = () => <div>Notícias</div>;
const Publicacoes = () => <div>Publicações</div>;
const Patrocinadores = () => <div>Patrocinadores</div>;

function App() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navegação superior */}
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/" onClick={() => setSelectedItem('Home')}>Home <img src={sinal} className='App-sinal' alt="sinal"></img> </Link>
              </li>
              <li>
                <Link to="/sobre-nos" onClick={() => setSelectedItem('Sobre Nós')}>Sobre Nós <img src={sinal} className='App-sinal' alt="sinal"></img></Link>
              </li>
              <li>
                <Link to="/noticias" onClick={() => setSelectedItem('Notícias')}>Notícias <img src={sinal} className='App-sinal' alt="sinal"></img></Link>
              </li>
              <li>
                <Link to="/publicacoes" onClick={() => setSelectedItem('Publicações')}>Publicações <img src={sinal} className='App-sinal' alt="sinal"></img></Link>
              </li>
              <li>
                <Link to="/patrocinadores" onClick={() => setSelectedItem('Patrocinadores')}>Patrocinadores <img src={sinal} className='App-sinal' alt="sinal"></img></Link>
              </li>
            </ul>
          </nav>

          {/* Imagens de fundo */}
          <img src={logo} className="App-logo" alt="logo" />
          <img src={fundo} className="App-fundo" alt="fundo" />
          <img src={canto} className="App-canto" alt="canto" />

          {/* Conteúdo da tabela anterior */}
          <table className="App-table">
            <tbody>
              <tr>
                <td
                  className={selectedItem === 'Sobre Nós' ? 'active' : ''}
                  onClick={() => setSelectedItem('Sobre Nós')}
                >
                  <Link to="/sobre-nos">Sobre Nós</Link>
                </td>
              </tr>
              <tr>
                <td
                  className={selectedItem === 'Membros' ? 'active' : ''}
                  onClick={() => setSelectedItem('Membros')}
                >
                  <Link to="/membros">Membros</Link>
                </td>
              </tr>
              <tr>
                <td
                  className={selectedItem === 'Encontros' ? 'active' : ''}
                  onClick={() => setSelectedItem('Encontros')}
                >
                  <Link to="/encontros">Encontros</Link>
                </td>
              </tr>
              <tr>
                <td
                  className={selectedItem === 'Empregos' ? 'active' : ''}
                  onClick={() => setSelectedItem('Empregos')}
                >
                  <Link to="/empregos">Empregos</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </header>

        {/* Rotas para cada página */}
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/sobre-nos" component={SobreNos} />
          <Route path="/noticias" component={Noticias} />
          <Route path="/publicacoes" component={Publicacoes} />
          <Route path="/patrocinadores" component={Patrocinadores} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
