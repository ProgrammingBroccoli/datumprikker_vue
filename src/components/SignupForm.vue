<template>
    <div>
        <div class="form-box">
            <b-form v-model="event" @submit="SubmitCode" v-if="show1">
                {{event.name}}
                <b-form-group
                        id="Code"
                        label="Link Code:"
                        label-for="input-LinkCode"
                        description="What is de code provided my the organizer?"
                >
                    <b-form-input
                            id="input-linkCode"
                            v-model="linkCode"
                            type="text"
                            required
                            placeholder="Link Code"
                    ></b-form-input>
                </b-form-group>
                <b-button id="btnSumbitCode" class="click" type="submit" variant="primary">Next</b-button>
            </b-form>
        </div>

        <div class="form-box" v-if="show2">
            <b-form v-for="item in event" :key="item.name" @submit="SubmitAvailability" >
                <h3>Would you like to attend at {{item.name}} on {{item.date}} at {{item.time}}</h3>
                <v-btn class="mx-2" fab dark large color="cyan">
                    <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
                <b-button class="click" type="submit" variant="primary">Next</b-button>
            </b-form>

        </div>

    </div>
</template>


<script>
    import axios from "axios";

    export default {
        data() {
            return {
                //event: {
                //    name: 'test',
                //    description: '',
                //    organizer: {
                //        name: '',
                //        email: '',
                //        id: ''
                //    },
                //    date: null,
                //    time: null,
                //    id: null,
                //    linkCode: 0
                //},
                event :[],
                linkCode: 0,
                show1: true,
                show2: false
            }
        },

        created() {

        },
        methods: {
            SubmitCode(){
                if (this.show1){
                    this.show1 = false
                    this.show2 = true
                }
                axios.get('http://localhost:8090/api/event/785')
                    .then(response => {
                        this.event.push(response.data)
                        //this.$set(this.event.name, response.data)
                        alert(this.event[0].name)
                })
            },
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

            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.event.name = 'this is reset'
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
