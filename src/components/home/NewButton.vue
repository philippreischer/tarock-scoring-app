<script setup>
    
</script>

<template>
    <div class="plus-button-container" >
        <button class="button-plus bc-light-blue color-gray">
            <span class="plus">+</span>
        </button>
    </div>

    
</template>

<style scoped>

.plus-button-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.button-plus {
    border-radius: 10Px;
    border: solid 1px black;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: +1;
    cursor: pointer;
    box-shadow: 3px 3px 5px #241641;
    max-width: 74px;
    position: absolute;
    bottom: 0;
    margin: 40px;
}

.plus{
    padding: 10px 17px 15px 17px;
    font-size: 40px;
    line-height: 1;
}


</style>