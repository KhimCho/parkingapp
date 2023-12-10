<script lang="ts">
	import Modal from "../../components/modal.svelte";
    let isModalOpen = false;
    import { cartItems, addToCart, removeFromCart} from "../cart";

    const products = [
    {
      id: 1,
      name: "1 tháng",
      price: 40000,
    },
    {
      id: 2,
      name: "2 tháng",
      price: 80000,
    },
    {
      id: 3,
      name: "3 tháng",
      price: 120000,
    },
  ];

    let qrOpt = "";   
    let month = 0;
    async function checkout() {
        isModalOpen = true;
    const data = await fetch("/thanhtoan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: $cartItems,
      }),
    }).then((data) => data.json());
    window.location.replace(data.url);
  }
</script>

<div class="flex flex-col mb-8 space-y-4">
    <h1 class="text-5xl xl:text-6xl text-center pb-6">
        THANH TOÁN PHÍ GỬI XE
    </h1>
</div>

<div class="wrapper">

    <p class="centered-gradient">Lựa chọn thanh toán</p> <br>
    <div class="grid">
        {#each products as product}
          <div>
            <h2>{product.name}</h2>
            <p>Price: {product.price} VND</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => addToCart(product)}>Add to cart</button>
          </div>
        {/each}
    </div>
    {#if $cartItems.length > 0}
    <h1>Cart</h1>

    <div class="grid">
      {#each $cartItems as cartItem}
        <div>
          <h2>{cartItem.name}</h2>
          <p>Amount: {cartItem.amount}</p>
          <p>Price: ${cartItem.price}</p>
          <p>Total: ${cartItem.price * cartItem.amount}</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => removeFromCart(cartItem.id)}
            >Remove from cart</button
          >
        </div>
      {/each}
    </div>
  {/if}
</div>

<div class="flex flex-1 flex-col items-center justify-center my-10 mx-auto w-2/3 lg:w-1/3 animate-fadein">
    <button on:click={checkout} class="text-white bg-blue-700 hover:bg-blue-800 transition-all 
    shadow-xl shadow-blue-800/50 rounded-3xl py-3 px-8 font-bold inline-block mr-4">
    Thanh toán
</button>
<Modal isOpen={isModalOpen}>
    <h1>Chuyển khoản vào đây và đợi kết quả</h1>
    <img src={qrOpt}/>
  </Modal>
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