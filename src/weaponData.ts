/// <reference path="weaponList/lightbowgun.ts" />
/// <reference path="weaponList/heavybowgun.ts" />

interface WeaponData {
	type: 'lightbowgun' | 'heavybowgun'
	power: number
	affinity: number
}

const weaponData = {
	lightbowgun: {
		typeMult: 1.3,
		list: weaponList.lightbowgun
	},
	heavybowgun: {
		typeMult: 1.48,
		list: weaponList.heavybowgun
	}
} as {
	[type: string]: {
		typeMult: number
		list: {
			[name: string]: {
				lastName: string
				list: number[][]
			}
		}
	}
}

function getWeaponList(type: string) {
	return Object.keys(weaponData[type].list)
}
function getWeaponLevelList(type: string, name: string) {
	return weaponData[type].list[name].list
}
function getWeapon(type: string, name: string, level: number) {
	return weaponData[type].list[name].list[level - 1]
}
function getWeaponLastName(type: string, name: string) {
	return weaponData[type].list[name].lastName
}