export const useEmployee = () => {
	const currEmployee = useState("employee", () => {});

	const getCurrentEmpInfo = (info) => {
		currEmployee.value = info;
	};

	return { currEmployee, getCurrentEmpInfo };
};

export const useHideDropDown = () => {
	const tableTdVisible = useState("tableTdVisible", () => {
		const isVisible = {
			isNameVisible: true,
			isEmailVisible: true,
			isAgencyVisible: true,
			isFee1Visible: true,
			isFee2Visible: true,
		};

		return isVisible;
	});

	const tdToggle = (state) => {
		tableTdVisible.value.isNameVisible = state;
		tableTdVisible.value.isEmailVisible = state;
		tableTdVisible.value.isAgencyVisible = state;
		tableTdVisible.value.isFee1Visible = state;
		tableTdVisible.value.isFee2Visible = state;
	};

	const showAllTableTd = () => {
		tdToggle(true);
	};

	const hideAllTableTd = () => {
		tdToggle(false);
	};

	return { tableTdVisible, showAllTableTd, hideAllTableTd };
};
