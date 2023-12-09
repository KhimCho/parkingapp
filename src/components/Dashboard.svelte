<script lang='ts'>
	import { authHandlers } from "../store/store";
</script>

<div class="flex flex-1 flex-col items-center justify-center my-24 mx-auto w-2/3 lg:w-1/3 animate-fadein">
    <h1 class="h1 my-12 animate-bounce">
        Bạn đã đăng nhập
    </h1>
    <button on:click={authHandlers.logout} class="bg-violet-600 hover:bg-violet-700 transition-all w-2/3 rounded-lg p-4 mt-4 mx-12 text-lg font-bold">
        ĐĂNG XUẤT
    </button>
</div>