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
              class="flex items-center p-2 bg-yellow-400 text-white rounded-lg hover:bg-gray-700"
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
                  d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                ></path></svg>
              <span class="ml-3">Candidates</span></router-link>
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
      <header
        class="bg-white shadow-sm max-sm:mx-4 max-sm:rounded-md max-sm:mt-4"
      >
        <div class="flex">
          <div
            class="border-r border-r-gray-300 py-5 px-7 max-xl:px-6 max-xl:py-4 max-lg:hidden"
          >
            <div class="bg-gray-400 w-7 h-7 rounded-md p-1">
              <div class="w-1/2 h-5 bg-white rounded-sm">&nbsp;</div>
            </div>
          </div>
          <div
            class="border-r border-r-gray-300 pl-5 pr-4 flex items-center justify-center gap-4 max-lg:py-2 max-lg:border-none max-lg:w-1/2 max-lg:justify-start max-md:gap-1 max-md:w-8/12 max-md:py-4 max-md:pr-1 max-sm:pl-3"
          >
            <div>
              <h4 class="capitalize text-sm text-gray-500 max-md:hidden">
                your organization
              </h4>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-6 h-6 text-cyan-600 max-sm:hidden"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="text-black text-base max-xl:text-sm">Qualyval</h3>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="text-gray-500 w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <form class="pl-5 flex items-center w-1/2 max-md:pl-0">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:ring-yellow-300 focus:border-yellow-300 max-xl:py-3"
                required=""
              />
            </div>
          </form>
          <div
            class="ml-auto flex items-center gap-4 pr-6 pl-4 max-xl:gap-3 max-xl:pr-3"
          >
            <a
              href="/addCandidate"
              class="flex items-center justify-center bg-yellow-300 p-3 rounded-full max-xl:p-2.5"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-6 h-6 max-xl:w-5 max-xl:h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                ></path></svg></a
            ><button
              class="flex items-center justify-center bg-slate-200 p-3 rounded-full max-xl:p-2.5 max-md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-6 h-6 max-xl:w-5 max-xl:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                ></path>
              </svg></button
            ><button class="w-12 h-12 rounded-full max-xl:w-10 max-xl:h-10">
              <img
                class="border-2 border-slate-400 rounded-full"
                src="https://hire-management.netlify.app/_nuxt/user.735982cc.jpg"
                alt="user-avatar"
              />
            </button>
          </div>
        </div>
      </header>
      <div class="relative">
        <main class="main-container w-full">
          <div class="flex flex-col h-full lg:h-[91.5vh] px-5 pt-5">
            <header class="mb-10 max-lg:mb-6 max-sm:mb-8">
              <div
                class="flex items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-4 max-sm:flex-row"
              >
                <div class="flex items-center">
                  <h3
                    class="mr-6 text-2xl max-xl:text-xl max-xl:mr-4 max-sm:hidden"
                  >
                    Dashboard
                  </h3>
                  <button
                    id="filterDropDownBtn"
                    data-dropdown-toggle="filterDropDownMenu"
                    class="flex items-center gap-1 border bg-white border-gray-300 px-3 py-2.5 text-gray-500 hover:bg-gray-400 hover:text-white rounded-md max-xl:px-4 max-sm:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="filterDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 max-lg:w-28"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(492.8px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="flex items-center gap-1 px-3 py-4 text-sm text-gray-700 rounded-md shadow-md max-lg:flex-col max-lg:items-start"
                      aria-labelledby="filterDropDownBtn"
                    >
                      <li class="mr-1 max-lg:hidden"><p>Where</p></li>
                      <li>
                        <select
                          id="candidate"
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full px-2 py-1 max-lg:w-full"
                        >
                          <option value="name" selected="">Name</option>
                          <option value="rating">Rating</option>
                          <option value="stages">Stages</option>
                          <option value="team">Team</option>
                          <option value="date">Date</option>
                          <option value="owner">Owner</option>
                        </select>
                      </li>
                      <li>
                        <select
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block w-full py-1 max-lg:w-full"
                        >
                          <option value="is">is...</option>
                          <option value="is-not">is not...</option></select
                        ><!----><!---->
                      </li>
                      <li>
                        <input
                          type="text"
                          class="bg-gray-50 border border-gray-300 text-gray-800 text-sm focus:ring-green-400 focus:border-transparent rounded-md block px-2 py-1 w-24 max-lg:w-full"
                          required=""
                        /><!----><!---->
                      </li>
                      <li class="max-lg:w-full">
                        <button
                          class="px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 hover:border-green-400 rounded-md text-sm text-gray-600 max-lg:w-full max-lg:bg-green-400 max-lg:text-gray-800"
                        >
                          Filter
                        </button>
                      </li>
                      <!---->
                    </ul>
                  </div>
                  <button
                    id="hideDropdownBtn"
                    data-dropdown-toggle="hideDropdownMenu"
                    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="hideDropdownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow dark:bg-gray-700 dark:divide-gray-600"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(534.4px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="pl-2 py-2 pr-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="hideDropdownBtn"
                    >
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Rating</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Stages</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Team</span
                            ></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Applied Date
                            </span></label
                          >
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          <label
                            class="relative inline-flex items-center w-full cursor-pointer"
                            ><input type="checkbox" class="sr-only peer" />
                            <div
                              class="w-9 h-5 bg-red-400 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-green-400"
                            ></div>
                            <span class="ml-3 text-sm dark:text-gray-300">
                              Owner</span
                            ></label
                          >
                        </div>
                      </li>
                    </ul>
                    <div
                      class="flex gap-1 justify-between text-gray-600 px-2 py-3 text-xs"
                    >
                      <button
                        class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
                      >
                        Hide All</button
                      ><button
                        class="bg-gray-100 px-3 py-1 rounded-sm hover:bg-gray-200"
                      >
                        Show All
                      </button>
                    </div>
                  </div>
                  <button
                    id="sortDropDownBtn"
                    data-dropdown-toggle="sortDropDownMenu"
                    class="focus:outline-none text-gray-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center border border-gray-300 hover:bg-gray-400 hover:text-white ml-4"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="sortDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(596px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <ul
                      class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="sortDropDownBtn"
                    >
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Name </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="nameAsc">A → Z</option>
                          <option value="nameDesc">Z → A</option>
                        </select>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Rating </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="ratingAsc">1 → 9</option>
                          <option value="ratingDesc">9 → 1</option>
                        </select>
                      </li>
                      <li class="flex items-center gap-2">
                        <span class="w-full py-2 text-start"> Date </span
                        ><select
                          class="block w-full px-2 py-1 text-xs text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-400"
                        >
                          <option value="dateAsc">1 → 9</option>
                          <option value="dateDesc">9 → 1</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <button
                    id="groupDropDownBtn"
                    data-dropdown-toggle="groupDropDownMenu"
                    class="flex items-center gap-1 px-3 py-2 ml-4 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-400 hover:text-white max-xl:px-4 max-sm:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-6 h-6 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="groupDropDownMenu"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate3d(660px, 140px, 0px);
                    "
                    data-popper-placement="bottom"
                  >
                    <!---->
                    <ul
                      class="flex flex-col items-start w-full py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="groupDropDownBtn"
                    >
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Rating
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Stages
                        </button>
                      </li>
                      <li>
                        <button
                          typ="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Team
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 max-xl:w-5 max-xl:h-5 max-sm:w-6 max-sm:h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                            ></path>
                          </svg>
                          Owner
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </header>
          
            <!-- <div class="relative overflow-x-auto rounded-md mr-9">
              <table
                class="w-full text-md text-left text-gray-500 border-collapse dark:text-gray-400"
              >
                <thead class="text-sm text-gray-800 bg-white shadow-sm">
                  <tr>
                    <th scope="col" class="px-3 py-3">
                      <div class="flex items-center gap-1">
                        <span >Company Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1 text-center">
                        <span>Company Number</span
                        >
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 cursor-pointer"
                      data-draggable="true"
                    >
                      <div class="flex items-center gap-1 text-center">
                        <span>Status</span
                        >
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in details" :key="item._id"
                    class="text-base border-b bg-gray-50 max-xl:text-sm cursor-pointer">
                    
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black">{{ item.agencyName }}</div>
                      </div>
                    </td>
                    <td>
                      <div class="px-3 py-4">
                        <div class="flex items-center text-gray-900">
                          <p class="pl-3 truncate text-center">{{ item.companyNumber }}</p>
                        </div>
                      </div>
                    </td>
                    
                    <td>
                      <div class="px-3 py-4">
                        <div class="text-black ">{{ item.companyStatus }}</div>
                      </div>
                    </td>

                  </tr>
                  
                </tbody>
              </table>
            </div> -->
            <footer class="flex items-center justify-between py-3 mt-auto mb-2">
              <div class="flex items-center gap-4">
                <span
                  class="text-base text-gray-500 max-xl:text-sm max-md:hidden"
                  >View</span
                ><button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-gray-600 bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center max-xl:px-3 max-xl:py-2"
                  type="button"
                >
                  10
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-4 h-4 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
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
                <span
                  class="text-base text-gray-500 max-xl:text-sm max-lg:hidden"
                  >Candidates per page</span
                >
              </div>
              <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center gap-2 -space-x-px">
                  <li>
                    <div class="flex items-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-5 h-5 max-xl:w-4 max-xl:h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                          clip-rule="evenodd"
                        ></path></svg>
                      <a
                        href="#"
                        class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                        >Prev</a
                      >
                    </div>
                  </li>
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
                      >...</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-2 py-1 font-medium leading-tight rounded-full hover:bg-yellow-400 max-xl:text-sm"
                      >24</a
                    >
                  </li>
                  <li>
                    <div class="flex items-center text-gray-500">
                      <a
                        href="#"
                        class="py-2 pl-1 pr-2 ml-0 text-base leading-tight rounded-l-lg hover:text-gray-700 max-xl:text-sm"
                        >Next</a
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-5 h-5 max-xl:w-4 max-xl:h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </nav>
            </footer>
          </div>
        </main>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const details=ref([]);

import { 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initTabs, 
 } from 'flowbite'

 onMounted(() => {
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initTabs();
})
// const { app } = useMyRealmApp();
// const mongo = app.currentUser?.mongoClient("mongodb-atlas");
//    const collection = mongo?.db("company").collection("agency");

//    collection
//       .find()
//       .then((data) => {
//         details.value = data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
</script>

<style></style>
