import styled from 'styled-components';

export const HomeWrapper = styled.section`
  background-color: #CFD8DC;
  button {
    color: #00a7e0;
    padding: 2px 4px;
    margin-left: 5px;
  }
  h2 {
    color: #2E7D32;
    padding: .7rem;
    margin: 0 auto;
    width: fit-content;
  }
  .project {
    background-color: #fafafa;
    padding: 1rem;
    margin: 10px;
    border-radius: 8px;
    align-items: center;
    box-shadow: 1px 1px 1px #F5F5F5;
    position: relative;
  }
  .project:hover {
    background-color: #E0E0E0;
    transition: 0.1s ease all;
    box-shadow: 1px 1px 1px #BDBDBD;
    transform: scale(1.01);
  }
  .tech-stack {
    margin: 1rem 0;
    padding: 1rem;
    text-align: center;
  }
  .tech-stack span {
    color: #01579B;
  }
  .project-info {
    padding: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-height: 34rem;
    margin: 1.5rem auto;
  }
  .color-gr {
    text-decoration: none;
    color: #F5F5F5;
    background-color: #49bf9d;
    padding: 6px 8px;
    border-radius: 10px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .color-gr:hover {
    opacity: 0.5;
    transition: 0.1s ease all;
  }
  .project h3 {
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0 0 0 1rem;
    color:  #01579B;
    font-weight: 600;
    text-transform: lowercase;
  }
  .project-info p {
    color: #616161;
    word-wrap: break-word;
    margin: 0 0 5rem;
    padding: 1rem;
    text-align: center;
  }
  .project img {
    object-fit: cover;
    display: block;
    width: min(100%, 35rem);
    border-radius: 10px;
    margin: 5rem auto 0;
    flex: 1;
  }
  summary {
    outline: none;
    transition: 0.3s ease all;
  }
`;