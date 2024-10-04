import logo from '../../images/LogoBN.png';
import { Button, Nav, ImageLogo, InputSearchSpace } from './NavbarStyled';

export default function NavBar() {
  return (
    <>
      <Nav>
        <InputSearchSpace className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSearchSpace>

        <ImageLogo src={logo} alt="Logo do Breaking news" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}

