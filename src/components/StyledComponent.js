import styled from "styled-components";

export const Entry = styled.div`
        visibility: ${(props) => props.allstocks.player1.includes(props.number) || props.allstocks.player2.includes(props.number) || props.allstocks.player3.includes(props.number) || props.allstocks.player4.includes(props.number) ? "visible" : "hidden"};
        background-color: ${(props) => props.allstocks.player1.includes(props.number) ? "gold" : props.allstocks.player2.includes(props.number) ? "red" : props.allstocks.player3.includes(props.number) ? "blue" : "springGreen"};
`