import { Component } from '@angular/core';

interface TopMenu{
  title:string;
  readonly link:string;
}

//interface可以做函数
interface AddFunc{
  (x:number, y:number):number;//参数时number，返回值也为number
}

//interface可以做字典类型
interface Dict{
  [key:string]: string; //索引为字符型，对应的索引值也为string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<div><div>`,  //模板的内联写法
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex =  -1;
  title = 'pingduoduo';  //可以称为成员变量，也可以称为属性
  //tabs = ['热门','手机','yifu'];
  //声明一个类型
  menus:TopMenu[] = [
    {
      title:'热门',
      link:''
    },
    {
      title:'热门2',
      link:''
    },
    {
      title:'热门3',
      link:''
    },
    {
      title:'热门4',
      link:''
    },
    {
      title:'热门5',
      link:''
    },
    {
      title:'热门6',
      link:''
    },
    {
      title:'热门7',
      link:''
    },
    {
      title:'热门8',
      link:''
    },
    {
      title:'热门9',
      link:''
    },
    {
      title:'热门10',
      link:''
    },
    {
      title:'热门11',
      link:''
    },
    {
      title:'热门12',
      link:''
    },
    {
      title:'热门',
      link:''
    },
    {
      title:'热门2',
      link:''
    },
    {
      title:'热门3',
      link:''
    },
    {
      title:'热门4',
      link:''
    },
    {
      title:'热门5',
      link:''
    },
    {
      title:'热门6',
      link:''
    },
    {
      title:'热门7',
      link:''
    },
    {
      title:'热门8',
      link:''
    },
    {
      title:'热门9',
      link:''
    },
    {
      title:'热门10',
      link:''
    },
    {
      title:'热门11',
      link:''
    },
    {
      title:'热门12',
      link:''
    }
  ]
  addFun: AddFunc = (x, y) => x + y;
  dict: Dict = {
    a: '1',
    b: '2'
  }
  test(){
    console.log(this.dict['a']);
  }
  // handleselect(index:number){
  //   this.selectedIndex = index;
  // }
}
