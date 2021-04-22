/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

import img01 from '../../assets/new/img01.png';
import account from '../../assets/new/account.svg';
import guild from '../../assets/new/guild.svg';
import mpv from '../../assets/new/mpv.svg';

export default function Main() {
  return (
    <Wrapper>
      <div className="title">
        <div className="center">
          <h1 className="h1cima">SEJA BEM-VINDO AO</h1>
          <h1 className="h1baixo">
            ragna<h1 className="h1roxo">Reborn</h1>
          </h1>
          <span>
            Seja bem-vindo ao novo servidor de ragnarok. Um servidor OldTimes
            exatamento como era em 2006.
          </span>
          <Link to="/">Ir para registro</Link>
        </div>
        <div className="fade" />
      </div>
      <div className="serverstatus">
        <div className="servercontent">
          <div className="contentleft">
            <h1>Servidor</h1>
            <h2 className="offline">Offline</h2>
          </div>
          <div className="contentright">
            <h1>Jogadores online</h1>
            <h2>5612</h2>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="infotxt">
          <h2>servidor OldTimes</h2>
          <h1>Venha para o nosso novo servidor</h1>
          <span>
            {`O nosso servidor ragnaReborn é um servidor OldTimes exatamente como
            era em 2006, não temos cash que dê status. Contamos com ROP's que são
            apenas visuais, e um sistema VIP's que trás alguns beneficios aos
            jogadores apenas a fim de manter o servidor online.`}
            <br />
            Muito obrigado e esperamos ver você online!
          </span>
        </div>
        <div className="infoimg">
          <img src={img01} alt="" />
        </div>
      </div>
      <div className="linksrapido">
        <Link to="/" className="table">
          <h1>VOTE EM NÓS</h1>
          <span>ganhe pontos ajudando a gente</span>
        </Link>
        <Link to="/" className="table guide">
          <h1>GUIAS</h1>
          <span>veja nossos guias</span>
        </Link>
        <Link to="/" className="table database">
          <h1>DATABASE</h1>
          <span>use nosso database</span>
        </Link>
      </div>
      <div className="woe">
        <div className="woetable">
          <h1>Horários da Guerra do Emperium</h1>
          <div className="right">
            <div className="line">
              <div className="city">
                <span>Prontera</span>
              </div>
              <div className="day">
                <span>Segunda-Feira</span>
              </div>
              <div className="hour">
                <span>12:00</span>
              </div>
              <div className="traco">|</div>
              <div className="hour">
                <span>14:00</span>
              </div>
            </div>
            <div className="line">
              <div className="city">
                <span>Aldebaran</span>
              </div>
              <div className="day">
                <span>Terça-Feira</span>
              </div>
              <div className="hour">
                <span>20:00</span>
              </div>
              <div className="traco">|</div>
              <div className="hour">
                <span>22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers">
        <div className="numberscenter">
          <div className="numbertable">
            <img src={mpv} alt="" />
            <h1>7264</h1>
            <h2>7264</h2>
            <span>{`Total de MVP's Mortos`}</span>
          </div>
          <div className="numbertable">
            <img src={account} alt="" />
            <h1>520</h1>
            <h2>520</h2>
            <span>Total de Contas</span>
          </div>
          <div className="numbertable">
            <img src={guild} alt="" />
            <h1>23</h1>
            <h2>23</h2>
            <span>Total de Guilds</span>
          </div>
        </div>
      </div>
      <div className="regras">
        <div className="regrastable">
          <h1>Regras e Regulamentos</h1>
          <span>
            {`Compartilhar as informações da conta com outro usuário isenta
            completamente a responsabilidade da equipe em relação às ações
            decorrentes de qualquer inconveniente.`}
            <br />
            <br />
            {`É proíbida a publicação de
            imagens alteradas que mostram os seguintes fatores: "Objetos falsos,
            Visuais falsos, Monstros falsos, Animais de estimação falsos ou
            qualquer coisa relacionada ao jogo", a punição assumida por este ato
            resultará em um bloqueio permanente de sua conta.`}
            <br />
            <br />
            {`O uso de programas
            externos externos ao cliente é proibido, incluindo scripts de
            auto-bot, hot-key, auto-farming, etc.`}
            <br />
            <br />
            {`É proibido solicitar
            tratamento especial da equipe, as compras feitas no ragna`}
            <span className="roxo">Reborn</span> {`são para pontos virtuais.`}
            <br />
            <br />
            {`Nenhum produto físico será enviado ou prova de
            entrega será fornecida, não é obrigatório fazer uma compra para
            jogar na comunidade, todas as compras são feitas à vontade e para
            apoiar o crescimento da comunidade.`}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
