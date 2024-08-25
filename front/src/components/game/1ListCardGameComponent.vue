<template>
    <div class="wrapper">
        <div>
            <h1>Карточное поле</h1>
            <div class="card-container">
                <CardGame 
                    v-for="card in cards" 
                    :key="card.id" 
                    :card="card"
                />
            </div>
        </div>
    </div>
</template>



<script>
import CardGame from '@/components/game/CardGame.vue';

export default {
    name: "ListCardGameComponent",
    components: {CardGame},
    data() {
        return {
            cards: [
                {
                    id: 1,
                    name: "Пресонаж 1",
                    alive: false
                },{
                    id: 2,
                    name: "Пресонаж 2",
                    alive: false
                },{
                    id: 3,
                    name: "Пресонаж 3",
                    alive: false
                },{
                    id: 4,
                    name: "Пресонаж 4",
                    alive: false
                },{
                    id: 5,
                    name: "Пресонаж 5",
                    alive: false
                },{
                    id: 6,
                    name: "Пресонаж 6",
                    alive: false
                },{
                    id: 7,
                    name: "Пресонаж 7",
                    alive: false
                },{
                    id: 8,
                    name: "Пресонаж 8",
                    alive: false
                },{
                    id: 9,
                    name: "Пресонаж 9",
                    alive: false
                },{
                    id: 10,
                    name: "Пресонаж 10",
                    alive: false
                },{
                    id: 11,
                    name: "Пресонаж 11",
                    alive: false
                },{
                    id: 12,
                    name: "Пресонаж 12",
                    alive: false
                },{
                    id: 13,
                    name: "Пресонаж 13",
                    alive: false
                },{
                    id: 14,
                    name: "Пресонаж 14",
                    alive: false
                },{
                    id: 15,
                    name: "Пресонаж 15",
                    alive: false
                },{
                    id: 16,
                    name: "Пресонаж 16",
                    alive: false
                },{
                    id: 17,
                    name: "Пресонаж 17",
                    alive: false
                },{
                    id: 18,
                    name: "Пресонаж 18",
                    alive: false
                },{
                    id: 19,
                    name: "Пресонаж 19",
                    alive: false
                },{
                    id: 20,
                    name: "Пресонаж 20",
                    alive: false
                },{
                    id: 21,
                    name: "Пресонаж 21",
                    alive: false
                },{
                    id: 22,
                    name: "Пресонаж 22",
                    alive: false
                },{
                    id: 23,
                    name: "Пресонаж 23",
                    alive: false
                },{
                    id: 24,
                    name: "Пресонаж 24",
                    alive: false
                },{
                    id: 25,
                    name: "Пресонаж 25",
                    alive: false
                }
            ],
            matrix: [[]],
        };
    },
    mounted() {
        this.createMatrix(this.cards);
        // console.log(this.matrix);
    },
    methods: {
        createMatrix(array) {
            let count_row = Math.sqrt(Object.keys(array).length);
            for (let i = 0; i < Object.keys(array.length); i++) {
                for (let j = 0;  j < count_row; j++) {
                    console.log(array[i]);
                    this.matrix[i][j] = array[i];
                }
                console.log("\n");
            }
        },

    },

}
</script>



<style scoped>

    .wrapper {
        display: flex;
        justify-content: center;
        height: 100vh; /* 100% высоты экрана */
    }

    .card-container {
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease-out;
        transform-style: preserve-3d;
    }

    .board-row {
        display: flex;
    }

</style>