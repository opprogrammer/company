<script setup>
	import {
		HandThumbDownIcon,
		EllipsisVerticalIcon,
		ArrowDownTrayIcon,
		PrinterIcon,
		ChevronDownIcon,
	} from "@heroicons/vue/24/outline";

	import {
		ChevronLeftIcon,
		ChevronRightIcon,
		PlusIcon,
		TrashIcon,
		PencilIcon,
	} from "@heroicons/vue/24/solid";

	const store = useEmployeesStore();
	const tableKey = ref(0);

	// This are the fields for dynamic add / update
	const headers = ref([
		{
			name: "Name",
			parent: null,
			is_visible: true,
			dropdown: false,
			field: "name",
			type: "text",
		},
		{
			name: "Email",
			parent: null,
			is_visible: true,
			dropdown: false,
			field: "email",
			type: "email",
		},
		{
			name: "Agency",
			parent: null,
			is_visible: true,
			dropdown: false,
			field: "agency",
			type: "text",
		},
		{
			name: "Fee1",
			parent: null,
			is_visible: true,
			dropdown: false,
			field: "fee1",
			type: "text",
		},
		{
			name: "Fee2",
			parent: null,
			is_visible: true,
			dropdown: false,
			field: "fee2",
			type: "text",
		},
	]);

	const groupMap = new Map([
		["Rating", arrangeByRating],
		["Stages", arrangeByStages],
		["Team", arrangeByTeam],
		["Owner", arrangeByOwner],
	]);

	// Maps the field to its component, property is the field name at the db level
	const tableRowMap = new Map([
	[
			"Name",
			{
				property: "name",
				visilibility: "isNameVisible",
				component: resolveComponent("EmployeesTableDataDefault"),
			},
		],
		[
			"Email",
			{
				property: "email",
				visilibility: "isEmailVisible",
				component: resolveComponent("EmployeesTableDataDefault"),
			},
		],
		[
			"Agency",
			{
				property: "agency",
				visilibility: "isAgencyVisible",
				component: resolveComponent("EmployeesTableDataDefault"),
			},
		],
		
		[
			"Fee1",
			{
				property: "fee1",
				visilibility: "isFee1Visible",
				component: resolveComponent("EmployeesTableDataDefault"),
			},
		],
		[
			"Fee2",
			{
				property: "fee2",
				visilibility: "isFee2Visible",
				component: resolveComponent("EmployeesTableDataDefault"),
			},
		],
	]);

	onBeforeMount(async () => {
		// Fetches data from the backend
		store.initData();
	});

	function arrangeByRating(data) {
		return data.reduce((acc, user) => {
			(acc[user.rating] ||= []).push(user);
			return acc;
		}, {});
	}
	function arrangeByStages(data) {
		return data.reduce((acc, user) => {
			(acc[user.stages.state] ||= []).push(user);
			return acc;
		}, {});
	}
	function arrangeByTeam(data) {
		return data.reduce((acc, user) => {
			(acc[user.team.name] ||= []).push(user);
			return acc;
		}, {});
	}
	function arrangeByOwner(data) {
		return data.reduce((acc, user) => {
			(acc[user.owner.name] ||= []).push(user);
			return acc;
		}, {});
	}

	function changeGroup(list, evt, groupedBy) {
		if (evt.added !== undefined) {
			switch (groupedBy) {
				case "Rating":
					console.log("hello1");
					console.log([...list]);
					list[evt.added.newIndex].rating =
						list[(evt.added.newIndex + 1) % list.length].rating;
					console.log(list);
					break;
				case "Team":
					console.log("hello2");
					list[evt.added.newIndex].team.name =
						list[(evt.added.newIndex + 1) % list.length].team.name;
					break;
				case "Stages":
					console.log("hello3");
					console.log(list[evt.added.newIndex].candidate.name);
					list[evt.added.newIndex].stages.state =
						list[(evt.added.newIndex + 1) % list.length].stages.state;
					console.log(list[evt.added.newIndex].candidate.name);
					break;
				case "Owner":
					console.log("hello4");
					list[evt.added.newIndex].owner = {
						...list[(evt.added.newIndex + 1) % list.length].owner,
					};
					break;
				default:
					break;
			}
		}
	}
</script>

<template>
	<div>
	<button
        id="button"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span
        ><svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar"
        class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        aria-hidden="true"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#282c38]">
          <h2 class="p-2 mb-2 text-3xl font-medium text-white cursor-pointer">
            Qualyval
          </h2>
          <ul class="space-y-2 font-medium">
            <li>
              <router-link
                to="/dashboard"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                    clip-rule="evenodd"
                  ></path></svg><span class="ml-3">Dashboard</span></router-link
              >
            </li>
            <li>
              <a
                href="/inbox"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                    clip-rule="evenodd"
                  ></path></svg><span class="flex-1 ml-3 whitespace-nowrap">Inbox</span></a
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  ></path></svg>
              <span class="flex-1 ml-3 whitespace-nowrap"
                  >Calendar &amp; Todos</span
                ></a
              >
            </li>
            <div class="h-[1px] w-full bg-gray-600"></div>
            <li>
              <router-link
               to="/agency"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                  ></path></svg>
                <span class="ml-3">agencies</span></router-link
              >
            </li>
            <li>
              <router-link
              to="/candidate"
                class=" flex items-center p-2 bg-yellow-400 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                  ></path></svg>
                <span class="ml-3">Candidates</span></router-link
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z"
                  ></path></svg>
                <span class="ml-3">My Referrals</span></a
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z"
                    clip-rule="evenodd"
                  ></path></svg>
                <span class="ml-3">Career Site</span></a
              >
            </li>
            <div class="h-[1px] w-full bg-gray-600"></div>
            <li>
              <a
                href="/employee"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                  ></path></svg>
                <span class="ml-3">Employee</span></a
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                    clip-rule="evenodd"
                  ></path></svg>
                <span class="ml-3">Structure</span></a
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                    clip-rule="evenodd"
                  ></path></svg>
                <span class="ml-3">Report</span></a
              >
            </li>
            <li>
              <a
                id="closeButton"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clip-rule="evenodd"
                  ></path></svg>
                <span class="ml-3">Settings</span></a
              >
            </li>
            <li>
              <a
                href="/signUp"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-700"
                id="closeButton"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-500 transition duration-75"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  ></path></svg>
                <span class="ml-3">Sign Up</span></a
              >
            </li>
          </ul>
        </div>
      </aside>

	  <div class="p-0 sm:ml-64">
	<div v-if="store.Record !== null" class="flex flex-col h-full px-5 pt-5">
		<header class="mb-10 max-lg:mb-6 max-sm:mb-8">
			<div
				class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row">
				<div class="flex items-center">
					<h3 class="mr-6 text-2xl max-xl:text-xl max-xl:mr-4 max-sm:hidden">
						{{ store.Record.length }} Candidates
					</h3>

					<!-- FILTER Dropdown -->
					<EmployeesFilterDropDown
						:headers="headers"
						@refresh-data="tableKey++" />

					<!-- HIDE Dropdown -->
					<EmployeesHideDropDown :tableRowMap="tableRowMap" />

					<!-- SORT Dropdown -->
					<EmployeesSortDropDown
						:headers="headers"
						@refresh-data="tableKey++" />

					<!-- <EmployeesGroupDropDown /> -->
				</div>

				<div class="flex items-center">
					<!-- This is multi-select delete -->
					<button
						v-if="store.selectedRecords.length > 0"
						id="deleteSelectedRecordButton"
						data-modal-toggle="deleteSelectedRecord"
						class="p-2 mr-5 text-red-600 bg-white border border-red-300 rounded-md hover:bg-red-600 hover:text-white">
						<TrashIcon class="w-6 h-6 font-semibold" />
					</button>
					<EmployeesDeleteSelected
						v-if="store.selectedRecords.length > 0"
						@delete-record="
							store.deleteRecord();
							tableKey++;
						"
						:length="store.selectedRecords.length" />

					<button
						id="addRecordButton"
						data-modal-toggle="addRecord"
						class="flex items-center gap-1 border-2 rounded-md border-black px-5 py-[.54rem] max-md:p-2">
						<PlusIcon class="w-4 h-4 font-semibold max-md:w-5 max-md:h-5" />
						<span class="text-sm font-medium max-md:hidden">Add Employee</span>
					</button>
					<EmployeesAdd
						:headers="headers"
						@add-record="
							store.addRecord($event);
							tableKey++;
						" />
				</div>
			</div>
		</header>

		<EmployeesTable
			:key="tableKey"
			:TABLE_DATA="store.Record"
			:headers="headers"
			:groupMap="groupMap"
			:changeGroup="changeGroup"
			:tableRowMap="tableRowMap"
			@refresh-records="tableKey++" />

		<footer class="flex items-center justify-between py-3 mt-auto mb-2">
			<div class="flex items-center gap-4">
				<span class="text-base text-gray-500 max-xl:text-sm max-md:hidden"
					>View</span
				>

				<button
					id="dropdownDefaultButton"
					data-dropdown-toggle="dropdown"
					class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
					type="button">
					10
					<ChevronDownIcon class="w-4 h-4 ml-2" />
				</button>
				<!-- Dropdown menu -->
				<div
					id="dropdown"
					class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul
						class="py-2 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownDefaultButton">
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>1</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>2</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>3</a
							>
						</li>
						<li>
							<a
								href="#"
								class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>4</a
							>
						</li>
					</ul>
				</div>

				<span class="text-base text-gray-500 max-xl:text-sm max-lg:hidden"
					>Employees per page</span
				>
			</div>

			<nav aria-label="Page navigation example">
				<ul class="inline-flex items-center gap-2 -space-x-px">
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight bg-yellow-300 rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>1</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>2</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>3</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>4</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>5</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>6</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>7</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>8</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>9</a
						>
					</li>
					<li>
						<a
							href="#"
							class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
							>10</a
						>
					</li>

					
				</ul>
			</nav>
		</footer>
	</div>
	</div>
	</div>
</template>


