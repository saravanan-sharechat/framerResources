import * as React from "react";

const icons = [
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
		name: "Delete",
		svg: (
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
				<path
					stroke='none'
					d='M19.5 7.5h-15A.5.5 0 0 0 4 8v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a.5.5 0 0 0-.5-.5zm-9.25 13a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0zm5 0a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 1.5 0zM22 4h-4.75a.25.25 0 0 1-.25-.25V2.5A2.5 2.5 0 0 0 14.5 0h-5A2.5 2.5 0 0 0 7 2.5v1.25a.25.25 0 0 1-.25.25H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2zM9 3.75V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.25a.25.25 0 0 1-.25.25h-5.5A.25.25 0 0 1 9 3.75z'
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
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M7.4 10.9C6.5 9.8 6 8.5 6 7c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.4-.5 2.7-1.3 3.8' />
					<path d='M12 20.1c-1.1 1.7-2.9 2.7-5 2.7-3.3 0-6-2.7-6-6s2.7-6 6-6c2.1 0 3.9 1 5 2.6' />
					<circle cx='17' cy='16.8' r='6' />
				</g>
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
		name: "Hamburger",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='M2.25 18.003h19.5m-19.5-6h19.5m-19.5-6h19.5' />
				</g>
			</svg>
		),
	},
	{
		name: "Loop",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m13.9 15.315a5.61 5.61 0 0 0 4.1 2.249 5.25 5.25 0 0 0 0-10.5c-3.75 0-6 5.25-6 5.25s-2.25 5.25-6 5.25a5.25 5.25 0 0 1 0-10.5 6.615 6.615 0 0 1 4.5 2.383' />
					<path d='m9.884 5.748.616 3.699-3.699.617' />
				</g>
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
		name: "Fast",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'>
					<path d='m7.5 12.018a4.832 4.832 0 0 1 3.75 1.5 18.614 18.614 0 0 1 3.057 6.482' />
					<path d='m18.75 23.268h-5.892a1.5 1.5 0 0 1 -1.262-.687 10.945 10.945 0 0 0 -4.1-3.813c-3-1.5-6-3-6-6.75 0-5.25 3.75-6 6-6 3.75 0 7.5 3.75 9.75 4.5-1.5-2.25-4.576-9.285-2.25-9.75 3.75-.75 6 10.5 6 10.5a3.742 3.742 0 0 1 2.25 3.75c0 2.25-1.5 2.25-3.75 2.25s-3 .75-3 .75m3.379-4.5a.375.375 0 0 1 .375.375m-.75 0a.375.375 0 0 1 .375-.375m0 .75a.375.375 0 0 1 -.375-.375m.75 0a.375.375 0 0 1 -.375.375m-17.375-6.056a2.25 2.25 0 1 1 2.733-1.9' />
				</g>
			</svg>
		),
	},
	{
		name: "Reverse",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='m22.075 3.011-7.825 4.864v-4.246a.75.75 0 0 0 -1.175-.618l-12 8.371a.75.75 0 0 0 0 1.236l12 8.371a.75.75 0 0 0 1.175-.618v-4.246l7.825 4.864a.75.75 0 0 0 1.175-.618v-16.742a.75.75 0 0 0 -1.175-.618z'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='1.5'
				/>
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
			<svg enable-background='new 0 0 24 24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path stroke='none' d='m14.3 5.3-.8 7.2c-.1.8-.9 1.4-1.7 1.3s-1.4-.9-1.3-1.7c0-.2.1-.4.2-.6z' />
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m12 .8c.5 0 1 0 1.5.1' />
					<path
						d='m17.5 2.2c3.4 1.9 5.8 5.6 5.8 9.8 0 1.8-.3 3.5-1.1 4.9-.9 1.5-4 5.5-4 5.5'
						stroke-dasharray='3.1727 4.2303'
					/>
					<path d='m12 18.9v4.3c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2' />
				</g>
			</svg>
		),
	},
	{
		name: "Speed Off",
		svg: (
			<svg enable-background='new 0 0 24 24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path stroke='none' d='m14.3 5.3-.8 7.2c-.1.8-.9 1.4-1.7 1.3s-1.4-.9-1.3-1.7c0-.2.1-.4.2-.6z' />
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m12 .8c.5 0 1 0 1.5.1' />
					<path d='m17.5 2.2c3.4 1.9 5.8 5.6 5.8 9.8 0 1.8-.4 3.4-1.1 4.9' stroke-dasharray='3.1727 4.2303' />
					<path d='m12 18.9v4.3c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2' />
				</g>
				<g stroke='none'>
					<path d='m14.7 20.1c.1-.3.3-.6.4-.8.2-.2.4-.3.6-.4s.5-.1.8-.1.5 0 .7.1.3.2.4.4.1.5.1.8-.1.7-.2 1.1-.2.8-.3 1.1-.3.6-.4.8c-.2.2-.4.3-.6.4s-.5.1-.8.1-.5 0-.7-.1-.3-.2-.4-.4-.1-.5-.1-.8.1-.7.2-1.1.2-.8.3-1.1zm.7 1.9c0 .2-.1.4-.1.5s0 .2.1.3c0 0 .1.1.2.1s.2 0 .2-.1c.1 0 .1-.1.2-.3.1-.1.1-.3.2-.5s.1-.5.2-.8.1-.6.2-.8c0-.2.1-.4.1-.5s0-.2-.1-.3c0 0-.1-.1-.2-.1s-.2 0-.2.1c-.1 0-.1.1-.2.3-.1.1-.1.3-.2.5s-.1.5-.2.8c-.1.4-.2.6-.2.8z' />
					<path d='m21 18.9-.2 1h-1.4l-.2.8h1.3l-.2 1h-1.3l-.5 2h-1.1l1.1-4.7h2.5z' />
					<path d='m23.9 18.9-.2 1h-1.4l-.2.8h1.3l-.2 1h-1.3l-.5 2h-1.1l1.1-4.7h2.5z' />
				</g>
			</svg>
		),
	},
	{
		name: "Speed On",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path stroke='none' d='m14.3 5.3-.8 7.2c-.1.8-.9 1.4-1.7 1.3s-1.4-.9-1.3-1.7c0-.2.1-.4.2-.6z' />
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m12 .8c.5 0 1 0 1.5.1' />
					<path d='m17.5 2.2c3.4 1.9 5.8 5.6 5.8 9.8 0 1.8-.4 3.4-1.1 4.9' stroke-dasharray='3.1727 4.2303' />
					<path d='m12 18.9v4.3c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2' />
				</g>
				<g stroke='none'>
					<path d='m14.4 20c.1-.3.3-.6.4-.8.2-.2.4-.3.6-.4s.5-.1.8-.1.5 0 .7.1.3.2.4.4.1.5.1.8-.1.7-.2 1.2c-.1.4-.2.8-.3 1.2-.1.3-.3.6-.4.8-.2.2-.4.3-.6.4s-.5.1-.8.1-.5 0-.7-.1c-.2-.2-.4-.4-.4-.6-.1-.2-.1-.5-.1-.8s.1-.7.2-1.2c.1-.3.2-.7.3-1zm.7 1.9c0 .2-.1.4-.1.5s0 .2.1.3c0 0 .1.1.2.1s.2 0 .2-.1c.1 0 .1-.1.2-.3.1-.1.1-.3.2-.5s.1-.5.2-.8.1-.6.2-.8c0-.2.1-.4.1-.5s0-.2-.1-.3-.1-.1-.2-.1-.2 0-.2.1c-.1 0-.1.1-.2.3-.1.1-.1.3-.2.5s-.1.5-.2.8-.2.6-.2.8z' />
					<path d='m19.3 18.7v3l.7-3h1l-1 4.8h-1.2l-.1-3-.7 3h-1l1.1-4.8z' />
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
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='M23.2 15.8v4.5c0 1.6-1.4 3-3 3H9.7c-1.6 0-3-1.4-3-3v-4.5zM6 18.8c-1.7 0-3-1.3-3-3v-4.5' />
					<path d='M.8 13.5L3 11.2l2.2 2.2M.8 8.2V3.7c0-1.7 1.4-3 3-3h10.5c1.6 0 3 1.3 3 3v4.5zm17.2-4c1.7 0 3 1.3 3 3v4.5m2.2-1.2L21 12.8l-2.2-2.2' />
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
		name: "Time 15",
		svg: (
			<svg enable-background='new 0 0 24 24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<circle cx='12' cy='12' r='11.2' />
					<path d='m16.5 9h-3v2.2c0 .4.3.8.8.8h.7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1.5' />
					<path d='m7.4 9h1.6v6h-1.6 3.1' />
				</g>
			</svg>
		),
	},
	{
		name: "Time 30",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m16.5 13.5a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 3 0z' />
					<circle cx='12' cy='12' r='11.25' />
					<path d='m7.551 10.112a1.5 1.5 0 1 1 1.449 1.888 1.5 1.5 0 1 1 -1.445 1.9' />
				</g>
			</svg>
		),
	},
	{
		name: "Time 60",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<g fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
					<path d='m9.75 9a2.25 2.25 0 0 0 -2.25 2.25v2.25' />
					<circle cx='9' cy='13.5' r='1.5' />
					<path d='m16.5 13.5a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 3 0z' />
					<circle cx='12' cy='12' r='11.25' />
				</g>
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
		name: "Wand Off",
		svg: (
			<svg enable-background='new 0 0 24 24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='m22.2 2.8-1.3 3.4 2.1 2.2c.3.3.3.7 0 1-.1.2-.4.2-.6.2h-3.7l-1.2 3.4c-.2.4-.6.6-1 .4-.2-.1-.4-.3-.5-.5l-1.1-3.8-3.8-1.1c-.4-.1-.7-.5-.6-1 .1-.2.2-.4.5-.5l3.4-1.3v-3.7c0-.4.3-.8.7-.8.2 0 .4.1.6.2l2.1 2.1 3.4-1.3c.4-.1.9.1 1 .5zm-7.3 6.3-14.1 14.1'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<g stroke='none'>
					<path d='m10.7 19c.2-.4.4-.7.6-1 .3-.3.5-.4.8-.5s.7-.2 1.1-.2.7.1 1 .2.4.3.5.5c.1.3.2.6.2 1s-.1.9-.3 1.5c-.2.5-.3 1.1-.4 1.5-.2.4-.4.7-.6 1-.3.3-.5.4-.8.5s-.7.2-1.1.2-.7-.1-1-.2-.4-.3-.5-.5c-.1-.3-.2-.6-.2-1s.1-.9.3-1.5c0-.6.2-1.1.4-1.5zm1 2.5c-.1.3-.1.5-.1.6 0 .2 0 .3.1.4s.2.1.3.1.3 0 .4-.1.2-.2.3-.4.2-.4.3-.6.2-.6.3-1.1.2-.8.2-1.1c.1-.3.1-.5.1-.6 0-.2 0-.3-.1-.4s-.2-.1-.3-.1-.3 0-.4.1-.2.2-.3.4-.2.4-.3.6c-.1.3-.2.6-.3 1.1s-.2.9-.2 1.1z' />
					<path d='m19.6 17.4-.3 1.3h-2l-.3 1.1h2l-.3 1.2h-2l-.6 2.6h-1.6l1.4-6.2z' />
					<path d='m23.7 17.4-.3 1.3h-2l-.3 1.1h2l-.3 1.2h-2l-.5 2.6h-1.6l1.4-6.2z' />
				</g>
			</svg>
		),
	},
	{
		name: "Wand On",
		svg: (
			<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='m22.2 2.8-1.3 3.4 2.1 2.2c.3.3.3.7 0 1-.1.2-.4.2-.6.2h-3.7l-1.2 3.4c-.2.4-.6.6-1 .4-.2-.1-.4-.3-.5-.5l-1.1-3.8-3.8-1.1c-.4-.1-.7-.5-.6-1 .1-.2.2-.4.5-.5l3.4-1.3v-3.7c0-.4.3-.8.7-.8.2 0 .4.1.6.2l2.1 2.1 3.4-1.3c.4-.1.9.1 1 .5zm-7.3 6.3-14.1 14.1'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='2'
				/>
				<g stroke='none'>
					<path d='m13.5 18.9c.2-.4.4-.7.6-1 .3-.3.5-.4.8-.5s.7-.2 1.1-.2.7.1 1 .2.4.3.5.5c.1.3.2.6.2 1s-.1.9-.3 1.5c-.2.5-.3 1.1-.4 1.5-.2.4-.4.7-.6 1-.3.3-.5.4-.8.5s-.7.2-1.1.2-.7-.1-1-.2-.4-.3-.5-.5c-.1-.3-.2-.6-.2-1s.1-.9.3-1.5.2-1.2.4-1.5zm.9 2.5c-.1.3-.1.5-.1.6 0 .2 0 .3.1.4s.2.1.3.1.3 0 .4-.1.2-.2.3-.4l.3-.6c.1-.3.2-.6.3-1.1.1-.4.2-.8.2-1.1.1-.3.1-.5.1-.6 0-.2 0-.3-.1-.4s-.2-.1-.3-.1-.3 0-.4.1-.2.2-.3.4-.2.4-.3.6c-.1.3-.2.6-.3 1.1 0 .5-.1.8-.2 1.1z' />
					<path d='m20.6 17.2.2 3.9.9-3.9h1.5l-1.4 6.3h-1.8l-.2-3.9-.9 3.9h-1.5l1.4-6.3z' />
				</g>
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
