import React from 'react'
require('./css/applean-ide.css')
import Header from './components/header'
import Left from './components/left'
import Right from './components/right'
import ShortcutKey from './shortcutKey'
export default React.createClass({
  render() {
  	document.onkeydown = ShortcutKey.hideTools; //当onkeydown 事件发生时快捷键的调用
    return ( 
	    <div>
	    	<Header />
	    	<Left />
	    	<Right />
	    </div>
		)
  }
})
