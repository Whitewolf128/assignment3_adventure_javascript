//Variables
let para = document.getElementById("scene");
let div1 = document.getElementById("answers");
let div = document.getElementById("game-container");
let btnStart = document.getElementById("start");
let btnNext = document.getElementById("next-btn");
let btnRetry = document.getElementById("retry");

//runs this funtionc upon loading
function load(){

    //currentState(1);
    //a button and paragraph with changed text
    btnRetry.style.display = "none";
    btnStart.style.display = "block";
    btnStart.textContent = "";
    btnStart.innerHTML += "Click this button to begin";
    para.textContent = "";
    para.innerHTML += "You're a new singer looking to make a name for yourself and make a living no matter the genre.";

    //an add listener, once clicked will run the renderQuestion function
    btnStart.addEventListener('click', renderQuestion);

}
//function for a currentState
function currentState(pos){
   
}   

//function that runs once the start button is clicked
function renderQuestion(option){
    //variables
    let btn1 = document.getElementById('one');
    let btn2 = document.getElementById('two');
    let btn3 = document.getElementById('three');

    //hides the start button and retry button
   btnStart.style.display = "none";
   btnRetry.style.display = "none";
   //resets the paragraph to be blank than adds text to it after
   para.textContent = "";
   para.innerHTML += "What genre are you planning to do?";
   
   //shows three option buttons
   btn1.style.display = "block";
   btn2.style.display = "block";
   btn3.style.display = "block";

   //adds text to the option buttons
   btn1.textContent = "Rock";
   btn2.textContent = "Pop";
   btn3.textContent = "Country";
   
   //checks if button 1 was clicked
   btn1.addEventListener('click', () => {
        //if it was clicked then runs through this if statement
        if (true){
        
            //hides the three options and the retry button
            btn1.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";
            btnRetry.style.display = "none";
            //sets the paragraph to be blank than adds text
            para.textContent = "";
            para.innerHTML += "You have chosen Rock <br> Now to choose a sub genre for rock.<br>Click next to continue.";

            //shows the next button
            btnNext.style.display = "block";

            //checks if the next button was clicked
            btnNext.addEventListener('click', () => {

                //if its true it runs the next block
                if(true){
                    //hides the next and retry buttons and shows only button 1 and button 2 for options
                    btnNext.style.display = "none";
                    btn1.style.display = "block";
                    btn2.style.display = "block";
                    btnRetry.style.display = "none";
                    //changes the text for buttons 1 and 2
                    btn1.textContent = "Punk";
                    btn2.textContent = "Metal";

                    //changes the text for paragraph
                    para.textContent = "";
                    para.innerHTML += "There are two bands looking for a singer one is a punk rock band and the other is a heavy metal band, which do you choose?";

                    //checks if the first button was clicked
                    btn1.addEventListener('click', () =>{
                        //if its true then runs the next block
                        if(true){
                            //hides buttons 1 and 2
                            btn1.style.display = "none";
                            btn2.style.display = "none";
                            btnRetry.style.display = "none";
                            //changes the text for paragraph
                            para.textContent = "";
                            para.innerHTML += "You chose the Punk Band <br> Now to brainstorm names for the new Punk band.<br>Click next to continue.";
                          
                            //shows the next button
                            btnNext.style.display = "block";
                            //checks if the next button was clicked
                            btnNext.addEventListener('click', () =>{
                                //if its true then runs the next block
                                if(true){
                                    //hides the next and retry buttons and shows only button 1 and button 2 for options
                                    btnNext.style.display = "none";
                                    btnRetry.style.display = "none";
                                    btn1.style.display = "block";
                                    btn2.style.display = "block";

                                    //changes the text for paragraph
                                    para.textContent = "";
                                    para.innerHTML += "The band is coming up with a name for the band and leaves you to choose, What is your choice?";

                                    //changes the text for buttons 1 and 2
                                    btn1.textContent = "Rebelstoke";
                                    btn2.textContent = "SkullBringer";

                                    //checks if button 1 was clicked
                                    btn1.addEventListener('click', () =>{
                                        //if its true then runs the next block
                                        if(true){
                                            //hides buttons retry and shows next button
                                            btnNext.style.display = "block";
                                            btnRetry.style.display = "none";
                                            //hides buttons 1 and 2
                                            btn1.style.display = "none";
                                            btn2.style.display = "none";
                                            //changes the text for paragraph
                                            para.textContent = "";
                                            para.innerHTML += "You have chosen the name Rebelstoke<br><br>The name has stuck and now to make an album and put on a show.<br>Click next to continue.";
                                            //checks if next button was clicked
                                            btnNext.addEventListener('click', () => {
                                                
                                                if(true){
                                                    //shows buttons 1 and 2 and hides next and retry
                                                    btnNext.style.display = "none";
                                                    btn1.style.display = "block";
                                                    btn2.style.display = "block";
                                                    btnRetry.style.display = "none";

                                                    //changes the text for paragraph
                                                    para.textContent = "";
                                                    para.innerHTML += "After releasing the debut album, another band is liking your vibe and wants to have you open for them, what will you say?";
                                                    btn1.textContent = "Yes";
                                                    btn2.textContent = "No";
                                                    
                                                    //checks if a button was clicked
                                                    btn1.addEventListener('click', () => {
                                                        if(true){
                                                            //hides buttons 1, 2 and retry and shows next
                                                            btn1.style.display = "none";
                                                            btn2.style.display = "none";
                                                            btnNext.style.display = "block";
                                                            btnRetry.style.display = "none";
                                                            //changes text for the paragraph
                                                            para.textContent = "";
                                                            para.innerHTML += "You're band said Yes, you will open for them.<br><br>You open for one of the big undeground punk bands and put on a show, the big band is glad to see you're performance and becomes your friends.<br><br>you play with them for 2 decades.<br>Click next to continue.";
                                                            //checks if the button was clicked
                                                            btnNext.addEventListener('click', () =>{
                                                                if(true){
                                                                    //shows buttons 1 and 2
                                                                    btn1.style.display = "block";
                                                                    btn2.style.display = "block";

                                                                    //hides next and retry
                                                                    btnNext.style.display = "none";
                                                                    btnRetry.style.display = "none";

                                                                    //changes the text for the paragraph
                                                                    para.textContent = "";
                                                                    para.innerHTML += "After about 20 years the Big band that has been beside you said its time to retire, and asks if you will help them play one final show, what do you say?";

                                                                    //changes the text for the buttons
                                                                    btn1.textContent = "Yes";
                                                                    btn2.textContent = "No";

                                                                    //checks if the button was clicked
                                                                    btn1.addEventListener('click', () =>{
                                                                        if(true)
                                                                        {
                                                                            //hides buttons 1, 2 and shows retry and hide next
                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";

                                                                            //changes the text for the paragraph
                                                                            para.textContent = "";
                                                                            para.innerHTML += "You tell them Yes we will.<br><br>You put on a show to help them and they pass the torch down to your band with a legacy of fans.<br>You continue for 20 more years before a final performance.<br><br>The good ending";
                                                                             //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);
                                                                        }
                                                                    });
                                                                     //checks if the button was clicked
                                                                    btn2.addEventListener('click', () =>{
                                                                        if(true){
                                                                            //hides buttons 1, 2 and shows retry and hide next
                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";

                                                                            //changes the text for the paragraph
                                                                            para.textContent = "";
                                                                            para.innerHTML += "You tell them No we wont.<br><br>The big band is ok with the answer before they go and perform one final time but during that they pass the torch to another band that band becomes your rival for 20 more years.<br><br>The bitter ending<br>";

                                                                            //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);

                                                                        }

                                                                    });
                                                                }


                                                            });

                                                        }
                                                    });
                                                    //checks if the button was clicked
                                                    btn2.addEventListener('click', () => {
                                                        
                                                            
                                                        if(true){
                                                            //hides buttons 1, 2 and shows retry and hide next
                                                            btn1.style.display = "none";
                                                            btn2.style.display = "none";
                                                            btnNext.style.display = "none";
                                                            btnRetry.style.display = "block";

                                                            //changes the text for the paragraph
                                                            para.textContent = "";
                                                            para.innerHTML += "You're band said No, you wont open for them.<br><br>The big band is not very happy that you said no and says that they will crush you and they deliver making your band break up.<br><br>crushed ending.";

                                                        }
                                                    })
                                                    
                                                    
                                                    
                                                }
                                            })
                                        }
                                    });
                                    //checks if the button was clicked
                                    btn2.addEventListener('click', () =>{
                                        if(true){
                                            //hides buttons 1, 2 and retry and shows next
                                            btnNext.style.display = "block";
                                            btnRetry.style.display = "none";
                                            btn1.style.display = "none";
                                            btn2.style.display = "none";

                                            //changes the text for the paragraph
                                            para.textContent = "";
                                            para.innerHTML += "You have chosen the name SkullBringer. The name has stuck and now to make an album and put on a show. Click next to continue.";

                                            //checks if the button was clicked
                                            btnNext.addEventListener('click', () => {
                                                if(true){
                                                    //shows buttons 1 and 2 and hides next and retry
                                                    btnNext.style.display ="none";
                                                    btnRetry.style.display = "none";
                                                    btn1.style.display = "block";
                                                    btn2.style.display = "block";

                                                    //changes the text for the paragraph
                                                    para.textContent = "";
                                                    para.innerHTML += "There is a small show that wants to display new up and comers, will you sign your band up?";
                                                    //changes the text for the buttons
                                                    btn1.textContent ="Yes";
                                                    btn2.textContent = "No";
                                                    //checks if the button was clicked
                                                    btn1.addEventListener('click', () =>{
                                                        if(true){
                                                            //hides buttons 1, 2 and retry and shows next
                                                            btnNext.style.display = "block";
                                                            btnRetry.style.display = "none";
                                                            btn1.style.display = "none";
                                                            btn2.style.display = "none";
                                                            //changes the text for the paragraph
                                                            para.textContent = "";
                                                            para.innerHTML += "You sign the band up.<br><br>The band performs a good show and gains a bunch of fans.<br><br>20 years later, the band has decided to end it, but wants to do a final show to thank the fans.<br>Click next to continue.";
                                                            btnNext.textContent = "Next";
                                                            //checks if the button was clicked
                                                            btnNext.addEventListener('click', () =>{
                                                                if(true){
                                                                    //shows buttons 1 and 2 and hides next and retry
                                                                    btnNext.style.display = "none";
                                                                    btnRetry.style.display = "none";
                                                                    btn1.style.display = "block";
                                                                    btn2.style.display = "block";

                                                                    //changes the text for the paragraph
                                                                    para.textContent = "";
                                                                    para.innerHTML += "Will you play one last show?";

                                                                    //changes the text for the buttons
                                                                    btn1.textContent = "Yes";
                                                                    btn2.textContent = "No";
                                                                    //checks if the button was clicked
                                                                    btn1.addEventListener('click', () =>{
                                                                        if(true){

                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";
                                                                            //changes the text for the paragraph
                                                                            para.textContent = "";
                                                                            para.innerHTML += "You do one final show before calling it quits and leaving behind a legacy to smaller bands.<br><br>The good ending.";
                                                                            
                                                                            //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);
                                                                        }
                                                                    });
                                                                    //checks if the button was clicked
                                                                    btn2.addEventListener('click', () =>{
                                                                        if(true){
                                                                            //hides buttons 1, 2 and shows retry and hide next
                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";
                                                                            
                                                                            //changes the text for the paragraph
                                                                            para.textContent = "";
                                                                            para.innerHTML += "You do not perform on final show and leave everybody in disbelief as well as your own band mates resent you for life.<br><br>Resented ending.";
                                                                            
                                                                            //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }   
                                                    
                                                    });
                                                    //checks if the button was clicked
                                                    btn2.addEventListener('click', () =>{
                                                        if(true){
                                                            //hides buttons 1, 2 and retry and shows next
                                                            btn1.style.display = "none";
                                                            btn2.style.display = "none";
                                                            btnNext.style.display = "block";
                                                            btnRetry.style.display = "none";

                                                            //changes the text for the paragraph
                                                            para.textContent = "";
                                                            para.innerHTML += "You dont sign the band up.<br><br>The band starts resenting you and might kick you out.<br>Click next to continue.";
                                                            
                                                            //checks if the button was clicked
                                                            btnNext.addEventListener('click', () =>{
                                                                if(true){
                                                                    //shows buttons 1 and 2 and hides next and retry
                                                                    btn1.style.display = "block";
                                                                    btn2.style.display = "block";
                                                                    btnNext.style.display = "none";
                                                                    btnRetry.style.display = "none";

                                                                    //changes the text for the paragraph
                                                                    para.textContent = "";
                                                                    para.innerHTML += "Will you try to work it out or start getting angry?";
                                                                    
                                                                    //changes the text for the buttons
                                                                    btn1.textContent = "Work it out";
                                                                    btn2.textContent = "Confront them";

                                                                    //checks if the button was clicked
                                                                    btn1.addEventListener('click', () =>{
                                                                        if(true){
                                                                            //hides buttons 1, 2 and shows retry and hide next
                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";

                                                                            //changes the text for the paragraph
                                                                            para.textContent = "You and the rest of the band work it out as you tell them that you want to do a few more albums but not perform them live, they say its ok but are very reluctant. you make 3 more albums before breaking up. The reluctant ending.";
                                                                            //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);
                                                                        }
                                                                    });
                                                                    //checks if the button was clicked
                                                                    btn2.addEventListener('click', () =>{
                                                                        if(true){
                                                                            //hides buttons 1, 2 and shows retry and hide next
                                                                            btn1.style.display = "none";
                                                                            btn2.style.display = "none";
                                                                            btnNext.style.display = "none";
                                                                            btnRetry.style.display = "block";

                                                                            //changes the text for the paragraph
                                                                            para.textContent = "";
                                                                            para.innerHTML += "You confront them on the rumors and they decide to 'say we are done' and pack up and leave.<br>The lonely ending.";
                                                                            //checks if the button was clicked
                                                                            btnRetry.addEventListener('click', load);
                                                                        }
                                                                    });
                                                                }
                                                    
                                                            });
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    });
                               }
                            });

                    }
                });
                //checks if the button was clicked
                btn2.addEventListener('click', () =>{
                     if(true){
                          //hides buttons 1, 2 and retry and shows next
                          btn1.style.display = "none";
                          btn2.style.display = "none";
                          btnRetry.style.display = "none";
                          
                          //changes the text for the paragraph
                          para.textContent = "";
                          para.innerHTML += "You chose the Metal Band <br> Now to brainstorm names for the new Meteal band.";
                          
                          //shows next
                          btnNext.style.display = "block";
                          
                          //checks if the button was clicked
                          btnNext.addEventListener('click', () =>{
                            if(true){
                                //shows buttons 1 and 2 and hides next and retry
                                btnNext.style.display = "none";
                                btnRetry.style.display = "none";
                                btn1.style.display = "block";
                                btn2.style.display = "block";

                                //changes the text for the paragraph
                                para.textContent = "";
                                para.innerHTML += "The band is coming up with a name for the band and leaves you to choose, What is your choice?";
                                //changes the text for the buttons
                                btn1.textContent = "Disasterful";
                                btn2.textContent = "Stormbane";
                                //checks if the button was clicked
                                btn1.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";

                                        //changes the text for the paragraph
                                        para.textContent = ""
                                        para.innerHTML += "You have chosen the name Disasterful<br>Time to create a debut album and then perform<br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";

                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You have made your debut album and have to choose where to play live, you hear big name bands will be at the bar that allows musicians to play or at a club that allows small bands to perform, which do you pick?";
                                                
                                                //changes the text for the buttons
                                                btn1.textContent = "Bar";
                                                btn2.textContent = "Club";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and retry and shows next
                                                        btnNext.style.display = "block";
                                                        btnRetry.style.display = "none";
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You perform at the bar in front of a few big names, they love you and you're band and want to aid you in getting more popular and want you to perform at their next show.<br>Click next to continue.";
                                                        //checks if the button was clicked
                                                        btnNext.addEventListener('click', () =>{
                                                            if(true){
                                                                //shows buttons 1 and 2 and hides next and retry
                                                                btn1.style.display = "block";
                                                                btn2.style.display = "block";
                                                                btnNext.style.display = "none";
                                                                btnRetry.style.display = "none";
                                                                
                                                                //changes the text for the paragraph
                                                                para.textContent = "";
                                                                para.innerHTML += "The band asks if you wanna join their tour, what do you say?";

                                                                //changes the text for the buttons
                                                                btn1.textContent = "Yes";
                                                                btn2.textContent = "No";
                                                                //checks if the button was clicked
                                                                btn1.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You perform great on tour and get more fans, and you keep going for 60 years before calling quits.<br><br>The best ending.";
                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                        
                                                                    }
                                                                });
                                                                //checks if the button was clicked
                                                                btn2.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";

                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "The big bands say you 'you probably wont last much longer on your own' and those words end up coming true, after about 7 years you are forced to break up.<br><br>The worst ending.";
                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and retry and shows next
                                                        btnNext.style.display = "block";
                                                        btnRetry.style.display = "none";
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";

                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You choose to perform at the club and get some fans but not enough to go big but enough to stay afloat.<br>Click next to continue.";

                                                        //checks if the button was clicked
                                                        btnNext.addEventListener('click', () =>{
                                                            if(true){

                                                                //shows buttons 1 and 2 and hides next and retry
                                                                btn1.style.display = "block";
                                                                btn2.style.display = "block";
                                                                btnNext.style.display = "none";
                                                                btnRetry.style.display = "none";
                                                                
                                                                //changes the text for the paragraph
                                                                para.textContent = "";
                                                                para.innerHTML += "After about 10 years after playing at clubs your band fizzles out to younger bands but are still able to do a final show, will you do it or not?";
                                                                
                                                                //changes the text for the buttons
                                                                btn1.textContent = "Yes";
                                                                btn2.textContent = "No";

                                                                //checks if the button was clicked
                                                                btn1.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";

                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You and your band do one final show before calling it quits and moving on.<br><br>Going out with a bang ending.";
                                                                        
                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                
                                                                });
                                                                //checks if the button was clicked
                                                                btn2.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You and your band say we are done and will allow others to take over.<br><br>Fizzling out ending.";

                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });                                        
                                    }
                                });
                                //checks if the button was clicked
                                btn2.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";

                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "You have chosen the name Stormbane<br>Time to create a debut album and then perform<br>Click next to continue.";
                                        
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You have made your debut album and have to choose where to play live, you hear big name bands will be at the bar that allows musicians to play or at a club that allows small bands to perform, which do you pick?";
                                                
                                                //changes the text for the buttons
                                                btn1.textContent = "Bar";
                                                btn2.textContent = "Club";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and retry and shows next
                                                        btnNext.style.display = "block";
                                                        btnRetry.style.display = "none";
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";

                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You perform at the bar in front of a few big names, they love you and you're band and want to aid you in getting more popular and want you to perform at their next show.<br>Click next to continue.";

                                                        //checks if the button was clicked
                                                        btnNext.addEventListener('click', () =>{
                                                            if(true){
                                                                //shows buttons 1 and 2 and hides next and retry
                                                                btn1.style.display = "block";
                                                                btn2.style.display = "block";
                                                                btnNext.style.display = "none";
                                                                btnRetry.style.display = "none";

                                                                //changes the text for the paragraph
                                                                para.textContent = "";
                                                                para.innerHTML += "The band asks if you wanna join their tour, what do you say?";

                                                                //changes the text for the buttons
                                                                btn1.textContent = "Yes";
                                                                btn2.textContent = "No";

                                                                //checks if the button was clicked
                                                                btn1.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You perform great on tour and get more fans, and you keep going for 60 years before calling quits.<br><br>The best ending.";
                                                                        
                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                                //checks if the button was clicked
                                                                btn2.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "The big bands say you 'you probably wont last much longer on your own' and those words end up coming true, after about 7 years you are forced to break up.<br><br>The worst ending.";

                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and retry and shows next
                                                        btnNext.style.display = "block";
                                                        btnRetry.style.display = "none";
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You choose to perform at the club and get some fans but not enough to go big but enough to stay afloat.<br>Click next to continue.";
                                                        
                                                        //checks if the button was clicked
                                                        btnNext.addEventListener('click', () =>{
                                                            if(true){
                                                                //shows buttons 1 and 2 and hides next and retry
                                                                btn1.style.display = "block";
                                                                btn2.style.display = "block";
                                                                btnNext.style.display = "none";
                                                                btnRetry.style.display = "none";
                                                                
                                                                //changes the text for the paragraph
                                                                para.textContent = "";
                                                                para.innerHTML += "After about 10 years after playing at clubs your band fizzles out to younger bands but are still able to do a final show, will you do it or not?";
                                                                
                                                                //changes the text for the buttons
                                                                btn1.textContent = "Yes";
                                                                btn2.textContent = "No";
                                                                
                                                                //checks if the button was clicked
                                                                btn1.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You and your band do one final show before calling it quits and moving on.<br><br>Going out with a bang ending.";

                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                                //checks if the button was clicked
                                                                btn2.addEventListener('click', () =>{
                                                                    if(true){
                                                                        //hides buttons 1, 2 and shows retry and hide next
                                                                        btn1.style.display = "none";
                                                                        btn2.style.display = "none";
                                                                        btnNext.style.display = "none";
                                                                        btnRetry.style.display = "block";
                                                                        
                                                                        //changes the text for the paragraph
                                                                        para.textContent = "";
                                                                        para.innerHTML += "You and your band say we are done and will allow others to take over.<br><br>Fizzling out ending.";

                                                                        //checks if the button was clicked
                                                                        btnRetry.addEventListener('click', load);
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }

                                                });
                                            }
                                        });
                                    }
                                });
                            }
                          });
                    }
                });
                
            }
        });
        //btn1.textContent = "Punk";
        //btn2.textContent = "Metal";

    }
   });
   //checks if the button was clicked
   btn2.addEventListener('click', () => {
    if (true){
        //shows buttons 1, 2, and 3 and hides next and retry
        btn3.style.display = "none";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btnNext.style.display = "block";
        btnRetry.style.display = "none";

        //changes the text for the paragraph
        para.textContent = "";
        para.innerHTML += "You have chosen Pop Music<br>Now to choose a group or go solo.<br>Click next to continue.";
        
        //checks if the button was clicked
        btnNext.addEventListener('click', () =>{
            if(true){
                //shows buttons 1 and 2 and hides next and retry
                btnNext.style.display = "none";
                btnRetry.style.display = "none";
                btn1.style.display = "block";
                btn2.style.display = "block";

                //changes the text for the paragraph
                para.textContent = "";
                para.innerHTML += "There is a group needing a singer but you are not sure if you want to do it or not, are you going solo or be in a group?";
                
                //changes the text for the buttons
                btn1.textContent = "Go Solo";
                btn2.textContent = "Join the Group";
                
                //checks if the button was clicked
                btn1.addEventListener('click', () =>{
                    if(true){
                        //hides buttons 1, 2 and retry and shows next
                        btn1.style.display = "none";
                        btn2.style.display = "none";
                        btnRetry.style.display = "none";
                        btnNext.style.display = "block";

                        //changes the text for the paragraph
                        para.textContent = "";
                        para.innerHTML += "You choose to go solo by doing things yourself and you choose your own name to be called.<br>Click next to continue.";
                        
                        //checks if the button was clicked
                        btnNext.addEventListener('click', () =>{
                            if(true){

                                //shows buttons 1 and 2 and hides next and retry
                                btnNext.style.display = "none";
                                btnRetry.style.display = "none";
                                btn1.style.display = "block";
                                btn2.style.display = "block";
                                
                                //changes the text for the paragraph
                                para.textContent = "";
                                para.innerHTML += "time to make music, do you use a computer or learn each instrument and play backing tracks with a dj?";
                                
                                //changes the text for the buttons
                                btn1.textContent = "Computer";
                                btn2.textContent = "Learn";
                                
                                //checks if the button was clicked
                                btn1.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "You use a computer to create your sound and although some fans like it others find it souless on stage.<br><br>Click next to continue.";
                                        
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "Do you want to play at night clubs or live on stage?";

                                                //changes the text for the buttons
                                                btn1.textContent = "Night Clubs";
                                                btn2.textContent = "Live on Stage";
                                                
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You decide to perform for a nightclub which means more astetic for your music, you do this for the rest of your life.<br><br>Nightclub ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                        //checks if the button was clicked
                                        btn2.addEventListener('click', () =>{
                                            if(true){
                                                //hides buttons 1, 2 and shows retry and hide next
                                                btn1.style.display = "none";
                                                btn2.style.display = "none";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "block";
                                                
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You decide to perform on stage, with your methods it only last 6 years before forcing yourself to retire early.<br><br>Early retirement ending.";
                                                //checks if the button was clicked
                                                btnRetry.addEventListener('click', load);
                                            }
                                        });
                                    }
                                });
                                //checks if the button was clicked
                                btn2.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "You teach yourself all instruments for your music and fans like it a bit better live.<br><br>Click next to continue.";
                                        
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "Do you want to play at night clubs or live on stage?";
                                                
                                                //changes the text for the buttons
                                                btn1.textContent = "Night Clubs";
                                                btn2.textContent = "Live on Stage";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You decide to perform for a nightclub which means more astetic for your music, you do this for the rest of your life.<br><br>Nightclub ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You decide to perform on stage, with your methods it lasts a good 50 years before retiring.<br><br>Long career ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
                //checks if the button was clicked
                btn2.addEventListener('click', () =>{
                    if(true){
                        //hides buttons 1, 2 and retry and shows next
                        btn1.style.display = "none";
                        btn2.style.display = "none";
                        btnRetry.style.display = "none";
                        btnNext.style.display = "block";
                        //changes the text for the paragraph
                        para.textContent = "";
                        para.innerHTML += "You choose to join the group.<br><br>Click next to continue.";
                        //checks if the button was clicked
                        btnNext.addEventListener('click', () =>{
                            if(true){
                               //shows buttons 1 and 2 and hides next and retry 
                                btn1.style.display = "block";
                                btn2.style.display = "block";
                                btnNext.style.display = "none";
                                btnRetry.style.display = "none";
                                //changes the text for the paragraph
                                para.textContent = "";
                                para.innerHTML += "The group comes up with the name Poppin Boys. they have requested for you to come up with a gimic to entertain the audience, you decide either a group dance or allowing the audience to sing along, what is your decision?";
                                //changes the text for the buttons
                                btn1.textContent = "Group Dance";
                                btn2.textContent = "Audience Sing Along";
                                //checks if the button was clicked
                                btn1.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "Every song you come up with a quick to easy learn dance so that the fans can move around with the group alongside catchy lyrics.<br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You and the group dance to each song while a band plays, the manager asks you if you can allow some fans who buy VIP tickets on stage to join you, do you agree?";
                                                //changes the text for the buttons
                                                btn1.textContent = "Yes";
                                                btn2.textContent = "No";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You allow VIP fans to join you in performing, it spirals your music to be more liked or critiqued by either fans or haters.<b><br>Dancing VIP ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //shows buttons 1 and 2 and hides next and retry
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "Probably the better so that people dont hate the fact you have not allowed others to join you.<br><br>The non-chaos route ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                                //checks if the button was clicked
                                btn2.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "You allow the fans to join in on the catchy lyrics and make up dances on their own whilst you play instruments.<br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "Your manager asks you to play with other artists from other genres to allow better networking, do you agree?";
                                                //changes the text for the buttons
                                                btn1.textContent = "Yes";
                                                btn2.textContent = "No";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You decide to branch out to play with other bands to hopefully show others that your music is good too.<br><br>Collaberator ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);

                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You tell your manager that that is not a great idea, the manager is bitter and the band is relieved.<br><br>Staying in your lane ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

            }
        });
    }
   });
   //checks if the button was clicked
   btn3.addEventListener('click', () => {
    if (true){
        //hides buttons 1, 2 and retry and shows next
        btn3.style.display = "none";
        btn1.style.display = "none";
        btn2.style.display = "none";
        btnNext.style.display = "block";
        btnRetry.style.display = "none";
        //changes the text for the paragraph
        para.textContent = "";
        para.innerHTML += "You have chosen Country.<br>Now to choose a sub genre.<br>Click next to continue.";
        //checks if the button was clicked
        btnNext.addEventListener('click', () =>{
            if(true){
                //shows buttons 1 and 2 and hides next and retry
                btnNext.style.display = "none";
                btnRetry.style.display = "none";
                btn1.style.display = "block";
                btn2.style.display = "block";
                //changes the text for the paragraph
                para.textContent = "";
                para.innerHTML += "There are two bands looking for a singer one is a country rock band and the other is just a country band, which do you choose?"
                //changes the text for the buttons
                btn1.textContent = "Country Rock";
                btn2.textContent = "Country";
                //checks if the button was clicked
                btn1.addEventListener('click', () =>{
                    if(true){
                        //hides buttons 1, 2 and retry and shows next
                        btn1.style.display = "none";
                        btn2.style.display = "none";
                        btnRetry.style.display = "none";
                        btnNext.style.display = "block";
                        //changes the text for the paragraph
                        para.textContent = "";
                        para.innerHTML += "The Country rock band loves that you chose them and will make it official.<br><br>Click next to continue.";
                        //checks if the button was clicked
                        btnNext.addEventListener('click', () =>{
                            if(true){
                                //shows buttons 1 and 2 and hides next and retry
                                btn1.style.display = "block";
                                btn2.style.display = "block";
                                btnNext.style.display = "none";
                                btnRetry.style.display = "none";
                                //changes the text for the paragraph
                                para.textContent = "";
                                para.innerHTML += "The band is wondering what name to vote on, you are the deciding vote, what is your decision?";
                                //changes the text for the buttons
                                btn1.textContent = "The Prairie Rockers";
                                btn2.textContent = "The City Groovers";
                                //checks if the button was clicked
                                btn1.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "The band loves it, they feel at home.<br><br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "Do you want to go national (All over the USA and Canada) or international?";
                                                //changes the text for the buttons
                                                btn1.textContent = "National";
                                                btn2.textContent = "International";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "Your band gets recognized really well and your music is very enjoyable and relatable to mostly country folk but enough to be play by many.<br><br>Recognized ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "Your band does not get alot of love in most countries due to the language barrier and not very well recieved in europe either meaning after a few years you would have to break up.<br><br>Not loved ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                                //checks if the button was clicked
                                btn2.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "Some of the band likes it but others feel it is not a name that defines them.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "Do you want to go national (All over the USA and Canada) or international?";
                                                //changes the text for the buttons
                                                btn1.textContent = "National";
                                                btn2.textContent = "International";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "Your band Is not well recognized by those from the country or city cause it sounds similar to other rock music.<br><br>Unrecognized ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "Your band does gets loved by many countries due to the grooviness of the sound some understand the lyrics and say its more relatable and others love the rythem even though they dont know the lyrics.<br><br>loved ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
                //checks if the button was clicked
                btn2.addEventListener('click', () =>{
                    if(true){
                        //hides buttons 1, 2 and retry and shows next
                        btn1.style.display = "none";
                        btn2.style.display = "none";
                        btnRetry.style.display = "none";
                        btnNext.style.display = "block";
                        //changes the text for the paragraph
                        para.textContent = "";
                        para.innerHTML += "The country band is happy you joined and has made the name your name.<br><br>Click next to continue.";
                        //checks if the button was clicked
                        btnNext.addEventListener('click', () =>{
                            if(true){
                                //shows buttons 1 and 2 and hides next and retry
                                btn1.style.display = "block";
                                btn2.style.display = "block";
                                btnNext.style.display = "none";
                                btnRetry.style.display = "none";
                                //changes the text for the paragraph
                                para.textContent = "";
                                para.innerHTML += "Your band loves your tone but wonders if they go national(All over the USA and Canada) or international?";
                                //changes the text for the buttons
                                btn1.textContent = "National";
                                btn2.textContent = "International";
                                //checks if the button was clicked
                                btn1.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "Your band is well loved by many the sound is great and most of those who have listened love the escape from their life.<br><br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You got nominated in the country hall of fame in nashville, do you accept?";
                                                //changes the text for the buttons
                                                btn1.textContent = "Yes";
                                                btn2.textContent = "No";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You have showed up in tennessee to claim a reward, give a speech and play a few songs.<br><br>Proud ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You do not want to go to tennesee for a trophy which could hurt you in the future.<br><br>Missed opportunity ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                                //checks if the button was clicked
                                btn2.addEventListener('click', () =>{
                                    if(true){
                                        //hides buttons 1, 2 and retry and shows next
                                        btn1.style.display = "none";
                                        btn2.style.display = "none";
                                        btnNext.style.display = "block";
                                        btnRetry.style.display = "none";
                                        //changes the text for the paragraph
                                        para.textContent = "";
                                        para.innerHTML += "Some countries love you but most are not heavily into your music since it makes them feel that you dont care about them so you only do the USA, Canada, UK, and Austrailia because of it.<br><br>Click next to continue.";
                                        //checks if the button was clicked
                                        btnNext.addEventListener('click', () =>{
                                            if(true){
                                                //shows buttons 1 and 2 and hides next and retry
                                                btn1.style.display = "block";
                                                btn2.style.display = "block";
                                                btnNext.style.display = "none";
                                                btnRetry.style.display = "none";
                                                //changes the text for the paragraph
                                                para.textContent = "";
                                                para.innerHTML += "You Have been invited to the CMA, do you want to go?";
                                                //changes the text for the buttons
                                                btn1.textContent = "Yes";
                                                btn2.textContent = "No";
                                                //checks if the button was clicked
                                                btn1.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You go to the CMA and recieve a award.<br><br>Honored ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                                //checks if the button was clicked
                                                btn2.addEventListener('click', () =>{
                                                    if(true){
                                                        //hides buttons 1, 2 and shows retry and hide next
                                                        btn1.style.display = "none";
                                                        btn2.style.display = "none";
                                                        btnNext.style.display = "none";
                                                        btnRetry.style.display = "block";
                                                        //changes the text for the paragraph
                                                        para.textContent = "";
                                                        para.innerHTML += "You do not go to the CMA and feel like you missed out on a great opportunity.<br><br>Regretful ending.";
                                                        //checks if the button was clicked
                                                        btnRetry.addEventListener('click', load);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                                    
                            }
                        });
                    }
                });
            }
        });
    }
   });
}
//A command that listens to a function called load upon loading
document.addEventListener("DOMContentLoaded", load);