<script lang='ts'>
    import Authenticate from "../../components/Authenticate.svelte";
    import Dashboard from "../../components/Dashboard.svelte";

    import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/firebase';
	import { getDoc, setDoc, doc} from 'firebase/firestore';
	import { authStore } from "../../store/store";

	const nonAuthRoutes = ['/', 'product']
		let isLoading = true;
		let signedIn = false;

	onMount(() => {
		console.log("Mounting...");
		const unsubscribe = auth.onAuthStateChanged(async user => {
			const currentPath = window.location.pathname;

            /*
			if (!user && !nonAuthRoutes.includes(currentPath)) {
				window.location.href = "/";
			}

            
			if (user && currentPath === "/") {
				window.location.href = "/dashboard";
				return;
			}
            */

			if (!user) {
                isLoading = false;
				return;
			}
            signedIn = true;

			let dataToSetToStore;
			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);
			if (!docSnap.exists()) {
				const userRef = doc(db, 'user', user.uid);
				dataToSetToStore = {
					email: user.email,
					threads: [],
					expire: 1,
				}
				await setDoc(userRef, dataToSetToStore, { merge: true })	
			} else {
				const userData = docSnap.data();
				dataToSetToStore = userData;
			}
			authStore.update((curr) => {
				return {
					...curr,
					user,
					data: dataToSetToStore,
					loading: false,
				};
			});
            isLoading = false;
		});
	});
</script>

{#if !isLoading}
    {#if signedIn}
        <Dashboard/>
    {:else}
        <Authenticate/>
    {/if}
{/if}

