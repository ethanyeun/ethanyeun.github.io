const snowflakeSymbols = ["⛄", "❄", "❄", "❆", "❅", "✥"];
const numSnowflakes = 100; // Number of snowflakes to create

function createSnowflake() {
  const snowflake = document.createElement('span');
  snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
  
  const size = Math.random() * 20 + 10; // Random size between 10px and 30px
  snowflake.style.fontSize = `${size}px`;
  snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random fall duration between 10s and 20s
  snowflake.style.animationDelay = `${Math.random() * 20}s`; // Random start delay

  document.querySelector('.snowflakes').appendChild(snowflake);
}

for (let i = 0; i < numSnowflakes; i++) {
  createSnowflake();
}
