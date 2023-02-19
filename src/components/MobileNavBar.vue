<template>
    <div id="nav">
        <nav class="navbar">
                <div class="logo">
                    <i id="icon" class="fa-solid fa-bars"></i>
                    <h3>Sneakers</h3>
                    <i id="cart" class="fas fa-shopping-cart"></i>
                </div>
            </nav>
    </div>
</template>

<script>
export default {
  name: 'MobileNavBar',
}
</script>

<style scoped>

@media (min-width: 1100px) {

    #nav{
        display: none;
    }
}
@media (max-width:800px){

#nav{
    background-color:rgb(114, 108, 108);
    top: 0;
    left: 0;
    position: fixed;
    z-index: 999;
    width:100%;
}
.navbar{
    height: 55px;
    margin-top:20px;
}

#icon{
    display: inline;
    font-size: 25px;
    margin:20px;
    color: whitesmoke;
    
}

#cart{
    display: inline;
    float: right;
    font-size: 25px;
    margin-right: 20px;
    margin-top:5px ;
    color: whitesmoke;
    
}

h3{
    color: whitesmoke;
    font-size: 30px;
    font-family:inherit;
    display: inline;
    margin:0px 3% ;


}

}

</style>