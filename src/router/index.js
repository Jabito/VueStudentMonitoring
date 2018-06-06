import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import App from '../App'
import AttendanceLogs from '../components/AttendanceLogs'
import Messages from '../components/Messages'
import AddStudent from '../components/AddStudent'
import AddParent from '../components/AddParent'
import AddGuidance from '../components/AddGuidance'
import AddUser from '../components/AddUser'
import ViewStudents from '../components/ViewStudents'
import ViewSummary from '../components/ViewSummary'
import GuidanceReport from '../components/GuidanceReport'

Vue.use(Router)
Vue.use(Buefy)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/attendance',
      name: 'AttendanceLogs',
      component: AttendanceLogs
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/addParent',
      name: 'AddParent',
      component: AddParent
    },
    {
      path: '/addGuidance',
      name: 'AddGuidance',
      component: AddGuidance
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/viewStudents',
      name: 'ViewStudents',
      component: ViewStudents
    },
    {
      path: '/viewSummary',
      name: 'ViewSummary',
      component: ViewSummary
    },
    {
      path: '/guidanceReport',
      name: 'GuidanceReport',
      component: GuidanceReport
    }
  ]
})
