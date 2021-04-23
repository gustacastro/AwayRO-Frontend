import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import mega from '../../assets/new/mega.svg';
import mediafire from '../../assets/new/mediafire.svg';
import googledrive from '../../assets/new/google-drive.svg';

export default function Download() {
  return (
    <Container>
      <div className="title">
        <h1>Arquivos</h1>
        <h2>download</h2>
      </div>
      <div className="table">
        <div className="title2">
          <h1>
            ragna<h1 className="roxo">Reborn</h1> - Full Cliente (Cliente
            completo)
          </h1>
        </div>
        <div>
          <h2>Tamanho:</h2>
          <h3>2gb</h3>
          <h2>Data:</h2>
          <h3>15,Abril,2021</h3>
        </div>
        <div className="download">
          <Link to="/">
            <img src={mega} alt="" />
            Mega
          </Link>
          <Link to="/">
            <img src={googledrive} alt="" />
            Google Drive
          </Link>
          <Link to="/">
            <img src={mediafire} alt="" />
            MediaFire
          </Link>
        </div>
        <div className="instruction">
          <h1>Instruções</h1>
          <h4>1. Baixe os arquivos do jogo a cima.</h4>
          <h4>
            2. Extraia os arquivos do ragna<h4 className="roxo">Reborn</h4> onde
            desejar.
          </h4>
          <h4>
            3. Execute o atualizador ragna<h4 className="roxo two">Reborn</h4>
            Patch.exe e aproveite o jogo!
          </h4>
        </div>
      </div>
      <div className="table 2">
        <div className="title2">
          <h1>
            ragna<h1 className="roxo">Reborn</h1> - Lite Cliente (Cliente Leve)
          </h1>
        </div>
        <div>
          <h2>Tamanho:</h2>
          <h3>2gb</h3>
          <h2>Data:</h2>
          <h3>15,Abril,2021</h3>
        </div>
        <div className="download">
          <Link to="/">
            <img src={mega} alt="" />
            Mega
          </Link>
          <Link to="/">
            <img src={googledrive} alt="" />
            Google Drive
          </Link>
          <Link to="/">
            <img src={mediafire} alt="" />
            MediaFire
          </Link>
        </div>
        <div className="instruction">
          <h1>Instruções</h1>
          <h4>1. Baixe os arquivos do jogo a cima.</h4>
          <h4>
            2. Extraia os arquivos do ragna<h4 className="roxo">Reborn</h4> onde
            desejar.
          </h4>
          <h4>
            3. Mova apenas data.grf do bRO para a pasta do ragna
            <h4 className="roxo">Reborn</h4>
          </h4>
          <h4>
            4. Execute o atualizador ragna<h4 className="roxo two">Reborn</h4>
            Patch.exe e aproveite o jogo!
          </h4>
        </div>
      </div>
    </Container>
  );
}
