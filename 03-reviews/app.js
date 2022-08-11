// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let previousButton = document.querySelector('#previousButton');
let nextButton = document.querySelector('#nextButton');
let surpriseBtn = document.querySelector(".random-btn");
let reviewImage = document.getElementById("person-img");
let authorName = document.getElementById("author")
let jobName = document.getElementById("job")
let info = document.getElementById("info");

let indexOfReviews = 0;
const MAXINDEX = 3;

// document.addEventListener("readystatechange", replaceReviewData); seems it perform same function as DOMContentLoaded

document.addEventListener("DOMContentLoaded", replaceReviewData);

// document.addEventListener("load", replaceReviewData); seems load does not perform any function

nextButton.addEventListener("click", increaseButtonDisplay);
previousButton.addEventListener("click", decreaseButtonDisplay);
surpriseBtn.addEventListener("click", surpriseButtonDisplay);

//function to increase index of array
function indexIncrease(){
  indexOfReviews++;

  if (indexOfReviews >= reviews.length) {
    indexOfReviews = 0;
  }
  return reviews[indexOfReviews];
}

//function to decrease array (reviews) index
function indexDecrease(){
  indexOfReviews--;

  if (indexOfReviews < 0) {
    indexOfReviews = MAXINDEX;
  }
  return reviews[indexOfReviews];
}

//function to get a random array index and details of reviews
function randomReview(){
  indexOfReviews = Math.floor(Math.random() * reviews.length);

  console.log(indexOfReviews);  
  return reviews[indexOfReviews];

}

//function to change text content
function replaceReviewData(){
  authorName.textContent = reviews[indexOfReviews].name;
  jobName.textContent = reviews[indexOfReviews].job;
  info.textContent = reviews[indexOfReviews].text;
  reviewImage.src = reviews[indexOfReviews].img;
}

//function to invoke change upon clicking increase  button
function increaseButtonDisplay(){

  indexIncrease();ck
  replaceReviewData();

}

//function to invoke changes on decrease button
function decreaseButtonDisplay(){

  indexDecrease();
  replaceReviewData();

}

//function to invoke changes on surprise button; gets random review and replaces detail
function surpriseButtonDisplay(){

  randomReview();
  replaceReviewData();
}




