import Vue from 'vue'
import VueRouter from 'vue-router'
import EventForm from "../components/EventForm";
import SignupForm from "../components/SignupForm";
import Organizer from "../components/Organizer";
import AllEvents from "../components/AllEvents";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Create',
    name: 'Create',
    component: EventForm
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: SignupForm
  },
    {
      path: '/Organizer',
      name: 'Organizer',
      component: Organizer
    },
    {
      path: '/AllEvents',
      name: 'AllEvents',
      component: AllEvents
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
