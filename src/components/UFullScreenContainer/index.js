import React, { useLayoutEffect,useRef,useEffect } from 'react';

let mounted = true
export default (props)=>{
  const domRef = useRef()
  useLayoutEffect(() => {
    // 获取 用户屏幕 的宽度
    const { width, height } = window.screen
    Object.assign(domRef.current.style, {
      width: `${width}px`,
      height: `${height}px`
    })
    autoResizeScreen()
  })

  function autoResizeScreen () {
    const { width, height } = window.screen
    const { clientWidth, clientHeight } = document.body
    // var width = 1920,
    // height = 1080;
    let left; let top; let scale;
    // 获取比例  可视化区域的宽高比与 屏幕的宽高比  来进行对应屏幕的缩放
    if (clientWidth / clientHeight > width / height) {
      scale = clientHeight / height;
      top = 0;
      left = (clientWidth - width * scale) / 2;
    } else {
      scale = clientWidth / width;
      left = 0;
      top = (clientHeight - height * scale) / 2;
    }
    // 防止组件销毁后还执行设置状态s
    if(mounted){
      Object.assign(domRef.current.style, {
        transform: `scale(${scale})`,
        left: `${left}px`,
        top: `${top}px`,
      })
    }

  }
  useEffect(()=>{
    mounted=true
    window.addEventListener('resize',autoResizeScreen )
    return ()=>{
      mounted=false
      window.removeEventListener('resize', autoResizeScreen)
    }
  },[0])


  return (
    <div
      id='dv-full-screen-container'
      ref={domRef}
    >
      {props.children}
    </div>
  )
}
