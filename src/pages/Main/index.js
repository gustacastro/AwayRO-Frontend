/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Imports
import Accordion from '../../components/Accordion/accordion';
import api from '../../services/api';

// styles
import { Wrapper, Notices, Events } from './styles';

// imgs
import titleimg from '../../assets/titleimg.png';
import knightpecopeco from '../../assets/knight pecopeco.png';

export default function Main() {
  const [playerOnline, setPlayerOnline] = useState(false);
  const [serverOnline, setServerOnline] = useState();

  const PlayersOnlineStatus = async () => {
    try {
      const { data } = await api.get('/users');
      setPlayerOnline(data?.users?.count);
    } catch (error) {
      console.log(JSON.stringify(error));
      toast.error('Erro de conexão com o servidor!');
    }
  };

  const ServerOnlineStatus = async () => {
    try {
      const { data } = await api.get('/serverstatus');
      setServerOnline(data?.serveronline);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    PlayersOnlineStatus();
    ServerOnlineStatus();
  }, []);
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
          <h1 className={serverOnline ? 'online' : 'offline'}>
            {serverOnline ? 'Online' : 'Offline'}
          </h1>
        </div>
        <div>
          <span>Jogadores Online: </span>
          <h1 className="online">{playerOnline || '0'}</h1>
        </div>
      </div>
      <div className="divtab2">
        <img src={knightpecopeco} alt="titleimg" />
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
      <div className="noticieseventstabs">
        <div className="noticies">
          <div className="title">
            <h1>Notícias Recentes</h1>{' '}
            <Link className="linknoticies" to="/">
              Ler mais
            </Link>
          </div>
          <div className="tabs">
            <ul>
              <Notices onClick={() => {}}>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
              <Notices>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
              <Notices>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
              <Notices>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
              <Notices>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
              <Notices>
                <div className="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div className="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div className="effectSide" />
              </Notices>
            </ul>
          </div>
          <div className="events">
            <div className="title">
              <h1>Últimos Eventos</h1>{' '}
              <Link className="linkevents" to="/">
                Ver mais
              </Link>
            </div>
            <div className="tabs">
              <ul>
                <Events onClick={() => {}}>
                  <div className="effectSideEvents" />
                  <div className="text">
                    <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                    <p>
                      Lorem ipsum sollicitudin aliquet aliquam massa odio
                      praesent nunc.
                    </p>
                  </div>
                  <div className="dateEvents">
                    <h1>11</h1>
                    <span>Abril</span>
                  </div>
                </Events>
                <Events onClick={() => {}}>
                  <div className="effectSideEvents" />
                  <div className="text">
                    <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                    <p>
                      Lorem ipsum sollicitudin aliquet aliquam massa odio
                      praesent nunc.
                    </p>
                  </div>
                  <div className="dateEvents">
                    <h1>11</h1>
                    <span>Abril</span>
                  </div>
                </Events>
                <Events onClick={() => {}}>
                  <div className="effectSideEvents" />
                  <div className="text">
                    <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                    <p>
                      Lorem ipsum sollicitudin aliquet aliquam massa odio
                      praesent nunc.
                    </p>
                  </div>
                  <div className="dateEvents">
                    <h1>11</h1>
                    <span>Abril</span>
                  </div>
                </Events>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="woetab">h1</div>
    </Wrapper>
  );
}
