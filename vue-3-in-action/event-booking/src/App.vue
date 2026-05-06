<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 7"
        :key="i"
        title="Vue conference 2026"
        when="05-01-2026"
        description="Conference about Vue and JavaScript"
        @register="console.log('Registered')"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <BookingItem
      :key="i"
      title="XYZ"
      when="06-01-2026"
      description="pending"
      @register="console.log('Registered')"
    />
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue'
</script>
