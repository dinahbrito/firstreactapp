import './App.css';

function App() {

  return (
    <div className="App">
      
      <main>
        <div className="left">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="right">
            <div className="offer">
                <p><span className="try">Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form>
              <input type="text" id="firstname" placeholder="First Name"></input>
              <input type="text" id="lastname" placeholder="Last Name"></input>
              <input type="email" placeholder="Email Address"></input>
              <input type="password" id="password" name="password" placeholder="Password"></input>
              <button>Claim Your Free Trial</button>
              <small>By clicking the button, you are aggreeing to our <a href="https://dinahbrito.github.io/reactapp/" className="legal">Terms and
                        Services</a>
              </small>
            </form>
        </div>
      </main>

    </div>
  );
}

export default App;
