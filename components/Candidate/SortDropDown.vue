<script setup>
	import { ArrowsUpDownIcon } from "@heroicons/vue/24/outline";

	onMounted(() => {
		// set the dropdown menu element
		const $targetElHide = document.getElementById("sortDropDownMenu");

		// set the element that trigger the dropdown menu on click
		const $triggerElHide = document.getElementById("sortDropDownBtn");

		// options with default values
		const options = {
			placement: "bottom",
			triggerType: "click",
			offsetSkidding: 0,
			offsetDistance: 10,
			delay: 300,
		};

		const sortDropDown = new Dropdown($targetElHide, $triggerElHide, options);
	});

	const { headers } = defineProps(["headers"]);
	const store = useCandidateStore();
	const emit = defineEmits(["refreshData"]);

	const data = ref({});

	onBeforeMount(() => {
		headers.forEach((item) => {
			if (item.type === "text" || item.type === "email")
				data.value[item.field] = "stringAsc";
			else if (item.type === "tel" || item.type === "number")
				data.value[item.field] = "numberAsc";
			else if (item.type === "date") data.value[item.field] = "dateAsc";
		});
		console.log(data.value);
	});

	const sortString = (header) => {
		if (data.value[header.field] === "stringAsc") {
			store.sortByStringAtoZ(header.field);
			emit("refreshData");
		} else if (data.value[header.field] === "stringDesc") {
			store.sortByStringZtoA(header.field);
			emit("refreshData");
		}
	};
	const sortNumber = (header) => {
		if (data.value[header.field] === "numberAsc") {
			store.sortByNumber1to9(header.field);
			emit("refreshData");
		} else if (data.value[header.field] === "numberDesc") {
			store.sortByNumber9to1(header.field);
			emit("refreshData");
		}
	};
	const sortDate = (header) => {
		if (data.value[header.field] === "dateAsc") {
			store.sortByDate1to12(header.field);
			emit("refreshData");
		} else if (data.value[header.field] === "dateDesc") {
			store.sortByDate12to1(header.field);
			emit("refreshData");
		}
	};
</script>

<template>
	<button
		id="sortDropDownBtn"
		data-dropdown-toggle="sortDropDownMenu"
		class="focus:outline-none text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
		type="button">
		<ArrowsUpDownIcon class="w-5 h-5" />
	</button>
	<!-- Dropdown menu -->
	<div
		id="sortDropDownMenu"
		class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-60">
		<ul
			class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="sortDropDownBtn">
			<template v-for="(header, i) in headers" :key="i">
				<li v-if="header.is_visible" class="flex items-center gap-2">
					<span class="w-full py-2 text-start"> {{ header.name }} </span>
					<select
						@change="sortString(header)"
						v-if="header.type === 'text' || header.type === 'email'"
						v-model="data[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="stringAsc" selected>A &rarr; Z</option>
						<option value="stringDesc">Z &rarr; A</option>
					</select>
					<select
						@change="sortNumber(header)"
						v-if="header.type === 'tel' || header.type === 'number'"
						v-model="data[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="numberAsc" selected>1 &rarr; 9</option>
						<option value="numberDesc">9 &rarr; 1</option>
					</select>
					<select
						@change="sortDate(header)"
						v-if="header.type === 'date'"
						v-model="data[header.field]"
						class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400">
						<option value="dateAsc" selected>1 &rarr; 9</option>
						<option value="dateDesc">9 &rarr; 1</option>
					</select>
				</li>
			</template>
		</ul>
	</div>
</template>
