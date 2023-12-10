<div class="flex flex-col mb-8 space-y-4">
    <h1 class="text-5xl xl:text-6xl text-center pb-6">
        THANH TOÁN PHÍ GỬI XE
    </h1>
</div>

<div class="wrapper">
  <p class="centered-gradient">Thanh toán thất bại</p> <br>
  <div class="flex flex-1 flex-col items-center justify-center my-10 mx-auto w-2/3 lg:w-1/3 animate-fadein">
      <a href="/thanhtoan"><button  class="text-white bg-blue-700 hover:bg-blue-800 transition-all 
      shadow-xl shadow-blue-800/50 rounded-3xl py-3 px-8 font-bold inline-block mr-4">
      Quay trở lại
    </button> </a>
  </div>
</div>

<style>
    select {
        width: 40%;
        border: 3px solid #F0C97D;
        display: block;
        margin: 5px auto;
        background-color: #f2f2f2;
        border-radius: 4px;
    }
    .wrapper {
	max-width: 80rem;
	margin: 0 auto;
    font-family: "Open Sans", sans-serif;
	font-size: 1.1rem;
    padding: clamp(1rem, 2vw, 3rem);
    font-weight: bold;
    }
    .grid {
    display: grid;
    grid-gap: 1em;
    margin-bottom: 5em;
    grid-template-columns: repeat(3, 1fr);
  }
  h2 {
    padding-bottom: 0.5em;
    border-bottom: 2px dotted black;
  }
  .centered-gradient {
    font-size: 24px;
  text-align: center;
  background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12); /* Replace the color values with your desired gradient */
  background-clip: text;
  -webkit-background-clip: text; /* For Safari/Chrome */
  color: transparent;
}

</style>