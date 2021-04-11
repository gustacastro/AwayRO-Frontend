import React from 'react';

import { Form, Input, Choice } from '@rocketseat/unform';
import {
  BackGround,
  StatusNames,
  Wrapper,
  Status,
  Container,
  Quadradim,
  BackGroundNoticies,
  Notices,
  Events,
  Count,
  QuadradimBaixo,
  Guild,
  Days,
  Footer,
} from './styles';

import logoCima from '../../assets/away-full-logo.png';
import gepard from '../../assets/energia-verde.png';
import databaseimg from '../../assets/databaseimg.png';
import guild from '../../assets/woe01.png';
import swords from '../../assets/swords.png';

export default function Main() {
  function handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <Status>
        <div id="divStatus">
          <div id="divSides">
            <strong id="online">Online</strong>
          </div>
          <div id="divPlayerNum">
            <strong id="pPlayer">2785</strong>
          </div>
          <div id="divPlayerNum">
            <strong id="offline">Offline</strong>
          </div>
        </div>
        <div>
          <StatusNames>
            <div id="servidor">
              <strong>Servidor</strong>
            </div>
            <div id="player">
              <strong>Jogadores</strong>
            </div>
            <div id="woe">
              <strong>WoE</strong>
            </div>
          </StatusNames>
        </div>
      </Status>

      <Container>
        <div id="divimg">
          <img src={logoCima} alt="logocima" />
        </div>
        <BackGround>
          <div>
            <h1>
              Seja bem-vindo ao servidor <verde>AwayRO.</verde>
            </h1>
            <span>
              Um novo servidor totalmente amigável, servidor atualizado
              utilizando rAthena.
              <br />
              Com as rates <verde>15x </verde>/ <verde>15x </verde>/{' '}
              <verde>10x, </verde>com vários eventos para você.
            </span>
          </div>
          <div id="quadradinhos">
            <Quadradim>
              <div>
                <img src={gepard} alt="gepard" />
                <div>
                  <strong>
                    gePARD <br />
                    shield
                  </strong>
                </div>
              </div>
            </Quadradim>
            <Quadradim>
              <div>
                <img src={gepard} alt="gepard" />
                <div>
                  <strong>
                    rAthena
                    <br />
                    Atualizado
                  </strong>
                </div>
              </div>
            </Quadradim>
            <Quadradim>
              <div>
                <img src={gepard} alt="gepard" />
                <div>
                  <strong>
                    Sem <br />
                    ROPs
                  </strong>
                </div>
              </div>
            </Quadradim>
          </div>
          <div id="centroplz">
            <div id="database">
              <div id="imgdiv">
                <img src={databaseimg} alt="icon" />
              </div>
              <Form onSubmit={handleSubmit}>
                <h1>Database</h1>
                <span>Escolha Item ou Monstro</span>
                <div id="choice">
                  <Choice
                    name="choiceDb"
                    options={[
                      { value: 'itemDb', label: 'Item db' },
                      { value: 'mobDb', label: 'Mob db' },
                    ]}
                  />
                </div>
                <Input name="search" placeholder="Id ou Nome" />
                <button type="submit">Procurar</button>
              </Form>
            </div>
          </div>
        </BackGround>
        <BackGroundNoticies>
          <div id="painelRecentNews">
            <div>
              <div id="space-between">
                <div>
                  <h1>Notícias Recentes</h1>
                </div>
                <div>
                  <div id="nAeffect" />
                  <div>
                    <button type="button">Notícias anteriores</button>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <Notices onClick={() => {}}>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
              <Notices>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
              <Notices>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
              <Notices>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
              <Notices>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
              <Notices>
                <div id="date">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="effectSide" />
              </Notices>
            </ul>
          </div>

          <div id="painelEvents">
            <div>
              <div id="space-between">
                <div>
                  <h1>Eventos</h1>
                </div>
                <div>
                  <div id="nAeffectEvents" />
                  <div>
                    <button type="button">Ler mais</button>
                  </div>
                </div>
              </div>
            </div>
            <ul>
              <Events onClick={() => {}}>
                <div id="effectSideEvents" />
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="dateEvents">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
              </Events>
              <Events onClick={() => {}}>
                <div id="effectSideEvents" />
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="dateEvents">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
              </Events>
              <Events onClick={() => {}}>
                <div id="effectSideEvents" />
                <div id="text">
                  <h1>Lorem ipsum sollicitudin aliquet aliquam</h1>
                  <p>
                    Lorem ipsum sollicitudin aliquet aliquam massa odio praesent
                    nunc.
                  </p>
                </div>
                <div id="dateEvents">
                  <h1>11</h1>
                  <span>Abril</span>
                </div>
              </Events>
            </ul>
          </div>
        </BackGroundNoticies>

        <Count>
          <div id="quadradinhos">
            <QuadradimBaixo>
              <div>
                <img src={gepard} alt="gepard" />
                <div id="textCollum">
                  <strong>5612</strong>
                  <span>Total de Contas</span>
                </div>
              </div>
            </QuadradimBaixo>
            <QuadradimBaixo>
              <div>
                <img src={gepard} alt="gepard" />
                <div id="textCollum">
                  <strong>1207</strong>
                  <span>Total de Personagens</span>
                </div>
              </div>
            </QuadradimBaixo>
            <QuadradimBaixo>
              <div>
                <img src={gepard} alt="gepard" />
                <div id="textCollum">
                  <strong>200</strong>
                  <span>Total de Guilds</span>
                </div>
              </div>
            </QuadradimBaixo>
          </div>
          <Guild>
            <div id="divGuildSeparation">
              <div id="divWoe">
                <div>
                  <h1>Dias da Guerra do Emperium:</h1>
                </div>
                <div id="centerDays">
                  <ul>
                    <Days>
                      <div id="sidebyside">
                        <img src={swords} alt="" />
                        <div id="divDay">
                          <span>Segunda-Feira</span>
                        </div>
                        <div id="divName">
                          <span>Prontera</span>
                        </div>
                        <div id="divHourInicial">
                          <span>18:00</span>
                        </div>
                        <div>
                          <span>20:00</span>
                        </div>
                      </div>
                    </Days>
                    <Days>
                      <div id="sidebyside">
                        <img src={swords} alt="" />
                        <div id="divDay">
                          <span>Quarta-Feira</span>
                        </div>
                        <div id="divName">
                          <span>Payon</span>
                        </div>
                        <div id="divHourInicial">
                          <span>10:00</span>
                        </div>
                        <div>
                          <span>12:00</span>
                        </div>
                      </div>
                    </Days>
                    <Days>
                      <div id="sidebyside">
                        <img src={swords} alt="" />
                        <div id="divDay">
                          <span>Sexta-Feira</span>
                        </div>
                        <div id="divName">
                          <span>Aldebaran</span>
                        </div>
                        <div id="divHourInicial">
                          <span>22:00</span>
                        </div>
                        <div>
                          <span>00:00</span>
                        </div>
                      </div>
                    </Days>
                  </ul>
                </div>
              </div>
              <div id="divImg">
                <img src={guild} alt="guild" />
              </div>
            </div>
          </Guild>
        </Count>

        <Footer />
      </Container>
    </Wrapper>
  );
}
