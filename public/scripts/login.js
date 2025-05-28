class Login extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      const html = `
        <style>
          #login-modal {
            background: rgba(0,0,0,0.85);
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
  
          .loginmodal-container {
            padding: 30px;
            max-width: 350px;
            width: 100%;
            background-color: #F7F7F7;
            border-radius: 6px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            font-family: system-ui, sans-serif;
            text-align: center;
          }
  
          .loginmodal-container h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }
  
          input[type=password], input[type=submit] {
            width: 100%;
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 14px;
            box-sizing: border-box;
          }
  
          input[type=password]:focus {
            border-color: #4d90fe;
            outline: none;
          }
  
          .loginmodal-submit {
            background-color: #4d90fe;
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
          }
  
          .loginmodal-submit:hover {
            background-color: #357ae8;
          }
        </style>
  
        <div id="login-modal">
          <div class="loginmodal-container">
            <h1>Login</h1>
            <p>This is a school project</p>
            <p>The password is <code>kea</code></p>
            <form>
              <input type="password" name="pass" placeholder="Password" />
              <input type="submit" class="loginmodal-submit" value="Login" />
            </form>
          </div>
        </div>
      `;
  
      this.shadowRoot.innerHTML = html;
  
      this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const input = this.shadowRoot.querySelector("input[name=pass]");
        if (input.value === "kea") {
          document.querySelector("#totally-delete-me")?.remove();
          localStorage.setItem("iform-totally-logged-in", "true");
        } else {
          alert("Wrong password");
        }
      });
    }
  }
  
  if (!customElements.get("iform-login")) {
    customElements.define("iform-login", Login);
  }
  
  window.addEventListener("load", () => {
    if (localStorage.getItem("iform-totally-logged-in") !== "true") {
      const div = document.createElement("div");
      div.id = "totally-delete-me";
      div.innerHTML = "<iform-login></iform-login>";
      document.body.prepend(div);
    }
  });
  