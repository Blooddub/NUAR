<template>
  <div
    class="card"
    :class="{ flipped: flipped, alive: card.alive }"
    @click="flipCard"
  >
    <div class="card-content">
      {{ card.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardGame",
  props: {
    card: Object,
  },
  data() {
    return {
      flipped: false,
    };
  },
  methods: {
    flipCard() {
      if (this.card.alive) {
        this.flipped = !this.flipped;
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccccc;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  margin: 5px;
}

.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.flipped .card-content {
  transform: rotateY(180deg);
}

.killed {
  background-color: #ff6666; /* Цвет для убитой карточки */
  pointer-events: none; /* Запрет на клик для убитой карточки */
}
</style>