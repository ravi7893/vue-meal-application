import <template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#"><h1 style="color:white"><span style="background-color:#42B883">Vue</span>Meals</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">  
     <form class="d-flex" @submit.prevent="searchMeal()">
    <input class="form-control mr-sm-4" style="margin:auto" type="search" v-model="searchItem" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-warning" type="submit">Search</button>
  </form>
  </div>
</nav>
    <div v-if="searchCheck">
      <div class="card text-white bg-light mb-3" v-for="(dish, index) in meal.meals" :key="index">
        <div class="row">
          <div class="col"></div>
          <div class="col-6" ><img :src="dish.strMealThumb" class="card-img-top" style="width:100%;margin-right:auto;margin-left:auto;display:block"></div>
          <div class="col"></div>
        </div>
        <div class="card-body" style="background-color:black">
          <h1 class="card-title" style="color:yellow">{{dish.strMeal}}</h1>
          <p class="card-text">{{dish.strInstructions}}</p>
         
    
          <table class="table">
              <thead class="thead-light">
                <tr>
                  <th style="color: green"><h5>Ingredient</h5></th>
                  <th style="color: green"><h5>Measure</h5></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dish.strIngredient1}}</td>
                  <td>{{dish.strMeasure1}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient2}}</td>
                  <td>{{dish.strMeasure2}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient3}}</td>
                  <td>{{dish.strMeasure3}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient4}}</td>
                  <td>{{dish.strMeasure4}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient5}}</td>
                  <td>{{dish.strMeasure5}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient6}}</td>
                  <td>{{dish.strMeasure6}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient7}}</td>
                  <td>{{dish.strMeasure7}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient8}}</td>
                  <td>{{dish.strMeasure8}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient9}}</td>
                  <td>{{dish.strMeasure9}}</td>
                </tr>
               
                <tr>
                  <td>{{dish.strIngredient20}}</td>
                  <td>{{dish.strMeasure20}}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else><h1>Meal Not Found !</h1></div>

  </div>
</template>

<script>
import {getRandomMeal,getMealBySearchName} from '../env'

export default {
  name: 'MealRecipies',
  created() {
    const response = getRandomMeal();
     response
    .then((result) => this.meal = result.data )
    .catch(console.error);
  },
  updated() {

        if(this.meal.meals == null) {
          this.searchCheck = false;
          this.searchItem="";
          window.location.href = '';
        }
  },
  props: {
    msg: String
  },
  data() {
    return {
      meal: {},
      searchItem: "",
      searchCheck: Boolean,
    };
  },
  methods: {
    searchMeal() {
      if(this.searchItem != "")
      {
        const responseSearch = getMealBySearchName(this.searchItem);
        responseSearch
        .then((result) => this.meal = result.data)
        .catch((error) => console.log(error))
      }
    },
 
  }
}
</script>

<style lang="scss">

</style>