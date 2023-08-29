// Copyright (c) 2014 Kiran Abburi, MIT License
// https://github.com/akiran/json2mq/blob/master/index.js
export function json2mq(query: QueryObject | QueryObject[]) {
	let mq = "";
	if (typeof query === "string") {
		return query;
	}
	// Handling array of media queries
	if (Array.isArray(query)) {
		for (let i = 0; i < query.length; i++) {
			const q = query[i];
			mq += obj2mq(q);
			if (i < query.length - 1) {
				mq += ", ";
			}
		}
		return mq;
	}
	// Handling single media query
	return obj2mq(query);
}

function isDimension(feature: string) {
	const re = /[height|width]$/;
	return re.test(feature);
}

function obj2mq(obj: QueryObject) {
	let mq = "";
	const features = Object.keys(obj);
	for (let i = 0; i < features.length; i++) {
		let value = obj[features[i]];
		const feature = camel2hyphen(features[i]);
		// Add px to dimension features
		if (isDimension(feature) && typeof value === "number") {
			value = value + "px";
		}
		if (value === true) {
			mq += feature;
		} else if (value === false) {
			mq += "not " + feature;
		} else {
			mq += "(" + feature + ": " + value + ")";
		}
		if (i < features.length - 1) {
			mq += " and ";
		}
	}
	return mq;
}

export interface QueryObject {
	[property: string]: string | number | boolean;
}

// https://github.com/akiran/string-convert/blob/master/camel2hyphen.js
// Copyright (c) 2014 Kiran Abburi, MIT License
function camel2hyphen(str: string) {
	return str
		.replace(/[A-Z]/g, (match) => {
			return "-" + match.toLowerCase();
		})
		.toLowerCase();
}
