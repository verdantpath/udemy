<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 7"
        :key="i"
        title="Vue conference 2026"
        when="01-01-2026"
        description="Conference about Vue and JavaScript"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
</script>
