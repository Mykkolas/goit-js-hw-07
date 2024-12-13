const list = document.getElementById("categories")
const item = document.querySelectorAll(".item")


console.log(`Number of categories: ${item.length}`);

item.forEach(item => {
    const header = item.querySelector('h2')
    const elements = item.querySelectorAll('ul > li');

    console.log(`Category: ${header.textContent}`)
    console.log(`Elements: ${elements.length}`);
});

