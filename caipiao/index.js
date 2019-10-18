const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);

//蓝波 二十注内再次出现的可能性很低
//红球 五 注再次出现的可能性很低

//04 20 22 24 26 33 07
var red_buff    =   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var blue_buff   =   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var result_history      =   [
    {'red':[4,20,22,24,26,33],'blue':7},
    {'red':[12,14,15,25,28,31],'blue':4},
    {'red':[3,5,11,28,32,33],'blue':1},
    {'red':[1,8,9,13,16,33],'blue':1},
    {'red':[4,10,11,14,15,29],'blue':5},
    {'red':[2,4,9,11,12,30],'blue':1},
    {'red':[1,5,19,21,25,33],'blue':15},
    {'red':[],'blue':1},
    {'red':[],'blue':1},
    {'red':[],'blue':8},
    {'red':[],'blue':10},
    {'red':[],'blue':13},
    {'red':[],'blue':2},
    {'red':[],'blue':14},
    {'red':[],'blue':1},
    {'red':[],'blue':10},
    {'red':[],'blue':12},
    {'red':[],'blue':12},
    {'red':[],'blue':5},
    {'red':[],'blue':8},
    {'red':[],'blue':12},
    {'red':[],'blue':5},
    {'red':[],'blue':8},
    {'red':[],'blue':8},
    {'red':[],'blue':9},
    {'red':[],'blue':9},
    {'red':[],'blue':11},
    {'red':[],'blue':1},
    {'red':[],'blue':6},
    {'red':[],'blue':2},
];

for(var result_his_index in result_history){
    var blue_index = blue_buff.indexOf(result_history[result_his_index].blue);
    if(blue_index > -1){
        blue_buff.splice(blue_index,1);
    }
}

for(var i =0;i<5;i++){
    for(var j =0;j<result_history[i].red.length;j++){
        var red_index = red_buff.indexOf(result_history[i].red[j]);
        if(red_index > -1){
            red_buff.splice(red_index,1);
        }
    }
}

console.log(red_buff);
console.log(blue_buff);