function Tweet(props) {
  return (
    <ul>
      <li>User: {props.username}</li>
      <li>Name: {props.name}</li>
      <li>Date: {props.date}</li>
      <li>Message: {props.message}</li>
    </ul>
  );
}
