<template>
  <div class="events">
    <h4>Events For Good</h4>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventListView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "Vue Mastery Live",
          location: "London, UK",
          date: "2020-07-19",
          time: "19:00",
        },
        {
          id: 2,
          title: "Vue Mastery Live",
          location: "New York, US",
          date: "2020-07-21",
          time: "19:00",
        },
        {
          id: 3,
          title: "Vue Mastery Live",
          location: "San Francisco, US",
          date: "2020-07-23",
          time: "19:00",
        },
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
