const { app, BrowserWindow } = require("electron");

let win

function createWindow() {
	win = new BrowserWindow({ width: 800, height: 600 })

	win.loadFile("index.html")

	win.on('close',() => { 
		win = null
	})
}

app.on('ready',createWindow)
app.on('window-all-closed',() => { 

	// 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
	if(process.platform !== 'darwin') { 
		app.quit()
	}
})
app.on('activate',() => { 
	// 在macOS上，当单击dock图标并且没有其他窗口打开时，
	// 通常在应用程序中重新创建一个窗口。
	if(win === null) { 
		createWindow()
	}
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

