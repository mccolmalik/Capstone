import html from "html-literal";
export default () => html`
  <section id="order">
    <label for="suggestion">Suggestion:</label>
    <div>
      <input
        type="text"
        name="suggestion"
        id="suggestion"
        placeholder="call out a game"
        required
      />
      <input
        type="hidden"
        name="customer"
        id="customer"
        value="Anonymous customer"
      />
      <input type="submit" name="submit" value="Submit Suggestion" />
    </div>
  </section>
`;
