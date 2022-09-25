const previous = document.getElementById('previous');
const next = document.getElementById('next');

const arr = [
    "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg",
    "https://westobserver.com/wp-content/uploads/2022/05/puppy-dog-adoption-finder-cute-websites-featured.jpg",
    "https://images.unsplash.com/photo-1620189507187-1ecc7e2e9cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=362&q=80",
    "https://images.unsplash.com/photo-1584662740769-00475d7b5556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
    "https://images.unsplash.com/photo-1562457346-73bb427293e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById('image').src = arr[i];
})


previous.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})