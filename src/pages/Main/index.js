/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Imports
import Accordion from '../../components/Accordion/accordion';
import api from '../../services/api';

// styles
import { Wrapper, Notices, Events } from './styles';

// imgs
import titleimg from '../../assets/titleimg2.png';
import knightpecopeco from '../../assets/knight pecopeco.png';
import castle from '../../assets/castle.svg';
import itemcash from '../../assets/itemcash.png';

export default function Main() {
  const [playerOnline, setPlayerOnline] = useState(false);
  const [serverOnline, setServerOnline] = useState();

  const PlayersOnlineStatus = async () => {
    try {
      const { data } = await api.get('/users');
      setPlayerOnline(data?.users?.count);
    } catch (error) {
      console.log(JSON.stringify(error));
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
      <div className="cashtab">
        <div className="divleft">
          <img src={itemcash} alt="" />
        </div>
        <div className="divright">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Link className="linkcash" type="button" to="/">
          Ver todos
        </Link>
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
      <div className="woetab">
        <h1>Dias da Guerra do Emperium:</h1>
        <div>
          <ul>
            <div className="daystab">
              <img className="img" src={castle} alt="" />
              <div className="linewidth">
                <p>Prontera</p>
              </div>
              <div className="linewidth">
                <p>Segunda-Feira</p>
              </div>
              <div className="lineday">
                <p>22:00</p>
              </div>
              <div>
                <p>|</p>
              </div>
              <div className="lineday">
                <p>23:59</p>
              </div>
            </div>
            <div className="daystab">
              <img className="img" src={castle} alt="" />
              <div className="linewidth">
                <p>Aldebaran</p>
              </div>
              <div className="linewidth">
                <p>Quarta-Feira</p>
              </div>
              <div className="lineday">
                <p>12:00</p>
              </div>
              <div>
                <p>|</p>
              </div>
              <div className="lineday">
                <p>14:00</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
