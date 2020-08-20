1. 安装@babel/core
2. 安装@babel/cli
3. 安装@babel/preset-env(最新规则)或者其他转码规则(@babel/preset-react)
4. 新建并配置.babelrc

```javascript
{
"presets":[
"@babel/env",
"@babel/preset-react"
]
}
```

5. `npx babel example.js`会在命令行上直接输出转码后的代码
6. 输入到其他文件

```javascript
npx babel example.js -o compiled.js
//或者
npx babel example.js --out-file compiled.js
```

7. 转码整个文件夹

```javascript
npx babel js -d  lib
```



