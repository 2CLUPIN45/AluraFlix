
var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=400ffdf4284a751222a4ff460e7647d7&language=en-US&page=1')
.then(response=> response.json())
.then(data=>{
    data.results.map((i,j)=>{
        if(j > 18)
            return;
        if(j == 0){
            main.innerHTML+=`
            <div class="banner-principal" style="margin-top: 20px;background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>

        `;      
    }else{
        if(j == 1){
            main.innerHTML+=`
            <h2>Assista o melhor filme</h2>
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>
            `;       
        }else{
             main.innerHTML+=`            
            <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>

            `;       

        }    

    }

    })

})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=<<SUA API KEY>>&language=en-US&page=2')
.then(response => response.json())
.then(data =>{
    data.results.map((i, j) => {
        if(j > 18)
            return;
        if(j == 0){
            main.innerHTML+=`
            <div class="banner-principal" style="margin-top: 20px;background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            
            
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                <h2>Assista o melhor filme</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>
                `
            }else{
                main.innerHTML+=`
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>
                `
            }
        }
    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=<<SUA API KEY>>&language=en-US&page=3')
.then(response => response.json())
.then(data =>{
    data.results.map((i, j) => {
        if(j > 18)
            return;
        if(j == 0){
            main.innerHTML+=`
            <div class="banner-principal" style="margin-top: 20px;background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            
            
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                <h2>Assista o melhor filme</h2>
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>
                `
            }else{
                main.innerHTML+=`
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`"></div>
                `
            }
        }
    })
})
   