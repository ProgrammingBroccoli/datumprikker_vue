<template>
    <div>
        <div class="form-box">
            <b-form @submit="nextForm" v-if="show1">
                <b-form-group
                        id="input-group-eventName"
                        label="Event name:"
                        label-for="input-eventName"
                        description="What is your super cool event named?"
                >
                    <b-form-input
                            id="input-eventName"
                            v-model="event.name"
                            type="text"
                            required
                            placeholder="Enter event name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-eventDescription"
                        label="Description:"
                        label-for="input-eventDescription"
                >
                    <b-form-input
                            id="input-eventDescription"
                            v-model="event.description"
                            required
                            placeholder="Enter description"
                    ></b-form-input>

                </b-form-group>

                <b-button id="button1" class="click" type="submit" variant="primary">Next</b-button>
            </b-form>
        </div>

        <div class="form-box" v-if="show2">
            <b-alert variant="success" show>SO {{event.name}} IT IS!</b-alert>
            <b-form @submit="nextForm" >
                <b-form-group
                        id="input-group-organizerName"
                        label="Name:"
                        label-for="input-OrganizerName"
                        description="What is your name"
                >
                    <b-form-input
                            id="input-organizerName"
                            v-model="event.organizer.name"
                            type="text"
                            required
                            placeholder="Name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-organizerEmail"
                        label="Email:"
                        label-for="input-organizerEmail"
                >
                    <b-form-input
                            id="input-organizerEmail"
                            v-model="event.organizer.email"
                            required
                            placeholder="Enter your email"
                    ></b-form-input>
                </b-form-group>

                <b-button class="click" type="submit" variant="primary">Next</b-button>
            </b-form>

        </div>
        <div class="form-box">
            <b-form @submit="nextForm" v-if="show3">
                <label for="timepicker">Choose a date</label>
                <b-form-datepicker id="example-datepicker" v-model="event.date" class="mb-2"></b-form-datepicker>
                <b-button class="click" type="submit" variant="primary">Next</b-button>
            </b-form>
        </div>
        <div class="form-box">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show4">
                <label for="timepicker">Choose a time</label>
                <b-form-timepicker id="timepicker" v-model="event.time" locale="en"></b-form-timepicker>
                <b-button class="click" type="submit" variant="primary">Submit</b-button>
            </b-form>
        </div>

    </div>
</template>


<script>
    import axios from "axios";

    export default {
        data() {
            return {
                event: {
                    name: 'Test',
                    description: 'Test',
                    organizer: {
                        name: '',
                        email: ''
                    },
                    date: null,
                    time: null
                },
                show1: true,
                show2: false,
                show3: false,
                show4: false
            }
        },

        created() {
            axios.get('http://localhost:8090/api/event')
                .then(response => {
                    this.events = response.data
                })
        },
        methods: {
            nextForm(){
                if (this.show1) {
                    this.show1 = false
                    this.show2 = true
                } else if (this.show2) {
                    this.show2 = false
                    this.show3 = true
                }
                else if(this.show3){
                    this.show3 = false
                    this.show4 = true
                }
                alert(JSON.stringify(this.event))
            },
            onSubmit(evt) {
                evt.preventDefault()
                axios.post('http://localhost:8090/api/event', this.event)

            },

            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.event.name = ''
                this.event.description = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>

<style lang="css" scoped>
    .form-box {
        width: 30%;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

</style>
