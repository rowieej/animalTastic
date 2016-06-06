$('#addAnimal').on('click', function() {
        $("#gifsGoHere").empty();
        var animal = $(this).data('animal');
        console.log(this);
        var userInput = document.getElementById("animal-input").value;
        console.log(userInput);
        //when user presses "submit", use what they typed to create button on top
       var makeButton = function(){
            var buttonDiv = $('<div class="buttons">');
            var b = $('<button>').text(userInput);
            buttonDiv.append(b);

            $('#animalButtons').append(buttonDiv);
        };

        makeButton();




       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

             $.ajax({
                url: queryURL,
                method: 'GET'
            })
            //When the information returns, run this function
            .done(function(response) {

                console.log(response);
                //takes the response data and applies it to variable results
                var results = response.data;
                
                //this creates an array that will be inserted into div class "item"
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">');
                    
                    //assigns the results data array ratings
                    var rating = results[i].rating;
                    //This creates a paragraph that reads what the rating is
                    var p = $('<p>').text("Rating: " + rating);
                   
                    //This assigns an image element to variable personimage
                    var animalImage = $('<img>');
                    //assigns the source attribute to every imagein the array with the fixed height attribute
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    //appends it to the dom
                    gifDiv.append(p);
                    gifDiv.append(animalImage);
                    
                
                $('#gifsGoHere').append(gifDiv);
        
                }
                
            });

            return false;
        })

            
    
