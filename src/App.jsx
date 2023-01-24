import logo from "./assets/logobranca.svg";
import './global.css';
import arrow from './assets/seta-para-a-direita.svg';

export function App() {
  return(
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo Glow"/>
        <h1>GLOW</h1>
        <span>
        Detecção precoce do câncer de mama
        </span>
      </header>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="text"  name="emal" id="email" placeholder="nameemail@gmail.com"/>
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input type="Password"  name="Password" id="Password" placeholder="*********"/>
        </div>
        <a href="">Esqueceu sua senha ?</a>
        <button className="button">
        Entrar <img src={arrow} alt="" />
        </button>

        <div className="footer">
          <p>Você não tem uma conta ? </p>
          <a href=""> Crie a sua conta aqui</a>
        </div>
        
      </form>
    </div>
  );
}