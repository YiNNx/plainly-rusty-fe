import React, { useState } from "react"
import MdEditor from 'for-editor'

const DemoEditor = () => {
  const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: true, // 单双栏模式

  };

  // 保存Markdown文本内容
  const [mdContent, setMdContent] = useState('')

  // 上传图片
  function uploadImg(file: any) {
    console.log('file', file);
  };
  // 输入内容改变
  function handleEditorChange(value: any) {
    console.log('handleChange', value);
    setMdContent(value)
  }
  // 保存输入内容
  function handleEditorSave(value: any) {
    console.log('handleEditorSave', value);
  }
  return (
    <MdEditor
      placeholder="请输入Markdown文本"
      toolbar={toolbar}
      lineNum={0}
      value={mdContent}
      onChange={handleEditorChange}
      onSave={handleEditorSave}
      addImg={uploadImg} />
  )
}
export default DemoEditor
