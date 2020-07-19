import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

const iconsList = [
	{
		name: "Add Circle Bold",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path
					d='M.5 12A11.5 11.5 0 1 0 12 .5 11.513 11.513 0 0 0 .5 12zm5-.5a1 1 0 0 1 1-1h3.75a.25.25 0 0 0 .25-.25V6.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.75a.25.25 0 0 0 .25.25h3.75a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3.75a.25.25 0 0 0-.25.25v3.75a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3.75a.25.25 0 0 0-.25-.25H6.5a1 1 0 0 1-1-1z'
					stroke='inherit'
				/>
			</svg>
		),
	},
	{
		name: "Add Square",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m12 7.5v9' />
					<path d='m7.5 12h9' />
					<rect height='22.5' rx='3' width='22.5' x='.75' y='.75' />
				</g>
			</svg>
		),
	},
	{
		name: "Arrow Right",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m.75 12h22.5' />
					<path d='m12.75 22.5 10.5-10.5-10.5-10.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Arrow Right Alt",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='m5.5.75 10.72 10.72a.749.749 0 0 1 0 1.06l-10.72 10.72'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='3'
				/>
			</svg>
		),
	},
	{
		name: "Search",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<circle cx='9.813' cy='9.812' r='9.063' transform='matrix(.920334 -.391133 .391133 .920334 -3.056 4.62)' />
					<path d='m16.22 16.22 7.03 7.03' />
				</g>
			</svg>
		),
	},
	{
		name: "Music",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<circle cx='4.5' cy='19.5' r='3.75' />
					<circle cx='19.5' cy='15' r='3.75' />
					<path d='m8.25 19.5v-12.781a3 3 0 0 1 2.05-2.846l11.048-3.068a1.5 1.5 0 0 1 1.9 1.445v12.75m-14.998-6.281 15-4.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Close",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path d='M3 21L21 3m0 18L3 3' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' />
			</svg>
		),
	},
	{
		name: "Delete",
		svg: (
			<svg viewBox='0 0 24 24' overflow='visible' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='M17.25 21H6.75a1.5 1.5 0 0 1-1.5-1.5V6h13.5v13.5a1.5 1.5 0 0 1-1.5 1.5zm-7.5-4.5v-6m4.5 6v-6M2.25 6h19.5m-7.5-3h-4.5a1.5 1.5 0 0 0-1.5 1.5V6h7.5V4.5a1.5 1.5 0 0 0-1.5-1.5z' />
				</g>
			</svg>
		),
	},
	{
		name: "Camera",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g stroke-linecap='round' stroke-width='1.5' stroke='inherit' fill='none' stroke-linejoin='round'>
					<circle cx='14.25' cy='12.75' r='5.25' />
					<path d='M19.5 6l-1.085-2.171A1.5 1.5 0 0 0 17.073 3h-5.646a1.5 1.5 0 0 0-1.342.829L9 6H2.25a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5z' />
					<path d='M4.125 9a.375.375 0 1 1-.375.375c0-.207.168-.375.375-.375' />
					<path d='M5.25 6L5.25 4.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Badge",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path d='m22.7 10.4-1.8-1.5c-.3-.2-.4-.6-.4-1l.3-2.3c.1-1.1-.7-2.2-1.8-2.3h-.5l-2.3.3c-.4 0-.7-.1-1-.4l-1.5-1.8c-.8-.9-2.1-1-3-.2-.1.1-.2.1-.2.2l-1.6 1.7c-.2.3-.6.4-1 .4l-2.3-.3c-1.2-.1-2.2.7-2.3 1.9v.5l.3 2.3c0 .4-.1.7-.4 1l-1.8 1.5c-.9.7-1 2-.3 2.9l.3.3 1.8 1.5c.3.2.4.6.4 1l-.3 2.3c-.1 1.1.7 2.2 1.8 2.3h.5l2.3-.3c.4 0 .7.1 1 .4l1.5 1.8c.7.9 2 1 2.9.3l.3-.3 1.5-1.8c.2-.3.6-.4 1-.4l2.3.3c1.1.1 2.2-.7 2.3-1.8v-.5l-.3-2.3c0-.4.1-.7.4-1l1.8-1.5c.9-.7 1-2 .3-2.9 0-.1-.1-.3-.2-.3z' />
				<path
					d='m12.4 15c-.6.8-1.7.9-2.5.3-.1 0-.1-.1-.2-.1l-2.4-2.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 3.9-5.2c.3-.4 1-.5 1.4-.2s.5 1 .2 1.4z'
					fill='#fff'
				/>
			</svg>
		),
	},
	{
		name: "Comments",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h19.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5zM5.25 7.5h13.5M5.25 12h10.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Comments Bold",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path
					stroke='none'
					d='M22 1.5H2A1.5 1.5 0 0 0 .5 3v13.552A1.459 1.459 0 0 0 2 18h3v4a.5.5 0 0 0 .785.411L12.156 18H22a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 22 1.5zM5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75zM18 8.25H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5z'
				/>
			</svg>
		),
	},
	{
		name: "Dislike",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='M12 21.844l-9.588-10a5.672 5.672 0 0 1-1.063-6.551 5.673 5.673 0 0 1 9.085-1.474L12 5.384l1.566-1.565a5.673 5.673 0 0 1 9.085 1.474 5.673 5.673 0 0 1-1.062 6.548z' />
					<path d='M12 5.384l2.937 2.9a.751.751 0 0 1-.249 1.23L9.8 11.473a.751.751 0 0 0-.057 1.368l3.925 1.959a.75.75 0 0 1 .376.908L12 21.844' />
				</g>
			</svg>
		),
	},
	{
		name: "Download",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m12.001 3.75v12' />
					<path d='m7.501 11.25 4.5 4.5 4.5-4.5' />
					<path d='m23.251 15.75v1.5a3 3 0 0 1 -3 3h-16.5a3 3 0 0 1 -3-3v-1.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Grid",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<rect height='9' rx='1.5' width='9' x='.75' y='.747' />
					<rect height='9' rx='1.5' width='9' x='.75' y='14.247' />
					<rect height='9' rx='1.5' width='9' x='14.25' y='.747' />
					<rect height='9' rx='1.5' width='9' x='14.25' y='14.247' />
				</g>
			</svg>
		),
	},
	{
		name: "Language",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<circle cx='12' cy='12' r='11.25' />
					<path d='m9.289 22.921c-1.522-2.232-2.539-6.288-2.539-10.921s1.017-8.689 2.539-10.921' />
					<path d='m.75 12h22.5' />
					<path d='m2.482 18h19.036' />
					<path d='m2.482 6h19.036' />
					<path d='m14.711 1.079c1.522 2.232 2.539 6.288 2.539 10.921s-1.017 8.689-2.539 10.921' />
				</g>
			</svg>
		),
	},
	{
		name: "Like",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='m12 21.844-9.588-10a5.672 5.672 0 0 1 -1.063-6.551 5.673 5.673 0 0 1 9.085-1.474l1.566 1.565 1.566-1.565a5.673 5.673 0 0 1 9.085 1.474 5.673 5.673 0 0 1 -1.062 6.548z'
					fill='none'
					stroke='inherit'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.5'
				/>
			</svg>
		),
	},
	{
		name: "Like Bold",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' overflow='visible'>
				<path d='M23.3 5.076a6.582 6.582 0 0 0-10.446-1.71L12 4.147l-.827-.753a6.522 6.522 0 0 0-5.688-1.806A6.472 6.472 0 0 0 .7 5.075a6.4 6.4 0 0 0 1.21 7.469l9.373 9.656a1 1 0 0 0 1.434 0l9.36-9.638A6.414 6.414 0 0 0 23.3 5.076z' />
			</svg>
		),
	},
	{
		name: "Logout",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m7.5 12.004h15.75' />
					<path d='m19.5 15.754 3.75-3.75-3.75-3.75' />
					<path d='m15.75 16.5v4.5a1.437 1.437 0 0 1 -1.364 1.5h-12.273a1.437 1.437 0 0 1 -1.363-1.5v-18a1.436 1.436 0 0 1 1.363-1.5h12.273a1.437 1.437 0 0 1 1.364 1.5v4.5' />
				</g>
			</svg>
		),
	},
	{
		name: "More Horizontal",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<circle cx='2' cy='12' r='2' />
				<circle cx='12' cy='12' r='2' />
				<circle cx='22' cy='12' r='2' />
			</svg>
		),
	},
	{
		name: "More Vertical",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<circle cx='12' cy='2' r='2' />
				<circle cx='12' cy='12' r='2' />
				<circle cx='12' cy='22' r='2' />
			</svg>
		),
	},
	{
		name: "Pause",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g stroke='none'>
					<path d='m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21.55a9.551 9.551 0 1 1 9.551-9.55 9.562 9.562 0 0 1 -9.551 9.55z' />
					<rect height='10.776' rx='.98' width='3.401' x='7.851' y='7.142' />
					<rect height='10.776' rx='.98' width='3.456' x='12.721' y='7.101' />
				</g>
			</svg>
		),
	},
	{
		name: "Play",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' overflow='visible'>
				<path
					stroke='none'
					d='M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 21.43A9.43 9.43 0 1 1 21.429 12 9.44 9.44 0 0 1 12 21.429z'
				/>
				<path
					stroke='none'
					d='M16.609 10.712l-5.926-2.963a1.488 1.488 0 0 0-2.224 1.373v5.754a1.532 1.532 0 0 0 .7 1.348 1.44 1.44 0 0 0 .759.214 1.709 1.709 0 0 0 .761-.188l5.926-2.963a1.386 1.386 0 0 0 0-2.575z'
				/>
			</svg>
		),
	},
	{
		name: "Privacy",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m22.823 8.611a1.662 1.662 0 0 0 0-2.226c-2.623-2.885-6.792-5.701-10.823-5.634-4.031-.067-8.2 2.749-10.821 5.634a1.663 1.663 0 0 0 0 2.226c2.563 2.824 6.721 5.706 10.821 5.638' />
					<path d='m15.75 7.5a3.75 3.75 0 1 1 -3.75-3.75 3.75 3.75 0 0 1 3.75 3.75z' />
					<rect height='7.5' rx='1.5' width='9' x='14.25' y='15.75' />
					<path d='m18.75 11.25a3 3 0 0 0 -3 3v1.5h6v-1.5a3 3 0 0 0 -3-3z' />
					<path d='m18.75 19.154a.375.375 0 1 1 -.375.375.375.375 0 0 1 .375-.375' />
				</g>
			</svg>
		),
	},
	{
		name: "Report",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-width='1.5'>
					<path d='m12 18.75a.375.375 0 1 0 .375.375.375.375 0 0 0 -.375-.375z' stroke-linejoin='round' />
					<path d='m12 15.75v-7.5' stroke-miterlimit='10' />
					<path
						d='m13.621 1.76a1.806 1.806 0 0 0 -3.242 0l-9.473 19.298a1.521 1.521 0 0 0 1.366 2.192h19.456a1.521 1.521 0 0 0 1.366-2.192z'
						stroke-linejoin='round'
					/>
				</g>
			</svg>
		),
	},
	{
		name: "Share",
		svg: (
			<svg viewBox='0 0 24 24' overflow='visible'>
				<path
					d='M17.466 3.254a.698.698 0 0 0-.36-.233.653.653 0 0 0-.418.03.718.718 0 0 0-.329.281.812.812 0 0 0-.124.434V6.45a.4.4 0 0 1-.103.271.34.34 0 0 1-.25.112h-7.58c-2.2.001-4.308.949-5.864 2.635S.005 13.442 0 15.829a9.352 9.352 0 0 0 1.3 4.817.727.727 0 0 0 .3.284.656.656 0 0 0 .754-.114.775.775 0 0 0 .217-.361c.377-1.281 1.119-2.4 2.118-3.195a5.563 5.563 0 0 1 3.443-1.232h7.75a.33.33 0 0 1 .135.03c.043.019.082.047.115.083a.411.411 0 0 1 .103.272v2.682c0 .155.043.307.124.435.08.128.195.226.329.282.133.056.279.066.418.03a.698.698 0 0 0 .36-.233l6.353-7.664a.805.805 0 0 0 .181-.513.805.805 0 0 0-.181-.512l-6.353-7.666z'
					fill='inherit'
				/>
			</svg>
		),
	},
	{
		name: "Terms",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m15.75 4.5h3.75a1.5 1.5 0 0 1 1.5 1.5v15.75a1.5 1.5 0 0 1 -1.5 1.5h-15a1.5 1.5 0 0 1 -1.5-1.5v-15.75a1.5 1.5 0 0 1 1.5-1.5h3.75a3.75 3.75 0 0 1 7.5 0z' />
					<path d='m12 3.75a.375.375 0 1 1 -.375.375.375.375 0 0 1 .375-.375' />
					<path d='m6.75 10.5h5.25' />
					<path d='m15 10.5h2.25' />
					<path d='m17.25 14.25h-5.25' />
					<path d='m9 14.25h-2.25' />
					<path d='m6.75 18h5.25' />
					<path d='m15 18h2.25' />
				</g>
			</svg>
		),
	},
	{
		name: "User",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke='inherit' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<circle cx='12' cy='6' r='5.25' />
					<path d='m2.25 23.25a9.75 9.75 0 0 1 19.5 0' />
				</g>
			</svg>
		),
	},
	{
		name: "View",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<g fill='inherit'>
					<path d='M23.092 9.665C20.463 6.77 16.594 4.2 12.584 4.012 12.389 4 12.2 4 12 4c-4.253.034-8.124 2.47-10.942 5.5l-.15.164a3.457 3.457 0 0 0 0 4.669C2.113 15.662 6.471 20 11.872 20h.256c5.4 0 9.759-4.338 10.966-5.667a3.456 3.456 0 0 0-.002-4.668zm-1.478 3.322c-2.17 2.388-5.32 4.655-8.642 4.968A8.317 8.317 0 0 1 12 18c-3.63-.085-6.84-2.11-9.286-4.658q-.167-.174-.329-.353a1.476 1.476 0 0 1 0-1.978C4.752 8.4 8.332 5.915 12 6a9.407 9.407 0 0 1 3.747.774 15.249 15.249 0 0 1 3.4 1.977 18.091 18.091 0 0 1 2.47 2.257 1.476 1.476 0 0 1-.003 1.979z' />
					<path d='M12 8a3.9 3.9 0 0 0-.392.02.249.249 0 0 0-.183.385A1.994 1.994 0 0 1 8.5 11.049a.25.25 0 0 0-.4.137A3.584 3.584 0 0 0 8 12a4 4 0 1 0 4-4z' />
				</g>
			</svg>
		),
	},
];

const icons = iconsList.sort(function (a, b) {
	var nameA = a.name.toLowerCase(),
		nameB = b.name.toLowerCase();
	if (nameA < nameB)
		//sort string ascending
		return -1;
	if (nameA > nameB) return 1;
	return 0; //default return value (no sorting)
});

// Enumerate Icon Names
var iconNames = [];
for (var index = 0; index < icons.length; index++) {
	iconNames.push(icons[index]["name"]);
}

// Export Component
export function Icons(props) {
	let { name, tint, svg, ...rest } = props;

	icons.map((icon) => {
		if (icon.name == props.name) {
			svg = icon.svg;
		}
	});

	return <div style={{ stroke: tint, fill: tint }}>{svg}</div>;
}

// Default Props
Icons.defaultProps = {
	height: 24,
	width: 24,
	name: icons[0].name,
	tint: "#D7D7D8",
	svg: icons[0].svg,
};

// Property Controls
addPropertyControls(Icons, {
	name: {
		title: "Icon",
		type: ControlType.Enum,
		options: iconNames,
	},
	tint: {
		title: "Tint",
		type: ControlType.Color,
		defaultValue: "#D7D7D8",
	},
});
