let name = "张三"
let age = 18
let country = "中国"
let des = '大家好,我叫'+name+',我今年'+age.toString()+'岁,我来自'+country+',很高兴认识大家!'
// console.log(des);

// des =  `大家好,我叫${name},我今年${age.toString()}岁,我来自${country},很高兴认识大家!`
// console.log(des);

let word = `咏鹅  
            鹅鹅鹅  
            曲项向天歌   
            白毛浮绿水  
            红掌拨清波    `

setTimeout(() => {
    document.getElementById('bg').innerText = word
}, 1000);
