export const blogContent = [
    {
        id: 1,
        title: 'Blog 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
        img: 'https://picsum.photos/200/300',
    },
];

// Generate and add 6 random blog entries
for (let i = 2; i <= 7; i++) {
    const newBlogEntry = {
        id: i,
        title: `Blog ${i}`,
        content: generateRandomContent(),
        img: 'https://picsum.photos/200/300', // You can change the image URL if needed
    };
    blogContent.push(newBlogEntry);
}

// Function to generate random content
function generateRandomContent() {
    const loremIpsum = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Quisquam, voluptatem.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Praesent vel justo eget massa aliquet commodo.',
        'Vivamus at nunc eu nibh ullamcorper sagittis.',
        'Nulla facilisi. Vestibulum dignissim metus at metus pretium, et sollicitudin sapien accumsan.',
    ];

    const randomIndex = Math.floor(Math.random() * loremIpsum.length);
    return loremIpsum[randomIndex];
}

console.log(blogContent);

export const newBlogContent = [
    {
        id: 1,
        title: 'Blog 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
        img: 'https://picsum.photos/200/300',
    },
];

// Generate and add 6 random blog entries
for (let i = 2; i <= 1; i++) {
    const newBlogEntry = {
        id: i,
        title: `Blog ${i}`,
        content: generateRandomContent(),
        img: 'https://picsum.photos/200/300', // You can change the image URL if needed
    };
    blogContent.push(newBlogEntry);
}

// Function to generate random content

console.log(blogContent);

