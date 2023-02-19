<template>
<div id='app'>
            <!-- <div id="table-col-1">
            <div id="image"><img v-bind:src="ImageLink(index)"/></div>
            <div class="button-container">
                <button @click="previousImage">&lt;</button>
                <button @click="nextImage">&gt;</button>
            </div>
            </div> -->
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
                <button @click="showData">show</button>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

</template>

<script>

export default{

    name:'MobileContainer',
    data(){
        return{
            data: [],
            index:0,
            num:0,
        }
    },
    methods:{

        showData(){
            console.log(this.data);
        },
        changeIndex(data){
        this.index=data
        console.log(this.index);     
        },
        nextImage(){
            this.index++;         

        },
        previousImage(){
            if(this.index>0){
                this.index--;
            }
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
    computed: {
    ImageLink() {
      return function(index){  
      if (this.data.images && this.data.images.length > 0) {
        return this.data.images[index];
      }
      return '';
    }
    }
}
}
</script>

<style scoped>
@media (min-width: 1440px) {
#app{
    display: none;
}
}

@media (max-width:800px){

.grid-container{
    display: none;
}

#image img{
    margin: 68px 0px;
    height: 350px;
    width:100% ;
    position: relative;
}

.button-container {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

button {
  background-color: black;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

#table-col-2 h5{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    color: rgb(243, 161, 8);
}

#table-col-2{    
    margin-left: 20px;
    width: 300px;
    float: left;

}
#actual_price{
    color: rgb(120, 120, 120);
    display: block;  
    text-decoration:line-through;  
    font-size: 18px;
    margin: 10px 2px;
}

#discount{
    margin-left: 20px;
    margin-top: 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    font-weight: 400;
    color: orangered;
    background-color: rgb(255, 233, 210);
    
    }

#discount_price{
    font-size: 30px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    text-decoration: none;
  
}

.productAdd{
    display: block;
    width: 100%;
}
.btn {
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #f5f5f5;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.input-num {
  width: 70%;
  padding: 7px 10px;
  text-align: center;
  border: none;
  background-color:#f5f5f5;
}

.add-to-cart {
  margin:20px 40px;
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

</style>