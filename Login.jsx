export default function Login({ onLogin }) {
  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={onLogin}>Mock Login</button>
    </div>
  );
}
