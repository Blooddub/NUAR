<template>
    <div class="wrapper">
        <div class="card-container">
            <div 
                v-for="card in cards" 
                :key="card.id" 
                class="card"
            >
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
                <p>Игроков {{ card.count_user }}/{{ card.max_user }}</p>
                <button @click="connectToGame(card.id)">Подключиться</button>
            </div>
        </div>
    </div>
</template>



<script>

export default {
    name: "ListCardComponent",
    data() {
    return {
      cards: [
        { 
            id: 1, 
            title: 'Карточка 1', 
            count_user: 1,
            max_user: 4,
            description: 'Описание карточки 1' 
        },
        { 
            id: 2,
            title: 'Карточка 2', 
            count_user: 2,
            max_user: 4,
            description: 'Описание карточки 2' 
        },
        { 
            id: 3, 
            title: 'Карточка 3', 
            count_user: 3,
            max_user: 4,
            description: 'Описание карточки 3' 
        },
        { 
            id: 4, 
            title: 'Карточка 4', 
            count_user: 4,
            max_user: 4,
            description: 'Описание карточки 4' 
        }
      ],
    };
  },
    methods: {
    connectToGame(cardId) {
      console.log(`Подключение к игре с карточкой ID ${cardId}`);
      this.$router.push('/game')
    },
  },

}
</script>



<style scoped>

    .wrapper {
        max-width: 1000px; /* Максимальная ширина */
        margin: 0 auto; /* Центрирует контейнер по центру страницы */
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .card {
        flex: 0 1 calc(30% - 20px); /* 30% ширины контейнера с учетом отступов между карточками */
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        border-radius: 10px; 
    }

    .card button{
        border-radius: 5px; 
    }

</style>