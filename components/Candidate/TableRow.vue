<script setup>
	import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";

	const { data, headers, tableRowMap } = defineProps([
		"data",
		"headers",
		"tableRowMap",
	]);

	const store = useCandidateStore();

	const isRecordSelected = ref(false);

	const rowData = {
		...data,
	};

	const { currCandidate, getCurrentEmpInfo } = useCandidate();
	const { tableTdVisible } = useHideDropDown();

	const detailsHandler = (rowData) => {
		getCurrentEmpInfo(rowData);
	};

	watch(isRecordSelected, (newData, oldData) => {
		if (newData === true) store.selectRecord(rowData._id);
		else store.unselectRecord(rowData._id);
	});
</script>

<template>
	<td class="w-4 p-4 rounded-tl-md" scope="row">
		<div class="flex items-center">
			<input
				v-model="isRecordSelected"
				:id="`checkbox-table-${rowData._id}`"
				type="checkbox"
				class="w-5 h-5 text-green-400 bg-gray-100 border-gray-300 focus:ring-white focus:ring-0" />
			<label :for="`checkbox-table-${rowData._id}`" class="sr-only"
				>checkbox</label
			>
		</div>
	</td>
	<template v-for="(header, i) in headers" :key="i">
		<td
			v-if="
				header.is_visible &&
				tableTdVisible[tableRowMap.get(header.name)?.visilibility]
			">
			<component
				:is="tableRowMap.get(header.name)?.component"
				:content="rowData[tableRowMap.get(header.name).property]">
			</component>
		</td>
	</template>
	<td class="px-3 py-4 rounded-tr-md">
		<button
			:id="`recordsMenuDropdownButton-${rowData._id}`"
			:data-dropdown-toggle="`recordsMenuDropdown-${rowData._id}`"
			data-dropdown-placement="left"
			data-dropdown-offset-skidding="20"
			class="hover:bg-gray-300 rounded-full p-1">
			<EllipsisHorizontalIcon class="w-6 h-6" />
		</button>
		<CandidateMenu :id="rowData._id" />
	</td>
</template>
