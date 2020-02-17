<template>
  <div id="app">
    <div class="lista">
      <h4>ID</h4>
      <h4>Descrição</h4>
      <h4>Completo</h4>
    </div>
    <div class="listaTarefas" v-for="tarefa in tarefas" v-bind:key="tarefa.id">
      <span v-if="tarefa.completa" class="textStyle">
        <p class="listItem">{{ tarefa.id }}</p>
        <p class="listItem">{{ tarefa.descricao }}</p>
        <p class="listItem">{{ tarefa.completa }}</p>
      </span>
      <span v-else v-bind:style="{textDecoration: lineThrough}">
        <p class="listItem">{{ tarefa.id }}</p>
        <p class="listItem">{{ tarefa.descricao }}</p>
        <p class="listItem">{{ tarefa.completa }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tarefas: [
        {
          id: 1,
          descricao: 'Tarefa A',
          completa: false
        },
        {
          id: 2,
          descricao: 'Tarefa B',
          completa: true
        },
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.lista {
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.listaTarefas {
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.textStyle {
  text-decoration: line-through;
}

</style>
