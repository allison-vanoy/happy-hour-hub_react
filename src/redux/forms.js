export const InitialHappyhourForm = {
	description: '',
	discount: '',
	dealType: '',
	dayOfWeek: [
		{
			id: 0,
			name: 'Monday',
			isChecked: false
		},
		{
			id: 1,
			name: 'Tuesday',
			isChecked: false
		},
		{
			id: 2,
			name: 'Wednesday',
			isChecked: false
		},
		{
			id: 3,
			name: 'Thursday',
			isChecked: false
		},
		{
			id: 4,
			name: 'Friday',
			isChecked: false
		},
		{
			id: 5,
			name: 'Saturday',
			isChecked: false
		},
		{
			id: 6,
			name: 'Sunday',
			isChecked: false
		},
	]
};

export const InitialBusinessForm = {
	businessName: '',
	address: '',
	startTime: '',
	endTime: '',
	happyhour: [InitialHappyhourForm]
}


