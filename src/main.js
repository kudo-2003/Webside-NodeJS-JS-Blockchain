document.addEventListener('DOMContentLoaded', async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        document.getElementById('content').innerHTML = `
          <p>Connected Account: ${account}</p>
          <button id="fetchGreeting">Fetch Greeting</button>
          <p id="greeting"></p>
        `;
  
        document.getElementById('fetchGreeting').addEventListener('click', async () => {
          const response = await fetch('https://literate-invention-qj6xxrr9gx439qwg-8545.app.github.dev/api/contract/greet');
          const data = await response.json();
          document.getElementById('greeting').textContent = `Greeting from contract: ${data.greet}`;
        });
      } catch (error) {
        console.error(error);
        document.getElementById('content').innerHTML = `<p>Error connecting to MetaMask</p>`;
      }
    } else {
      document.getElementById('content').innerHTML = `<p>Please install MetaMask</p>`;
    }
  });