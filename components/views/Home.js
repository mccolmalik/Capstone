import html from "html-literal";
export default state => html`
  <p>
    Welcome to Donkey talk. The site or app where you can see your frustrations
    for select games expressed. This is a place of laughs so please relax.
  </p>
  <h1>
    Weather in ${state.weather.city} ${state.weather.temp}F, feels like
    ${state.weather.feelsLike}
  </h1>
`;
