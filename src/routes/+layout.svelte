<script lang="ts">
	import '../app.postcss';
	import 'iconify-icon';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar background="bg-transparent" padding="py-8 md:px-12">
			<svelte:fragment slot="lead">
				<a href="/"><img src="/SiteLogoText.webp" alt="Logo" class="w-52 cursor-pointer hover:scale-105 transition-all drop-shadow-xl"></a>
			</svelte:fragment>
			<nav class="items-center place-self-center">
				<ul class="text-center">
					<li class="list-none inline-block px-12"><a href="/" class="text-xl hover:opacity-60 transition-all font-semibold no-underline px-2">TRANG CHỦ</a></li>
					<li class="list-none inline-block px-12"><a href="/thanhtoan" class="text-xl hover:opacity-60 transition-all font-semibold no-underline px-2">THANH TOÁN</a></li>
					<li class="list-none inline-block px-12"><a href="/datcho" class="text-xl hover:opacity-60 transition-all font-semibold no-underline px-2">ĐẶT CHỖ</a></li>
					<li class="list-none inline-block px-12"><a href="/trogiup" class="text-xl hover:opacity-60 transition-all font-semibold no-underline px-2">TRỢ GIÚP</a></li>
				</ul>
			</nav>
			<svelte:fragment slot="trail">
				<LightSwitch/>
				<a href="/dashboard"><iconify-icon icon="healthicons:ui-user-profile-outline" width="50" height="50" class="cursor-pointer hover:scale-105 hover:opacity-60 transition-all"/></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<div class="bg-blue-950 pt-10 pb-24">
			<div class="text-center">
				<p class="mt-4 text-md italic leading-6 text-stone-200">© 2023 TEAM 5 WEB DEVELOPERS.</p>
				<a href="https://www.facebook.com/khimcho.58/"><p class="mt-4 text-md italic leading-6 text-stone-200">© Huỳnh Anh Nguyễn</p></a>
				<a href="https://www.facebook.com/han.2003z"><p class="mt-4 text-md italic leading-6 text-stone-200">© Bùi Nguyễn Phúc</p></a>
				<a href="https://www.facebook.com/profile.php?id=100066457309235"><p class="mt-4 text-md italic leading-6 text-stone-200">© Huỳnh Minh Khiêm.</p></a>
			</div>
		</div>
	</svelte:fragment>
</AppShell>