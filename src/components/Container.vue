<template>
  <div id='app'>
            <div id="table-col-1">
                <div id="image"><img :src="this.index"/></div>
                <div class="grid-container">
                    <div class="grid-item"><img @click="changeIndex(Image1)" v-bind:src="Image1"></div>
                    <div class="grid-item"><img  @click="changeIndex(Image2)" v-bind:src="Image2"></div>
                    <div class="grid-item"><img @click="changeIndex(Image3)" v-bind:src="Image3"></div>
                    <div class="grid-item"><img @click="changeIndex(Image4)" v-bind:src="Image4"></div>
                </div>
            </div>
            <div id="table-col-2">
                <h5>SNEAKER COMPANY</h5>
                <h1>{{data.title}}</h1>
                <p>{{data.description}} </p>
                <a id="discount_price" href="#">${{(data.price)/2}}</a>
                <a id="discount" href="#">{{data.discount_percent}}%</a>
                <a id="actual_price" href="#">${{data.price}}</a>
                <div class="productAdd">
                    <button @click="decrement" class="btn minus-btn">-</button>
                    <input type="text" class="input-num" :value="num" readonly>
                    <button @click="increment" class="btn plus-btn">+</button>
                </div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
    </div>
</template>

<script>
import Image1 from '@/../public/sneakers-1.webp';
import Image2 from '@/../public/sneakers-2.webp';
import Image3 from '@/../public/sneakers-3.webp';
import Image4 from '@/../public/sneakers-4.webp';

export default {
  name: 'Container',
  data(){
        return{
            data: [],
            Image1,
            Image2,
            Image3,
            Image4,
            index:Image1,
            num:0,
        }
    },
    methods:{
        changeIndex(data){
        this.index=data
        console.log(this.index);     
        },
        increment(){
            this.num++;         

        },
        decrement(){
            if(this.num>0){
                this.num--;
            }
        }
    },
    mounted(){
        fetch('https://run.mocky.io/v3/d87bebbc-3e39-4259-ae47-6c39568fb65c')
            .then(res => res.json())
            .then(data => this.data = data)
            .catch(err => console.log(err.message))

    },

}

</script>

<style scoped>
#app{
    width:100%;
    height: 0px;
}
@media (min-width: 1440px) {
    
#table-col-1{
    width: 640px;
    float: left;
}

.grid-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 50px;
    margin-right: 50px;
    width: 300px;
    float: right;
}

.grid-item{
   margin-right: 10px;
}

.grid-item img{
    width: 80px;
    height: 80px;
    border-radius: 4px;
    box-shadow: 2px 2px 5px 1px rgb(92, 92, 92);
    cursor: pointer;
    transition: all .4s ease-in-out;
}

.grid-item:hover{
    box-shadow: 2px 2px 7px 7px rgb(162, 162, 162);
    transform:scale(1.1);
}

#table-col-2{
    margin-left: 180px;
    width: 640px;
    float: left;
    margin-top: 100px;
    padding-bottom:60px ;
  

}

#table-col-2 h1{
    width: 50%;
    text-align: left;
    font-family:Arial, Helvetica, sans-serif;
}

#table-col-2 p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 60%;
    text-align: left;
    
}

#table-col-2 h5{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    color: rgb(243, 161, 8);
}

#image img{
    margin-top: 70px;
    float:right;
    width:350px;
    height:380px;
    border-radius: 15px;
    box-shadow: 1px 1px 1px 2px rgb(73, 73, 73);
    cursor: pointer;
}

#discount_price{
    font-size: 30px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    text-decoration: none;

    
}

#actual_price{
    color: rgb(120, 120, 120);
    display: block;  
    text-decoration:line-through;  
    font-size: 18px;
    margin: 10px 2px;
  
}

#discount{
    margin-left: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    font-weight: 400;
    color: orangered;
    background-color: rgb(255, 233, 210);

    
}

.productAdd{
    display: inline;
}
.btn {
  padding: 5px 10px;
  font-size: 10px;
  text-align: center;
  background-color: #00000018;
  border: none;
  cursor: pointer;
}

.input-num {
  width: 20px;
  height: 20px;
  padding: 6px 14px;
  border:none;
  text-align: center;
  outline: none;
  background-color:#00000018;
}

.add-to-cart {
  margin-left: 20px;
  padding: 10px 60px;
  background-color: #f45a00;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-to-cart:hover {
  background-color: #555;
}

}

@media (max-width:800px){
#app{
    display: none;
}
}

</style>
