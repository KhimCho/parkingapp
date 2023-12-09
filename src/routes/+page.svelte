<script lang='ts'>
	import { Avatar, Ratings, ConicGradient, filter, Apollo, Summer84, Noir} from "@skeletonlabs/skeleton";
	import type { ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ label: 'Thời gian học', color: '#3dd149', start: 0, end: 30 },
		{ label: 'Thời gian cần thiết để làm Deadline', color: '#e3de4f', start: 30, end: 99 },
		{ label: 'Thời gian còn lại của Deadline', color: '#ff3300', start: 99, end: 100 }
];
</script>



<!-- Hero Section 1 -->
<section>
	<div class="container flex flex-col-reverse md:flex-row
	items-center px-2 mx-auto mt-16 space-y-0 py-16">

	<!-- Left -->
	<div class="flex flex-col mb-32 space-y-4 md:w-1/2">
		<h1 class="md:text-5xl xl:text-6xl leading-tight drop-shadow-xl">
			DỄ DÀNG GỬI XE<br>TẠI TRƯỜNG
		</h1>
		<p class="md:text-md xl:text-xl font-semibold text-slate-400 mt-2 max-w-md">
			Tìm kiếm và đặt chỗ gửi phương tiện cá nhân trực tuyến tại trường chỉ với vài nút nhấn.
		</p>
		<div class="flex pt-8">
			<a href="/dashboard" class="text-white bg-blue-700 hover:bg-blue-800 transition-all 
			shadow-xl shadow-blue-800/50 rounded-3xl py-3 px-8 font-bold inline-block mr-4">
			BẮT ĐẦU NGAY
		</a>
		</div>
	</div>

	<!-- Right -->
	<div class="flex flex-col md:w-1/2 xl:w-3/4">
		<img src="ParkingLotBackground.webp" alt="" class="rounded-3xl border-2 border-blue-600"/>
	</div>
</section>

<!-- Hero Section 2 -->
<section>
	<div class="container flex flex-col-reverse md:flex-row
	items-center px-2 mx-auto mt-16 space-y-0">

	<!-- Left -->
	<div class="flex flex-col md:w-1/2 xl:w-2/3">
		<img src="HomepageArt.webp" alt=""/>
	</div>

	<!-- Right -->
	<div class="flex flex-col mb-32 space-y-4 md:w-1/2 ml-32">
		<h1 class="md:text-5xl xl:text-6xl leading-tight drop-shadow-xl">
			TÌM CHỖ ĐỂ XE<br>RỘNG RÃI
		</h1>
		<p class="md:text-md xl:text-xl font-semibold text-slate-400 mt-2 max-w-md">
			Phương tiện của bạn sẽ được sắp xếp tự động ở những vị trí thuận lợi cho việc lấy xe ra vào.
		</p>
	</div>


</section>

<!-- Reviews Section-->
<Apollo/>
<Summer84/>
<Noir/>
<section>
	<div class="max-w-full px-5 py-8 mx-auto text-center bg-blue-800">
		<h2 class="md:text-3xl xl:text-4xl pb-12 text-white drop-shadow-xl">
			✨ ĐÁNH GIÁ TỪ CÁC BẠN SINH VIÊN ✨
		</h2>
		<div class="flex flex-col md:flex-row md:space-x-6">
			<div class="flex flex-col items-center p-6 rounded-lg bg-white md:w-1/3 drop-shadow-lg">
				<Avatar src="/PhucAvatar.png" width="w-24" action={filter} actionParams="#Apollo"/>
				<h3 class="text-2xl font-bold text-blue-900">Nguyên Bùi Phúc</h3>
				<h4 class="text-lg font-medium text-gray-400">Sinh viên UIT K16</h4>
				<Ratings value={5} max={5}>
					<svelte:fragment slot="empty">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 0 0-9.11 28.06l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-16.54 0l-51 31l13.46-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.37.37 0 0 1 0-.09l59.44-5.14a16 16 0 0 0 13.35-9.75L128 32.08l23.2 55.29a16 16 0 0 0 13.35 9.75l59.45 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="half">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-8.27-2.32V32.09l23.2 55.28a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="full">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
					</svelte:fragment>
				</Ratings>
				<p class="text-gray-800 pt-6 md:text-md xl:text-lg font-semibold">
					Mình thích website này lắm, từ giờ mình có thể đặt chỗ gửi xe ngay ở nhà trước khi mình chạy lên trường.
				</p>
			</div>
			<div class="flex flex-col items-center p-6 rounded-lg bg-white md:w-1/3 drop-shadow-lg">
				<Avatar src="/PhucAvatar.png" width="w-24" action={filter} actionParams="#Noir"/>
				<h3 class="text-2xl font-bold text-blue-900">Bùi Nguyên Phúc</h3>
				<h4 class="text-lg font-medium text-gray-400">Sinh viên UIT K16</h4>
				<Ratings value={5} max={5}>
					<svelte:fragment slot="empty">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 0 0-9.11 28.06l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-16.54 0l-51 31l13.46-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.37.37 0 0 1 0-.09l59.44-5.14a16 16 0 0 0 13.35-9.75L128 32.08l23.2 55.29a16 16 0 0 0 13.35 9.75l59.45 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="half">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-8.27-2.32V32.09l23.2 55.28a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="full">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
					</svelte:fragment>
				</Ratings>
				<p class="text-gray-800 pt-6 md:text-md xl:text-lg font-semibold">
					Thật là tuyệt vời
				</p>
			</div>
			<div class="flex flex-col items-center p-6 rounded-lg bg-white md:w-1/3 drop-shadow-lg">
				<Avatar src="/PhucAvatar.png" width="w-24" action={filter} actionParams="#Summer84"/>
				<h3 class="text-2xl font-bold text-blue-900">Bùi Phúc Nguyên</h3>
				<h4 class="text-lg font-medium text-gray-400">Sinh viên UIT K16</h4>
				<Ratings value={4.5} max={5}>
					<svelte:fragment slot="empty">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 0 0-9.11 28.06l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-16.54 0l-51 31l13.46-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.37.37 0 0 1 0-.09l59.44-5.14a16 16 0 0 0 13.35-9.75L128 32.08l23.2 55.29a16 16 0 0 0 13.35 9.75l59.45 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="half">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-8.27-2.32V32.09l23.2 55.28a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z"/></svg>
					</svelte:fragment>
					<svelte:fragment slot="full">
						<svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width=2.5em height=2.5em viewBox="0 0 256 256"><path d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
					</svelte:fragment>
				</Ratings>
				<p class="text-gray-800 pt-6 md:text-md xl:text-lg font-semibold">
					UIT Parking có rất nhiều tính năng hay và dễ sử dụng nên mình hay xài thường xuyên.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Testing -->

<section>
	<div class="container flex flex-row items-center justify-center px-2 mx-auto my-48 space-y-0">
		<h2 class="h2 w-1/4">
			Biểu đồ Deadline
		</h2>
		<div class="w-1/4">
			<ConicGradient stops={conicStops} legend width="w-5/6"/>
		</div>
	</div>
</section>