import { FiActivity, FiHome, FiList, FiStar, FiUser, FiUsers, FiWatch } from 'solid-icons/fi';

export default () => {
	return (
		<div class="min-h-screen bg-gray-50">
			<div class="fixed top-0 left-0 bottom-0 w-20 z-20 lg:shadow shadow-none lg:bg-primary bg-transparent flex flex-col items-center justify-between py-8">
				<div class="p-4 lg:block hidden">
					<div class="rounded-lg shadow bg-white text-primary font-semibold w-12 h-12 items-center justify-center flex text-2xl">
						L
					</div>
				</div>
				<div class="mt-10 block fixed bottom-5 left-5 right-5 lg:bg-transparent bg-primary shadow-lg border border-red-500 lg:border-none lg:shadow-none rounded-full">
					<div class="lg:block flex items-center lg:p-0 p-3 justify-evenly">
						<a
							href="/"
							class="w-10 h-10 rounded-lg bg-red-300 text-white flex items-center justify-center lg:mb-5"
						>
							<i class="material-icons">
								<FiHome />
							</i>
						</a>
						<a
							href="/"
							class="w-10 h-10 rounded-lg text-white flex items-center justify-center lg:mb-5 transition hover:text-red-300"
						>
							<i class="material-icons">
								<FiUsers />
							</i>
						</a>
						<a
							href="/"
							class="w-10 h-10 rounded-lg text-white flex items-center justify-center lg:mb-5 transition hover:text-red-300"
						>
							<i class="material-icons">
								<FiUser />
							</i>
						</a>
						<a
							href="/"
							class="w-10 h-10 rounded-lg text-white flex items-center justify-center lg:mb-5 transition hover:text-red-300"
						>
							<i class="material-icons">
								<FiList />
							</i>
						</a>
					</div>
				</div>
			</div>
			<div class="lg:pl-20">
				<div class="lg:p-10 p-5">
					<div class="mb-8">
						<div class="text-xl font-semibold">Hello Muhammad Izza Alfiansyah!</div>
						<div class="text-sm text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						</div>
					</div>
					<div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-6">
						<div class="bg-primary rounded-lg shadow p-5 flex justify-between">
							<div class="text-white">
								<div class="text-2xl mb-4">6.30 Hours</div>
								<div class="text-base">Sleep</div>
							</div>
							<div class="rounded-lg bg-red-700 flex items-center justify-center h-10 w-10">
								<FiStar class="stroke-white" />
							</div>
						</div>
						<div class="bg-primary rounded-lg shadow p-5 flex justify-between">
							<div class="text-white">
								<div class="text-2xl mb-4">5 Liters</div>
								<div class="text-base">Waters</div>
							</div>
							<div class="rounded-lg bg-red-700 flex items-center justify-center h-10 w-10">
								<FiWatch class="stroke-white" />
							</div>
						</div>
						<div class="bg-primary rounded-lg shadow p-5 flex justify-between">
							<div class="text-white">
								<div class="text-2xl mb-4">169 Steps</div>
								<div class="text-base">Steps</div>
							</div>
							<div class="rounded-lg bg-red-700 flex items-center justify-center h-10 w-10">
								<FiActivity class="stroke-white" />
							</div>
						</div>
					</div>
					<div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-6">
						<div class="bg-white shadow p-6 rounded-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eius dolorum dolor
							aliquam iure fuga, sint accusamus voluptatem dolorem ut eaque qui modi deleniti in
							ipsam, maxime aut deserunt praesentium!
						</div>
						<div class="bg-white shadow p-6 rounded-lg">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, rerum natus assumenda
							in architecto tenetur sit amet porro dicta ex ullam doloremque dignissimos dolore
							aliquid repellat magni enim? Aliquam, atque.
						</div>
					</div>
					<div class="bg-white shadow rounded-lg p-6">
						<img
							src="https://img.freepik.com/free-vector/summer-landscape-with-houses-beach-sunset_107791-12716.jpg?w=826&t=st=1669032912~exp=1669033512~hmac=fe793238eface0c17dbc690fea76dbfb1ca14664d1121f4bc2dd9febf7abec87"
							alt=""
							class="rounded-lg w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
