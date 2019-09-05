import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {//复制成功
  console.log('复制成功')
//Vue.prototype.$message({
//  message: 'Copy successfully',
//  type: 'success',
//  duration: 1500
//})
}

function clipboardError() {//复制失败
  console.log('复制失败')
//Vue.prototype.$message({
//  message: 'Copy failed',
//  type: 'error'
//})
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}