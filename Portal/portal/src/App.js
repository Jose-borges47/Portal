import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo_SobreVidas.svg';
import fundo from './img_fundo.svg';
import canto from './img_canto.svg';
import sinal from './icone_sinal.svg';
import './App.css';

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
          
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/" onClick={() => setSelectedItem('Home')}>
                  Home <img src={sinal} className='App-sinal' alt="sinal" />
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" onClick={() => setSelectedItem('Sobre Nós')}>
                  Sobre Nós <img src={sinal} className='App-sinal' alt="sinal" />
                </Link>
              </li>
              <li>
                <Link to="/noticias" onClick={() => setSelectedItem('Notícias')}>
                  Notícias <img src={sinal} className='App-sinal' alt="sinal" />
                </Link>
              </li>
              <li>
                <Link to="/publicacoes" onClick={() => setSelectedItem('Publicações')}>
                  Publicações <img src={sinal} className='App-sinal' alt="sinal" />
                </Link>
              </li>
              <li>
                <Link to="/patrocinadores" onClick={() => setSelectedItem('Patrocinadores')}>
                  Patrocinadores <img src={sinal} className='App-sinal' alt="sinal" />
                </Link>
              </li>
            </ul>
          </nav>

          <img src={logo} className="App-logo" alt="logo" />
          <img src={fundo} className="App-fundo" alt="fundo" />
          <img src={canto} className="App-canto" alt="canto" />

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

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/patrocinadores" element={<Patrocinadores />} />
        </Routes>
      </div>
      <div className='titulo_SN'> 
        <p>
          Sobre Nós
        </p>
      </div>
      <div className='textofalso'>
        <p>
                «Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
        <br></br>doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore 
        <br></br>veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo
        <br></br> enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, 
        <br></br>sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,
        <br></br> neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
        <br></br> adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et
        <br></br> dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        <br></br> exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        <br></br> consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
        <br></br> quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas
        <br></br> nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus,
        <br></br> qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et
        <br></br> quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt
        <br></br> in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
        <br></br>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
        <br></br>cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod
        <br></br> maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor 
        <br></br>repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum 
        <br></br>necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae 
        <br></br>non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut 
        <br></br>reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
        <br></br> asperiores repellat.»
        </p>
      </div>
    </Router>
    
  );
}

export default App;