import { totalRam } from "../stats"

export = {
	name: 'total_ram',
	execute() {
		console.log(totalRam)
	},
};