import React from 'react';

export default class BotaoGol extends React.Component {

    handleClick(event) {
        event.preventDefault(); // Cancela o evento padrão do onClick
        this.props.marcarGol();
    }

    render() {
        return(
            <button className={"btn btn-success"} onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}