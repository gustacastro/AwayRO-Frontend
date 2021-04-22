import React from 'react';

import { Container } from './styles';

import infobackground from '../../assets/new/infobackground.png';

export default function Information() {
  return (
    <Container>
      <div className="title">
        <h1>Sobre o </h1>
        <h2>servidor</h2>
      </div>
      <div className="table">
        <div>
          <h3>Informações Gerais & Estatísticas</h3>
        </div>
        <table>
          <tr>
            <td className="left">Episódio</td>
            <td className="right">Amatsu & Kunlun</td>
            <td className="left">Rates</td>
            <td className="right">5x/5x</td>
          </tr>
          <tr>
            <td className="left">Max. Level</td>
            <td className="right">99/50 </td>
            <td className="left">Drop Geral</td>
            <td className="right">3x</td>
          </tr>
          <tr>
            <td className="left">Atributos</td>
            <td className="right">Max ASPD</td>
            <td className="left">Drop Equips</td>
            <td className="right">3x</td>
          </tr>
          <tr>
            <td className="left">Max ASPD</td>
            <td className="right">190</td>
            <td className="left">Drop MvP</td>
            <td className="right">1x</td>
          </tr>
          <tr>
            <td className="left">Mercanica</td>
            <td className="right">Oldtimes Classico de 2006</td>
            <td className="left">Drop MvP</td>
            <td className="right">1x</td>
          </tr>
          <tr>
            <td className="left">Donates</td>
            <td className="right">Servidor sem Pay To Win</td>
            <td className="left">Cartas Normais</td>
            <td className="right">0,10%</td>
          </tr>
          <tr>
            <td className="left">3rd Classes</td>
            <td className="right">Desativadas</td>
            <td className="left">Cartas MvP</td>
            <td className="right">0,01%</td>
          </tr>
          <tr>
            <td className="left">Pack Iniciante</td>
            <td className="right">Não</td>
            <td className="left">Pack Guild</td>
            <td className="right">Não</td>
          </tr>
          <tr />
        </table>
      </div>
      <img className="infobackground" src={infobackground} alt="" />
    </Container>
  );
}
