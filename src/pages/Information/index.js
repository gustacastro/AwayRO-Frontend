/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';

import { Container } from './styles';

import infobackground from '../../assets/new/infobackground.png';
import extrasbackground from '../../assets/new/extrasbackground.png';

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
      <div className="table extras">
        <div>
          <h3>Informações Extras</h3>
        </div>
        <table>
          <tr>
            <td className="arroba" />
            <td />
            <td className="right extras2 title">
              Comandos para jogadores normais
            </td>
          </tr>
          <tr>
            <td className="arroba">@</td>
            <td className="left extras">exp</td>
            <td className="right extras2">
              Mostra o nível e a % de experiência que o jogador possúi
            </td>
          </tr>
          <tr>
            <td className="arroba">@</td>
            <td className="left extras">mi</td>
            <td className="right extras2">Mostra informações sobre monstros</td>
          </tr>
          <tr>
            <td className="arroba">@</td>
            <td className="left extras">commands</td>
            <td className="right extras2">
              Exibe todos os comandos disponiveis
            </td>
          </tr>
          <tr>
            <td className="arroba">@</td>
            <td className="left extras">die</td>
            <td className="right extras2">Mata o seu personagem</td>
          </tr>
          <tr>
            <td className="arroba">@</td>
            <td className="left extras">autoloot</td>
            <td className="right extras2">
              Ativa/Desativa o recolhimento automático dos itens
            </td>
          </tr>

          <tr />
        </table>
        <table>
          <tr>
            <td className="arroba" />
            <td />
            <td className="right extras2 title">
              {`Comandos para jogadores VIP's`}
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">storage</td>
            <td className="right extras2">
              Abre o seu armazém em qualquer lugar
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">alootid</td>
            <td className="right extras2">
              Ativa/Desativa o autoloot em um único item
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">changegm</td>
            <td className="right extras2">
              Passa a liderança do seu clã para outro membro
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">whodrops</td>
            <td className="right extras2">Mostra quem dropa certo item</td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">at</td>
            <td className="right extras2">
              Permite continuar vendendo mesmo estando offline
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">pettalk</td>
            <td className="right extras2">
              Permite o sistema de falas dos pets
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">gstorage</td>
            <td className="right extras2">Abre o armazém do seu clã</td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">away</td>
            <td className="right extras2">
              Mensagem de Away (Não está presente)
            </td>
          </tr>
          <tr>
            <td className="arroba arrobavip">@</td>
            <td className="left extras vip">noask</td>
            <td className="right extras2">Rejeita todos comandos</td>
          </tr>
          <tr>
            <td className="arroba" />
            <td />
            <td className="right extras2 footer">
              {`Todos os jogadores VIP's tem direito ao comandos dos jogadores normais e claro dos jogadores VIP's`}
            </td>
          </tr>

          <tr />
        </table>
      </div>
      <img className="extrasbackground" src={extrasbackground} alt="" />
    </Container>
  );
}
