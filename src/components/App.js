import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Estádio do Café - Londrina/PR",
        data: "01/06/2017",
        horario: "19hs"
    },
    casa: {
        nome: "Londrina"
    },
    visitante: {
        nome: "Figueirense"
    }
};

export default class App extends React.Component {
    render() {
        return (
            <PlacarContainer
                partida={dados.partida}
                casa={dados.casa}
                visitante={dados.visitante} />
        );
    }
}
