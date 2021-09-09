1引用边框组件：

```
import { MyBorderBox1 } from '@/components/borders'
```

2使用：

```
<MyBorderBox1/>
```

3组件开发：

参照 /components/borders/border1 (。。。略。。。。)

开发完成后 请在 /components/borders/index.js  中  export

如：

```
export { default as MyBorderBox1 } from './border1'
```



注： 

1. 组件对应的截图预览  写在了对应组件文件夹下的README.md(如： /components/borders/border1/README.md)

2. 本组件待完善有bug  存在宽度或高度最小边界值问题    其他未知