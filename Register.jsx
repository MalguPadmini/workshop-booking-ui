export default function Register({ onLogin }) {
  return (
    <div className="container">
      <h2>Register</h2>
      <button onClick={onLogin}>Register</button>
    </div>
  );
}