<template>
    <div>
        <b-card
                :title="this.events[0].name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
                {{this.events[0].description}}
            </b-card-text>

            <b-button href="#" variant="primary">Edit</b-button>
        </b-card>
    </div>
</template>


<script>
    import axios from "axios";
    export default {
        data () {
            return {
                events: []
            }
        },
        created() {
            axios.get('http://localhost:8090/api/event/785')
            .then(response => {
                this.events = response.data
            })
        }
    }
    /*
    window.onload = ShowIfEvents;
    // eslint-disable-next-line no-unused-vars
    function ShowIfEvents(){
        var x = document.getElementById("eventCard");
        var y  = document.getElementById("AlertNoEvent");
        if(this.events == null){
            x.style.display = "none";
            y.style.display = "block";
        }
        else {
            x.style.display = "block";
            y.style.display = "none";
        }
    }*/
</script>
