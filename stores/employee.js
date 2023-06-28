import { defineStore } from "pinia";

export const useEmployeesStore = defineStore("counter", {
	state: () => ({
		Record: null,
		RecordBackup: null,
		selectedRecords: [],
		dbName: "company",
		colName: "candidates",
	}),

	getters: {
		data: (state) => state.Record,
	},

	actions: {
		async initData() {
			const { getRecords } = useRealmApp();

			this.Record = await getRecords(this.dbName, this.colName);
			this.RecordBackup = this.Record;
		},

		selectRecord(id) {
			this.selectedRecords.push(id);
		},

		unselectRecord(id) {
			const index = this.selectedRecords.indexOf(id);
			this.selectedRecords.splice(index, 1);
		},

		findById(id) {
			let temp = this.Record.find(
				(item) => item._id.toString() === id.toString()
			);
			console.log(temp);
			return temp;
		},

		async addRecord(data) {
			const { addRecordToDB } = useRealmApp();
			const { insertedId } = await addRecordToDB(
				this.dbName,
				this.colName,
				data
			);
			data._id = insertedId;
			this.Record.push(data);
			this.RecordBackup = this.Record;
			this.selectedRecords = [];
		},

		updateRecord(data) {
			const { updateRecordFromDB } = useRealmApp();
			const index = this.Record.findIndex(
				(element) => data._id.toString() === element._id.toString()
			);
			console.log(data, this.selectedRecords, index);
			this.Record[index] = data;
			this.RecordBackup = this.Record;
			updateRecordFromDB(this.dbName, this.colName, data);
			this.selectedRecords = [];
		},

		deleteRecord(_id) {
			const { deleteRecordFromDB } = useRealmApp();

			if (_id) {
				const index = this.Record.findIndex((element) => _id === element._id);
				this.Record.splice(index, 1);
				this.RecordBackup = this.Record;
				deleteRecordFromDB(this.dbName, this.colName, _id);
			} else {
				this.selectedRecords.forEach((id) => {
					const index = this.Record.findIndex((element) => id === element._id);
					this.Record.splice(index, 1);
					deleteRecordFromDB(this.dbName, this.colName, id);
				});
				this.RecordBackup = this.Record;
				this.selectedRecords = [];
			}
		},

		sortByStringAtoZ(fieldName) {
			this.Record.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
		},

		sortByStringZtoA(fieldName) {
			this.Record.sort((a, b) => b[fieldName].localeCompare(a[fieldName]));
		},

		sortByNumber1to9(fieldName) {
			this.Record.sort((a, b) => a[fieldName] - b[fieldName]);
		},

		sortByNumber9to1(fieldName) {
			this.Record.sort((a, b) => b[fieldName] - a[fieldName]);
		},

		sortByDate1to12(fieldName) {
			this.Record.sort((a, b) => a[fieldName] - b[fieldName]);
		},

		sortByDate12to1(fieldName) {
			this.Record.sort((a, b) => b[fieldName] - a[fieldName]);
		},

		filterDataByField(cb) {
			let temp = this.RecordBackup.filter(cb);
			this.Record = temp;
			console.log(this.Record, temp);
		},

		filterDataByText(keyword, operator, field) {
			const nestedKeys = field.split(".");

			this.filterDataByField((item) => {
				let fieldValue = item;
				// Traverse the nested keys to access the final value
				for (const key of nestedKeys) {
					if (fieldValue && fieldValue.hasOwnProperty(key)) {
						fieldValue = fieldValue[key];
					} else {
						fieldValue = undefined;
						break;
					}
				}

				// Perform the filtering based on the operator and keyword
				switch (operator) {
					case "is":
						return (
							fieldValue &&
							fieldValue.toLowerCase().includes(keyword.toLowerCase())
						);
					case "is-not":
						return (
							!fieldValue ||
							!fieldValue.toLowerCase().includes(keyword.toLowerCase())
						);
					default:
						return true; // No operator specified, return all data
				}
			});
		},

		filterDataByNum(inputNum, operator, field) {
			switch (operator) {
				case "eq":
					this.filterDataByField((item) => item[field] === inputNum);
					break;
				case "nt-eq":
					this.filterDataByField((item) => item[field] !== inputNum);
					break;
				case "lt":
					this.filterDataByField((item) => item[field] < inputNum);
					break;
				case "gt":
					this.filterDataByField((item) => item[field] > inputNum);
					break;
				case "le":
					this.filterDataByField((item) => item[field] <= inputNum);
					break;
				case "ge":
					this.filterDataByField((item) => item[field] >= inputNum);
					break;
			}
		},

		filterDataByDate(targetDate, operator, field) {
			switch (operator) {
				case "is":
					this.filterDataByField(
						(item) => item[field].getTime() === new Date(targetDate).getTime()
					);
					break;
				case "is-before":
					this.filterDataByField(
						(item) => item[field].getTime() < new Date(targetDate).getTime()
					);
					break;
				case "is-after":
					this.filterDataByField(
						(item) => item[field].getTime() > new Date(targetDate).getTime()
					);
					break;
				case "is-on-before":
					this.filterDataByField(
						(item) => item[field].getTime() <= new Date(targetDate).getTime()
					);
					break;
				case "is-on-after":
					this.filterDataByField(
						(item) => item[field].getTime() >= new Date(targetDate).getTime()
					);
					break;
			}
		},

		resetFilterFields() {
			this.Record = this.RecordBackup;
		},
	},
});
