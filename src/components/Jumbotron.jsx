import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .jumbotron {
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    position: absolute;
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  
  
  @media (max-width: 568px){
    .jumbotron {
      line-height: 150%;
    }

  @media (max-width: 460px){
    .jumbotron {
     line-height: 100%;
    }
  }
  }
`

const Jumbotron = (props) => {
  return (
    <Styles>
      <div className=" p-4 rounded-lg jumbotron text-white" style={{
        height: props.height,
        background: `no-repeat fixed center url(${props.background})`,
        backgroundSize: 'cover'
      }}>
        <div className="overlay"></div>
        <h1 className="display-4">WebDeb blog</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero distinctio, iure eos earum unde voluptates odit, itaque deleniti quo non dolorum numquam. Aspernatur atque, mollitia voluptatibus iure dignissimos sit exercitationem! Voluptas magni fugiat rerum ea beatae ex quo minus! Eius quis praesentium obcaecati, blanditiis totam, illo iste optio eum distinctio, alias impedit corporis eveniet ducimus odit? Voluptatem ad asperiores quos.</p>

        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </div>
    </Styles>
  )
}

export default Jumbotron