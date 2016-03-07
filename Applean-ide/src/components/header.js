import React from 'react'

export default class Header extends React.Component {
	render () {
		return (
			<div id = 'header'>
				<div id='header_tool'>
					<img src = './img/tool.png' className='head-tool-img'/>
				</div>
				<input type="text" className = 'header-txt' defaultValue="App Name"/>
			</div>
		)
	}
}