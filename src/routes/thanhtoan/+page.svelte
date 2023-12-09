<script lang="ts">
	import Modal from "../../components/modal.svelte";
    let isModalOpen = false;
    import { getFirestore, doc, getDoc, updateDoc, runTransaction,  } from "firebase/firestore";
    import { auth, db } from '$lib/firebase/firebase';
	import { onMount } from "svelte";
	import { onAuthStateChanged } from "firebase/auth";
	import { authStore } from "../../store/store";
    import  {}
    let month = 0;
    let isLoading = true;
    let signedIn = false;

</script>

<div class="flex flex-col mb-8 space-y-4">
    <h1 class="text-5xl xl:text-6xl text-center pb-6">
        THANH TOÁN PHÍ GỬI XE
    </h1>
</div>

<div class="wrapper">

    <p>Lựa chọn thanh toán</p>
    <select bind:value={month} class="select" size="4">
        <option value="1">1 tháng (40.000 VND)</option>
        <option value="2">2 tháng (70.000 VND)</option>
        <option value="3">3 tháng (100.000 VND)</option>
        <option value="4">4 tháng (120.000 VND)</option>
        <option value="5">5 tháng (150.000 VND)</option>
    </select>
    <p>Hình thức chuyển khoản</p>
    <select id="ck" bind:value={} class="select">
        <option value="momo.jpg">Momo</option>
        <option value="bidv.jpg">BIDV</option>
    </select>
</div>

<div class="flex flex-1 flex-col items-center justify-center my-10 mx-auto w-2/3 lg:w-1/3 animate-fadein">
    <button on:click={openModal} class="text-white bg-blue-700 hover:bg-blue-800 transition-all 
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
    .id {
        display: flex;
    }

</style>