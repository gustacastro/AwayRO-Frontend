import React from 'react';
import { Link } from 'react-router-dom';

// Imports
import Accordion from '../../components/Accordion/accordion';

// styles
import { Wrapper } from './styles';

// imgs
import titleimg from '../../assets/titleimg.png';

export default function Main() {
  return (
    <Wrapper>
      <div className="divtitle">
        <div className="titleleft">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link className="linkregister" type="button" to="signin">
            Registrar-se
          </Link>
        </div>
        <img src={titleimg} alt="titleimg" />
      </div>
      <div className="boxstatustop">
        <div>
          <span>Servidor:</span>
          <h1 className="online">Online</h1>
        </div>
        <div>
          <span>Jogadores Online: </span>
          <h1 className="online">2524</h1>
        </div>
      </div>
      <div className="divtab2">
        <img src={titleimg} alt="titleimg" />
        <div className="accordionright">
          <Accordion
            title="Lorem ipsum dolor sit amet"
            content="
            <h1>Lorem ipsum dolor sit amet</h1>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            "
          />
          <Accordion
            title="Lorem ipsum dolor sit amet"
            content="
            <h1>Lorem ipsum dolor sit amet</h1>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            "
          />
          <Accordion
            title="Lorem ipsum dolor sit amet"
            content="
            <h1>Lorem ipsum dolor sit amet</h1>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            "
          />
        </div>
      </div>
    </Wrapper>
  );
}
