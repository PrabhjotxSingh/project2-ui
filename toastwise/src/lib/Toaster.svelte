<script>
  import TScreen from "./TScreen.svelte";
</script>

<svg
  width="80vw"
  height="80vh"
  viewBox="0 0 300 400"
  xmlns="http://www.w3.org/2000/svg"
  style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
>
  <rect
    x="20"
    y="50"
    width="260"
    height="300"
    rx="30"
    ry="30"
    fill="#2c3e50"
    stroke="#34495e"
    stroke-width="5"
  />

  <rect x="60" y="48" width="180" height="20" fill="#000" />

  <rect x="70" y="90" width="160" height="220" fill="black" />

  <foreignObject x="70" y="90" width="160" height="220">
    <div style="width: 100%; height: 100%;">
      <TScreen />
    </div>
  </foreignObject>

  <rect x="60" y="352" width="180" height="20" fill="#000" />
</svg>

<style>
  svg {
    width: 80vw;
    height: 80vh;
  }
</style>
