<script setup></script>

<template>
  <footer class="flex w-full flex-col-reverse px-3 pb-2 sm:flex-row sm:justify-between">
    <p>&copy; 2023 {{ $t('footer.copyright') }}</p>
    <div class="mb-2 flex h-8">
      <a
        href="https://vk.com/abdirhen"
        class="mr-4 h-full rounded-md hover:bg-prussian-blue-dark"
        target="_blank"
        ><img src="@/assets/vk.png" alt="" class="h-full"
      /></a>
      <a
        href="https://www.linkedin.com/in/аслан-абдыгалиев-7a1254220"
        class="mr-4 h-full rounded-md hover:bg-prussian-blue-dark"
        target="_blank"
        ><img src="@/assets/linkedin.png" alt="" class="h-full"
      /></a>
      <a
        href="https://www.instagram.com/abdygaliyev_aslan/"
        class="mr-4 h-full rounded-md hover:bg-prussian-blue-dark"
        target="_blank"
        ><img src="@/assets/instagram.png" alt="" class="h-full"
      /></a>
      <a
        href="https://www.facebook.com/abdi.rhen/"
        class="mr-4 h-full rounded-md hover:bg-prussian-blue-dark"
        target="_blank"
        ><img src="@/assets/facebook.png" alt="" class="h-full"
      /></a>
    </div>
  </footer>
</template>

<style scoped></style>
