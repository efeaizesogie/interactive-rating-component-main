var back = document.querySelector(".back");
var front = document.querySelector(".front");
var submit = document.querySelector(".btn");
var ratings = document.querySelectorAll(".rate");
document.querySelector('.rate.active')?.classList.remove('active');

var rating;

back.style.display = "none";


ratings.forEach((ele, i) =>
	ele.addEventListener('click', e => {
		document.querySelector('.rate.active')?.classList.remove('active');
		e.target.classList.add('active');
		rating = i + 1;
	})
);

submit.addEventListener("click", () =>{
    if(rating){
        front.style.display = "none";
        back.style.display = "flex";
        document.querySelector('#rating').textContent = "You selected " + rating + " out of 5";
    }
    else{
        alert("Please select a number");
    }
});