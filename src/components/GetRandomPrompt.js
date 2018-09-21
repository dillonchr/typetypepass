const prompts = [
    `It's your turn now`,
    `Don't stop, believin!`,
    `Oh, let this be the one.`
];

export default () => prompts[Math.floor(Math.random() * prompts.length)];
