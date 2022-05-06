const app = () => (
  <div>
    <Person name="Mike" age={20} hobbies={["basketball", "baseball"]} />
    <Person name="Alice" age={43} hobbies={["knitting", "soccer", "reading"]} />
    <Person
      name="Beth"
      age={10}
      hobbies={["watching tv", "coloring", "shopping", "playing"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
