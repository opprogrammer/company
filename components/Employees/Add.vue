<template>
	<div
		id="addRecord"
		tabindex="-1"
		aria-hidden="true"
		class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
		<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
			<!-- Modal content -->
			<div
				class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
				<!-- Modal header -->
				<div
					class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
						Add Record
					</h3>
					<button
						type="button"
						class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="addRecord">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<form
					id="add-employee-form"
					action="#"
					@submit.prevent="addNewRecord()">
					<div class="grid gap-4 mb-8 sm:grid-cols-2">
						<div v-for="(header, i) in headers" :key="i">
							<label
								:for="`add-${header.name}`"
								class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
								>{{ header.name }}</label
							>
							<input
								v-if="header.parent === null && header.dropdown === false"
								v-model="newRecord[header.field]"
								:type="header.type"
								:name="`add-${header.name}`"
								:id="`add-${header.name}`"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								:placeholder="header.name"
								required />
							<input
								v-else-if="header.parent !== null && header.dropdown === false"
								v-model="newRecord[header.parent][header.field]"
								:type="header.type"
								:name="`add-${header.name}`"
								:id="`add-${header.name}`"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								:placeholder="header.name"
								required />

							<select
								v-else-if="header.parent !== null && header.dropdown === true"
								v-model="newRecord[header.parent][header.field]"
								:id="`add-${header.name}`"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								required>
								<option value="" disabled>Select {{ header.name }}</option>
								<option
									v-for="(opt, index) in header.options"
									:key="index"
									:value="opt">
									{{ opt }}
								</option>
							</select>
							<select
								v-else-if="header.parent === null && header.dropdown === true"
								v-model="newRecord[header.field]"
								:id="`add-${header.name}`"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								required>
								<option value="" disabled>Select {{ header.name }}</option>
								<option
									v-for="(opt, index) in header.options"
									:key="index"
									:value="opt">
									{{ opt }}
								</option>
							</select>
						</div>
					</div>
					<button
						data-modal-toggle="addRecord"
						type="submit"
						class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
						<svg
							class="mr-1 -ml-1 w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"></path>
						</svg>
						Add employee
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { initModals } from "flowbite";

	const newRecord = ref({
		name: "",
		email: "",
		agency: "",
		fee1: "",
		fee2: "",
	});

	const emit = defineEmits(["addRecord"]);
	const { headers } = defineProps(["headers"]);

	onMounted(() => {
		initModals();
	});

	const addNewRecord = () => {
		// newRecord.value.full_name = `${newRecord.value.first_name} ${newRecord.value.last_name}`;
		// newRecord.value.image_url =
		// 	"https://cdn-icons-png.flaticon.com/128/1144/1144709.png";

		// newRecord.value.start_date = new Date(newRecord.value.start_date);
		// newRecord.value.end_date = new Date(newRecord.value.end_date);

		console.log(newRecord.value);

		emit("addRecord", newRecord.value);
		newRecord.value = {
			name: "",
			email: "",
			agency: "",
			fee1: "",
			fee2: "",
		};
	};
</script>

<style lang="scss" scoped></style>
