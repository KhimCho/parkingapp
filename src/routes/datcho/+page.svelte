
<script>
	import { browser } from "$app/environment";
	import { firebaseConfig } from "$lib/firebase/firebase";
	import { AppShell } from "@skeletonlabs/skeleton";
	import { getApp, getApps, initializeApp } from "firebase/app";
    import { getFirestore, collection, query, where, onSnapshot, updateDoc, doc } from "firebase/firestore";
    import { list } from "postcss";
    const firebaseApp = browser && 
    (!getApps().length ? initializeApp(firebaseConfig) : getApps());

    const db = browser && getFirestore();
    const colRef = browser && collection(db, "bookings");
    
    // @ts-ignore
    let availables = [];

    //read/load data from Fb
    const unsubscribe = browser &&
    onSnapshot(colRef, (querySnapshot) => {
        let fbAvai = [];
        querySnapshot.forEach((doc) => {
            let avai = {...doc.data(), id:doc.id};
            fbAvai = [avai,...fbAvai];
        });
        availables = fbAvai;
    });

    //update
    const markEnable = async (avai) => {
        await updateDoc(doc( db, "bookings", avai.id), {
            enable: !avai.enable,
        });
    };
</script>


<div class="flex flex-col mb-8 space-y-4">
    <h1 class="text-5xl xl:text-6xl text-center pb-6">
        ĐẶT TRƯỚC CHỖ GIỮ XE
    </h1>
</div>

<div class="wrapper">
	<h1>Đặt chỗ</h1>
	<cite>Lưu ý: Không nhấn vào vị trí đang được chọn.</cite>
        <ol>
            {#each availables as avai}
                <li class:enable={avai.enable}>
                    <span>
                        {avai.place}{avai.number}
                    </span>
                    <span>
                        <button on:click={() => markEnable(avai)}>✔</button>
                    </span>
                </li>
            {:else}
                <p>No found places.</p>
            {/each}
        </ol>
</div>

<h3 class="mapp">Bản đồ nhà xe</h3>

<img src="carpark.png" class="centered-image"/>

<style>
    .enable{
        text-decoration: line-through;
    }
    * {
	box-sizing: border-box;
}
    .mapp {
        font-family: "Open Sans", sans-serif;
	    font-size: 1.5rem;  
    }
body {
	margin: 0;
	padding: clamp(1rem, 2vw, 3rem);
	font-family: "Open Sans", sans-serif;
	font-size: 1.1rem;
}

a {
	color: inherit;
}

.wrapper {
	max-width: 80rem;
	margin: 0 auto;
}

ol {
	padding: 1.5rem 1.5rem 1.5rem 4em;
	border: 0.3rem solid #75734C;
	columns: 15rem;
	column-gap: 7rem;
	column-rule: 4px dotted #8397A0;
	border-radius: 0.5rem;
    margin: 10px;
}

ol > * + * {
	margin-top: 1rem;
}

li {
	break-inside: avoid;
}

::marker {
	content: counters(list-item, '') ': ';
	font-weight: 700;
	font-size: 1.5em;
	color: #F59FAD;
}

li span {
	display: block;
}

li span:first-child {
	font-size: 1.5em;
}

li span:last-child {
	font-style: italic;
}

.divider {
	min-height: 6rem;
	background: lavender;
}

img {
  display: block;
  border-radius: 40px 5px;
  border: 0.3rem solid #75734C; 
  margin: 10px 0 10px ;
}

.centered-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  text-align: center;
}
</style>