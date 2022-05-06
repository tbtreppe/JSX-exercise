const App = () => (
  <div>
    <Tweet
      user="girl1234"
      name="Sarah"
      date={new Date().toDateString()}
      message="This is my first tweet!"
    />
    <Tweet
      user="boyzzz586749"
      name="Ben"
      date={new Date().toDateString()}
      message="This is also my tweet"
    />
    <Tweet
      user="guys566"
      name="Bob"
      date={new Date().toDateString()}
      message="This is not mine"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
