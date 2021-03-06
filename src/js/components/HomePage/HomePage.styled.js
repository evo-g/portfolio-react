import styled from 'styled-components';

export const HomeWrapper = styled.section`
  background: #FFFFFF;
  background: -webkit-linear-gradient(top left, #A6BDB9, #FFFFFF);
  background: -moz-linear-gradient(top left,  #A6BDB9, #FFFFFF);
  background: linear-gradient(to bottom right,  #A6BDB9, #FFFFFF);
  h2 {
    color: #FFF;
    padding: .7rem;
    margin: 0 auto;
    text-align: center;
  }
  h3 {
    color: #0024aa;
    padding: .7rem;
    margin: 0 auto;
    text-align: center;
  }
  .project {
    background-color: #fafafa;
    padding: 1rem;
    margin: .5rem;
    border-radius: 8px;
    align-items: center;
    box-shadow: 1px 1px 1px #F5F5F5;
  }
  .project:hover {
    background-color: #FFF;
    transition: 0.1s ease all;
    box-shadow: 1px 1px 1px #BDBDBD;
    transform: scale(1.01);
  }
  .tech-stack {
    margin: 0;
    padding: 1rem;
    text-align: center;
  }
  .tech-stack span {
    color: #01579B;
    font-weight: 500;
  }
  .project-info {
    padding: .5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-height: 12rem;
    margin: 1.5rem auto;
    overflow-y: auto;
    
  }
  .info-container {
    display: flex;
    justify-content: space-between;
  }
  .color-gr {
    text-decoration: none;
    color: #F5F5F5;
    background-color: #6ac7c2;
    padding: 10px 8px;
    border-radius: 8px;
    text-align: center;
  }
  .color-gr:hover {
    opacity: 0.5;
    transition: 0.1s ease all;
  }
  .project h3 {
    margin: 0 0 0 1rem;
    color:  #01579B;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-info p {
    color: #616161;
    word-wrap: break-word;
    margin: 0 0 1rem;
    padding: 1rem;
    text-align: center;
  }
  .project img {
    object-fit: cover;
    display: block;
    width: min(100%, 35rem);
    border-radius: 8px;
    margin: 2rem auto 0;
  }
`;