import './index.scss';

// Minimal entry for the myFlix app used to verify Parcel setup
const app = document.getElementById('app');
app.innerHTML = `
  <main>
    <h1>myFlix App</h1>
    <p>Parcel is configured and serving <code>src/index.html</code>.</p>
    <p>Edit <code>src/index.jsx</code> or <code>src/index.scss</code> and save to see hot reload.</p>
  </main>
`;

console.log('myFlix App started — Parcel should be serving src/index.html');
