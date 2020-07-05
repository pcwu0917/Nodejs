
//创建一个Car类的构造函数。以下两种方法均可
// 例：var Car=function(){}
// 例：function Car(){}
function Car(){
    //设置两个属性
    this.color="";
    this.brand="";

    //以下为set,get方法
    this.setColor=(color)=>{
        this.color=color;
    }
    this.getColor=()=>{
        return this.color;
    }
    this.setBrand=(brand)=>{
        this.brand=brand;
    }
    this.getBrand=()=>{
        return this.brand;
    }
}
//向外暴露的是根据构造函数创建的一个Car实例
module.exports=new Car();