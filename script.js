$(document).ready(function () {
    var $messages = $('.messages-content');

    let i = 0;
    let msgId = 0;

    //Array to hold the responses
    let responses = [
        [], [], [], []
    ];

    let question_options = [
        {
            question: "What do you think are the two biggest problems in Nairobi city county?",
            question_number: 1,
            options: ["Traffic Jam", "Water", "Insecurity", "Unemployment", "Health"],
        },
        {
            question: "Which political leader do you trust in Nairobi City County?",
            question_number: 2,
            options: ["Maina Kamanda", "Johnson Sakaja", "Esther Passaris", "Mike Sonko", "Margaret Wanjiru"]
        },
        {
            question: "Who is your preferred Presidential candidate for 2022 election?",
            question_number: 3,
            options: ["Raila Odinga", "Musalia Mudavadi", "William Ruto", "Kalonzo Musyoka"]
        },
        {
            question: "Who would you elect as the next governor of Nairobi City County?",
            question_number: 4,
            options: ["Peter Kenneth", "Timothy Wanyonyi", "Johnson Sakaja", "Margaret Wanjiru", "Mike Sonko", "William Kabogo"]
        }


        // {
        //     question: "Who would you vote for as Nairobi Governor in 2022 Elections? (Enter text below)",
        //     question_number: 2,
        //     options: "",
        // },
        // {
        //     question: "Do you support BBI?",
        //     question_number: 7,
        //     options: ["Yes", "No", "I don't care"],
        // }
    ];

    // document.querySelector('.message-input').disabled = true;

    $(window).load(function () {
        $messages.mCustomScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 100);
    });

    function updateScrollbar() {
        $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    }

    // Inserts message
    // function insertMessage() {
    //     if (msgId === 5) return;
    //     if (msgId !== 1) clickedChoice();
    //     if (msgId === 1) {
    //         msg = $('.message-input').val();
    //         let text = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
    //         if ($.trim(msg) == '') {
    //             return false;
    //         }
    //         if (msgId === 1) {
    //             $('<div class="message message-personal">' + text + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //             responses[msgId].push(text);
    //             // console.log(responses)
    //         }
    //         // if (msgId === 9) {
    //         //     document.querySelector(`.question_${msgId}_options`).style.display = 'none';
    //         //     $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //         //     responses[msgId].push(msg);
    //         // }
    //         sendAdSurveyResponse(msgId + 1, text);
    //         sendBannerEngagementEvent(`question_${msgId + 1}_input_entered`);
    //         $('.message-input').val(null);
    //         text = "";
    //         msgId++;
    //     }

    //     updateScrollbar();
    //     setTimeout(function () {
    //         fakeMessage();
    //     }, 1000 + (Math.random() * 20) * 100);
    // }

    // Inserts message when choice is clicked
    function insertChoiceMade(choice) {
        if (choice == '') {
            return false;
        }
        $('<div class="message message-personal">' + choice + '</div>').appendTo($('.mCSB_container')).addClass('new');
        // $('.message-input').val(null);
        updateScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 1000);
    }

    // Inserts choice selected
    // $('.message-submit').click(function () {
    //     if (msgId === 1) insertMessage();
    // });

    // Inserts typed text
    // $(window).on('keydown', function (e) {
    //     if (msgId === 1) {
    //         if (e.which == 13) {
    //             insertMessage();
    //             return false;
    //         }
    //     } else {
    //         e.preventDefault();
    //     }
    // });

  
    let questionOneOptions = `
    <div class="question_0_options">
    </div>`;

    let questionTwoOptions = `
    <div class="question_1_options">
    </div>`;

    // `
    // <div class="options question_0_options">
    //     <ul>
    //         <li class="option" data-value="Traffic Jam">Traffic Jam</li>
    //         <li class="option" data-value="Water">Water</li>
    //         <li class="option" data-value="Insecurity">Insecurity</li>
    //     </ul>
    //     <ul> 
    //         <li class="option" data-value="Unemployment">Unemployment</li>
    //         <li class="option" data-value="Health">Health</li>
    //     </ul>
    // </div>`;

    let questionThreeOptions = `
    <div class="question_2_options">
    </div>`;

    // `
    // <div class="options question_1_options">
    //     <ul>
    //         <li class="option" data-value="Maina Kamanda">Maina Kamanda</li>
    //         <li class="option" data-value="Johnson Sakaja">Johnson Sakaja</li>
    //         <li class="option" data-value="Esther Passaris">Esther Passaris</li>
    //     </ul>
    //     <ul> 
    //         <li class="option" data-value="Mike Sonko">Mike Sonko</li>
    //         <li class="option" data-value="Margaret Wanjiru">Margaret Wanjiru</li>
    //     </ul>
    // </div>`;

      // Questions with multiple choices
    let questionFourOptions = `
    <div class="options question_3_options">
        <ul>
            <li class="option" data-value="Face sunscreen">Face sunscreen</li>
        </ul>
        <ul>
            <li class="option" data-value="Body sunscreen">Body sunscreen</li>
        </ul>
    </div>`;

    let questionFiveOptions = `
    <div class="question_4_options">
        <div class="image-div">
            <div class="nivea-products">
                <img class="product-1" src="images/face.png" />
                <img class="product-2" src="images/body.png" />
            </div>
        </div>
        <div class="button-div">
            <button>Buy Now!</button>
        </div>
    </div>`;



    let choice = null;

    // Records choice
    function clickedChoice() {
        if (msgId === 5) return;

        if (msgId === 0 || msgId === 1 || msgId === 2) {
            updateScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 1000);
        msgId++;
        return;
        }

        

        if (msgId === 3 ) {
            let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
            let options = questionOptionsDiv.querySelectorAll('.option');

            // let newMsg = document.querySelectorAll('.new')
            // console.log(newMsg[3])
            // newMsg[4].style.cssText = 'background-color: white;'

            let optionsMsg = document.querySelectorAll('.new')
            // console.log(newMsg[4])
            // console.log(optionsMsg[2])
            optionsMsg[3].style.cssText = 'background-color: transparent'
            

            options.forEach((option, i) => {
                option.addEventListener('click', () => {
                    choice = options[i].getAttribute("data-value");
                    // let first_word = choice.split(" ")[0];
                    
                    // console.log(choice)
                    optionsMsg[3].style.cssText = 'background-color: transparent;'
                    insertChoiceMade(choice);
                    questionOptionsDiv.style.display = 'none';
                    // responses[msgId].push(choice);
                    // console.log(responses)
                    // sendAdSurveyResponse(msgId + 1, choice);
                    // sendBannerEngagementEvent(`question_${msgId + 1}_option_${choice}_selected`);
                    // console.log(choice)
                    // console.log(responses);
                    // choice = '';
                    msgId++;
                    return;
                });
            });
        }

        if (msgId === 4) {
            let firstProduct = document.querySelector('.product-1');
            let secondProduct = document.querySelector('.product-2');

            let newMsg = document.querySelectorAll('.new')
            newMsg[5].style.cssText = 'background-color: transparent;'
            


            // console.log("In question 3", choice)
            if (choice == 'Face sunscreen') {
                firstProduct.style.display = "block"
            } else {
                secondProduct.style.display = "block"  
            }
        }
    }

    var Fake = [
        {
            question: 'Hi, nice to meet you. &#9995;',
            options: questionOneOptions
        },
        {
            question: 'Going on a vacation soon? &#127774;',
            options: questionTwoOptions
        },
        {
            question: "Don't get sunburn. <br /> We recommend the following.",
            options: questionThreeOptions
        },
        {
            question: "",
            options: questionFourOptions
        },
        {
            question: "",
            options: questionFiveOptions,
        }
    ];


    // Loads next question
    function fakeMessage() {
        // if ($('.message-input').val() != '') {
        //     return false;
        // }
        $('<div class="message loading new"><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function () {
            $('.message.loading').remove();
            if (i === 5) {
                $('<div class="message new">' + 'Thank you for completing the survey.' + '</div>').appendTo($('.mCSB_container')).addClass('new');
                updateScrollbar();
                // document.querySelector('.message-box').style.display = 'none';
                // console.log(responses)
                return;
            } else {
                $('<div class="message new">' + Fake[i].question + '<br>' + Fake[i].options + '</div>').appendTo($('.mCSB_container')).addClass('new');
                clickedChoice();
                updateScrollbar();
                i++;
            }

        }, 1000)
    }




    function sendAdSurveyResponse(question_number, response) {
        //  console.log(unique_id);

        let data = {
            "banner_id": creative_id,
            "banner_name": options.banner_name,
            "impression_unique_id": unique_id,
            ...question_options[question_number - 1],
            response: [response]
        };

        console.log(data);

        (async () => {
            const rawResponse = await fetch('https://dxp.mediapal.net/api/leadgen/adsurvey/create/1234567890', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const content = await rawResponse.json();

            console.log(content);
        })();
    }
});



