import * as React from "react";

const icons = [
	{
		name: "Backspace",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' overflow='visible' viewBox='0 0 24 24'>
				<path
					stroke='none'
					d='M21.7 5.2H6.8c-.6 0-1.2.2-1.6.7L.6 10.5c-.9.9-.9 2.3 0 3.2l4.6 4.6c.4.4 1 .7 1.6.7h14.9c1.3 0 2.3-1 2.3-2.3V7.4c0-1.2-1-2.2-2.3-2.2zm-4.1 10.4c-.5.5-1.4.5-1.9 0l-1.4-1.4c-.2-.2-.5-.2-.6 0l-1.4 1.4c-.5.5-1.4.5-1.9 0s-.5-1.4 0-1.9l1.4-1.4c.2-.2.2-.5 0-.6l-1.4-1.4c-.5-.5-.5-1.4 0-1.9s1.4-.5 1.9 0l1.4 1.4c.2.2.5.2.6 0l1.4-1.4c.5-.5 1.3-.5 1.8 0s.5 1.4 0 1.9l-1.4 1.4c-.2.2-.2.5 0 .6l1.4 1.4c.6.5.6 1.4.1 1.9z'
				/>
			</svg>
		),
	},
	{
		name: "Check Circle",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' overflow='visible' viewBox='0 0 24 24'>
				<path
					stroke='none'
					d='M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 0 1-1.43.188l-4.888-3.908a1 1 0 1 1 1.25-1.562l4.076 3.261 6.227-8.451a1 1 0 1 1 1.61 1.183z'
				/>
			</svg>
		),
	},
	{
		name: "Close",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M.75 23.249l22.5-22.5m0 22.5L.75.749'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		),
	},
	{
		name: "Drafts",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g stroke-linecap='round' stroke-width='2' fill='none' stroke-linejoin='round'>
					<rect width='12.75' height='12.75' x='4.5' y='10.5' rx='.353' ry='0' />
					<path d='M1.454 12a4.646 4.646 0 0 1-.7-2.574 4.85 4.85 0 0 1 5.063-4.81A6.858 6.858 0 0 1 18.827 7.1a3.655 3.655 0 0 1 4.423 3.539 3.35 3.35 0 0 1-2.79 3.47m-11.036.222a.853.853 0 0 0-.789.033.759.759 0 0 0-.385.652v3.718a.76.76 0 0 0 .385.652.85.85 0 0 0 .789.033l3.489-1.647a.979.979 0 0 0 0-1.794z' />
				</g>
			</svg>
		),
	},
	{
		name: "Filters",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M16.961 12.747l.887-1.441a1.023 1.023 0 0 0-.871-1.559H13.5v-9L10.269 6m-3.23 5.247l-.887 1.442a1.022 1.022 0 0 0 .871 1.558H10.5v9L13.731 18M2.25 2.247l19.5 19.5'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		),
	},
	{
		name: "Flash Off",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M16.961 12.747l.887-1.441a1.023 1.023 0 0 0-.871-1.559H13.5v-9L10.269 6m-3.23 5.247l-.887 1.442a1.022 1.022 0 0 0 .871 1.558H10.5v9L13.731 18M2.25 2.247l19.5 19.5'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		),
	},
	{
		name: "Flash On",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M17.848 11.306a1.023 1.023 0 0 0-.871-1.559H13.5v-9L6.152 12.689a1.022 1.022 0 0 0 .871 1.558H10.5v9z'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		),
	},
	{
		name: "Flip",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-width='2'>
					<circle cx='12' cy='12' r='4' />
					<path
						d='M0 11l3 3V6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4m3 7l-3-3v8c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</g>
			</svg>
		),
	},
	{
		name: "GIF",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M1.5 3.75h21m-21 16.5h21m-7.5-4.5v-6a1.5 1.5 0 0 1 1.5-1.5H18m-3 4.5h2.25m-5.25 3v-7.5m-3.75 4.5H9v1.5a1.5 1.5 0 0 1-3 0v-4.5a1.5 1.5 0 0 1 1.5-1.5H9'
					stroke-linecap='round'
					stroke-width='2'
					fill='none'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		name: "Music",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<circle cx='4.5' cy='19.5' r='3.75' />
					<circle cx='19.5' cy='15' r='3.75' />
					<path d='M8.25 19.5V6.719a3 3 0 0 1 2.05-2.846L21.348.805a1.5 1.5 0 0 1 1.9 1.445V15M8.25 8.719l15-4.5' />
				</g>
			</svg>
		),
	},
	{
		name: "None",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<circle cx='12' cy='12' r='11.25' />
					<path d='m4.045 19.955 15.91-15.91' />
				</g>
			</svg>
		),
	},
	{
		name: "Slo-Mo",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m7.3 15.405a9.34 9.34 0 0 1 8.682-12.405 7.359 7.359 0 0 1 7.283 7.467 5.878 5.878 0 0 1 -5.816 5.973 4.737 4.737 0 0 1 -4.694-4.779 3.79 3.79 0 0 1 3.755-3.823 3.032 3.032 0 0 1 3 3.059' />
					<path d='m6.815 12.186c.037-3.519-6.055-4.63-6.055.152 0 3.75 1.5 7.5 6.75 7.5h15.75s-1.816-3.631-3.449-3.9' />
					<path d='m1.51 5.588.939 3.756' />
					<path d='m5.26 5.588-.912 3.649' />
				</g>
			</svg>
		),
	},
	{
		name: "Sound Effect",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g stroke-linecap='round' stroke-width='2' fill='none' stroke-linejoin='round'>
					<rect width='3' height='6' x='.75' y='14.25' rx='.828' ry='0' />
					<rect width='3' height='6' x='20.25' y='14.25' rx='.828' ry='0' />
					<path d='M6.75 15.75h1.083a.75.75 0 0 0 .637-.35l1.282-2.059a.75.75 0 0 1 1.322.092l1.894 4.261a.75.75 0 0 0 1.3.133l1.263-1.76a.746.746 0 0 1 .609-.313h1.11' />
					<path d='M20.25 15.752V12A8.274 8.274 0 0 0 12 3.75 8.274 8.274 0 0 0 3.75 12v3.752' />
				</g>
			</svg>
		),
	},
	{
		name: "Speed",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path d='M14.3 5.3l-.8 7.2c-.1.8-.9 1.4-1.7 1.3s-1.4-.9-1.3-1.7c0-.2.1-.4.2-.6z' />
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M12 .8c.5 0 1 0 1.5.1' />
					<path d='M17.5 2.2c3.4 1.9 5.8 5.6 5.8 9.8 0 2.9-1.1 5.5-2.8 7.5' stroke-dasharray='3.1727 4.2303' />
					<path d='M18.9 20.9c-.4.3-.8.6-1.2.8M12 18.9v4.3C5.8 23.2.8 18.2.8 12S5.8.8 12 .8' />
				</g>
			</svg>
		),
	},
	{
		name: "Sticker",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M7.125 9a.375.375 0 1 1-.375.375A.375.375 0 0 1 7.125 9m-1.612 6.424A7.334 7.334 0 0 0 12 19.337c.168 0 .334-.006.5-.017q.207-.014.411-.039' />
					<path d='M23.239 11.523A11.25 11.25 0 1 0 12 23.25c.168 0 .334 0 .5-.012M14.446 9.66a2.308 2.308 0 0 1 3.913 0m4.88 1.863L12.5 23.238' />
					<path d='M12.489 23.25v-.978A10.761 10.761 0 0 1 23.25 11.511' />
				</g>
			</svg>
		),
	},
	{
		name: "Stopwatch",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<circle cx='12' cy='14.25' r='9' />
					<path d='M18 7.5l1.875-1.875M19.5 5.25l.75.75M12 5.25V.75m2.25 0h-4.5M12 15l-3.75-4.151' />
				</g>
			</svg>
		),
	},
	{
		name: "Swap",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M23.2 15.8v4.5c0 1.6-1.4 3-3 3H9.7c-1.6 0-3-1.4-3-3v-4.5zM6 18.8c-1.7 0-3-1.3-3-3v-4.5' />
					<path d='M.8 13.5L3 11.2l2.2 2.2M.8 8.2V3.7c0-1.7 1.4-3 3-3h10.5c1.6 0 3 1.3 3 3v4.5zm34.4-6c1.7 0 3 1.3 3 3v4.5m-15 .8L21 12.8l-2.2-2.2' />
				</g>
			</svg>
		),
	},
	{
		name: "Text",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M.75 12.75h10.5m4.5 4.5h7.5m-7.5 4.499V13.5a3.75 3.75 0 1 1 7.5 0v8.25m-22.5-.001V7.5a5.25 5.25 0 1 1 10.5 0v14.25'
					stroke-linecap='round'
					stroke-width='2'
					fill='none'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		name: "Trim",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M15 11.25l8.25.01m-4.49-4.51l-.01 4.5M15 18.75l8.19.01m-4.44 4.49v-4.5m-3.741-12L15 23.25h6.75a1.493 1.493 0 0 0 1.5-1.491v-13.5a1.5 1.5 0 0 0-1.491-1.509zm-6.029 4.5H.75m4.51-4.5l-.01 4.5M9 18.75H.77m4.48 4.48v-4.48M9 6.75v16.5H2.241a1.493 1.493 0 0 1-1.491-1.5V8.25a1.5 1.5 0 0 1 1.509-1.491z' />
					<g stroke-dasharray='1.5 2'>
						<path d='M12 23.25v-.75m0-2.98v-.75m0-3v-.75m-.02-3v-.75m.02-3v-.75' />
					</g>
					<path d='M9 .75l3.022 3.767L15 .75z' />
				</g>
			</svg>
		),
	},
	{
		name: "Wand",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' overflow='visible'>
				<path
					d='M22.151 2.85l-1.259 3.439 2.121 2.122a.735.735 0 0 1-.541 1.273l-3.653-.029-1.319 3.363a.785.785 0 0 1-1.485-.1L14.932 9.07 11.08 7.991a.786.786 0 0 1-.1-1.486l3.363-1.323-.029-3.653a.734.734 0 0 1 1.274-.543l2.122 2.121 3.441-1.257a.8.8 0 0 1 1 1zm-7.219 6.22L.75 23.25'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
			</svg>
		),
	},
];

const iconsSorted = icons.sort(function (a, b) {
	var nameA = a.name.toLowerCase(),
		nameB = b.name.toLowerCase();
	if (nameA < nameB)
		//sort string ascending
		return -1;
	if (nameA > nameB) return 1;
	return 0; //default return value (no sorting)
});

export default iconsSorted;
