<template>
  <div>
    <button @click="$emit('changeImg')">Trocar imagem do Perfil</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeImage',
  emits: ['changeImg']
}
</script>