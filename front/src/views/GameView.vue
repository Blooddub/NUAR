<template>
  <div class="main">
    <h1>Game</h1>
    <ListCardGameComponent :cards="cardData"/>
  </div>
</template>
  
<script>
 import ListCardGameComponent from "@/components/game/ListCardGameComponent.vue" 

  export default {
    name: 'GameView',
    components: {ListCardGameComponent},
    data() {
    return {
      cardData: [
        {
            id: 1,
            name: "Пресонаж 1",
            killed: false
        },{
            id: 2,
            name: "Пресонаж 2",
            killed: false
        },{
            id: 3,
            name: "Пресонаж 3",
            killed: false
        },{
            id: 4,
            name: "Пресонаж 4",
            killed: false
        },{
            id: 5,
            name: "Пресонаж 5",
            killed: false
        },{
            id: 6,
            name: "Пресонаж 6",
            killed: false
        },{
            id: 7,
            name: "Пресонаж 7",
            killed: false
        },{
            id: 8,
            name: "Пресонаж 8",
            killed: false
        },{
            id: 9,
            name: "Пресонаж 9",
            killed: false
        },{
            id: 10,
            name: "Пресонаж 10",
            killed: false
        },{
            id: 11,
            name: "Пресонаж 11",
            killed: false
        },{
            id: 12,
            name: "Пресонаж 12",
            killed: false
        },{
            id: 13,
            name: "Пресонаж 13",
            killed: false
        },{
            id: 14,
            name: "Пресонаж 14",
            killed: false
        },{
            id: 15,
            name: "Пресонаж 15",
            killed: false
        },{
            id: 16,
            name: "Пресонаж 16",
            killed: false
        },{
            id: 17,
            name: "Пресонаж 17",
            killed: false
        },{
            id: 18,
            name: "Пресонаж 18",
            killed: false
        },{
            id: 19,
            name: "Пресонаж 19",
            killed: false
        },{
            id: 20,
            name: "Пресонаж 20",
            killed: false
        },{
            id: 21,
            name: "Пресонаж 21",
            killed: false
        },{
            id: 22,
            name: "Пресонаж 22",
            killed: false
        },{
            id: 23,
            name: "Пресонаж 23",
            killed: false
        },{
            id: 24,
            name: "Пресонаж 24",
            killed: false
        },{
            id: 25,
            name: "Пресонаж 25",
            killed: false
        }
      ],
    };
  },
  }
  </script>
  