import html from "html-literal";

export default state => html`
  <header>
    <h1>Donkey Talk${state.header}</h1>
  </header>
`;
