import React from 'react';
import '../Header/style.css';

function Header() {
    return(
        <div>
            <header className="header">
                <button>
                    opcoes
                </button>
                <button>
                    sobre
                </button>
                <button>
                    local
                </button>
                <button>
                    patrocinadores
                </button>
                <img className="img1" src= {process.env.PUBLIC_URL + "/imagem1.png"} alt="logo" />
                <img className="img2" src={process.env.PUBLIC_URL + "/imagem.jpg"} alt="imagem" />
            </header>
            <div>
                <h1 className="texto">
                    A vida e bela
                </h1>
            </div>
            <footer className="footer">
                <div>
                    <img className="w" src={process.env.PUBLIC_URL + "/icone1.png"} alt="whatsapp" />
                    <button className="wa">
                        0000000
                    </button>
                    <img className="f" src={process.env.PUBLIC_URL + "/icone2.png"} alt="facebook" />
                    <button className="fa">
                        Marcio Eduardo
                    </button>
                    <img className="i" src={process.env.PUBLIC_URL + "/icone3.png"} alt="instagram" />
                    <button className="in">
                        Marcioeduardo9890
                    </button>
                </div>
            </footer>
        </div>
    );
}
export default Header;