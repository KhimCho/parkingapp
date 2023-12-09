<script lang='ts'>
	import { authHandlers } from "../store/store";

    let email = "";
    let password = "";
    let confirmPass = "";
    let error = false;
    let register = false;
    let authenticating = false;

    async function handleAuthenticate() {
        if (!email || !password || (register && !confirmPass)) {
            error = true;
            return;
        }
        authenticating = true;

        try {
            if (!register) {
                await authHandlers.login(email, password);
            } else {
                await authHandlers.signup(email, password);
            }
        } catch (err) {
            console.log("Authentication Failed: ", err);
            error = true;
            authenticating = false;
        }
    }

    function handleRegister() {
        register = !register;
    }

    import { ProgressRadial } from "@skeletonlabs/skeleton";
</script>

<style lang='postcss'>
    form {
        @apply flex flex-col gap-2 p-0.5;
    }

    form input {
        @apply w-full px-4 py-2 bg-white/40 border-x-sky-700 rounded-lg;
    }
    
    .dark form input {
        @apply bg-black/30 border-blue-600;
    }

    button {
        @apply text-white;
    }

    p {
        @apply mx-auto text-center; 
    }
</style>

<div class="flex flex-1 flex-col items-center justify-center my-24 animate-fadein">
    <form class="w-4/5 lg:w-1/4">
        <h1 class="text-5xl xl:text-6xl text-center pb-6">
            {register ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
        </h1>
        {#if error}
            <p class="text-error-400 mx-auto text-lg">
                Thông tin đăng nhập không hợp lệ!
            </p>
        {/if}
        <label>
            <input bind:value={email} type="email" spellcheck="false" placeholder="Email" maxlength="254" minlength="5">
        </label>
        <label>
            <input bind:value={password} type="password" spellcheck="false" placeholder="Mật khẩu">
        </label>

        {#if register}
        <label>
            <input bind:value={confirmPass} type="password" spellcheck="false" placeholder="Nhập lại mật khẩu">
        </label>
        {/if}

        {#if authenticating}
        <ProgressRadial class="mx-auto w-11 mt-4"/>
        {:else}
        <button on:click={handleAuthenticate} class="bg-blue-600 hover:bg-blue-700 transition-all rounded-lg p-4 mt-4 mx-12 text-lg font-bold">
            {register ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}
        </button>

        <p class="pt-8">
            {register ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
        </p>
        <button on:click={handleRegister} class="bg-orange-500 hover:bg-orange-600 transition-all rounded-lg p-2 mx-auto w-1/2 text-md font-bold">
            {register ? "Đăng nhập" : "Đăng ký"}
        </button>
        {/if}

    </form>    
</div>