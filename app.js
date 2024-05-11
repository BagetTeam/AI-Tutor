


async function ask_ai(prompt) {
    const res = await fetch("http://127.0.0.1:5000/ask_ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "message": prompt
        })
    })
    const json = await res.json();
    return json.response;
}

(async () => {
    console.log("DOM CONTENT LOADED");
    // Select the landing page and the content area
    const landingPage = document.querySelector('.landing_page');
    const contentArea = document.querySelector('.content_area');
    
    // Function to handle scrolling effect
    let i = 0
    function handleScroll(event) {
        console.log("ur mom gay " + i++);
        // Slide up the landing page as the user scrolls up
        landingPage.style.transform = `translateY(-${window.innerHeight}px)`;
        // Slide in the content area from the rights
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    console.log("wait for ai response...");
    console.log(await ask_ai("what is the meaning of life?"));
})();


const subjects = document.querySelectorAll(".Subject");

subjects.forEach(element => {
    element.addEventListener("click", (e) => {
        const categories = e.target.children[1]
        if (categories.style.display == "inline-block") {
            categories.style.display = "none";
        } else {
            categories.style.display = "inline-block";
        }
    })
});
const textarea = document.querySelector('.plotSpace textarea')
const output = document.querySelector(".plotSpace p");
let subject = "math"
let context = "Your name is bob, you are a genius math tutor. Your task is to help students with their " + subject + " homework."
textarea.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        context += "\n\nYou: " + textarea.value;
        output.innerText = "Loading please wait ......"
        answer = await ask_ai(context);
        context += "\nBob: " + answer;
        output.innerText = context;
    }
});