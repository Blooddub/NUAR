<template>
    <div class="wrapper">
        <div>
            <h1>Карточное поле</h1>
            <div class="card-grid">
                <div
                    v-for="(row, rowIndex) in cards"
                    :key="rowIndex"
                    class="card-row"
                >
                    <button @click="shiftLeftRow(rowIndex)">Л</button>
                        
                    <div
                    v-for="(card, colIndex) in row"
                    :key="colIndex"
                    class="card"
                    :class="{ active: card.alive }"
                    @click="toggleCardStatus(rowIndex, colIndex)"
                    >
                    {{ card.value }} ({{ card.alive }})
                    </div>
                         
                    <button @click="shiftRightRow(rowIndex)">П</button>
                </div>
            </div>

            <hr>
            

            <button @click="shiftUpColumn(1)">Сдвинуть столбец вверх</button>
            <br><br>
            <button @click="shiftDownColumn(1)">Сдвинуть столбец вверх</button>
            <br><br>
            <button @click="shrinkRows()">Сократить ряды</button>
            <br><br>
            <button @click="shrinkColumns()">Сократить столбцы</button>

                                                                                                

        </div>
    </div>
</template>



<script>
// import CardGame from '@/components/game/CardGame.vue';

export default {
    name: "ListCardGameComponent",
    // components: {CardGame},
    data() {
        return {
            cards: [
                [
                    { value: 1, name: "Пресонаж 1", alive: true },
                    { value: 2, name: "Пресонаж 2", alive: false },
                    { value: 3, name: "Пресонаж 3", alive: false },
                    { value: 4, name: "Пресонаж 4", alive: false },
                ],
                [
                    
                    { value: 5, name: "Пресонаж 5", alive: false },
                    { value: 6, name: "Пресонаж 6", alive: false },
                    { value: 7, name: "Пресонаж 7", alive: false },
                    { value: 8, name: "Пресонаж 8", alive: false },
                ],
                [
                    { value: 9, name: "Пресонаж 9", alive: false },
                    { value: 10, name: "Пресонаж 10", alive: false },
                    { value: 11, name: "Пресонаж 11", alive: false },
                    { value: 12, name: "Пресонаж 12", alive: false },
                ],
                [
                    { value: 13, name: "Пресонаж 13", alive: false },
                    { value: 14, name: "Пресонаж 14", alive: false },
                    { value: 15, name: "Пресонаж 15", alive: false },
                    { value: 16, name: "Пресонаж 16", alive: false },
                ],
            ],
        };
    },
    mounted() {
        // this.createMatrix(this.cards);
        // console.log(this.matrix);
    },
    methods: {

    toggleCardStatus(rowIndex, colIndex) {
        // if (this.cards[rowIndex][colIndex].alive)
        // {
        //     this.cards[rowIndex][colIndex].alive = !this.cards[rowIndex][colIndex].alive;
        // }
        this.cards[rowIndex][colIndex].alive = !this.cards[rowIndex][colIndex].alive;
    },

    shiftLeftRow(rowIndex) {
        this.cards[rowIndex].push(this.cards[rowIndex].shift());
    },

    shiftRightRow(rowIndex) {
        this.cards[rowIndex].unshift(this.cards[rowIndex].pop());
    },

    shiftUpColumn(colIndex) {
        const temp = this.cards[0][colIndex];
        for (let i = 0; i < this.cards.length - 1; i++) {     
            this.cards[i][colIndex] = this.cards[i+1][colIndex]
        }
        this.cards[this.cards.length - 1][colIndex] = temp
    },


    shiftDownColumn(colIndex) {
        const temp = this.cards[this.cards.length - 1][colIndex];
        for (let i = this.cards.length -1; i > 0; i--) {     
            this.cards[i][colIndex] = this.cards[i-1][colIndex]
        }
        this.cards[0][colIndex] = temp
    },








    shrinkRows() {
      this.cards = this.cards.filter(row => row.some(card => card.alive));
    },
    
    shrinkColumns() {
      const newColumns = [];
      for (let colIndex = 0; colIndex < this.cards[0].length; colIndex++) {
        const columnData = this.cards.map(row => row[colIndex]);
        if (columnData.some(card => card.alive)) {
          newColumns.push(columnData);
        }
      }

      this.cards = this.cards.map(row => {
        return newColumns.map(column => {
          return column[row.index];
        });
      });
    },
  },


}
</script>



<style scoped>

    .wrapper {
        display: flex;
        justify-content: center;
    }

    .card-grid {
        display: flex;
        margin: 20px;
        justify-content: center;
        flex-direction: column; 
    }
    .card-row {
        display: flex;
    }
    .card {
        border: 1px solid #000;
        padding: 10px;
        margin: 5px;
        width: 80px;
        height: 100px;
        text-align: center;
        cursor: pointer;
    }
    .card.active {
        background-color: #c8e6c9;
    }

    .board-row {
        display: flex;
    }

</style>