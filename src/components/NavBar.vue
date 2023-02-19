<template>
    <div class="nav">
        <header>
        <nav class="navbar">
            <ul>
                <div class="logo">
                    <h3>Sneakers</h3>
                </div>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
</template>


<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>

@media (min-width: 1440px) {

.nav{
    height: 80px;
}
.logo{
    float: left;
    padding: 0px 75px;
}

h3{
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-family:inherit;
}

.navbar ul{
    margin-left: 10em;
    overflow: auto;
}
.navbar li{
    float:left;
    list-style: none; 
    margin: 40px 20px;
}
.navbar li a{
    padding: 3px 3px;
    text-decoration: none;
    color: rgba(88, 88, 88, 0.849);
        }
.navbar li a:hover{
    color: red
}
}

@media (min-width:800) and (max-width:1100px){
    
li{
    display:none;
} 
}

@media (max-width:1440px){
.nav{
    display: none;
}
}

</style>